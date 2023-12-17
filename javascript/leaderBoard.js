

fetch('./db/leaderboard.txt')
    .then(response => response.text())
    .then(data => {
        // Split the text into an array of Player
        let Player = data.split(';');

        // Initialize an empty array to hold the data
        let leaderboardData = [];

        // Iterate over the Player
        for (let Pstat of Player) {
            // Split the line into an array of fields and add it to the data array
            leaderboardData.push(Pstat.split(','));
        }



        // example of data transfered
        // john,15,2000, 10/2/5, 3;
        // mary,8,1500, 5/1/3, 1;              
        // VVVVVVVVVVVVVV
        //  leaderboardData = [
        //     ["James Hill", "10", "1800", "10/4/1", "5"],
        //     ["John Smith", "8", "2000", "8/2/0", "3"],
        //     ....
        // ];


        for (let x = 0; x < leaderboardData.length - 1; x++) {
            // Get the leaderboard table element
            let leaderboard = document.getElementById("leaderboard");

            // Create a new table row element
            let playerRow = document.createElement("tr");

            // Create table data elements for each column
            let rankData = document.createElement("td");
            rankData.textContent = (x + 1);

            let nameData = document.createElement("td");
            nameData.textContent = leaderboardData[x][0];

            let scoreData = document.createElement("td");
            scoreData.textContent = leaderboardData[x][1];

            let ratingData = document.createElement("td");
            ratingData.textContent = leaderboardData[x][2];

            // Append table data elements to the table row
            playerRow.appendChild(rankData);
            playerRow.appendChild(nameData);
            playerRow.appendChild(scoreData);
            playerRow.appendChild(ratingData);

            if (x == 0) { playerRow.className = "first"; }
            if (x == 1) { playerRow.className = "second"; }
            if (x == 2) { playerRow.className = "third"; }
            // Append the table row to the leaderboard table
            leaderboard.appendChild(playerRow);
        }

    })
    .catch(error => console.error('Error:bad', error));

//---------------------------CHAMPIONS INSERTATION HERE
fetch('./db/Champs.txt')
    .then(response => response.text())
    .then(data => {

        let champs = data.split(',');

        let ChampBoard = document.getElementById("ClubChamps");

        let ChampC = document.createElement("h3");
        ChampC.textContent = "FCC Classical Champion: " + champs[0];

        let ChampSR = document.createElement("h4");
        ChampSR.textContent = "FCC Slow Rapid Champion: " + champs[1];

        let ChampFR = document.createElement("h4");
        ChampFR.textContent = "FCC Fast Rapid Champion: " + champs[2];

        let ChampSB = document.createElement("h4");
        ChampSB.textContent = "FCC Slow Blitz Champion: " + champs[3];

        let ChampFB = document.createElement("h4");
        ChampFB.textContent = "FCC Fast Blitz Champion: " + champs[4];

        ChampC.style.color = "gold"
        ChampSR.style.color = "gold"
        ChampFR.style.color = "gold"
        ChampSB.style.color = "gold"
        ChampFB.style.color = "gold"
        ChampBoard.appendChild(ChampC);
        ChampBoard.appendChild(ChampSR);
        ChampBoard.appendChild(ChampFR);
        ChampBoard.appendChild(ChampSB);
        ChampBoard.appendChild(ChampFB);
    }).catch(error => console.error('Error:bad', error));