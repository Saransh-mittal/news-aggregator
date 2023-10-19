const express = require('express');
const router = express.Router();
const User = require('../../model/userSchema');
// Handle signup route
router.post('/register', async (req, res) => {
  //console.log(req.body);
  const { firstName, lastName ,email, phone, password, cpassword } = req.body;

  if (!firstName || !email || !phone || !lastName || !password || !cpassword)
    return res.status(422).json({ error: "Please fill the required field" });

  try {
    const response = await User.findOne({ email: email });
    if (response)
      return res.status(422).json({ error: "Email already exists" });
    if (password != cpassword)
      return res
        .status(422)
        .json({ error: "password is not equal to confirm password" });
    if (phone.toString().length != 10) {
      return res
        .status(422)
        .json({ error: "Phone no. should be of 10 digits" });
    }
    const user = new User({ firstName, lastName ,email, phone, password, cpassword });
    await user.save();
    return res.status(201).json({ message: "Registered Successfully" });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
