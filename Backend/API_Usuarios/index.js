import express from "express";
import dotenv from "dotenv";
import { USERS_BBDD } from "./bbdd";
//instalar dotenv
dotenv.config();

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.text());

app.get("/account/:guid", (req, res) => {
    console.log(req.params);
});

app.post("/account", (req, res) => {});

app.patch("/account", (req, res) => {});

app.delete("/account", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
