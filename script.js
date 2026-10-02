const userName = "Alicia";
let mood = "Happy";
let waterCups =8;
let energy = 5;
let sleptWell = true;

console.log(`Hello ${userName}`);
console.log(mood);
console.log(energy);


let waterGoal = 10;
let waterRemaining = waterGoal - waterCups;
console.log(`you have ${waterRemaining} of ${waterGoal} cups of water left to reach your goal`);

if (energy>5){
    console.log("You seem energized today");
}else if(energy< 5){
    console.log("Take things at a steady pace today");
    
}else{
    console.log("You're doing well today");
    
}


const wellnesEntries = [
    {
        date: "2026- 09- 10",
        mood : "Happy",
        energy: 6,
        waterRemaining: 3,
},

    {
        date: "2026- 09- 15",
        mood : "Sad",
        energy: 2,
        waterRemaining: 7,
    }
];

//Add an entry
function addEntry(entry){
    wellnesEntries.push(entry)
}

function getAverageEnergy(entries){
   const totalEnergy = entries.reduce(
        (sum, entry) => sum + entry.energy,
        0
    );

    return totalEnergy / entries.length;
}

console.log(getAverageEnergy(wellnesEntries));

//DOM
const form = document.querySelector("#wellness-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submitted");

    const date = document.querySelector("#date").value;
    const moodInput = document.querySelector("#mood").value;
    const energyLevel = document.querySelector("#energy").value;
    const sleep = document.querySelector("#sleep").value;

    console.log("Date:", date);
    console.log("Mood:", moodInput);
    console.log("Energy:", energyLevel);
    console.log("Sleep:", sleep);

const entry = {
    date: date,
    mood: moodInput,
    energy: Number(energyLevel),
    sleep: Number(sleep)
};
    addEntry(entry);
    renderEntry(entry);
    
}); 


const entriesContainer = document.querySelector("#entries-container");

function renderEntry(entry) {

    const entryCard = document.createElement("div");

    entryCard.classList.add("entry-card");

    entryCard.innerHTML = `
        <h3>${entry.date}</h3>
        <p><strong>Mood:</strong> ${entry.mood}</p>
        <p><strong>Energy:</strong> ${entry.energy}/10</p>
        <p><strong>Sleep:</strong> ${entry.sleep} hours</p>
    `;

    entriesContainer.append(entryCard);
}
