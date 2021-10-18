function cacularPromedio() {
  //1.Inicio
  //Definir c1, c2, c3, c4, c5, promedio
  var c1;
  var c2;
  var c3;
  var c4;
  var c5;
  var promedio;
  var cajaDeTexto = document.getElementById("calificacion1");
 var texto = cajaDeTexto.value;
  c1 = parseFloat(texto);

  cajaDeTexto = document.getElementById("calificacion2");
 texto = cajaDeTexto.value;
  c2 = parseFloat(texto);

  cajaDeTexto = document.getElementById("calificacion3")
  texto = cajaDeTexto.value;
  c3 = parseFloat(texto);

  cajaDeTexto = document.getElementById("calificacion4");
  texto = cajaDeTexto.value;
  c4 = parseFloat(texto);

  cajaDeTexto = document.getElementById("calificacion5");
  texto = cajaDeTexto.value;
  c5 = parseFloat(texto);
  cajaDeTexto = document.getElementById("calificacion1")
  texto = cajaDeTexto.value;
  
  promedio= (c1 + c2 + c3 + c4 +c5) / 5;
  alert("tu promedio es de: " + promedio)
}