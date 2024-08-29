import './guacAMole.css';
  
// export function juego3() {
//   let puntuacion = 0;
//   let tiempoRestante = 60;
//   let intervalId;
//   let objetivo = 25;

//   function numeroAleatorio(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function personajito() {
//       if (puntuacion >= objetivo) {
//           return; // No generar más personajes si se alcanza la puntuación objetivo
//       }

//       const agujeros = document.querySelectorAll('.agujero');
//       const indiceAleatorio = numeroAleatorio(0, agujeros.length - 1);
//       const agujeroAleatorio = agujeros[indiceAleatorio];

//       const personaje = document.createElement('div');
//       personaje.classList.add('personaje');
//       personaje.addEventListener('click', () => {
//           puntuacion++;
//           actualizarPuntuacion();
//           agujeroAleatorio.removeChild(personaje);
//           if (puntuacion === objetivo) {
//               detenerJuego();
//               const mensajeVictoria = document.createElement("div");
//               mensajeVictoria.classList.add("winner");
//               mensajeVictoria.innerHTML = `
//                   <h3>¡Enhorabuena aventurero/a!</h3>
//                   <p>Lo has... conseguido... Muchas gracias por salvarnos a todos... yo... estoy demasiado herido... pa... para seguir... pe... pero ha sido un honor luchar a... a tu lado... mi... capitán.</p>
//               `;
//               document.body.appendChild(mensajeVictoria);
//               localStorage.setItem("guacamoleWin", true);
//           }
//       });
//       agujeroAleatorio.append(personaje);

//       // Eliminar el personaje después de 1 segundo
//       setTimeout(() => {
//           agujeroAleatorio.removeChild(personaje);
//       }, 1000);
//   }

//   function actualizarPuntuacion() {
//       const puntuacionElemento = document.getElementById('puntuacion');
//       if (puntuacionElemento) {
//           puntuacionElemento.textContent = `Puntuación: ${puntuacion}/${objetivo}`;
//       }
//   }

//   function actualizarTiempo() {
//       const tiempoElemento = document.getElementById('tiempo');
//       if (tiempoElemento) {
//           tiempoElemento.textContent = `Tiempo: ${tiempoRestante} segundos`;
//       }
//   }

//   function crearAgujeros() {
//       const contenedorJuego = document.querySelector('.contenedorJuego');
//       if (!contenedorJuego) {
//           console.error("No se encontró el contenedor del juego");
//           return;
//       }
//       for (let i = 0; i < 10; i++) {
//           const agujero = document.createElement('div');
//           agujero.classList.add('agujero');
//           contenedorJuego.append(agujero);
//       }
//   }

//   function iniciarTiempo() {
//       intervalId = setInterval(() => {
//           tiempoRestante--;
//           actualizarTiempo();

//           if (tiempoRestante === 0 || puntuacion === objetivo) {
//               detenerJuego();
//               if (tiempoRestante === 0) {
//                   alert(`Se acabó el tiempo, ${puntuacion} no son suficientes para derrotar al villano... has muerto.`);
//               }
//           }

//       }, 1000);
//   }

//   function iniciarJuego() {
//       puntuacion = 0;
//       tiempoRestante = 60;
//       actualizarPuntuacion();
//       actualizarTiempo();
//       iniciarTiempo();

//       const intervaloPersonajesId = setInterval(personajito, 2000);

//       setTimeout(() => {
//           clearInterval(intervaloPersonajesId);
//       }, tiempoRestante * 2000);
//   }

//   function detenerJuego() {
//       clearInterval(intervalId);
//   }

//   function reiniciarJuego() {
//       clearInterval(intervalId);
//       const contenedorJuego = document.querySelector('.contenedorJuego');
//       if (contenedorJuego) {
//           contenedorJuego.innerHTML = '';
//           crearAgujeros();
//           iniciarJuego();
//       }
//   }

//   function volverAtras() {
//       window.location.reload();
//   }

//   const contenedorBotones = document.createElement('div');
//   contenedorBotones.classList.add('botones');
//   const reiniciarBoton = document.createElement('button');
//   reiniciarBoton.textContent = 'Reiniciar';
//   reiniciarBoton.id = 'reiniciarBoton';
//   const atrasBoton = document.createElement('button');
//   atrasBoton.textContent = 'Volver Atrás';
//   atrasBoton.id = 'atrasBoton';
//   contenedorBotones.append(reiniciarBoton);
//   contenedorBotones.append(atrasBoton);

//   const contenedorJuego = document.createElement('div');
//   contenedorJuego.classList.add('contenedorJuego');

//   const infoContenedor = document.createElement('div');
//   infoContenedor.classList.add('informacion');
//   const puntuacionElemento = document.createElement('div');
//   puntuacionElemento.id = 'puntuacion';
//   const tiempoElemento = document.createElement('div');
//   tiempoElemento.id = 'tiempo';
//   infoContenedor.append(puntuacionElemento);
//   infoContenedor.append(tiempoElemento);

//   const contenedorApp = document.getElementById('app');
//   if (contenedorApp) {
//       contenedorApp.append(contenedorBotones);
//       contenedorApp.append(infoContenedor);
//       contenedorApp.append(contenedorJuego);
//   } else {
//       console.error("No se encontró el contenedor de la aplicación");
//   }

//   if (reiniciarBoton) {
//       reiniciarBoton.addEventListener('click', (event) => {
//           event.preventDefault();
//           reiniciarJuego();
//       });
//   }
//   if (atrasBoton) {
//       atrasBoton.addEventListener('click', (event) => {
//           event.preventDefault();
//           volverAtras();
//       });
//   }

//   crearAgujeros();
//   iniciarJuego();
// }

export function juego3() {
    let puntuacion = 0;
    let tiempoRestante = 60;
    let intervalId;
    let objetivo = 25;
    let intervaloPersonajesId;
  
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
                mostrarMensajeVictoria();
            }
        });
        agujeroAleatorio.append(personaje);
  
        // Eliminar el personaje después de 1 segundo
        setTimeout(() => {
            if (agujeroAleatorio.contains(personaje)) {
                agujeroAleatorio.removeChild(personaje);
            }
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
        contenedorJuego.innerHTML = ''; // Clear existing holes to prevent duplication
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
                if (tiempoRestante === 0 && puntuacion < objetivo) {
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
  
        intervaloPersonajesId = setInterval(personajito, 2000);
    }
  
    function detenerJuego() {
        clearInterval(intervalId);
        clearInterval(intervaloPersonajesId);
    }
  
    function reiniciarJuego() {
        detenerJuego();
        crearAgujeros();
        iniciarJuego();
        const mensajeVictoria = document.querySelector('.winner');
        if (mensajeVictoria) {
            document.body.removeChild(mensajeVictoria); // Remove victory message if exists
        }
    }
  
    function mostrarMensajeVictoria() {
        const mensajeVictoria = document.createElement("div");
        mensajeVictoria.classList.add("winner");
        mensajeVictoria.innerHTML = `
            <h3>¡Enhorabuena aventurero/a!</h3>
            <p>Lo has... conseguido... Muchas gracias por salvarnos a todos... yo... estoy demasiado herido... pa... para seguir... pe... pero ha sido un honor luchar a... a tu lado... mi... capitán.</p>
        `;
        document.body.appendChild(mensajeVictoria);
        localStorage.setItem("guacamoleWin", true);
    }
  
    function volverAtras() {
        window.location.reload();
    }
  
    // Setup UI and Game Elements
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
  
    reiniciarBoton.addEventListener('click', (event) => {
        event.preventDefault();
        reiniciarJuego();
    });
  
    atrasBoton.addEventListener('click', (event) => {
        event.preventDefault();
        volverAtras();
    });
  
    crearAgujeros();
    iniciarJuego();
  }
  
