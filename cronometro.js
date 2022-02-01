function cronometro(a) {
    setTimeout(() => {
        console.log(`Esta funcion duro ${a} ${a.length <= 3 ? `Milisegundo` : `Segundo`} para ejecutarse`)
    }, a); 
}

cronometro(100)