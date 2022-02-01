const prompt = require("prompt-sync")();

function Saludar(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;  
    console.log("Hola mi nombre es: "+ this.nombre + " y tengo: " + this.edad + " años." );
}
  
Saludar("Juniors", 24);