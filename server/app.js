const express = require("express");
const cors = require("cors");
const db = require("./configs/db.configs");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//PORT
const PORT = 8000;
app.listen(8000, () => {
  console.log(`Listening on the PORT : ${PORT}`);
});
