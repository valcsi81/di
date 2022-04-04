//Exercise 1: Your Favorite Food

let favouriteFood = "Blue Cheese" 
console.log(favouriteFood);

//Exercise 2 : Series/part 1

let favouriteMeal="diner"
console.log(`I eat ${favouriteFood} at every ${favouriteMeal}`);

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeriesLength=3
console.log(myWatchedSeriesLength)
console.log(`I wached ${myWatchedSeriesLength} series: ${myWatchedSeries}`)

//Part II

//Change the series “the big bang theory” to “friends”

let indexOfLastSeries= myWatchedSeries.indexOf("the big bang theory")
console.log(indexOfLastSeries)
if (indexOfLastSeries !==-1)
 myWatchedSeries[indexOfLastSeries]="Friend"
console.log(myWatchedSeries);

myWatchedSeries.push("eight sense");
console.log(myWatchedSeries)

myWatchedSeries.unshift("Children of the Whale")
 console.log(myWatchedSeries)

 //Exercise 3 : The Temperature Converter

 let C=0
let F=(C*1.8+32); 
console.log(F);


// Exercise 4 : Guess The Answers #1

let c;
    let a = 34;
    let b = 21;

    console.log(a+b)
    //prediction: 55
    //actual:
    
    a = 2;
    console.log(a+b)
    //prediction: 23
    //actual:

    // C is undifined

    console.log(3 + 4 + '5');
    Actual:75

    //Exercises 5

    console.log(typeof (15))
// Prediction:number
// Actual: number

console.log(typeof(5.5))
// Prediction:number
// Actual:number

console.log(typeof(NaN))
// Prediction:nuber
// Actual:number

console.log(typeof("hello"))
// Prediction:string
// Actual:string

console.log(typeof(true))
// Prediction:Boolean
// Actual:

console.log(typeof(1 != 2))
// Prediction:boolean
// Actual:

console.log("hamburger" + "s")
// Prediction:
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction:dont know
// Actual:NaN

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3")
// Prediction:-2
// Actual:-2

console.log("johnny" + 5)
// Prediction:jonny5
// Actual:Jonny5

console.log("johnny" - 5)
// Prediction:NaN
// Actual:NaN

console.log(99 * "hello")
// Prediction:99hello
// Actual:NaN

console.log(1 != 1)
// Prediction:false
// Actual:false

console.log(1 == "1")
// Prediction:true
// Actual:true

console.log(1 === "1")
// Prediction:false
// Actual:false

//exercises 6

console.log(5 + "34")
// Prediction:39
// Actual:534

console.log(5 - "4")
// Prediction:1
// Actual:

console.log(10 % 5)
// Prediction:50%
// Actual:0

console.log(5 % 10)
// Prediction:0
// Actual:

console.log("Java" + "Script")
// Prediction:JavaScript
// Actual:

console.log(" " + " ")
// Prediction:nothing
// Actual:nothing

console.log(" " + 0)
// Prediction:0
// Actual:

console.log(true + true)
// Prediction:true
// Actual:2

console.log(true + false)
// Prediction:1
// Actual:1

console.log(false + true)
// Prediction:1
// Actual:

console.log(false - true)
// Prediction:-1
// Actual:

console.log(!true)
// Prediction:false
// Actual:

console.log(3 - 4)
// Prediction:-1
// Actual:

console.log("Bob" - "bill")
// Prediction:NaN
// Actual:




 















