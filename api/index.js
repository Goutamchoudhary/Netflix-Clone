const express = require('express');
const dotenv = require('dotenv');
require('./DB/connection');
const cors = require('cors');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());                           // for parsing application/json

app.use("/api/auth", authRoute);                 // "/api/auth" endpoint belong to authRoute
app.use("/api/users", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/lists", listRoute);


app.listen(9000, () => { 
    console.log("Backend server is running");
})