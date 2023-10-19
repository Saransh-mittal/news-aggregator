const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
    author: [
      {
        type: String,
        required: true,
      },
    ],
    title: [
      {
        type: String,
        required: true,
      },
    ],
    mainText: [
      {
        type: String,
        required: true,
      },
    ],
    imgUrl: [
      {
        type: String,
        required: true,
      },
    ],
    sentiments: [
      {
        neg: {
          type: Number,
          required: true,
        },
        neu: {
          type: Number,
          required: true,
        },
        pos: {
          type: Number,
          required: true,
        },
        compound: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { collection: "Articles" }
);

const Article = mongoose.model("ARTICLE", articleSchema);

module.exports = Article;
