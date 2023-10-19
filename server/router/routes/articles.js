const express = require("express");
const router = express.Router();

const Article = require("../../model/articleSchema");

router.get("/", async (req, res) => {
    const { page = 1, pageSize = 9 } = req.query;
    try {
      const article = await Article.find({}).sort({
        dateTime: -1,
        "sentiments.compound": -1,
      }).skip((page - 1) * pageSize).limit(9);

      if(!article)
      {
        res.status(422).json({ error: "No articles found" });
        //throw new Error("No articles found");
      }
      res.send(article);
    } catch (error) {
      console.log(error.message);
    }
  });

module.exports = router;