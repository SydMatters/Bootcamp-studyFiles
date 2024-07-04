console.clear();
import express from "express";
//Todo se puede entnder como un middleware
import accountRouter from "./routes/account.js";

import dotenv from "dotenv";

//instalar dotenv
dotenv.config();
//dotenev es una libreria que nos permite tener variables de entorno en un archivo .env
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(accountRouter); //Middleware que maneja solo 
//las rutas de account
//Se puede definir rutas para cada router


//Problematico a nivel de escalabilidad

// app.get("/account/:guid", (req, res) => {
//     const {guid} = req.params;
//     const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
//     if (!user){
//       return res.status(404).send("User not found");
//     }
//     res.send(user)
// });

// app.post("/account/:guid", (req, res) => {
//   const {guid,name} = req.body;
  
//   if (!guide || !name) return res.status(400).send("Name and guid are required");
//   const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
//   if (user) return res.status(409).send("User already exists");
//   if(!user) return res.status(404).send("User not found");
//   USERS_BBDD.push({guid, name});

//   return res.send();
// });

// //Actualizando nombre de cuenta
// app.patch("/account/:guid", (req, res) => {
//   const {guid} = req.params;
//   const {name} =req.body; 
//   if(!name) return res.status(400).send("Name is required");   
//   const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
//   if (!user){
//       return  res.status(404).send("User not found");
//     }
//   user.name = name;
//   return res.send();
// });

// app.delete("/account/guid", (req, res) => {
//     const {guid} = req.params;
//     const userIndex = USERS_BBDD.findIndex((user) => user.guid === req.params.guid);
//     if (userIndex === -1){
//         return  res.status(404).send("User not found");
//     }
//     USERS_BBDD.splice(userIndex, 1);
//     res.send("User deleted");
// });

  app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });




//Express también tiene una librería llamada Router que nos 
//permite modularizar nuestras rutas
//Debido a esto, es mejor manejar las rutas en archivos separados