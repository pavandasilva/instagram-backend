const { imageResize } = require("../utils/imageUtil");
const logger = require("../utils/loggerUtil");

module.exports = {
  async get(req, res) {
    try {
      res.contentType("image/jpeg");
      return res.send(
        await imageResize(req.params.filename, req.query.size || null)
      );
    } catch (error) {
      logger().error(error);
      return res.status(500).json({ error });
    }
  }
};
