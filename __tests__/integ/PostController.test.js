const request = require("supertest");
const index = require("../../src/index");
const Post = require("../../src/models/Post");

describe("PostController", () => {
  it("deve retornar uma lista de Posts", async () => {
    const data = {
      likes: 0,
      author: "Rogério Pavan",
      place: "Jaú",
      description: "Post de Teste",
      hashtags: "#desenvolvimento #teste",
      image: "http://localhost:3000/images/16f46b4d-e29d-48d4-9a10-6cf31a1b5123"
    };

    const post = await Post.create(data);
    const response = await request(index).get("/posts");

    expect(response.status).toBe(200);
  });
});
