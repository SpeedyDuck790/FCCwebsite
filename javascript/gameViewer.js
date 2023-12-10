// JavaScript to change image and blurb based on selected tab
let Game = [];

fetch('/db/gc.txt')
.then(response => response.text())
.then(data => {
        let gameList = document.getElementById('gamelist');
        let Gamecollection = data.split(';');

        for (let GameAttr of Gamecollection) {
            Game.push(GameAttr.split(','));
        }

        for (let i = 0; i < Game.length; i++) {
            let listItem = document.createElement('li');
            listItem.onclick = function() { changeImage(i); };
            listItem.textContent = Game[i][1]; // Assuming Game[i][1] is the game name
            gameList.appendChild(listItem);
            
        }
    }).catch(error => console.error('Error:bad', error));

function changeImage(x) {
    const mainGame = document.getElementById('Game');
    const title = document.getElementById('GameTitle');
    const Desc = document.getElementById('GameDescription');
    
    mainGame.src = "res/Games/"+Game[x][0];
    mainGame.alt = `Game ${x + 1}`;
    title.textContent = Game[x][1];
    Desc.textContent = Game[x][2];
}

