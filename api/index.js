const express = require('express');
const dotenv = require('dotenv');
require('./DB/connection');
const cors = require('cors');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');
const featuredRoute = require('./routes/featured');
const commonListRoute = require('./routes/commonListRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());                           // for parsing application/json

app.use("/api/auth", authRoute);                 // "/api/auth" endpoint belong to authRoute
app.use("/api/users", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/featured", featuredRoute);
app.use("/api/commonLists", commonListRoute);


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => { 
    console.log("Backend server is running");
})