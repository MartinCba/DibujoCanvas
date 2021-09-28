//Variables del canvas
var obtener_canvas = document.getElementById("area_dibujo");
var lienzo = obtener_canvas.getContext("2d");

//Variables de los inputs de las lineas exteriores
var input_lin_exteriores = document.getElementById("input_lin_exteriores");
var color_exterior = document.getElementById("color_exterior");

//Variables de los input de las lineas inferiores
var input_lin_interiores = document.getElementById("input_lin_interiores");
var color_interior = document.getElementById("color_interior");

//Programacion del boton
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

function dibujoPorClick() {
  lienzo.clearRect(0, 0, 300, 300);

  //lineas exteriores

  var lineas_exteriores;
  var numero_exteriores = parseInt(input_lin_exteriores.value);
  var ancho_exteriores = obtener_canvas.width;
  var espacio_exteriores = ancho_exteriores / numero_exteriores;

  for (
    lineas_exteriores = 0;
    lineas_exteriores < numero_exteriores;
    lineas_exteriores++
  ) {
    dibujarLinea(
      color_exterior.value,
      0,
      0 + lineas_exteriores * espacio_exteriores,
      0 + lineas_exteriores * espacio_exteriores,
      300
    );
    dibujarLinea(
      color_exterior.value,
      300 - lineas_exteriores * espacio_exteriores,
      0,
      0,
      0 + lineas_exteriores * espacio_exteriores
    );
    dibujarLinea(
      color_exterior.value,
      0 + lineas_exteriores * espacio_exteriores,
      300,
      300,
      300 - lineas_exteriores * espacio_exteriores
    );
    dibujarLinea(
      color_exterior.value,
      300,
      300 - lineas_exteriores * espacio_exteriores,
      300 - lineas_exteriores * espacio_exteriores,
      0
    );
  }

  //Lineas interiores

  var lineas_interiores;
  var numero_interiores = parseInt(input_lin_interiores.value);
  var limite;

  if (numero_exteriores == 1 || numero_exteriores == 2) {
    limite = 1;
  } else if (numero_exteriores == 5) {
    limite = 23;
  } else {
    limite = 26;
  }

  var ancho_interiores = 150 - limite;
  var espacio_interiores = ancho_interiores / numero_interiores;

  for (
    lineas_interiores = 0;
    lineas_interiores < numero_interiores;
    lineas_interiores++
  ) {
    dibujarLinea(
      color_interior.value,
      150,
      0 + limite + lineas_interiores * espacio_interiores,
      150 - limite + limite + lineas_interiores * espacio_interiores,
      150
    );
    dibujarLinea(
      color_interior.value,
      150,
      300 - limite - lineas_interiores * espacio_interiores,
      150 - limite + limite + lineas_interiores * espacio_interiores,
      150
    );
    dibujarLinea(
      color_interior.value,
      150,
      0 + limite + lineas_interiores * espacio_interiores,
      150 - limite + limite - lineas_interiores * espacio_interiores,
      150
    );
    dibujarLinea(
      color_interior.value,
      150,
      300 - limite - lineas_interiores * espacio_interiores,
      150 - limite + limite - lineas_interiores * espacio_interiores,
      150
    );
    dibujarLinea(color_interior.value, 0 + limite, 150, 300 - limite, 150);
  }
}
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
