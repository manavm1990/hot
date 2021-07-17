import express from "express";
import apiRouter from "./routes/api.js";
import reserveRouter from "./routes/reserve.js";

const app = express();
const PORT = 5000;

// localhost:5000/api
app.use("/api", apiRouter);

// Allow express to receive incoming JSON body requests
app.use(express.json());

// For any routes ending with '/reserve' USE reserveRouter to handle the request
app.use("/reserve", reserveRouter);

// `get` is handling GET requests to the homepage directly.
app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.info(`Server running on ${PORT}`);
});
