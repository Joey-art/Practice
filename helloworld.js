console.log("hello world");
function practice(){
    var animals = [{type: "horse", age: 15}, 
        {type: "snail", age: 120}, 
        {type: "chicken", age: 4},
        {type: "lion", age: 21},
        {type: "bear", age: 11}];
    
    animals.push({type: "tiger", age: 50});
    
    console.log(animals.sort(function(a,b){return a.age - b.age}));
}
practice();