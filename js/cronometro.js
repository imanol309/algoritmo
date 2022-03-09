function cronometro(a) {
    console.time("answer time");
    setTimeout(() => {
        console.log(`Esta funcion duro ${a} ${a.length <= 3 ? `Milisegundo` : `Segundo`} para ejecutarse`)
    }, a); 
    console.timeEnd("answer time");
}
cronometro(100)