// let a = 10, b = 5;

// console.log("Addition:", a + b); 

// console.log("Subtraction:", a - b);

// console.log("Multiplication:", a * b);

// console.log("Division:", a / b);

// console.log("Modulus:", a % b);

// console.log("Exponentiation:", a ** b);

// console.log("Equal:", a == b);

// console.log("Not Equal:", a != b);

// console.log("Strict Equal:", a === b);

// console.log("Strict Not Equal:", a !== b);

// console.log("Greater Than:", a > b);

// console.log("Less Than:", a < b);

// console.log("Greater Than or Equal:", a >= b);

// console.log("Less Than or Equal:", a <= b);

// let c = 10;

// c += 5; 
// console.log("Addition Assignment:", c);

// c -= 5;
// console.log("Subtraction Assignment:", c);

// c *= 5; 
// console.log("Multiplication Assignment:", c);

// c /= 5; 
// console.log("Division Assignment:", c);

// c %= 5;
// console.log("Modulus Assignment:", c);

// c **= 2; 
// console.log("Exponentiation Assignment:", c);

// let age = 21;

// console.log(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");

// let signal = "red";

// if (signal === "red") {
//     console.log("Stop!");

// } else if (signal === "yellow") {
//     console.log("Get ready to move.");

// } else if (signal === "green") {
//     console.log("Go!");

// } else {
//     console.log("Invalid signal.");

// }

// console.log("AND Operator (true && true):", true && true);

// console.log("AND Operator (true && false):", true && false);

// console.log("OR Operator (true || false):", true || false);

// console.log("OR Operator (false || false):", false || false);

// let isAdmin = true;
// let isLoggedIn = true;

// if (isLoggedIn && isAdmin) {
//     console.log("Access granted: You have admin privileges.");

// } else if (isLoggedIn) {
//     console.log("Access granted: You are logged in.");
    
// } else {
//     console.log("Access denied: Please log in.");

// }

// let number = 5;

// if (number > 0) {
//     console.log("The number is positive.");

// } else if (number < 0) {
//     console.log("The number is negative.");

// } else {
//     console.log("The number is zero.");
    
// }

// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else if (number % 2 !== 0) {
//     console.log("The number is odd.");
// }

// let num1 = 15, num2 = 25, num3 = 10;

// if (num1 > num2 && num1 > num3) {
//     console.log("The greatest number is:", num1);
// } else if (num2 > num1 && num2 > num3) {
//     console.log("The greatest number is:", num2);
// } else {
//     console.log("The greatest number is:", num3);
// }

// let year = 2024;
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year, "is a leap year.");
// } else {
//     console.log(year, "is not a leap year.");
// }

// let marks = 85;
// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 80) {
//     console.log("Grade: B");
// } else if (marks >= 70) {
//     console.log("Grade: C");
// } else if (marks >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// let day = "Friday"

// switch(day){
//     case "Monday":
//         console.log("8 TO 9")
//         break;
//     case "Tuesday":
//         console.log("6 TO 7")
//         break;
//     case "Wednesday":
//         console.log("7 TO 8")
//         break;
//     case ("Thrusday"):
//         console.log("6 TO 7")
//     default:
//         console.log("No classes");
// }

// alert("Hello,this is an alert box!");

// let name = prompt("Please enter your name","Guvi");
// console.log(typeof name);

// num1 = prompt("Enter a number")
// console.log(num1);
// console.log(typeof num1);

// num1 =+prompt("Enter the first number")
// num2 =+prompt("Enter the second number")
// console.log("Addition:", num1 + num2);
// ans = num1 + num2;
// console.log(typeof ans);

// let result = confirm("Do you want to proceed?")
// console.log(result);
// if(result){
//     console.log("You clicked ok");

// }else{
//     console.log("you clicked cancle");
// }

// pro = prompt("Enter a number");
// console.log(pro);
// console.log(typeof pro);

// if (ans % 5 === 0) {
//     console.log("The number is a multiple of 5.");
// }  else {
//     console.log("The number is not a multiple 5.");
// }

// for (let i = 0; i <= 5; i++) {
//     console.log("Monish")
// }

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let num = 0;
// for (let i = 1; i <= 5; i++) {
//     num += i;
// }
// console.log("Sum of the first 5 natural numbers:", num);

// let productForLoop = 1;
// for (let i = 1; i <= 5; i++) {
//     productForLoop *= i;
// }
// console.log("Product of the first 5 natural numbers:", productForLoop);

// let i = 1; 
// while (i <= 50) {
//     console.log(i);
//     i++;
// }

// i = 0;
// while (i <= 50) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// i = 100;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// let sum = 0;
// i = 1;
// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log("Sum of the first 5 natural numbers:", sum);

// let productWhileLoop = 1;
// i = 1;
// while (i <= 5) {
//     productWhileLoop *= i;
//     i++;
// }
// console.log("Product of the first 5 natural numbers:", productWhileLoop);

// let j = 1;
// do {
//     console.log(j);
//     j++;
// }
// while (j <= 50);

// j = 0;
// do {
//     if (j % 2 === 0) {
//         console.log(j);
//     }
//     j++;
// }
// while (j <= 50);

// j = 100;
// do {
//     console.log(j);
//     j--;
// }
// while (j >= 0);

// let sumDoWhile = 0;
// j = 1;
// do {
//     sumDoWhile += j;
//     j++;
// }
// while (j <= 5);
// console.log("Sum of the first 5 natural numbers:", sumDoWhile);

// let productDoWhile = 1;
// j = 1;
// do {
//     productDoWhile *= j;
//     j++;
// }
// while (j <= 5);
// console.log("Product of the first 5 natural numbers:", productDoWhile);

// let str1 = "Hello World!";

// console.log("Concatenated String:", str1);

// console.log("Length of String:", str1.length);

// console.log("Uppercase String:", str1.toUpperCase());

// console.log("Lowercase String:", str1.toLowerCase());

// console.log("Substring:", str1.substring(1, 4));

// console.log("String IndexOf:", str1.indexOf("l"));

// console.log("String LastIndexOf:", str1.lastIndexOf("l"));

// console.log("String CharAt:", str1.charAt(2));

// console.log("String Replace:", str1.replace("l", "L"));

// console.log("String Includes:", str1.includes("lo"));

// console.log("String StartsWith:", str1.startsWith("He"));

// console.log("String EndsWith:", str1.endsWith("lo"));

// console.log("String Repeat:", str1.repeat(3));

// console.log("String Slice:", str1.slice(1, 4));


// console.log("String Trim", str1.trim());

// console.log("String Trim", str1.trimStart());

// console.log("String Trim", str1.trimEnd());

// console.log("String Split:", str1.split(" "));

// // let str2 = 'H', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!';
// // console.log("String Join:", str2.join(""));

// let extractedString = str1.slice(6, 11);
// console.log("Extracted String:", extractedString);

// let wordCount = str1.split(" ").length;
// console.log("Number of words:", wordCount);

// console.log("Reversed String:", str1.split("").reverse().join(""));

// // Regex Examples

// st = "abcdef abpqr"
// console.log(/abcf/g.test(st))
// console.log(/\w+/.exec("344@#$^!%^778"));


// // Object data type examples
            
// let my_age=[20, 21, 22, 23, 24, 25]
// console.log(my_age)

// console.log(typeof my_age)


// // let student1={
// //     name:"Monish Kumar",
// //     age:21,
// // }
// // console.log(student1);

// console.log(typeof students);

// console.log(my_age.length)

// my_age.push(26)
// console.log(my_age);

// my_age.pop()
// console.log(my_age);

// my_age.shift()
// console.log(my_age);

// // my_age.unshift(27)
// // console.log(my_age);

// let grade=[1,2,3,4,5,6,7]
// let concatArray = my_age.concat(1,2,3,4,5)
// console.log(concatArray);

// my_age.reverse()
// // console.log(my_age);

// console.log(my_age.slice(0, 3))
// console.log(my_age);

// // splice(indexedDB, deleteCount, item1, item2, ...)
// my_age.splice(0,0,1)
// console.log(my_age);

// // Error!
// // console.log(my_age.split(0, 2))
// // console.log(my_age);

// console.log(my_age.includes(21))
// console.log(my_age);

// console.log(my_age.indexOf(21))
// console.log(my_age);

// console.log(my_age.lastIndexOf(20))
// console.log(my_age);


// // Create an empty array and add 5 elements to it
// // let newArray = [];
// // for (let i = 0; i < 5; i++) {
// //     let userInput = +prompt(Enter element ${i + 1}:);
// //     newArray.push(userInput);
// // }

// // newArray.splice(0, 1);

// // newArray.splice(0, 0, 10);

// // newArray.push(20);

// // for(let i of newArray){
// //     console.log(i);
// // }
// // console.log(newArray);


// // ARROW FUNCTION

// let arrowFun=(a, b)=> a + b
// console.log(arrowFun(10, 20))

// // Create a string
// let str = "HackerKid"

// // Function to check if a character is a vowel
// function isVowel(char) {
//     const vowels = "aeiouAEIOU";
//     return vowels.includes(char);
// }

// // // Check each character in the string
// // for (let char of str) {
// //     console.log(${char} is ${isVowel(char) ? "a vowel" : "not a vowel"});
// // }

// let arr = ["Monish", "Kumar", "Hacker", "Kid"];

// arr.forEach((val,) => {
//     console.log(val);

// });


// let numbers = [1, 2, 3, 4, 5];

// let mapResult = arr.map((val,i,arr) => val.length);
// console.log(mapResult);

// let filteredResult = numbers.filter((val) => val % 2 == 0);
// console.log(filteredResult);

// let reduceResult = numbers.reduce((acc,val,i,arr)=>{
//     return acc + val

// },5)

// console.log(reduceResult);

// // 1. Filter out marks more than 90

// let marksArr = [85, 92, 88, 95, 76, 99, 67, 91];
// let above90 = marksArr.filter(mark => mark > 90);
// console.log("Marks above 90:", above90);


// // 2. Take a number from the user and create an array from 1 to n using map

// let n = +prompt("Enter a number:");
// let array = Array.from({ length: n }).map((_, i) => i + 1);
// console.log("Array from 1 to n:", array);


// // 3. Calculate product of array elements

// let product = array.reduce((acc, val) => acc * val, 1);
// console.log("Product of array elements:", product);

// // console.log(window.document);
// // console.dir(window.document);



// // Get element by ID
// let elementById = document.getElementById("myId");
// console.log(elementById);

// // Get elements by class name (returns HTMLCollection)
// let elementsByClass = document.getElementsByClassName("myClass");
// console.log(elementsByClass);

// // Get elements by tag name (returns HTMLCollection)
// let elementsByTag = document.getElementsByTagName("p");
// console.log(elementsByTag);

// // Get first element matching a CSS selector
// let elementByQuery = document.querySelector(".myClass");
// console.log(elementByQuery);

// // Get all elements matching a CSS selector (returns NodeList)
// let elementsByQueryAll = document.querySelectorAll("p.myClass");
// console.log(elementsByQueryAll);

// // innerText
// // innerHTML
// // textContent

// let paraId = document.querySelector("#paraId");
// console.log(paraId);
// console.log(paraId.innerText);
// console.log(paraId.innerHTML);


// // Append "students" to the h2 with id "greeting"

// let greeting = document.getElementById("greeting");
// greeting.innerText += " students";
// console.log(greeting.innerText);


// // Access all elements with class "box"

// let boxes = document.getElementsByClassName("box");

// let firstBoxText = boxes[0].innerText;
// for (let box of boxes) {
//     box.innerText = firstBoxText;
// }


// // console.log(paraId.innerText);
// // console.log(paraId.tagName);

// // let paraClass = document.querySelectorAll(".paraClass");
// // console.log(paraClass[1].getAttribute("class"));
// // paraClass[1].setAttribute("id", "para");
// // paraClass[1].setAttribute("name", "paraName");


// let button = document.querySelector("button");
// button.style.backgroundColor = "red";
// button.style.color = "white"; 

// Creating element using js amd appending it to the body

// let newElement = document.createElement("button")
// newElement.innerText = "Click Me"
// // newElement.setAttribute("class", "custom-btn");

// // let body = document.querySelector("body");
// // body.after(newElement);

// // Hometask

// // let newDiv = document.createElement("div");
// // newDiv.innerText = "This is a new div";
// // newDiv.setAttribute("class", "custom-div");

// // let body = document.querySelector("body");
// // body.after(newDiv);


// // let ol = document.getElementById("userList");

// // while (true) {
// //     let userInput = prompt("Enter whatever you want");
// //     if (userInput === null) {
// //         break; 
// //     }
// //     let li = document.createElement("li");
// //     li.innerText = "You entered: " + userInput;
// //     ol.appendChild(li);
// // }

// let div = document.getElementById("mydiv")
// div.append(newElement);

// newElement.addEventListener("click", () => {
//     let bodyEle = document.querySelector("body");
//     bodyEle.style.backgroundColor = "blue";

// })

// let promise = new Promise((res, rej) => {
//     // Asynchronous code
//     let data = true;
//     if (data) {
//         res("data send successfully");
//     } else {
//         rej("something went wrong");
//     }
// });

// promise.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// let pro = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res('Data sent successfully')
//     }, 3000);
// })
// pro.then((msg)=>{
//     console.log(msg);
// })
// console.log(pro)

// create a promise and make a delay of 5sec check how many vowels are there in your name
// let name = "Monish Kumar";
// let vowelCount = 0;

// let vowelPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         if (typeof name !== "string" || name.length === 0) {
//             rej("Invalid name provided");
//         } else {
//             for (let char of name.toLowerCase()) {
//                 if ("aeiou".includes(char)) {
//                     vowelCount++;
//                 }
//             }
//             res(`Number of vowels in your name: ${vowelCount}`);
//         }
//     }, 3000);
// });

// vowelPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     }); 


// github public api list

// const url="https://jsonplaceholder.typicode.com/posts"


// let getData=async()=>{
// let response=await fetch(url)
// let data=await response.json()
// console.log(data[0].title);

// }
// getData()

// student={
//     name:"varun",
//     age:12
// }
// console.log(student.age)