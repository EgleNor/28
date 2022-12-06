import { fetchData } from "./crud.js";
let fruits = [];
const rezultatas = document.getElementById('rezultatas');

(()=>{fetchData().then(data => {
    if(data) {
        fruits=data; 
    }
})})()

const angliavandeniai = document.querySelector('#angliavandeniai');
angliavandeniai.addEventListener('click', () => {
    rezultatas.innerHTML = '';
    const sortedFruits = fruits.sort((a,b) => b.nutritions.carbohydrates-a.nutritions.carbohydrates);
    for(let i=0; i<10; i++) {
        rezultatas.innerHTML += `<div>${sortedFruits[i].name} - ${sortedFruits[i].nutritions.carbohydrates}</div>`
    }
     console.log(fruits.sort((a,b) => b.nutritions.carbohydrates-a.nutritions.carbohydrates));
});

const baltymai = document.querySelector('#baltymai');
baltymai.addEventListener('click', () => {
    rezultatas.innerHTML = '';
    // const sortedFruits = fruits.sort((a,b) => b.nutritions.carbohydrates-a.nutritions.carbohydrates);
    //  console.log(fruits.sort((a,b) => b.nutritions.carbohydrates-a.nutritions.carbohydrates));
    const proteinArray = fruits.map(item => item.nutritions.protein);
    const max = Math.max(...proteinArray);
    const filteredFruits = fruits.filter(fruit => fruit.nutritions.protein===max);
    for(let i=0; i<filteredFruits.length; i++) {
            rezultatas.innerHTML += `<div>${filteredFruits[i].name} - ${filteredFruits[i].nutritions.protein}</div>`
        }
});

const riebalai = document.querySelector('#riebalai');
riebalai.addEventListener('click', () => {
    rezultatas.innerHTML = '';
    for(let i = 0; i <fruits.length; i++) {
        if(fruits[i].nutritions.fat >= 5) {
           rezultatas.innerHTML += `<div>${fruits[i].name} - ${fruits[i].nutritions.fat}</div>`
        }
    }
});

const kalorijos = document.querySelector('#kalorijos');
kalorijos.addEventListener('click', () => {
    rezultatas.innerHTML = '';
    // let sum = 0;
    // fruits.forEach(item => {
    //     sum += item.nutritions.calories;
    // })
    const sum = fruits.reduce((sum,item) => {
        sum += item.nutritions.calories
        return sum;
    }, 0)
    rezultatas.innerHTML += `<p>${sum}</p>`
});

const cukrai = document.querySelector('#cukrai');
cukrai.addEventListener('click', () => {
    rezultatas.innerHTML = '';
    const newCukrai = fruits.map(item => ({
        name: item.name,
        sugar: item.nutritions.sugar,
    }))
const sortedFruits = newCukrai.sort((a,b) => b.sugar - a.sugar);
sortedFruits.forEach(item => {
    XPathResult.innerHTML += `<p>${item.name} - ${item.sugar}</p>`
})
})