const {
  imageNameGenerate,
  imageUrlGenerate,
  saveImageDefault
} = require("../../src/utils/imageUtil");
const { serverAdress } = require("../../src/config/adresses");

describe("imageUtil", () => {
  it("deve retornar a url da imagem completa", async () => {
    const image = "image.jpg";
    expect(imageUrlGenerate(image)).toBe(
      `${serverAdress.baseurl}/images/${image}`
    );
  });

  it("deve gerar um nome de imagem", async () => {
    expect(typeof imageNameGenerate()).toBe("string");
  });
});
