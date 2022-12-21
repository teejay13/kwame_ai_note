const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require("cors") 

const app = express();

const routes = require("./routes/api/notes") 

//connect DB
connectDB();

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api",routes)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
