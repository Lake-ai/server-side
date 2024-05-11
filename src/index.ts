import express, { Request, Response } from "express";
import dotenv from "dotenv";



dotenv.config();
import bodyParser from "body-parser";
import fileupload from 'express-fileupload'

const app = express();

const PORT = 8001;

// adding body parser
app.use(bodyParser.json());

app.use(fileupload())


app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello World !");
});

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});