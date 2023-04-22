Basics of Node Js
Const --> used for passwords
let --> used to initialize a variable for a specific scope
var --> used to initialize a variable for a global scope
scope of a variable: it is the particular region of the code where fucntion can be accessed.

If Else Statements
fucntion example(){
         var x = 10; 
         if (1){ 
              var y = 20; 
              console.log(x);  // print statement
          }console.log(y); 
} 
example();
 
command: node x.js
Output: Doesn't return error
why??
Because var has global scope.
Hence doesn't gives errors.

fucntion example(){
         var x = 10; 
         if (1){ 
              let y = 20; 
              console.log(x); 
          }console.log(y); 
} 
example();

Output: Error
Because let has scope within a function.
Hence gives error.

What is difference between iteration and loop?
iteration: no. of loops i.e. process of execution.
eg. the variable that is in the code which is running multiple times.
loop: code that executes multiple times. eg. watching loop from outstide

fucntion example(){
         var x = 10; 
         if (1){ 
              let y = 20; 
              console.log(x); 
          }console.log(y); 
          if (1) {
              //
          }
          console.log(y);
} 
example();

Javascript was a mistake. It was initially created to blink text in Nightscape browser.

Use let.

let x = 5;
conslole.log(!x);

Output: false

let x = [ ];
consloe.log(!!x);

truthe false converter  !! used for typecasting truth and false

console.log(x) --> [ ] 

console.log(!!x) --> Output: true 
why?? because x is defined so true

let x = { };
consloe.log(!!x);

console.log(!!x) --> Output: true 
why?? because x is defined so true

let x = " ";
consloe.log(!!x);

console.log(!!x) --> Output: false 
why?? because strings, arrays do not have0 a memory allocation i.e., x is not defined.

let x = null;
consloe.log(!!x);

console.log(!!x) --> Output: false 
why?? because null do not have a memory allocation i.e., x is not defined.

let x = undefined;
consloe.log(!!x);

console.log(!!x) --> Output: false 
why?? because undefined do not have a memory allocation i.e., x is not defined.



let x = [ ]
if (!!x) {
   console.log("Yes");
}

Output: Yes
Because x is true , hence if statement is executed.

let x = [ ];
let state = !!x;

if (state) {
      console.log("Yes");
}

Debugging:
before running 1st line
x: undefined
state: undefined

after running 2nd line
x: (0) []
state: undefined

after running 3rd line
x: (0) []
state: true

after running last line
x: uncaught reference
state: uncaught reference
freed the memory at the end of the code

Ternary Operator
shorter way of using if else statement.
let age = 5;
let eligible = false
if (age>18) {
         eligible = true;
}
else {
         eligible = false;
}

shoter version:
eligible = age > 19 ? true : false;

=> this means if age > 18 than eligible = true and if age < 18 than eligible = false




Object: key value pair
let // safer as it is for a particular scope
let User = {
    name: 'John',
    age: 30
    phone: '123-456-7890',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    hobbies: ['movies', 'music'],
    magic_number: function (x) {
        return x * x;
    }
};
console.log(User.name);
Output: John

console . log ( User [ 'name' ]);  // not valid json

console . log ( User . address . state ); 
Output: NY

console . log ( User . magic_number ( 4 )); 
Output: 16

User is the object.
to access any element of the User object we use dot operator i.e. User.name

Strings
let sensText = "thisIsSesnText";
let maskedText = sensText.substring(3).padStart(sensText.length, "*");
console.log( maskedText)
Output: ***sIsSesnText
code to delete a key and value pair
let User = {
    name: 'John',
    age: 30,
    phone: '123-456-7890',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    hobbies: ['movies', 'music'],
    magic_number: function (x) {
        return x * x;
    }
};
console.log(User.age);
Output: 
30
undefined

Arrays
Similar to vector in C++.
Can hold anything inside the array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
[
  1, 2, 3, 4,
  5, 6, 7, 8
]

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.push(123);  // push at the end
console.log(arr);
[
  1, 2, 3,   4, 5,
  6, 7, 8, 123
]

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
Output:
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
Output:

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
[
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
Output:

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
[

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
[ 2, 3, 4 ]
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
Output:
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
[

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
Output:

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
[ 1, [ 99, 88, 77 ], 4, 5, 6, 7, 8 ]

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
Output:
[ 1, [ 99, 88, 77 ], 'test', 4, 5, 6, 7, 8 ]

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
[
let arr = [1, 2, 3];
1=2=3

let arr = [1, 2, 3];
1= | =2= | =3
let arr = [1, 2, 3, 4, 5, 6, 7]
2
let arr = [1, 2, 3, 4, 5, 6, 7]
1

let arr = [1, 2, 3, 4, 5, 6, 7]
passes every element through the function and adds to the array if the value is true else discards the value after performing the specified operation.
[ 1, 3, 5, 7 ]
let arr = [1, 2, 3, 4, 5, 6, 7]
[ 1, 2 ]
let arr = [1, 2, 3, 4, 5, 6, 7]
[ 4, 5, 6, 7 ]
let arr = [1, 2, 3, 4, 5, 6, 7]
[
let arr = [1, 2, 3, 4, 5, 6, 7]
[]

let arr = [1, 2, 3, 4, 5, 6, 7]
[

let arr = [1, 2, 3, 4, 5, 6, 7]
[
[
let arr = [1, 2, 3, 4, 5, 6, 7]
[

let arr = [1, 2, 3]
16





Array Operartions:
push --> add element at the end.
pop --> remove element at beginning.
shift --> deletes 1st element and returns it.
unshift --> add element at the beginning and returns the size of the new array.
slice --> create subarrays with elements in a range which includes the 1st element and not the last elementn i.e., slice(1,4) includes element at index=1 and doesn't include element at index=4.
splice --> remove particular elements from a particular index and also to add index after the index
concat --> combining to arrays
join --> add some string between the array elements while printing
index0f --> returns index of an element
forEach --> access each element and perform an operation as specified
filter --> segregates values on the basis of truth or false values
map --> passes every element through the function and returns the value after performing the specified operation.

Nested Ternary Operator
let user = {
Output:
why not to use this? readability takes a toll

Using a predefined function in map 
let arr = [1, 2, 3, 4, 5, 6, 7]
[
let arr = ["RA20123","RA20127","RA20126","RA201234"];











function getResponse(){
Output:
Error
// event loop --> main therad on which javascript runs. It is a single threaded language.



setTimeout(() => {
console.log('Yes');
// executed based on the time it takes to execute the code

Using asyc-await function to get response from the url
async --> to define that the process will take a undefined amount of time
await --> waits in the async untill the value is completly fetched
async function getResponse(){
Output:
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }


async function getResponse(){
Promise { <pending> }

Promise states:
pending
resolved
rejected

Pre-historic version of async-await
const displayDelay = new Promise((resolve, reject) => {
Output:
SUCCESS:  Met at 06:30
const displayDelay = new Promise((resolve, reject) => {
node:internal/process/promises:288
Here we didn't write code for what happens when there is error or it gets rejected hence got the error. 
So in the below code this error has been removed to get the output by defining catch function whcih performs the respective task when the fuction in executed and gets error.

const displayDelay = new Promise((resolve, reject) => {
ERROR:  Met at 06:30

Due to callback hell we moved from promise to async-await.
To know why we moved from the above code to async-await.

ATM machines are the examples of async-await. 

const displayDelay = new Promise((resolve, reject) => {
displayDelay

Promise are used to handle uncertainities.

const displayDelay = new Promise((resolve, reject) => {

The above code is for try and catch in async-await. Basically if we get error it can be resolved.

async function getResponse(){

Output:
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

What is an API?
Rest API:
Representational State Transfer Interface
input --> object
ouput --> mostly object

npm --> collection of packages made by developers

Installing Express:
npm init // entry point: (x.js) index.js
npm i express

Download Postman agent



const express = require('express')
Example app listening on port 3000

Postman Output:
const express = require('express')

const express = require('express')
app.get('/', (req, res) => {

Postman Output:






app.get('/', (req, res) => {
Postman Output:





const express = require('express')
app.get('/', (req, res) => {

Postman Output:





const express = require('express')
app.get('/', (req, res) => {

Postman Output:








Put: 
Patch: 

Installing nodemon:
it is used for faster real time work in javascript
npm i nodemon -g

To run the file
nodemon index.js

if not working:
open powershell as admin
run the below command
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser





const express = require('express')
app.get('/', (req, res) => {
Ouput:
When the code is run gets updated as we run the send button in postman. Hence automated the manual process of running in terminal again and again.

const express = require("express");
app.get("/", (req, res) => {



const express = require("express");
app.get("/", (req, res) => {
app.listen(port, () => {
Output:



const express = require("express");
app.get("/", (req, res) => {



Using a seprately defined function:
const express = require("express");
app.get("/", (req, res) => {
Output:






localhost:3000/?a=4&b=6
url query parameter


const express = require("express");
app.get("/", (req, res) => {
Output:



const express = require("express");
app.get("/", (req, res) => {
Output:
Now using "freedb.tech" website to create database.


Installing mysql:
npm i mysql

Now creating a new folder db
creating config.js file in db

config.js file

const mysql = require('mysql2');
Run: node db/config.js
Output: 


Now open webiste "phpmyadmin.co"
fill the details from freedb.tech
click on new
create table with name as 'users' and column name as 5








What are the differnt ways to track a customer?
Cookie
JWT --> Json Web Tokens 

Config file for xampp


Config file for xampp





const mysql = require('mysql2');
Unopioniated --> where we can choose names of the folders in the directory.
Opinionated --> where we can't choose named of the folders in the directory.

request is generated and it hits express than if the "/users" is identified than if the router is identified than the request is given to the router than it is detects "/" than passes the access to the controller file.

router --> similar to a sign board
controller file is used to access the database

404 --> the route does not exist.




INDEX.JS
const express = require("express");
app.use(express.json());
app.use("/users",userRoutes);
app.listen(port, () => {


USER.ROUTES.JS
const express = require('express');
router.get("/",userController.getAllUsers);
module.exports = router;
USER.CONTROLLER.JS
const connection = require("../db/config");
Output:

Index.js
const express = require("express");
app.use("/users",userRoutes);
app.listen(port, () => {




const express = require('express');
router.get("/",userController.getAllUsers);
module.exports = router;
User.controller.js
const connection = require("../db/config");
    getUserByID:(req, res)=>{
Output:


Using SQL WORKBENCH for database
Index.js
const express = require("express");
app.use(express.json());
app.use("/users",userRoutes);
app.listen(port, () => {






User.routes.js

const express = require('express');
router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUserByID);
module.exports = router;








User.controller.js

const connection = require("../db/config");
module.exports = {

Config.js

const mysql = require('mysql2');





Errors
200 success
300 redirected
500 server error
403 forbiden