var foods = [{name: "pizza", invented: "naples",
     when: 1900, eaten: true}, 
{name: "crepes", invented: "brittany", 
    when: 1300, eaten: true},
{name: "nutella", invented: "piedmont",
    when: 1940, eaten: false},
{name: "sushi", invented: "japan",
    when: 900, eaten: false},
{name: "caramel apples", invented: "newark",
    when: 1908, eaten: false},
{name: "pancakes", invented: "ancient greece",
    when: 100, eaten: true}];


function createList(foods){
    var foodsEaten = foods.filter(food => food.eaten === true);
    var foodsNotEaten = foods.filter(food => food.eaten === false);
    console.log("foodsEaten:", foodsEaten.sort(function(a,b){return a.when - b.when}));
    console.log("foodsNotEaten:", foodsNotEaten.sort(function(a,b){return a.when - b.when}));
}
createList(foods);