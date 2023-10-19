const express = require('express');
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
router.get("/showState",authenticate,(req, res) => {
    //console.log("auth");
    res.status(201).send("valid token");
  });

module.exports = router;