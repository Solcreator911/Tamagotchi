let system = new System();  // Initialize the system with default animals and games


//Initial page setup


let type = document.querySelectorAll(".boton");
type.forEach((typeButton) => { typeButton.addEventListener("click", animalType) });

function animalType() {
  if (this.id === "btnOsoSelect") {
    type = "Bear"; // Set type to Bear if button with id "btnOsoSelect" is clicked
  } else if (this.id === "btnElefanteSelect") {
    type = "Elefant"; // Set type to Elefant if button with id "btnElefanteSelect" is clicked
  } else if (this.id === "btnBuhoSelect") {
    type = "Owl"; // Set type to Owl if button with id "btnBuhoSelect" is clicked
  }
  return type;
}


document.querySelector("#btnNext").addEventListener("click", Register)

function Register() {

  let name = document.querySelector("#txtName").value;
  let owner = document.querySelector("#txtOwner").value;
  let type = animalType(); // Get the type of animal selected
  let exist = system.noExisting(name, owner, type); // Check if the animal already exists
  if (name === "" || owner === "" || type === "") {
    alert("Please fill in all fields!"); // Notify user to fill all fields
    return; // Exit the function if any field is empty
  }

  if (!exist) {
    let animal = new Animal(name, owner, type, 0, 100, 100, 100, 100, 100, 100); // Create a new animal
    system.animals.push(animal); // Add the new animal to the system
    let game = new Game(animal); // Create a new game for the animal
    system.games.push(game); // Add the new game to the system
    alert("This pet registered successfully!"); // Notify user of successful registration
    window.location.href = "index2.html"; //Redirect to next page
  } else {
    alert("This pet already exists!"); // Notify user if the animal already exists
  }

}


//Game initialization

function dateAndTime() {
  let now = new Date();
  let date = now.getDate()
  let month = now.getMonth() + 1; //Months go from 0 to 11
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  if(date < 10){
    date = "0" + date;
  }

document.querySelector("#pDate").innerHTML = date + "/" + month + "/" + year;
document.querySelector("#pHour").innerHTML = hours + ":" + minutes + " pm";

}

setInterval(dateAndTime, 1000); // Update the date and time every second
dateAndTime();

