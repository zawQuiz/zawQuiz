import mongoose, { Model } from "mongoose";
import bcrypt from "bcrypt"

interface IUser {
  email: string;
  username: string;
  profilePhoto: string;
  password: string;
  externalId: string;
  source: string;
  lastVisited: Date;
}

interface IUserFunctions {
  // eslint-disable-next-line no-unused-vars
  comparePassword: (password: string) => boolean;
}

let userSchema = new mongoose.Schema<IUser, Model<IUser, {}, IUserFunctions>>({
  email: {
    type: String,
    required: [true, "email required"],
    // unique: [true, "email already registered"],
  },
  username: {
    type: String,
    default: null,
  },
  profilePhoto: String,
  password: {type:String,select: false},
  externalId: {
    type: String,
    default: null,
    select: false
  },
  source: { type: String, required: [true, "source not specified"] },
  lastVisited: { type: Date, default: new Date() }
}, {
   timestamps: true,
  
});

userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

const userModel = mongoose.model<IUser, Model<IUser, {}, IUserFunctions>>("user", userSchema);

export default userModel;