const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const uuidv4 = require("uuid/v4");
const { serverAdress } = require("../config/adresses");

const defaultSize = 500;
const defaultQuality = 70;

const saveImageDefault = async file => {
  const { filename: image } = file;
  const [name] = image.split(".");
  const filename = `${name}.jpg`;

  await sharp(file.path)
    .resize(defaultSize)
    .jpeg({ quality: defaultQuality })
    .toFile(path.resolve(file.destination, "resized", filename));

  fs.unlinkSync(file.path);
  return name;
};

const imageResize = async (filename, size) => {
  const filePath = path.resolve(
    __dirname,
    "..",
    "..",
    "uploads",
    "images",
    "resized",
    `${filename}.jpg`
  );
  const resize = size && size < defaultSize ? true : false;
  const imageSize = resize ? parseInt(size) : defaultSize;

  return await sharp(filePath)
    .resize(imageSize)
    .toBuffer();
};

const imageUrlGenerate = filename => {
  return `${serverAdress.baseurl}/images/${filename}`;
};

const imageNameGenerate = () => {
  return uuidv4();
};

module.exports = {
  saveImageDefault,
  imageResize,
  imageUrlGenerate,
  imageNameGenerate
};
