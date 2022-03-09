function Saludar(nombre, edad){
    console.time("answer time");
    this.nombre = nombre;
    this.edad = edad;  
    console.log(`Hola mi nombre es: ${this.nombre} y tengo: ${this.edad}años.`);
    console.timeEnd("answer time");

}
  
Saludar("Juniors", 24);