
    var states = [{name: "oregon", captial: "salem",
         statehood: 1859, visted: true},
    {name: "californa", captial: "sacramento",
         statehood: 1850, visted: true},
    {name: "washington", captial: "olympia",
        statehood: 1889, visted: true},
    {name: "new mexico", captial: "santa fey",
        statehood: 1912, visted: false},
    {name: "mississippi", captial: "jackson",
        statehood: 1817, visted: false}];



function createList(states){
    var statesVisited = states.filter(state => state.visted === true);
    var statesNotVisited = states.filter(state => state.visted === false);
    console.log("statesVisited:", statesVisited.sort(function(a,b){return a.statehood - b.statehood}));
    console.log("satesNotVisited:", statesNotVisited.sort(function(a,b){return a.statehood - b.statehood}));
}
createList(states);