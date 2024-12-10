import { Hono } from "hono";

const app = new Hono().post("/api", (c) => {
  return c.json({
    success: "ok",
  });
});

export default app;
