
/*
let people = ["Greg", "Mary", "Devon", "James"];

//Write code to remove “Greg” from the people array.

delete people[0]
console.log(people)

//Write code to add your name to the end of the people array.

people.push("Helen")
console.log(people)

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let index = people.indexOf("Mary");
console.log(index)

//Write code to make a copy of the people array using the slice method.

console.log(people.slice());

//Write code that gives the index of “Foo”. Why does it return -1 ?

//because Foo not part of the arrey 
let index1 = people.indexOf("Foo");
console.log(index1)

//Create a variable called last which value is the last element of the array.

let last= people.length
console.log(last)

/*Part II - Loops
Using a loop, iterate through the people array and console.log each person.

Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
Hint: take a look at the break statement in the lesson.

people.splice(-1, 0, "Jason")
console.log(people)

for(let i=0; i<people.length; i++) {
    if (i ==="Jason") 
    { break;}

console.log(people[i])
}
*/

//Create an array called colors where the value is a list of your five favorite colors.


    let color = ["blue","pimk", "yellow","black","orange" ]
let pos = [ "st","nd","rd","th","th"];

for (let i = 0; i < color.length; i++) {
        
    let myString = `My #${i+1} choice ${color[i]}`


    console.log(myString);
}

console.log('-----Bonus--------');

for (let i = 0; i < color.length; i++) {
        

    let bonusString = `My ${i + 1}${pos[i]} choice ${color[i]}`

    console.log(bonusString);
}

//Prompt the user for a number. Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
//While the number is smaller than 10 continue asking the user for a new number. Tip : Which while loop is more relevant for this situation?

/*let user= prompt("Please enter a number")
console.log(typeof"user")


for(let i=0; i<10; i++)
{if(user.length<10)
    alert("please enter a new number")

}
*/

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building. numberOfFloors)
console.log(building.numberOfAptByFloor)
console.log(building.numberOfRoomsAndRent.dan[0]+ building.nameOfTenants[1])

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

/*let payement= (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1])

if(payement>>building.numberOfRoomsAndRent.dan[1]){
    console.log(building.numberOfRoomsAndRent.dan[1]+1200);
}else{
    contionue
}

//Exercise 5 :Create an object called family with a few key value pairs.Using a for loop, console.log the keys of the object.
//Using a for loop, console.log the values of the object.

let family={
    
    name:"Dan",
    age:39,
    ocupation:"computerScience",

    name:"Dorothea",
    age:30,
    ocupation:"houseWife",

    name:"Camilla",
    age:80,
    ocupation:"grandmother",

    name: "Timea",
    age:10,
    ocupation:"Child",
}
for (let prop in family){
    console.log(prop)
    console.log(family)
}

//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

for (let prop in details){
    console.log(prop,details[prop])
}*/
// group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters ,Console.log the name of their secret society. The output should be “ABJKPS”

/*
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
name1=names.sort()
let names1=name1.toString(); 
console.log(names1)

for (let i = 0; i < name1.length; i++){    
    
}
*/



