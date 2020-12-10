// Question 1

for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//  Question 2

/* for (let i = 20; i > 19; i++) {
    console.log(i);
} */

// Question 3

const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];

for (let i = 1; i < presidents.length; i++) {
    if (i % 2 !== 0) {
        console.log(presidents[i]);
    }
}

// Question 4

const menu = [
    {name: "pizza", glutenFree: false},
    {name: "salad", glutenFree: true},
    {name: "donut", glutenFree: false},
    {name: "steak", glutenFree: true},
    {name: "chicken", glutenFree: true},
    {name: "cheeseburger", glutenFree: false}
];

const newMenu = [];

// console.log(menu[0].glutenFree);

for (let i = 0; i < menu.length; i++){
    if (menu[i].glutenFree) {
        newMenu.push(menu[i]);
    }
}

console.log(newMenu);

// Question 5

const mixedArray = [
    1,
    2,
    3,
    'taco',
    4,
    5,
    6, 
    'burrito',
    7,
    8, 
    9,
    'Whats the deal with airplane peanuts',
    3.14,
    {barry: "Mannilow",},
    6,
    55,
    null,
    "Old " + "Crow " + " Medicine Show",
    3,
    2,
    "I want the calzone from pizanos",
    "Death blow",
    "Firestorm",
    "48",
    30];

    const unmixedArray = [];


    for (i = 0; i < mixedArray.length; i++) {
        let value = mixedArray[i];
        if (mixedArray[i] % 1 !== 0 && 3.14) {
            unmixedArray.push(mixedArray[i]);
        }
        // console.log(typeof mixedArray[i]);
    }

    console.log(unmixedArray);