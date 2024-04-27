const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/data", dataRoutes);

// Connect to MondoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🌈MongoDB connection established🌈"))
  .catch((error) =>
    console.error("🔥MondoDB connection failed:🔥", error.message)
  );

app.get("/", (req, res) => {
  res.send("🌏Hello Gabes World🌍");
});

app.listen(PORT, () => {
  console.log(`Server is running to smooth sounds of port 🎧 ${PORT} 🎧`);
});
