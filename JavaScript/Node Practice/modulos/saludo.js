const holaMundo = function(name){
    process.stdout.write(`Hola ${name}\n`);
}

const interna = function(name){
    process.stdout.write("Esta es una función privada");
}

exports.diHola = holaMundo;