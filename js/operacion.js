function operaciones(a) {
    console.time("answer time");
    a.sort((a,b) => {
        return a - b
    })
    console.log(a)
    console.timeEnd("answer time");
}
operaciones([25,45,10,23,8,3])