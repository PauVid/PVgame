import { Layout } from './layout';
import { juego1 } from './tresEnRaya.js';
import './style.css'
import { juego2 } from './memory_game.js';
import { juego3 } from './guacAMole.js';


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

// Function to initialize game selection
const selectGame = (gameNumber) => {
  // Clear existing game content
  const app = document.querySelector("#app");
  app.innerHTML = "";

  // Load the selected game based on the gameNumber
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

  // Display game selection buttons
  const gameButtons = document.createElement("div");
  const gameButtonLabels = ["3 EN RAYA", "JUEGO DE MEMORIA", "GUAC-A-MOLE"];
  const gameFunctions = [game1, game2, game3]; // Array of game functions

  gameButtonLabels.forEach((label, index) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", () => {
      selectGame(index + 1); // Index is zero-based, so add 1 to match game numbers
    });
    gameButtons.appendChild(button);
  });

  tablero.appendChild(gameButtons);
};

// Call main function to initialize the game selection UI
main();