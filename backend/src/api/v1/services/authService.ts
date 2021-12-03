
export async function generateToken(request:any,user:any,rememberMe=false) {
  
  return await request.server.jwt.sign({
        'userID':user._id,
        'expire_at':Math.round(Date.now()/1000) + (rememberMe? 60*60*24*30 : 60*60*1)
    })
}