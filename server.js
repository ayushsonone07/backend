require('dotenv').config()
const express = require('express');
const app = express();
const path = require("path");
const authRoute = require("./router/authRouter");
const contactRoute = require("./router/contactRouter");
const serviceRoute = require("./router/servicesRouter")
const connnectdb = require("./utils/db");
const errorMiddleWare = require("./validator/errorMiddleware");
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json()); //Middle Ware

app.use("/api/auth", authRoute);  //Auth Route
app.use("/api/contact", contactRoute);  //Auth Route
app.use("/api/services", serviceRoute);  //Service Route

app.use(errorMiddleWare);

connnectdb().then(() => {
    app.get("/",(req, res) => {
        app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
        res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"));
    });

    const PORT = 5000;
    app.listen(PORT);
    console.log("Server started successfully");   
});