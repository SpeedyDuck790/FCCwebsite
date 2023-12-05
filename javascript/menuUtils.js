
// main objectives here

//     - notice
//     -club intro players


fetch('/db/NOTICESCHEDULE.txt')
                .then(response => response.text())
    .then(data => {

        document.getElementById('notice').textContent = data;

    }).catch(error => console.error('Error:bad', error));


//probs can keep static tbh
fetch('/db/ClubPerson.txt')
                .then(response => response.text())
                .then(data => {
                    // Split the text into an array of Player
                    let FCCMember = data.split(';');

                    // Initialize an empty array to hold the data
                    let meetTheClub = [];

                    // Iterate over the Player
                    for (let Mdata of FCCMember) {
                        // Split the line into an array of fields and add it to the data array
                        meetTheClub.push(Mdata.split(','));
                    }

                        }).catch(error => console.error('Error:bad', error));
