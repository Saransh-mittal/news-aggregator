const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: 
        {
          type: Number,
          required: true,
        },
      password: 
        {
          type: String,
          required: true,
        },
        cpassword: 
            {
            type: String,
            required: true,
        },
    },
    { collection: "Users" }
  );

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    //console.log(this.password);
    //console.log("hii from bcrypt");
    const pass = this.password;
    this.password = await bcrypt.hash(pass, 12);
    this.cpassword = await bcrypt.hash(pass, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // this.tokens = this.tokens.concat({ token });
    // await this.save();
    return token;
  } catch (error) {
    console.log(error.message);
  }
};

// userSchema.methods.addMessage = async function ({
//   name,
//   email,
//   phone,
//   message,
// }) {
//   try {
//     this.messages = this.messages.concat({name,email,phone,message});
//     await this.save();
//     return this.messages;
//   } catch (error) {
//     console.log(error);
//   }
// };
  
const User = mongoose.model("USER", userSchema);

module.exports = User;