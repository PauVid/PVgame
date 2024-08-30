import './tresenraya.css'

export function juego1() {
  const cuadros = [];
  let jugadorAct = "equis"; 
  let finJuego = false;
  
  const volverInicio = () => {
    function goBack() {
      window.location.reload();
    }

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add("buttonDiv");

    const buttonBack = document.createElement('button');
    buttonBack.textContent = 'Go Back';
    buttonBack.addEventListener('click', goBack);
  }

  
  
  const mesa = () => {
    const tablero = document.querySelector("#app");
    const quadroJuego = document.createElement("div");
    quadroJuego.classList.add("quadroJuego");
    const quadblero = document.createElement("div");
    quadblero.classList.add("quadblero");
    const bgTablero = document.createElement("div");
  
    for (let i = 1; i <= 9; i++) {
      const dividers = document.createElement("div");
      dividers.classList.add("unused");
      bgTablero.append(dividers);
      cuadros.push(dividers);
    }

    quadroJuego.append(bgTablero);
    quadblero.append(quadroJuego);
    tablero.append(quadblero);
  
    distincionDiv();


    function goBack() {
      window.location.reload();
    }

    const buttonBack = document.createElement('button');
    buttonBack.textContent = 'Go Back';
    buttonBack.addEventListener('click', goBack);
    buttonBack.classList.add("back");
  

    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Game";
    restartButton.classList.add("reset");
    bgTablero.classList.add("bg_tablero");
    quadblero.append(buttonBack, restartButton);
  
    restartButton.addEventListener("click", resetJuego);
  };
  
  const distincionDiv = () => {
    cuadros.forEach(function(elem, index) {
      elem.addEventListener("click", function() {
        if (!finJuego && !elem.classList.contains("used")) {
          elem.classList.remove("unused");
          elem.classList.add("used", jugadorAct);
  
          const ganador = comprobacionGanador();
          const empate = comprobacionEmpate();
          
          if (ganador) {
            console.log(`¡El ganador es: ${ganador}!`);
            finJuego = true; 
            document.querySelector(".popup_div").classList.remove("invisible");
          } else if (empate) {
            console.log("¡Has empatado!");
            finJuego = true; 
          } else {
            jugadorAct = jugadorAct === "equis" ? "redonda" : "equis";
            if (jugadorAct === "redonda") {
              movMaquina();
            }
          }
        }
      });
    });
  };
  
  const comprobacionGanador = () => {
    const posibilidadesV = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6] 
    ];
  
    for (const posibilidad of posibilidadesV) {
      const [a, b, c] = posibilidad;
      if (
        cuadros[a].classList.contains("used") &&
        cuadros[a].classList.contains(cuadros[b].classList[1]) &&
        cuadros[a].classList.contains(cuadros[c].classList[1])
      ) {
        return cuadros[a].classList[1]; 
      }
    }
  
    localStorage.setItem("3enrayaWin", true);
    return null; 
  };
  
  const comprobacionEmpate = () => {
    return cuadros.every(square => square.classList.contains("used"));
  };
  
  const resetJuego = () => {
    cuadros.forEach(function(e) {
      e.classList.remove("used", "equis", "redonda");
      e.classList.add("unused");
    });
    jugadorAct = "equis"; 
    finJuego = false;
  };
  
  const movMaquina = () => {
    const unusedCuadros = cuadros.filter(square => square.classList.contains("unused"));
    const randomCuadros = unusedCuadros[Math.floor(Math.random() * unusedCuadros.length)];
    randomCuadros.click();
  };
  
  mesa();
}
