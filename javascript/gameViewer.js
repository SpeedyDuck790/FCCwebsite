// JavaScript to change image and blurb based on selected tab
let Game = [];
let gameList = document.getElementById('gamelist');
let totalGames = 2; // Update this with the total number of games

// Fetch game details (PGN and player names)
for (let i = 0; i < totalGames; i++) {
    fetch(getTextDataPath(i))
        .then(response => response.text())
        .then(textData => {
            Game.push(textData);

            // Extract player names from PGN and use them as titles
            let playerNames = extractPlayerNames(textData);
            updateGameTitle(i, playerNames);

            // Continue processing or rendering logic as needed
        })
        .catch(error => console.error('Error fetching text data:', error));
}

function extractPlayerNames(pgn) {
    // Implement logic to extract player names from PGN
    // This is just a placeholder; you should adjust it based on your PGN structure
    let playerNames = pgn.match(/\[White "(.+?)"\]/)[1] + ' vs ' + pgn.match(/\[Black "(.+?)"\]/)[1];
    return playerNames;
}

function updateGameTitle(gameIndex, title) {
    let listItem = document.createElement('li');
    listItem.onclick = function () { changeImage(gameIndex); };
    listItem.textContent = title;
    gameList.appendChild(listItem);
}

function getTextDataPath(gameIndex) {
    return `./db/Games/game${gameIndex + 1}.pgn`;
}

function changeImage(x) {
    const a = document.getElementById('GameImage');
    if (a != null) {
        a.parentNode.removeChild(a);
    } else {
        document.getElementsByTagName('ct-pgn-viewer')[0].remove();
    }

    const Games = document.getElementById('Game');
    const title = document.getElementById('GameTitle');
    const Desc = document.getElementById('GameDescription');

    // Create an image element
    let mainGame = document.createElement('ct-pgn-viewer'); // Create PGN Board
    
    mainGame.textContent = Game[x]; // Add the PGN to the PGN Board
    Games.appendChild(mainGame);

    // Set the title to the extracted player names
    title.textContent = '';
    Desc.textContent = ``; // Replace with your description logic
}