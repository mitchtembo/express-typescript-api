import request from "supertest"
import app from "../server"

describe("Hello Endpoints", () => {
  it("should get hello message", async () => {
    const res = await request(app).get("/api/hello")
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
    expect(res.body.message).toEqual("Hello, World!")
  })

  it("should post hello message", async () => {
    const res = await request(app).post("/api/hello").send({ name: "John" })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
    expect(res.body.message).toEqual("Hello, John!")
  })
})

