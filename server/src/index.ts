import express from "express";
const dotenv = require("dotenv");
dotenv.config();

import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    console.log("Morgan Enabled");
}

mongoose
    .connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err: Error) =>
        console.log("Could not connect to database...", err)
    );

const port = parseInt(process.env.PORT ?? "") || 3000;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
