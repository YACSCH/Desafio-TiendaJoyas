import express from "express";
import cors from "cors";

import jewelRouter from './routes/jewelRoutes.js';

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use(cors())

app.use("/",jewelRouter);


app.listen(PORT, console.log(`El servidor se esta ejecutando en el puerto ${PORT}`) )
