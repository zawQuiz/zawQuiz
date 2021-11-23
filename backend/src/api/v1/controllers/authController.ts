import { FastifyReply, FastifyRequest } from "fastify";
import { addUser } from "../services/userService";
import { findOrAddGoogleUser } from "../services/userService";
import axios from "axios";
import { generateToken } from "../services/AuthService";
import { User } from "../../../models";

async function registerUser(request: any, reply: FastifyReply) {
  reply.send(
    await addUser(
      request.body.email,
      request.body.password,
      request.body.username
    )
  );
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
  loginUser
};
