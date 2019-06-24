const multer = require("multer");
const path = require("path");
const { imageNameGenerate } = require("../utils/imageUtil");

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads", "images"),
    filename: function(req, file, callback) {
      callback(null, `${imageNameGenerate()}.jpg`);
    }
  })
};
