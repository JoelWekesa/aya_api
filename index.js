require('dotenv').config()
require('./db_config')
const express = require('express')
const jwt = require('jsonwebtoken')


const app = express()
const bodyParser = require("body-parser");
// const cors = require("cors");
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const users = require("./routes/api/Users");
const login = require("./routes/api/Login");
const listFAQs = require("./routes/api/listFAQs");
const posts = require("./routes/api/posts");

app.use("/api/listFAQs", listFAQs);
app.use("/api/posts", posts)
app.use("/api/auth", users);
app.use("/api/auth", login);

app.listen(5050, () =>{console.log('server listening on 5050')})