import mongoose from "mongoose";
import bcrypt from "bcrypt"
let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email required"],
    unique: [true, "email already registered"],
  },
  username:  {
    type: String,
    default: null,
  },
  profilePhoto: String,
  password: String,
  externalId: {
    type: String,
    default: null,
  },
  source: { type: String, required: [true, "source not specified"] },
  lastVisited: { type: Date, default: new Date() }
},{timestamps: true});

userSchema.methods.comparePassword = function (password:string) {
  return bcrypt.compareSync(password, this.password);
};

var userModel = mongoose.model("user", userSchema, "user");

export default userModel;