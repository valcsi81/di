let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

/*let specificIndex = fruits.indexOf("banana");
console.log(specificIndex)
if (specificIndex >-1) 
    {fruits.splice (specificIndex, 0)}
    console.log(fruits)*/
//remove banana
let fruits1= fruits.shift();
console.log(fruits)
//put ABC order
let fruits2=fruits.sort();
console.log(fruits)
//add kiwi
fruits.push("Kiwi")
console.log(fruits)
//remove apple
console.log(fruits.splice(0,1))
console.log(fruits)
let fruits3=fruits.reverse();
console.log(fruits)

//exercies two

let moreFruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let ter=moreFruits.join (Kiwi);

console.log(ter)



