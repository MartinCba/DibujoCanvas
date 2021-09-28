const teclas = {
  UP: 38,
  DOWN: 40,
  RIGHT: 37,
  LEFT: 39,
};
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
let cuadrito = document.getElementById("areaDeDibujo");
let papel = cuadrito.getContext("2d");
let x = 500;
let y = 225;

dibujarLinea("gold", 499, 224, 501, 226, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  let colorcito = "gold";
  let movimiento = 5;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
    case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x + movimiento, y + movimiento, papel);
        x = x + movimiento;
      break;
  }
}
