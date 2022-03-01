function operaciones(a) {
    a.sort((a,b) => {
        return a - b
    })
    console.log(a)
}
operaciones([25,45,10,23,8,3])