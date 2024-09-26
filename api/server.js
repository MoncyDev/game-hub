const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();

const app = express();
const allowedOrigins = ["https://gamehub.moncy.dev"];

app.use(helmet());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const apiKey = process.env.GHUB_API_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

//middlewate
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

//generateToken
// app.get("/api/token", async (req, res) => {
//   try {
//     const json = { project: "game-hub" };
//     const token = jwt.sign(json, JWT_SECRET);
//     res.json({ token });
//   } catch (error) {
//     res.status(400).send("error:" + error);
//   }
// });

app.get("/api/gamehub", verifyToken, async (req, res) => {
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

app.get("/api/gamehub/:id", verifyToken, async (req, res) => {
  try {
    const endpoint = req.headers.endpoint;
    const response = await instance.get(endpoint + "/" + req.params.id);
    res.json(response.data);
  } catch (err) {
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
