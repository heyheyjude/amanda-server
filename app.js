require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.use("/api/customer", require("./routes/router.cusomer"));

const PORT = process.env.port || 5000;
