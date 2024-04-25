import './guacAMole.css';

export function juego3() {
    let puntuacion = 0;
    let reloj = 60;
    let intervalId;
  
    function numeroRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function personajito() {
        const agujeros = document.querySelectorAll('.agujero');
        const randomIndex = numeroRandom(0, agujeros.length - 1);
        const randomAgujero = agujeros[randomIndex];
    
        const personaje = document.createElement('div');
        personaje.classList.add('personaje');
        personaje.addEventListener('click', () => {
            puntuacion++;
            updatePuntuacion();
            randomAgujero.removeChild(personaje);
        });
        randomAgujero.append(personaje);
    
        // Remove the personaje after 1 second
        setTimeout(() => {
            randomAgujero.removeChild(personaje);
        }, 1000);
    }
    
  
    function updatePuntuacion() {
      const puntuacionDisplay = document.getElementById('puntuacion');
      if (puntuacionDisplay) {
        puntuacionDisplay.textContent = `Puntuacion: ${puntuacion}`;
      }
    }
  
    function updateReloj() {
      const relojDisplay = document.getElementById('reloj');
      if (relojDisplay) {
        relojDisplay.textContent = `Time left: ${reloj} seconds`;
      }
    }
  
    function createAgujeros() {
      const gameContainer = document.querySelector('.gameContainer');
      if (!gameContainer) {
        console.error("Game container not found");
        return;
      }
      for (let i = 0; i < 10; i++) {
        const agujero = document.createElement('div');
        agujero.classList.add('agujero');
        gameContainer.append(agujero);
      }
    }
  
    function startReloj() {
      intervalId = setInterval(() => {
        reloj--;
        updateReloj();
  
        if (reloj === 0) {
          clearInterval(intervalId);
          alert(`Se acabó el tiempo, has conseguido matar a ${puntuacion} enemigos...`);
        }
      }, 1000);
    }
  
    function startGame() {
        
        puntuacion = 0;
        reloj = 60;
        updatePuntuacion();
        updateReloj();
        startReloj();
    
        const personajeIntervalId = setInterval(personajito, 2000);
    
        setTimeout(() => {
            clearInterval(personajeIntervalId);
        }, reloj * 2000);
    }
    
    
  
    function restartGame() {
      clearInterval(intervalId);
      const gameContainer = document.querySelector('.gameContainer');
      if (gameContainer) {
        gameContainer.innerHTML = '';
        createAgujeros();
        startGame();
      }
    }
  
    function goBack() {
    }
  
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.id = 'restartButton';
    const backButton = document.createElement('button');
    backButton.textContent = 'Go Back';
    backButton.id = 'backButton';
    buttonsContainer.append(restartButton);
    buttonsContainer.append(backButton);
  
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('gameContainer');
  
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info');
    const puntuacionElement = document.createElement('div');
    puntuacionElement.id = 'puntuacion';
    const relojElement = document.createElement('div');
    relojElement.id = 'reloj';
    infoContainer.append(puntuacionElement);
    infoContainer.append(relojElement);
  
    const appContainer = document.getElementById('app');
    if (appContainer) {
      appContainer.append(buttonsContainer);
      appContainer.append(infoContainer);
      appContainer.append(gameContainer);
    } else {
      console.error("App container not found");
    }
  
    if (restartButton) {
      restartButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        restartGame();
      });
    }
    if (backButton) {
      backButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        goBack();
      });
    }
  
    createAgujeros();
    startGame();
  }
  
  
  
  