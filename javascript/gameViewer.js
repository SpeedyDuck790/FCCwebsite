// JavaScript to change image and blurb based on selected tab
let Game = [];

fetch('./db/gc.txt')
    .then(response => response.text())
    .then(data => {
        let gameList = document.getElementById('gamelist');
        let Gamecollection = data.split(';');

        for (let GameAttr of Gamecollection) {
            Game.push(GameAttr.split('|'));
        }

        for (let i = 0; i < Game.length; i++) {
            let listItem = document.createElement('li');
            listItem.onclick = function () { changeImage(i); };
            listItem.textContent = Game[i][1]; // Assuming Game[i][1] is the game name
            gameList.appendChild(listItem);

        }
    }).catch(error => console.error('Error:bad', error));

function changeImage(x) {
    const a = document.getElementById('GameImage');
    if (a != null) {
        a.parentNode.removeChild(a); //Remove FCC logo 
    } else {
        document.getElementsByTagName('ct-pgn-viewer')[0].remove();//Remove the pgn board
    }
    const Games = document.getElementById('Game');
    const title = document.getElementById('GameTitle');
    const Desc = document.getElementById('GameDescription');

    let mainGame = document.createElement('ct-pgn-viewer'); //Create PGN Board
    mainGame.textContent = Game[x][0]; //Add the PGN to the PGN Board
    Games.appendChild(mainGame);
    title.textContent = Game[x][1];
    Desc.textContent = Game[x][2];
}

