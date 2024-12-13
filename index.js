import { connection, userModel } from './postgres/postgres.js';
import cors from "cors";
import express from "express";
import router from './view/routes.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors())
app.use(router)


app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

connection();
