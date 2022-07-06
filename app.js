let ficha = "X";
const botones = document.querySelectorAll("#box");
const restart = document.querySelector("#restart");
const contadorX = document.getElementById("puntosX");
const contadorO = document.querySelector("#puntosO");
let contadorx = 0;
let contadoro = 0;

contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;

botones.forEach((boton) => {
  boton.addEventListener("click", function () {
    if (boton.innerHTML == "") {
      boton.innerHTML = ficha;
      if (ficha == "X") {
        ficha = "O";
      } else {
        ficha = "X";
      }

      if (
        botones[0].innerHTML !== "" &&
        botones[0].innerHTML === botones[1].innerHTML &&
        botones[1].innerHTML === botones[2].innerHTML
      ) {
        if (botones[0].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[0].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      } else if (
        botones[3].innerHTML !== "" &&
        botones[3].innerHTML === botones[4].innerHTML &&
        botones[4].innerHTML === botones[5].innerHTML
      ) {
        if (botones[3].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[3].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      } else if (
        botones[6].innerHTML !== "" &&
        botones[6].innerHTML === botones[7].innerHTML &&
        botones[7].innerHTML === botones[8].innerHTML
      ) {
        if (botones[6].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[6].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      } else if (
        botones[0].innerHTML !== "" &&
        botones[0].innerHTML === botones[3].innerHTML &&
        botones[3].innerHTML === botones[6].innerHTML
      ) {
        if (botones[0].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[0].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      } else if (
        botones[1].innerHTML !== "" &&
        botones[1].innerHTML === botones[4].innerHTML &&
        botones[4].innerHTML === botones[7].innerHTML
      ) {
        if (botones[1].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[1].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      } else if (
        botones[2].innerHTML !== "" &&
        botones[2].innerHTML === botones[5].innerHTML &&
        botones[5].innerHTML === botones[8].innerHTML
      ) {
        if (botones[2].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[2].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      } else if (
        botones[0].innerHTML !== "" &&
        botones[0].innerHTML === botones[4].innerHTML &&
        botones[4].innerHTML === botones[8].innerHTML
      ) {
        if (botones[0].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[0].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      } else if (
        botones[2].innerHTML !== "" &&
        botones[2].innerHTML === botones[4].innerHTML &&
        botones[4].innerHTML === botones[6].innerHTML
      ) {
        if (botones[2].innerHTML == "X") {
          contadorx++;
          contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
        } else {
          contadoro++;
          contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
        }
        setTimeout(() => {
          Swal.fire("Ganador: " + botones[2].innerHTML);
          botones.forEach((boton) => {
            boton.innerHTML = "";
          });
        }, 200);
      }
    }
  });
});
restart.addEventListener("click", function () {
  botones.forEach((boton) => {
    boton.innerHTML = "";
  });
  contadorx = 0;
  contadoro = 0;
  contadorX.innerHTML = `Puntos X: <br> ${contadorx}`;
  contadorO.innerHTML = `Puntos O: <br> ${contadoro}`;
});
