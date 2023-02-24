// let firstName: string = "Dylan";
// // console.log(firstName);
// let u = true;
// u = "string"; 
// Math.round(u);
var v = false;
console.log(v);
v = true;
console.log(v);
// Math.round(v); 
var abc;
abc = 100;
console.log(abc);
abc = "string";
console.log(abc);
console.log("Compiled Automatically");
console.log("123");
// w = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   }
// } as { runANonExistentMethod: () => void}
// if(typeof w === 'object' && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
console.log("hi");
var names = [];
names.push("Dylan", "john", "prem");
console.log("name1: ", names[0]);
console.log("name2: ", names[1]);
console.log("name3: ", names[2]);
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
numbers.push(5);
console.log(numbers);
var head = numbers[3];
console.log(head);
//tuple
{
    var ourTuple = void 0;
    ourTuple = [5, false, 'Coding God was here'];
    console.log(ourTuple);
}
{
    var ourTuple = void 0;
    ourTuple = [5, false, 'Coding God was here'];
    ourTuple.push('Something new and wrong');
    ourTuple.push(6, true, 'learnt coding');
    console.log(ourTuple);
}
{
    var ourReadonlyTuple = [5, true, 'The Real Coding God'];
    // ourReadonlyTuple.push('Coding God took a day off');
}
{
    var graph = [55.2, 41.3];
    console.log(graph[0], graph[1]);
}
{
    var car = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };
    console.log(car);
}
{
    var car = {
        type: "Toyota"
    };
    car.type = "Ford";
    // car.type = 2;
    console.log(car);
}
{
    var car = {
        type: "Toyota", mileage: 250
    };
    // car.mileage = 2000;
    console.log(car);
}
{
    var car = {
        type: "hyundai"
    };
    car.mileage = 2000;
    console.log(car);
}
{
    var CardinalDirections = void 0;
    (function (CardinalDirections) {
        CardinalDirections[CardinalDirections["North"] = 0] = "North";
        CardinalDirections[CardinalDirections["East"] = 1] = "East";
        CardinalDirections[CardinalDirections["South"] = 2] = "South";
        CardinalDirections[CardinalDirections["West"] = 3] = "West";
    })(CardinalDirections || (CardinalDirections = {}));
    var currentDirection = CardinalDirections.North;
    console.log(currentDirection);
    // currentDirection = 'North'; 
}
{
    var CardinalDirections = void 0;
    (function (CardinalDirections) {
        CardinalDirections[CardinalDirections["North"] = 1] = "North";
        CardinalDirections[CardinalDirections["East"] = 2] = "East";
        CardinalDirections[CardinalDirections["South"] = 3] = "South";
        CardinalDirections[CardinalDirections["West"] = 4] = "West";
    })(CardinalDirections || (CardinalDirections = {}));
    console.log(CardinalDirections.North);
    console.log(CardinalDirections.West);
}
{
    var StatusCodes = void 0;
    (function (StatusCodes) {
        StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
        StatusCodes[StatusCodes["Success"] = 200] = "Success";
        StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
        StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    })(StatusCodes || (StatusCodes = {}));
    console.log(StatusCodes.NotFound);
    console.log(StatusCodes.Success);
}
{
    var CardinalDirections = void 0;
    (function (CardinalDirections) {
        CardinalDirections["North"] = "North";
        CardinalDirections["East"] = "East";
        CardinalDirections["South"] = "South";
        CardinalDirections["West"] = "West";
    })(CardinalDirections || (CardinalDirections = {}));
    ;
    console.log(CardinalDirections.North);
    console.log(CardinalDirections.West);
}
