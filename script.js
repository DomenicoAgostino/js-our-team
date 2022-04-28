console.log("Ciao mondo");


// variabili

const button = document.getElementById("addMemberButton");

const arrayTeam = [
    {
        photo: "img/wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        position: "Founder & CEO"
    },
    {
        photo: "img/angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        position: "Chief Editor"
    },
    {
        photo: "img/walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        position: "Office Manager"
    },
    {
        photo: "img/angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        position: "Social Media Manager"
    },
    {
        photo: "img/scott-estrada-developer.jpg",
        name: "Scott Estrada",
        position: "Developer"
    },
    {
        photo: "img/barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        position: "Graphic Designer"
    }
]


// funzioni

function printPhoto(photo, name, position){
    const container = document.querySelector(".team-container")
    
    container.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src=" ${photo} "
                alt=" ${name} "
              />
            </div>
            <div class="card-text">
              <h3> ${name} </h3>
              <p> ${position} </p>
            </div>
          </div>
    `
}

function addPeople(){
    const photo = document.getElementById("image").value;
    const name = document.getElementById("name").value;
    const position = document.getElementById("role").value;

    let newPeople = [];
    newPeople.push(photo);
    newPeople.push(name);
    newPeople.push(position);

    arrayTeam.push(newPeople);

    printPhoto(photo, name, position);

    pulisciInput();
}

function pulisciInput(){
    document.getElementById("image").value = "";
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
}


start();

function start(){
    
    for(let i in arrayTeam){
        printPhoto(arrayTeam[i].photo, arrayTeam[i].name, arrayTeam[i].position);
    }
    
}

button.addEventListener("click", addPeople);