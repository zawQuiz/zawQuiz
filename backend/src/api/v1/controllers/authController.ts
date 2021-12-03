import { FastifyReply, FastifyRequest } from "fastify";
import { addUser, findOrAddGoogleUser } from "../services/userService";
import axios from "axios";
import { generateToken } from "../services/authService";
import { User } from "../../../models";



type TRegisterRequest= FastifyRequest<{
  Body: {
    email?:string,
    password?:string,
    username?:string,
  }
}>

async function registerUser(request: TRegisterRequest, reply: FastifyReply) {
  
  const { email, password, username } = request.body;
  const emailCounts = await User.count({ email })

  if(emailCounts > 0 ){
    reply
      .status(400)
      .send({
        error: "User already exists"
      });
  }
  
  reply.send({
    message: "User sucessfully created",
    data: await addUser({email, password, username})
  })
}

async function check(request: any,reply:any) {
  try {
    await request.jwtVerify()
    if(Math.round(Date.now()/1000)>request.user.expire_at){
      return reply.code(401).send({
        'error':"Token expired"
      })
    }
    return reply.send({
      'message':"OK"
    });

  } catch (err) {
    reply.code(401).send({
      'error':"Unauthorized"
    })
  }
}

async function loginUser(request: any, reply: FastifyReply) {
    let user=await User.findOne({email:request.body.email});
    if(!user){
        reply.status(404);
        return "Not Found";
    }
    
    if(!user.comparePassword(request.body.password)){
        reply.status(401);
        return "Wrong password"
    }

    reply.send({
        user:user.username,
        token:(await generateToken(request,user))
    });
}


async function loginGoogleUserCallback(request: any) {
  let result =
    await request.server.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(
      request
    );
  let response = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: "Bearer " + result.access_token,
      },
    }
  );

  let user = response.data;
  let userProfile = await findOrAddGoogleUser(
    user.id,
    user.email,
    user.name,
    user.picture
  );
  return {
      user:userProfile.username,
      token:(await generateToken(request,userProfile))
  };
//   return reply.redirect('loginURL?authToken='+await generateToken(request,userProfile))
}

export default {
  registerUser,
  loginGoogleUserCallback,
  loginUser,
  check
};
