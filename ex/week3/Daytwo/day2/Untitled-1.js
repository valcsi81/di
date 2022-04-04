/ step 1
// find the element i dont want positioned
//step 2
//get the array from 0 up to the position i want to exclude add it to a variable
//step 3
//get the array from the pos i want to exclude up to the end
//step 4 
//merge step 2&3 



JavaScript Instructor19:45
let building = {
    number_levels: 4,
    number_of_apt_by_level: {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants: ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent: {
        "Sarah": [3, 990],
        "Dan": [4, 1000],
        "David": [1, 500],
    },
}
/ Console.log the number of levels in the building.
console.log(`number of levels in the building ${building.number_levels}`)
// Console.log how many apartments are on levels 1 and 3.
console