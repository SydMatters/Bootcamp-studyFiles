//Mostrando el funcionamiento de un server con carpintería, sin libreria

console.clear();
import {createServer} from 'http';

const httpServer= createServer((req,res) =>{
    //Request
    // console.log(req.method);
    // //path para el recurso
    // console.log(req.url);
    // //headers
    // console.log(req.headers);
    //toca hacer un streaming del body, ya que se ve como repartido en una tuberia
    //hay que ir formando el body

    let data = "";
    let chuckIndex= 0; 
    req.on("data", (chunk) => {
        data += chunk;
        chuckIndex++;   
        console.log(chuckIndex);  
    });
    
    req.on("end",()=>
    {
        res.end("Recibido colega")
    })
    
});



httpServer.listen(3000);

//Post crear desde cero, si ya existe error
//Put crear, si ya existe lo modifica