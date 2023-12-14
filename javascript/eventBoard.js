//--------------------------------Boxs Generation---------------------------------

// const Events = [
//     ["Title","10/11/2025", "Blurb", "0+0", "0", "00", "Na"],
//     ["Title","Date", "Blurb", "0+0", "0", "00", "Na"],
//     ["Title","Date", "Blurb", "0+0", "0", "00", "Na"]
// ];

fetch('./db/Events.txt')
  .then(response => response.text())
  .then(data => {
    // Split the text into an array of Player
    let Event = data.split(';');

    // Initialize an empty array to hold the data
    let Events = [];

    // Iterate over the Player
    for (let EventAttr of Event) {
      // Split the line into an array of fields and add it to the data array
      Events.push(EventAttr.split(','));
    }



    for (let j = 0; j < Events.length - 1; j++) {


      let eventTimeline = document.getElementById("EventTimeline");
      let eventbox = document.createElement("div");
      eventbox.className = "container Tevents";
      let eventTitle = document.createElement("h4")
      eventTitle.textContent = Events[j][0];

      let datesection = document.createElement("p");
      datesection.textContent = "Start Date: " + Events[j][1];
      datesection.className = "Date";

      let eventDesc = document.createElement("p");
      eventDesc.textContent = "Description:" + Events[j][2];

      let TimeControl = document.createElement("p");
      TimeControl.textContent = "Time Control: " + Events[j][3];

      let Rounds = document.createElement("p");
      Rounds.textContent = "Rounds: " + Events[j][4];

      let Participants = document.createElement("p");
      Participants.textContent = "Participants: " + Events[j][5];

      let RatingType = document.createElement("p");
      RatingType.textContent = "Type: " + Events[j][6];

      eventbox.appendChild(eventTitle);
      eventbox.appendChild(datesection);
      eventbox.appendChild(eventDesc);
      eventbox.appendChild(TimeControl);
      eventbox.appendChild(Rounds);
      eventbox.appendChild(Participants);
      eventbox.appendChild(RatingType);

      eventTimeline.appendChild(eventbox);
    }
    //-------------------------Box ColourDates-------------------------------------

    // Get all divs with class "Tevents
    const divs = document.querySelectorAll(".Tevents");

    // Loop through each div
    divs.forEach(div => {
      // Get the date from the div
      const dateElement = div.querySelector("p.Date");
      console.log('Date string:', dateElement.textContent); // Debugging line
      const date = new Date(dateElement.textContent);
      console.log('Parsed date:', date); // Debugging line

      // Get the current date
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      console.log(currentDate);

      // Compare the dates and apply color based on the condition
      if (date < currentDate) {//Past
        div.style.backgroundColor = "#B0C4DE";
      } else if (date > currentDate) {//future
        div.style.backgroundColor = "#B0E0E6";
      } else {//now
        div.style.backgroundColor = "#00FA9A";
      }
    });

  }).catch(error => console.error('Error:bad', error));