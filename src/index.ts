import express, { Request, Response } from "express";
import dotenv from "dotenv";
import register from "./api/v0.1/controllers/register";
import control from './api/v0.1/controllers/product.control'



dotenv.config();

import "./api/v0.1/config/mongodb";
import bodyParser from "body-parser";
import fileupload from 'express-fileupload'
import cors from 'cors'

const app = express();

const PORT = 8000;

// adding body parser
app.use(bodyParser.json());

app.use(cors())

app.use(fileupload())


app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello World !");
});
app.use("/", register);
app.use('/api/v0.1',control);

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});