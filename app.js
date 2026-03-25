
import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express on Netlify" });
});

export const handler = serverless(app);
