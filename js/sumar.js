function sumasPorDos(a, b) {
  console.time("answer time");
  const ResultadoSuma = a + b;
  const multiplicarPorDos = ResultadoSuma * 2;
  console.log(multiplicarPorDos);
  console.timeEnd("answer time");
}
sumasPorDos(5, 5);