const mongoose = require("mongoose");
var user = mongoose.model("user");
const PostSchema = new mongoose.Schema(
  {
    // posterId: {
    //   type: String,
    //   required: true
    // },

    titre: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    picture: {
      type: String,
    },
    video: {
      type: String,
    },
    likers: {
      type: [String],
    },
    comments: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        text: String,
        timestamp: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);
