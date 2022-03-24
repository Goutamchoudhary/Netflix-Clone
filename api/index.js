const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('./DB/connection')
const authRoute = require('./routes/auth');

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);           // "/api/auth" endpoint belong to authRoute

app.listen(9000, () => { 
    console.log("Backend server is running");
})