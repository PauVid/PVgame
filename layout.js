import './layout.css'

export const Layout = () => {

    const body = document.querySelector("body");
    const player = document.createElement("section");
    player.classList.add("players");
    body.append(player);

    players()
    winnerPop()
}

const players = () => {

    document.querySelector(".players").innerHTML = `
    <div class="player_cards">
    <div class="playerA">
    <div class="bg_img">
    <img src="/assets/user_text_img.png">
    </div>
    <div class="img_container">
    <img src="https://img.freepik.com/free-vector/hand-drawn-don-quixote-illustration_23-2149863492.jpg?t=st=1712743431~exp=1712747031~hmac=ea7f6b70edd79ed2318c50e853a669de029ada772a633dbaadd4d6717dc7bb07&w=826">
    <h3>Jugador 1</h3>
    </div>
    <div class="card_description">
    <p>Tú que te lo crees ;)</p>
    </div>
    </div>

    <div class="playerB">
    <div class="img_container">
    <img src="https://img.freepik.com/free-vector/hand-drawn-knight-cartoon-illustration_23-2150515939.jpg?t=st=1712743380~exp=1712746980~hmac=c055cbbc1bfd4c1bd469634766b177f157cc2efdcb313f8fed8fd7f16184654b&w=826">
    <h3>Jugador 2</h3>
    </div>
    <div class="card_description">
    <p>Bienvenido Jugador 1. Vas a perder ¿lo sabes, no?</p>
    </div>
    <div class="bg_img">
    <img src="/assets/user_text_img.png">
    </div>
    </div>
    </div>
    `

    
}

const winnerPop = () => {

    const body = document.querySelector("body");
    const popupDiv = document.createElement("div");
    popupDiv.classList.add("popup_div");
    popupDiv.classList.add("invisible");
    popupDiv.innerHTML = `
        <img src="./assets/user_text_img.png">
        <h3>¡Enhorabuena!</h3>
        <p>Has conseguido derrotar al más malvado de los malvados</p>
        <button class="refresh-btn" onClick="location.reload()">Mátalo otra vez 😈</button>

    `;
    body.append(popupDiv);

}