
export async function generateToken(request:any,user:any) {
  return await request.server.jwt.sign({
        'userID':user._id,
    })
}