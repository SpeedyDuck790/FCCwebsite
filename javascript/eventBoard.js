//--------------------------------Boxs Generation---------------------------------

const Events = [
    ["string1", "string2", "string3"],
    ["string4", "string5", "string6"],
    ["string7", "string8", "string9"]
];














//--------------------------Box ColourDates-------------------------------------

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
