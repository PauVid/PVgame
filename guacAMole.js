import './guacAMole.css';

// export function juego3() {
//     let puntuacion = 0;
//     let reloj = 60;
//     let intervalId;
//     let objetivo = 25;
  
//     function numeroRandom(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
  
//     function personajito() {
//         const agujeros = document.querySelectorAll('.agujero');
//         const randomIndex = numeroRandom(0, agujeros.length - 1);
//         const randomAgujero = agujeros[randomIndex];
    
//         const personaje = document.createElement('div');
//         personaje.classList.add('personaje');
//         personaje.addEventListener('click', () => {
//             puntuacion++;
//             updatePuntuacion();
//             randomAgujero.removeChild(personaje);
//         });
//         randomAgujero.append(personaje);
    
//         // Remove the personaje after 1 second
//         setTimeout(() => {
//             randomAgujero.removeChild(personaje);
//         }, 1000);
//     }
    
  
//     function updatePuntuacion() {
//       const puntuacionDisplay = document.getElementById('puntuacion');
//       if (puntuacionDisplay) {
//         puntuacionDisplay.textContent = `Puntuacion: ${puntuacion}/25`;
//       }
//     }
  
//     function updateReloj() {
//       const relojDisplay = document.getElementById('reloj');
//       if (relojDisplay) {
//         relojDisplay.textContent = `Tiempo: ${reloj} seconds`;
//       }
//     }
  
//     function createAgujeros() {
//       const gameContainer = document.querySelector('.gameContainer');
//       if (!gameContainer) {
//         console.error("Game container not found");
//         return;
//       }
//       for (let i = 0; i < 10; i++) {
//         const agujero = document.createElement('div');
//         agujero.classList.add('agujero');
//         gameContainer.append(agujero);
//       }
//     }
  
//     function startReloj() {
//       intervalId = setInterval(() => {
//         reloj--;
//         updateReloj();
  
//         if (reloj === 0) {
//           clearInterval(intervalId);
//           alert(`Se acabó el tiempo, ${puntuacion} no són suficientes para derrotar al villano... has muerto.`);
//         } 
      
//       }, 1000);
//     }
  
//     function startGame() {
        
//         puntuacion = 0;
//         reloj = 60;
//         updatePuntuacion();
//         updateReloj();
//         startReloj();
    
//         const personajeIntervalId = setInterval(personajito, 2000);
    
//         setTimeout(() => {
//             clearInterval(personajeIntervalId);
//         }, reloj * 2000);

//         if (puntuacion === objetivo) {
//           const winnerMsg = document.createElement("div");
//           winnerMsg.innerHTML(`
//           <h3>¡Enhorabuena aventurero/a!</h3>
//           <p>Lo has... conseguido... Muchas gracias por salvarnos a todos... yo... estoy demasiado herido... pa... para seguir... pe... pero ha sido un honor luchar a... a tu lado... mi... capitán.</p>
//           `)
//         } 
//     }
    
    
  
//     function restartGame() {
//       clearInterval(intervalId);
//       const gameContainer = document.querySelector('.gameContainer');
//       if (gameContainer) {
//         gameContainer.innerHTML = '';
//         createAgujeros();
//         startGame();
//       }
//     }
  
//     function goBack() {
//       window.location.reload()
//     }
  
//     const buttonsContainer = document.createElement('div');
//     buttonsContainer.classList.add('buttons');
//     const restartButton = document.createElement('button');
//     restartButton.textContent = 'Restart';
//     restartButton.id = 'restartButton';
//     const backButton = document.createElement('button');
//     backButton.textContent = 'Go Back';
//     backButton.id = 'backButton';
//     buttonsContainer.append(restartButton);
//     buttonsContainer.append(backButton);
  
//     const gameContainer = document.createElement('div');
//     gameContainer.classList.add('gameContainer');
  
//     const infoContainer = document.createElement('div');
//     infoContainer.classList.add('info');
//     const puntuacionElement = document.createElement('div');
//     puntuacionElement.id = 'puntuacion';
//     const relojElement = document.createElement('div');
//     relojElement.id = 'reloj';
//     infoContainer.append(puntuacionElement);
//     infoContainer.append(relojElement);
  
//     const appContainer = document.getElementById('app');
//     if (appContainer) {
//       appContainer.append(buttonsContainer);
//       appContainer.append(infoContainer);
//       appContainer.append(gameContainer);
//     } else {
//       console.error("App container not found");
//     }
  
//     if (restartButton) {
//       restartButton.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         restartGame();
//       });
//     }
//     if (backButton) {
//       backButton.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         goBack();
//       });
//     }
  
//     createAgujeros();
//     startGame();
//   }
  
export function juego3() {
  let puntuacion = 0;
  let tiempoRestante = 60;
  let intervalId;
  let objetivo = 25;

  function numeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function personajito() {
      if (puntuacion >= objetivo) {
          return; // No generar más personajes si se alcanza la puntuación objetivo
      }

      const agujeros = document.querySelectorAll('.agujero');
      const indiceAleatorio = numeroAleatorio(0, agujeros.length - 1);
      const agujeroAleatorio = agujeros[indiceAleatorio];

      const personaje = document.createElement('div');
      personaje.classList.add('personaje');
      personaje.addEventListener('click', () => {
          puntuacion++;
          actualizarPuntuacion();
          agujeroAleatorio.removeChild(personaje);
          if (puntuacion === objetivo) {
              detenerJuego();
              const mensajeVictoria = document.createElement("div");
              mensajeVictoria.innerHTML = `
                  <h3>¡Enhorabuena aventurero/a!</h3>
                  <p>Lo has... conseguido... Muchas gracias por salvarnos a todos... yo... estoy demasiado herido... pa... para seguir... pe... pero ha sido un honor luchar a... a tu lado... mi... capitán.</p>
              `;
              document.body.appendChild(mensajeVictoria);
          }
      });
      agujeroAleatorio.append(personaje);

      // Eliminar el personaje después de 1 segundo
      setTimeout(() => {
          agujeroAleatorio.removeChild(personaje);
      }, 1000);
  }

  function actualizarPuntuacion() {
      const puntuacionElemento = document.getElementById('puntuacion');
      if (puntuacionElemento) {
          puntuacionElemento.textContent = `Puntuación: ${puntuacion}/${objetivo}`;
      }
  }

  function actualizarTiempo() {
      const tiempoElemento = document.getElementById('tiempo');
      if (tiempoElemento) {
          tiempoElemento.textContent = `Tiempo: ${tiempoRestante} segundos`;
      }
  }

  function crearAgujeros() {
      const contenedorJuego = document.querySelector('.contenedorJuego');
      if (!contenedorJuego) {
          console.error("No se encontró el contenedor del juego");
          return;
      }
      for (let i = 0; i < 10; i++) {
          const agujero = document.createElement('div');
          agujero.classList.add('agujero');
          contenedorJuego.append(agujero);
      }
  }

  function iniciarTiempo() {
      intervalId = setInterval(() => {
          tiempoRestante--;
          actualizarTiempo();

          if (tiempoRestante === 0 || puntuacion === objetivo) {
              detenerJuego();
              if (tiempoRestante === 0) {
                  alert(`Se acabó el tiempo, ${puntuacion} no son suficientes para derrotar al villano... has muerto.`);
              }
          }

      }, 1000);
  }

  function iniciarJuego() {
      puntuacion = 0;
      tiempoRestante = 60;
      actualizarPuntuacion();
      actualizarTiempo();
      iniciarTiempo();

      const intervaloPersonajesId = setInterval(personajito, 2000);

      setTimeout(() => {
          clearInterval(intervaloPersonajesId);
      }, tiempoRestante * 2000);
  }

  function detenerJuego() {
      clearInterval(intervalId);
  }

  function reiniciarJuego() {
      clearInterval(intervalId);
      const contenedorJuego = document.querySelector('.contenedorJuego');
      if (contenedorJuego) {
          contenedorJuego.innerHTML = '';
          crearAgujeros();
          iniciarJuego();
      }
  }

  function volverAtras() {
      window.location.reload();
  }

  const contenedorBotones = document.createElement('div');
  contenedorBotones.classList.add('botones');
  const reiniciarBoton = document.createElement('button');
  reiniciarBoton.textContent = 'Reiniciar';
  reiniciarBoton.id = 'reiniciarBoton';
  const atrasBoton = document.createElement('button');
  atrasBoton.textContent = 'Volver Atrás';
  atrasBoton.id = 'atrasBoton';
  contenedorBotones.append(reiniciarBoton);
  contenedorBotones.append(atrasBoton);

  const contenedorJuego = document.createElement('div');
  contenedorJuego.classList.add('contenedorJuego');

  const infoContenedor = document.createElement('div');
  infoContenedor.classList.add('informacion');
  const puntuacionElemento = document.createElement('div');
  puntuacionElemento.id = 'puntuacion';
  const tiempoElemento = document.createElement('div');
  tiempoElemento.id = 'tiempo';
  infoContenedor.append(puntuacionElemento);
  infoContenedor.append(tiempoElemento);

  const contenedorApp = document.getElementById('app');
  if (contenedorApp) {
      contenedorApp.append(contenedorBotones);
      contenedorApp.append(infoContenedor);
      contenedorApp.append(contenedorJuego);
  } else {
      console.error("No se encontró el contenedor de la aplicación");
  }

  if (reiniciarBoton) {
      reiniciarBoton.addEventListener('click', (event) => {
          event.preventDefault();
          reiniciarJuego();
      });
  }
  if (atrasBoton) {
      atrasBoton.addEventListener('click', (event) => {
          event.preventDefault();
          volverAtras();
      });
  }

  crearAgujeros();
  iniciarJuego();
}
