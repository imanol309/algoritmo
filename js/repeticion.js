function repetir(a) {
    console.time("answer time");
    console.log(`Esta funcion se va reptir hasta que ${a} ${a.length <= 3 ? `Milisegundo` : `Segundo`} se acaben`)
    setInterval(() => {
        console.log(`Hola Imanol`)
    }, a);
    console.timeEnd("answer time");
}

repetir(100)