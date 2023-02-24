  // let firstName: string = "Dylan";
  // // console.log(firstName);
  // let u = true;
  // u = "string"; 
  // Math.round(u);

  var v: boolean = false;
  console.log(v);

v = true; 
console.log(v);

// Math.round(v); 

var abc: any;
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

var names: any[] = [];
names.push("Dylan","john","prem");
console.log("name1: ",names[0]);
console.log("name2: ",names[1]);
console.log("name3: ",names[2]);

var numbers = [1, 2, 3];
numbers.push(4); 
console.log(numbers);
numbers.push(5);
console.log(numbers);
var head: number = numbers[3];
console.log(head); 

//tuple
{
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
}
{
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
ourTuple.push(6, true,'learnt coding');
console.log(ourTuple);
}
{
  const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');
}
{
  const graph: [x: number, y: number] = [55.2, 41.3];
  console.log(graph[0],graph[1]);
}
{
  const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car);
}
{
  const car = {
      type: "Toyota",
    };
    car.type = "Ford"; 
    // car.type = 2;
    console.log(car);
}
{
  const car: { type: string, mileage: number } = {
    type: "Toyota", mileage:250
  };
  // car.mileage = 2000;
  console.log(car);
}
{
  const car: { type: string, mileage?: number } = { 
    type: "hyundai"
  };
  car.mileage = 2000;
  console.log(car);

}
{
  enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  console.log(currentDirection);
  // currentDirection = 'North'; 
}

{
  enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  }
  console.log(CardinalDirections.North);
  console.log(CardinalDirections.West);
}

{
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);
}
{
  enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  console.log(CardinalDirections.North);
  console.log(CardinalDirections.West);
}

{
  
}