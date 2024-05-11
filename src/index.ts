import express, { Request, Response } from "express";
import dotenv from "dotenv";
import register from './api/v0.1/controllers/register'

dotenv.config();
import bodyParser from "body-parser";
import fileupload from 'express-fileupload'
import './api/v0.1/config/mongodb'

const app = express();

const PORT = 8001;

// adding body parser
app.use(bodyParser.json());

app.use(fileupload())


app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello World !");
});

app.use('/',register)

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});