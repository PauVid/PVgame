import './memory_game.css'; 

export function juego2() {
    const cartas = [
        { title: "background", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardOne", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardTwo", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardThree", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardFour", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardFive", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardSix", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardSeven", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardEight", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false },
        { title: "cardNine", id: 0, flipped: false, background: "/assets/card_bg.jpg", matched: false }
    ];

    let cartasGiradas = [];
    let puntuacion = 0;

    const cartaCreation = () => {
        const body = document.querySelector("#app");
        body.innerHTML = '';
        shuffle(cartas);

        const selectedIds = [];
        for (let i = 1; i <= 5; i++) {
            selectedIds.push(i, i);
        }

        shuffle(selectedIds);

        for (let i = 0; i < 10; i++) {
            cartas[i].id = selectedIds[i];
        }

        cartas.forEach(carta => {
            const cartaElement = document.createElement('img');
            cartaElement.src = cartas[0].background;
            cartaElement.classList.add(carta.title);
            cartaElement.classList.add("carta");
            body.append(cartaElement);
        
            cartaElement.addEventListener('click', () => cartaGirada(cartaElement, carta));
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function cartaGirada(cartaElement, carta) {
        if (!carta.flipped && !carta.matched && cartasGiradas.length < 2) { 
            cartaElement.src = `/assets/card_f_0${carta.id}.jpg`;
            carta.flipped = true;
            cartasGiradas.push(carta);
    
            if (cartasGiradas.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function checkMatch() {
        const [carta1, carta2] = cartasGiradas;
    
        if (carta1.id === carta2.id) {
            carta1.matched = true;
            carta2.matched = true;
            puntuacion++;
            if (puntuacion === 5) { 
                const winnerMsg = document.createElement("div");
                winnerMsg.classList.add("winner")
                winnerMsg.innerHTML = `
                <h3>¡Enhorabuena aventurero/a!</h3>
                <p>Has logrado debilitar al malvado villano... aún así, no podemos cantar victoria. Ahora es aún más peligroso que antes... tenemos que seguir.</p>
                `;
                const backButton = document.createElement('button');
                backButton.textContent = 'Siguiente juego';
                backButton.addEventListener('click', goBack);
                winnerMsg.appendChild(backButton);
                document.body.appendChild(winnerMsg);
            }
        } else {
            carta1.flipped = false;
            carta2.flipped = false;
            document.querySelectorAll('.carta').forEach(cartaElement => {
                const carta = cartas.find(c => c.title === cartaElement.classList[0]);
                if (!carta.matched) {
                    cartaElement.src = cartas[0].background;
                }
            });
        }
    
        cartasGiradas = [];
    }

    function restartGame() {
        cartas.forEach(carta => {
            carta.flipped = false;
            carta.matched = false;
            carta.id = 0;
        });

        cartaCreation();
    }

    function goBack() {
        window.location.reload();
    }

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add("buttonDiv");

    const buttonBack = document.createElement('button');
    buttonBack.textContent = 'Go Back';
    buttonBack.addEventListener('click', goBack);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.addEventListener('click', restartGame);
    buttonsDiv.appendChild(restartButton);
    buttonsDiv.appendChild(buttonBack);

    document.body.appendChild(buttonsDiv);

    cartaCreation();
}