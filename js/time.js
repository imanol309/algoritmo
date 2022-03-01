function saludos(time) {
    if (time > 24) {
        return (console.log('El numero que pusiste es mayor que las horas del dia.'))
    }
    if (time < 10) {
        greeting = "Buenos dias";
      } else if (time < 20) {
        greeting = "Buenas tardes";
      } else {
        greeting = "Buenas noches";
      }
      console.log(greeting)
}
saludos(21)