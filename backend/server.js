const express = require("express");
const mongoose = require("mongoose");
require("dontenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware

app.use(express.json()); // to parse json
app.use(cors()); // enable CORS

// Connect to MondoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established"))
  .catch((error) => console.error("MondoDB connection failed:", error.message));

app.get("/", (req, res) => {
  res.send("Hello World Gabe");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
