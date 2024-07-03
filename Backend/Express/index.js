console.clear();
import express from "express";

const PORT = 3000;

const app = express();

//Middleware
app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => {
//   console.log(req.params.idCuenta);
//   res.send("Hello World");
//   res.status("401").send({error : "No autorizado"});

    console.log(req.body);
    res.send();
      //tambien puedo enviar un estado con res.status(200).send("Hello World");
});

app.post("/cuenta/:idCuenta/:inventado", (req, res) => {
//Puedo obtener los parametros de la URL con req.params
//Puedo obtener los parametros con req.get de una sola propiedad
//Puedo obtener los parametros del header con req.headers
  console.log(req.body);
  res.send();
});

app.put("/cuenta", (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Hay muchos metodos por ver, pero estos son los mas comunes
//.get, .post, .put, .delete, .patch, .options, .head, .all
//.use, .route, .param, .checkout, .connect, .copy, .lock, .merge,
// .mkactivity, .mkcol, .move, .notify, .propfind, .proppatch, .purge, .report, .search, .subscribe, .trace, .unlock, .unsubscribe
//e.t.c
//Leer documentacion : https://expressjs.com/en/4x/api.html

//En express se parsea automaticamente el body de una peticion POST, PUT, DELETE, PATCH
//No como en NodeJS puro que hay que hacerlo manualmente