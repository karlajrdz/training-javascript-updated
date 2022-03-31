
// let userPass = prompt("Please, enter your password:");

// if (userEmail == person.email && userPass == person.password) {
//   login.state.logged = true;
//   login.state.onLine = true;
//   let loginInfo = new Date();
//   let year = loginInfo.getFullYear();
//   let month = loginInfo.getMonth()+1;
//   let day = loginInfo.getDate();

//   let hour = loginInfo.getHours();
//   let minutes = loginInfo.getMinutes();
//   let seconds = loginInfo.getSeconds();
//   // loginAt: "2022/03/28 18:15:30",
//   let completeDate = `${year}/`;
//   if (month < 10) {
//     completeDate += `0${month}/`;
//   } else {
//     completeDate += `${month}/`;
//   }
//   if (day < 10) {
//     completeDate += `0${day} `;
//   }else {
//     completeDate += `${day} `;
//   }
//   if (hour<10) {
//     completeDate += `0${hour}:`;
//   } else {
//     completeDate += `${hour}:`;
//   }
//   if (minutes<10) {
//     completeDate += `0${minutes}:`;
//   } else {
//     completeDate += `${minutes}:`;
//   }
//   if (seconds<10) {
//     completeDate += `0${seconds}`;
//   } else {
//     completeDate += `${seconds}`;
//   }
//   login.loginAt = completeDate;
//   alert(`Welcome ${person.name}, you logged in correctly.`);
// } else {
//   alert("Your login data are incorrect.");
// }
//let x = 5;
//let y = x;
//y = 7;

//let hero = {
  //character : "iron man",
  //character : "thor",
  //name: "tony stark",
 // powers:[
  //"genius- level",
  //"multiple powered armor suits",
  //"ability to fly",
 // ],
  //info: {
    //yearCreated: 1963,
   // powerOrigin: "From  his suits",
   // weapons: ["repulsor rays" , "uni-beam projector" , "lasers"],
   // didYouKnow:
   // "lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto illum consectetur voluptatibus iusto ratione asperiores quae. Sit fugit voluptatum necessitatibus ut debitis animi! Unde, molestiae numquam! Vitae, maiores voluptate!",
 // },
//};


//let original = [1, ,2 ,3];
//let originalIncreased =[0, ... original, 4 ];
//console.log(originalIncreased);
//let copy = [original];
//console.log(copy);
//colors [3] = "brown";
//alert(colors.length);
//colors [colors.length] = "black";
//colors [colors.length] = "white";
//console.log(colors.length);


//let moreNumbers = [9, 0,8, 1,5,10,50, 15];
//console.log(moreNumbers);
//moreNumbers.sort();
//function compare(value1, value2){
 //if (value1 < value2){
   //return -1; 
 //}else if (value1 > value2){
   //return1;
 
// }else{
  // return 0;
// }
//}


//var numbers = [4,3, 2 , 5, 1, 3 ,7 ,7, 9, -1]
//let counter = 0;
//numbers.sort(function (a,b){
  //counter ++;
  //console.log("a:",a);
  //console.log("b:", b);
  //console.log(b-a);
  //return a - b
//});

//forma mas sencilla
//numbers.sort((a,b)=>b-a);
//console.log(numbers);
//console.log(counter);
//*let numbers =  [3, 9 , 8 , 1 , 4];
//for (let index = 0; index < numbers.length -2; index++){
//for ( let j = 0; j < numbers.length -1 ; j++){
//if (numbers [j] > numbers[j+1]){
  //aux = numbers [j];
  //numbers[j] = numbers [j+1];
  //numbers[j+1]
//}
//}
//*}

//for of
//let numbers = [1, 4, 6, 8];
//sum = 0;
//for (let num of numbers) {
//sum += num;
//}
//console.log(sum); // => 19

// Iterating objects keys
// The for/in loop
//let hero = {
  //character: "Iron Man",
  //name: "Tony Stark",
  //};
  //for (let key in hero) {
  //console.log(hero[key]); 
  // Print the value of each property
  //}

 // ["Aragorn", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    //console.log(`${item} is at index ${index} in ${array}`);
    //});
    //[..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
    //console.log(letter);
   // });
    // The map() method
// returns a new array containing the values returned by the function
// The filter() method
// returns a sub-array.The function should be predicate (returns true or false).
// let numbers = [15, 10, 5, 0, -5, -10];
// let result = numbers.filter(x => x < 5)
// console.log(result); // => [0, -5, -10]; valulet numbers = [1, 2, 3];
//let result = numbers.map((item, index, array) => item * 2);
//console.log(result); // [2, 4, 6]
// The every() and some() methods
// both return true or false, and their function must be predicate
// every requires a condition for all elements, some for some of them
//let numbers = [1, 2, 3, 4, 5];
//console.log(numbers.every((item, index, array) => item > 2)); // false
//console.log(numbers.some((item, index, array) => item > 2)); // true

//
//
//
// The reduce() and reduceRight() methods
// Both iterate over all the array elements to reduce the array
// to a final element, that will be returned
// The difference is that reduceRight start at the last element
//let numbers = [1, 2, 3, 4, 5];
//let result = numbers.reduce((accum, item, index, array) => accum + item, 0);
//console.log(result); // 15
//result = numbers.reduceRight((accum, item, index, array) => accum + item, 0);
//console.log(result); // 15


// calendar
// Nested arrays
//}let calendar = new Array(5); // 5 rows of the calendar
//}for (let i = 0; i < calendar.length; i++) {
//}calendar[i] = new Array(7); // Each row has 7 columns
//}}
// Initialize the array
//}for (let row = 0, day = 1; row < calendar.length; row++) {
//}for (let col = 0; col < calendar[row].length; col++) {
//}if (day < 31) {
//}calendar[row][col] = day++;
//}} else if (day == 31) {
//}calendar[row][col] = day++;
//}day = 1;
//}
//}
//}
//console.log(calendar);

// Calling a function before the declaration
//sayHello("my friend", "today will be a great day");
//function sayHello(name, message) {
//console.log("Hello " + name + ", " + message);
//}
// Function expression
// Arrow functions
//const sum = (num1, num2) => {
  //return num1 + num2;
  //};
  //const square = x => x * x;
  //console.log(square(4));


  // console.log() will never be executed
function sum(num1, num2) {
  return num1 + num2;
  console.log("Hello world"); // never executed
  }
  alert(sum(2, 2));