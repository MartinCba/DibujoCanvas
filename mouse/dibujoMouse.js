let dibujo = document.getElementById("IdDibujo");
let area = dibujo.getContext("2d");

dibujo.addEventListener("mousedown", clickAbajo);
dibujo.addEventListener("mousemove", dibujarMouse);
dibujo.addEventListener("mouseup", clickArriba);

let color = "gold";
let estado = 0;
let x;
let y;

function clickAbajo(evento) {
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, context2d) {
  context2d.beginPath();
  context2d.strokeStyle = color;
  context2d.lineWidth = 2;
  context2d.moveTo(xInicial, yInicial);
  context2d.lineTo(xFinal, yFinal);
  context2d.stroke();
  context2d.closePath();
}

function dibujarMouse(evento) {
  if (estado == 1) {
    dibujarLinea(color, x, y, evento.layerX, evento.layerY, area);
    x = evento.layerX;
    y = evento.layerY;
  }
}

function clickArriba() {
  estado = 0;
}

dibujarLinea(color, 1, 0, 1, 999, area);
dibujarLinea(color, 0, 1, 1000, 1, area);
dibujarLinea(color, 0, 449, 999, 449, area);
dibujarLinea(color, 999, 0, 999, 999, area);
