const express = require("express");
const authRouter = express.Router();
//const authenticate = require("../middleware/authenticate");
const cookieParser = require('cookie-parser');
authRouter.use(cookieParser());
const articleRoutes = require("./routes/articles");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/signin");
const showStateRoutes = require("./routes/showState");
const logoutRoutes = require("./routes/logout");
authRouter.use(articleRoutes);
authRouter.use(registerRoutes);
authRouter.use(loginRoutes);
authRouter.use(showStateRoutes);
authRouter.use(logoutRoutes);


// authRouter.post("/api/contact",authenticate, async (req, res) => {
//  try {
//   const {name,email,phone,message} = req.body;
//   if(!name || !email || !phone || !message)
//   {
//     return res.status(422).json({ error: "Please fill the required field" });
//   }
//   const userData = await User.findOne({_id:req.userID});

//   if(userData)
//   {
//     const userMessage = await userData.addMessage({name,email,phone,message});
//     await userData.save();

//     res.status(201).json({message:"Message Send Successfully"});
//   }

//  } catch (error) {
//   console.log(error);
//  }

// });



module.exports = authRouter;
