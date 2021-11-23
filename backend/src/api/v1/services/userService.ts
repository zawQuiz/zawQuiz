import { User } from "../../../models";
import bcrypt from "bcrypt";

export async function findOrAddGoogleUser(
  externalId: string,
  email: string,
  username: string,
  profilePhoto: string | null
) {
  let user = await User.findOne({ externalId });
  if (user) {
    return user;
  }
  user = new User({
    externalId,
    email,
    username,
    profilePhoto,
    source: "google",
  });
  return user.save();
}

export async function addUser(
  email: string,
  password: string,
  username: string | null
) {
  const user = new User({
    email,
    password: bcrypt.hashSync(password, 10),
    username,
    source: "email",
  });
  return await user.save();
}
