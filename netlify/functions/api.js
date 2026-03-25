import express from "express";
import serverless from "serverless-http";

const app = express();

// IMPORTANT: include full path
app.get("/", (req, res) => {
  res.json({ message: "Express server on Netlify is running..." });
});

export const handler = serverless(app);