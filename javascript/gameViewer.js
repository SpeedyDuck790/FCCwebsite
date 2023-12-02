// JavaScript to change image and blurb based on selected tab
        const Games = ['res/Games/board (7).gif', 'res/Games/board (5).gif', 'res/Games/board (6).gif'];
const titles = ['James Vs Health', 'Matt vs James', 'James Vs Health'];
const Details = [
    'A game where James Proves hes better after losing a game to health in embarressing fashion so he knight odds the next game and produces this in blitzing time',
    'Kingston Open where matt, james, health and erik had joined to show frankstons power ended up in the 6th round mattvsjames as well as health vs erik it was a frankston fight off but here matt trips and falls',
    'health had bull####ted a draw off james in a friendly bltiz game caused james to show his full focus in another odds game find the missed top move white couldve done to be more accurate in this slaughter',]

        function changeImage(x) {
            const mainGame = document.getElementById('Game');
            const title = document.getElementById('GameTitle');
            const Desc = document.getElementById('GameDescription');

            mainGame.src = Games[x];
            mainGame.alt = `Game ${x + 1}`;
            title.textContent = titles[x];
            Desc.textContent = Details[x];

        }