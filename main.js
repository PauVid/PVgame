import { Layout } from './src/components/layout/layout.js';
import { juego1 } from './src/games/tresenraya/tresEnRaya.js';
import './style.css'
import { juego2 } from './src/games/memorygame/memory_game.js';
import { juego3 } from './src/games/guacamole/guacAMole.js';


// 3 EN RAYA
function game1() {
  Layout();
  juego1();
}


// JUEGO DE MEMORIA
function game2() {
  juego2();
};

// GUAC-A-MOLE
function game3() {
  juego3()
};

const selectGame = (gameNumber) => {

  const app = document.querySelector("#app");
  app.innerHTML = "";

  switch (gameNumber) {
      case 1:
          game1();
          break;
      case 2:
          game2();
          break;
      case 3:
          game3();
          break;
      default:
          console.error("Aquí no hay ningún juego");
  }
};

const main = () => {
  const tablero = document.querySelector("#app");

  const mainText = document.createElement("h1");
  mainText.textContent = '¡Bienvenido/a a la mazmorra de los desafíos!';
  const text = document.createElement("p");
  text.classList.add("text-home");
  text.textContent = 'Aquí aguarda un villano astuto que solo puede ser derrotado superando tres desafíos: un trepidante tres en raya, un frenético guac-a-mole y un desafiante juego de memoria. ¿Estás listo/a para enfrentarte a estos desafíos y salvar el reino de la oscuridad? Adelante, aventurero/a, el destino espera tu valentía.';

  const gameButtons = document.createElement("div");
  gameButtons.classList.add("mainDiv");
  const gameButtonLabels = ["3 EN RAYA", "JUEGO DE MEMORIA", "GUAC-A-MOLE"];
  const gameFunctions = [game1, game2, game3]; 

  gameButtonLabels.forEach((label, index) => {
    const button = document.createElement("button");
    button.classList.add("main-btn");
    button.textContent = label;
    button.addEventListener("click", () => {
      selectGame(index + 1);
    });
    gameButtons.append(button);
  });
  tablero.append(mainText);
  tablero.append(text);
  tablero.append(gameButtons);


};

main();