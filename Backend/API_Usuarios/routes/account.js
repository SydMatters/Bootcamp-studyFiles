import express from "express";
import {USERS_BBDD }from "../bbdd.js";

const accountRouter = express.Router();

accountRouter.get("/account/:guid", (req, res) => {
    const {guid} = req.params;
    const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
    if (!user){
      return res.status(404).send("User not found");
    }
    res.send(user)
});

accountRouter.post("/account", (req, res) => {
  const {guid,name} = req.body;
  
  if (!guid || !name) return res.status(400).send("Name and guid are required");
  const user = USERS_BBDD.find((user) => user.guid === guid);
  if (user) return res.status(409).send("User already exists");
  USERS_BBDD.push({guid, name});

  return res.send();
});

//Actualizando nombre de cuenta
accountRouter.patch("/account/:guid", (req, res) => {
  const {guid} = req.params;
  const {name} =req.body; 
  if(!name) return res.status(400).send("Name is required");   
  const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
  if (!user){
      return  res.status(404).send("User not found");
    }
  user.name = name;
  return res.send();
});

accountRouter.delete("/account/guid", (req, res) => {
    const {guid} = req.params;
    const userIndex = USERS_BBDD.findIndex((user) => user.guid === req.params.guid);
    if (userIndex === -1){
        return  res.status(404).send("User not found");
    }
    USERS_BBDD.splice(userIndex, 1);
    res.send("User deleted");
});



export default accountRouter;