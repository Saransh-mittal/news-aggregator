const express = require('express');
const router = express.Router();
const authenticate = require("../../middleware/authenticate");

router.post("/logout",authenticate,(req, res) => {
  res.clearCookie('jwtoken',{path : '/'});
  res.status(201).send("User Logout");
});

module.exports = router;