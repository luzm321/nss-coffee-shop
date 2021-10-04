const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

let beanVarietyText = "<h1>Bean Varieties: </h1>";
let coffeeText = "<h1>Coffee Details: </h1>";

// const button = document.querySelector("#run-button");
// button.addEventListener("click", () => {
//     getAllBeanVarieties()
//         .then(beanVarieties => {
//             console.log(beanVarieties);
//         })
// });

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(getAllCoffees())
});

// function getAllBeanVarieties() {
//     return fetch(url).then(resp => resp.json());
// }

const getAllBeanVarieties = () => {
    return fetch(beanVarietyUrl)
        .then(response => response.json())
        .then(beanVarieties => {
            beanVarieties.map((beanVariety) => {
                beanVarietyText += `<h2>Name: ${beanVariety.name}</h2>
                <h2>Region: ${beanVariety.region}</h2>
                <h2>Description: ${beanVariety.notes}</h2> </br>`
            }).join("");
        })
        .then(listBeans);
};

const getAllCoffees = () => {
    return fetch(coffeeUrl)
        .then(response => response.json())
        .then(coffees => {
            coffees.map((coffee) => {
                coffeeText += `<h2>Title: ${coffee.title}</h2>
                <h2>Bean Variety Name: ${coffee.beanVariety.name}</h2>
                <h2>Bean Variety Region: ${coffee.beanVariety.region}</h2>
                <h2>Bean Variety Description: ${coffee.beanVariety.notes}</h2> </br>`
            }).join("");
        })
        .then(listCoffees);
};

const listBeans = () => {
    document.querySelector("#beanVariety").innerHTML = beanVarietyText;
};

const listCoffees = () => {
    document.querySelector("#coffee").innerHTML = coffeeText;
};
