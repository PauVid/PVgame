import './layout.css'

export const Layout = () => {

    const body = document.querySelector("body");
    const player = document.createElement("section");
    player.classList.add("players");
    body.append(player);

    // players()
    winnerPop()
}

const winnerPop = () => {

    const body = document.querySelector("body");
    const popupDiv = document.createElement("div");
    popupDiv.classList.add("popup_div");
    popupDiv.classList.add("invisible");
    popupDiv.innerHTML = `
        <h3>¡Enhorabuena, valiente héroe/heroína! </h3>
        <p>Con tu astucia y valentía, has derrotado al villano y liberado al reino de su maligno dominio. 
        Tu coraje será recordado por generaciones venideras.
        ¡Que la luz y la paz reinen de nuevo gracias a ti!</p>
        <button class="refresh-btn" onClick="location.reload()">Mátalo otra vez en otro juego 😈</button>

    `;
    body.append(popupDiv);

}
