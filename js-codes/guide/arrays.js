//Array declaration.
let subjects = ["COA","DBMS","STATISTICS","UI/UX"];
console.log(subjects[0]);
console.log(subjects[1]);
console.log(subjects[2]);
//  Creating Arrays.
let emptyArray = [];
//Mutation of array.
let fruits = ["Mango","Bannana","Strawberry"];
fruits[0] = "Orange";
console.log(fruits);
//Array Methods in JavaScript.
let cars = ["BMW","Honda","Toyota","Ford"];
//Push Method.
cars.push("Skoda");
console.log(cars); //Skoda Will be added in the cars Array.
//Add it the front using Unshift.
cars.unshift("Jaguar");
console.log(cars);
//Deleting the last element and returning it.
console.log(cars.pop());
//Deleting from the start and returning it.
console.log(cars.shift());
//Let us check.
console.log(cars);
//Array Declaration.
let months = ["January","July","March","August"];
months.shift();
months.shift();
//Check the Ans.
console.log(months);
//Add in the front accordingly.
months.unshift("july");
months.unshift("Jannuary");
//Check the final Answer.
console.log(months);
//More Methods in Arrays.
let names = ["Santosh","Ankit","Ganesh","Kaushal"];
//Get the index
console.log(names.indexOf("Santosh"));
console.log(names.indexOf("Modi")); //If not present it returns -1;
//Includes or not.
console.log(names.includes("Mahesh"));
console.log(names.includes("Bolloya"));
//Concat Method.
let leaders = ["Modi","Yogi","ChandraBabu","PawanKalyan"];
let loafers = ["Rahul","Kharge","Akilesh","Mamata","Jagan"];
leaders = leaders.concat(loafers);
console.log(leaders);
let food = ["PaniPuri","Halwa","PavBhaji","Watermelon","Orange","Grapes"];
let allfood = food.slice(); //Returns all the elements.
console.log(allfood);
let goodfood = food.slice(3); //Returns all the elements starting from the index 3
console.log(goodfood);
let unhealthy = food.slice(0,2); //Returns all the elements starting from 2.
console.log(unhealthy);
//Sorting the array.
let nums = [11.34,56,78,3,4,76,89,0];
let res = nums.sort();
console.log(res);
//Important Array Methods.
//Array Declaration.
let n = [1,2,3,4];
//Using the map method to double the values in the array n.
let r = n.map((num) => {
    return num*2;
});
console.log(r);
//To make it triple.
r = n.map((num) => {
    return num*3;
});
console.log(r);
//Using filter method to find the elements greater than 2.
r = n.filter((num) => {
    return num > 2;
});
console.log(r);
//To find the even numbers.
r = n.filter((num) =>{
    return num%2 === 0;
});
console.log(r);
//To find the sum of an array using find().
let sum = n.reduce((acc,curr) =>{
    return acc+curr;
});
console.log(sum);
//To find the first element which satisfies the particular condition.
let a = n.find((num) =>{
    return num > 0;
})
console.log(a);
