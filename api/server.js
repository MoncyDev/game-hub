const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "https://gamehub.moncy.dev" }));
const apiKey = process.env.GHUB_API_KEY;
console.log(apiKey);

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

app.get("/api/gamehub", async (req, res) => {
  try {
    const endpoint = req.headers.endpoint;
    const response = await instance.get(endpoint, {
      params: req.query,
    });
    res.json(response.data);
  } catch (err) {
    res.status(400).send("error:" + err);
  }
});

app.get("/api/gamehub/:id", async (req, res) => {
  try {
    const endpoint = req.headers.endpoint;
    const response = await instance.get(endpoint + "/" + req.params.id);
    res.json(response.data);
  } catch (error) {
    res.status(400).send("error:" + err);
  }
});

// Start the server (for local development)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3030;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Export the server for Vercel deployment
module.exports = app;
