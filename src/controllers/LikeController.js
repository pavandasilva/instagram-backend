const Post = require("../models/Post");
//const { eventEmit } = require('../utils/socketUtil');
const logger = require("../utils/loggerUtil");

module.exports = {
  async post(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      post.likes += 1;
      await post.save();
      req.io.emit("like", post);

      return res.status(201).json(post);
    } catch (error) {
      logger().error(error);

      return res.status(500).json({ error });
    }
  }
};
