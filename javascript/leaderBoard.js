

// will be replaced by db
const leaderboardData = [
    ["1", "James Hill", "10", "1800", "10/4/1", "5"],
    ["2", "John Smith", "8", "2000", "8/2/0", "3"],
    ["3", "Emily Johnson", "7", "1500", "7/3/0", "4"],
    ["4", "Sarah Davis", "6", "2200", "6/1/2", "2"],
    ["5", "Michael Wilson", "5", "1900", "5/2/1", "3"],
    ["6", "Jessica Brown", "4", "1700", "4/1/0", "2"],
    ["7", "David Taylor", "3", "1600", "3/2/0", "1"],
    ["8", "Jennifer Miller", "2", "2100", "2/0/0", "0"],
    ["9", "Daniel Anderson", "1", "2300", "1/1/0", "1"],
    ["10", "Olivia Martinez", "0", "1400", "0/3/1", "4"],
];


for (let x = 0; x < leaderboardData.length; x++) {
    // Get the leaderboard table element
    let leaderboard = document.getElementById("leaderboard");

    // Create a new table row element
    let playerRow = document.createElement("tr");

    // Create table data elements for each column
    let rankData = document.createElement("td");
    rankData.textContent = leaderboardData[x][0];

    let nameData = document.createElement("td");
    nameData.textContent = leaderboardData[x][1];

    let scoreData = document.createElement("td");
    scoreData.textContent = leaderboardData[x][2];

    let ratingData = document.createElement("td");
    ratingData.textContent = leaderboardData[x][3];

    let WDLData = document.createElement("td");
    WDLData.textContent = leaderboardData[x][4];

    let EventsData = document.createElement("td");
    EventsData.textContent = leaderboardData[x][5];
    // Append table data elements to the table row
    playerRow.appendChild(rankData);
    playerRow.appendChild(nameData);
    playerRow.appendChild(scoreData);
    playerRow.appendChild(ratingData);
    playerRow.appendChild(WDLData);
    playerRow.appendChild(EventsData);

    if (x == 0) { playerRow.className = "first"; }
    if (x == 1) { playerRow.className = "second"; }
    if (x == 2) { playerRow.className = "third"; }
    // Append the table row to the leaderboard table
    leaderboard.appendChild(playerRow);
}



//---------------------------CHAMPIONS INSERTATION HERE
const champs = ["Jared","Tim","James","Ege","---"]

   
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