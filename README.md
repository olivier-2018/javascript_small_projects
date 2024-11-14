# javascript_small_projects
a bunch of small javascript projects as tutorials

## Required extensions
Live server

## HTML refresher
- completion --> type keyword and press TAB
- Most common html elements:
    - HEAD --> contains meta data, don't see on page, can be searched by search engine, social nets, etc
    - BODY --> content of the page
        - sementic tags: (have a meaning):
            - meta
            - p (paragraph, use Lorem + TAB to generate random text)
            - div (division to make it easier to apply css)
            - a 
            - img
            - li (list)
            - ol (ordered list)
            - ul (unordered list)
            - input with attribute: type="checkbox, radio,..", id 
            - label with attribute: for=<js fcn>, id
            - button with attribute: type="submit", id
            - form
        - non-sementic tags: (no real meaning)
            - h1, h2, etc (headers)
            - heading, main, footer, article, section, nav 
            - 
- Element can have attributes:
    - name
    - for
    - type (id, checkbox, radio, )
- Identification tags: HTML element can define an "id" tag
- 

## CSS refresher
- define HTML IDtags --> define style for element with specific IDtags
```bash
<label id="countLabel">0</label>

 #countLabel{text-align: center; 
            text-align: center;
            font-size: 10em;
            font-family: Helvetica;
            }
```
- define HTML classes -->  define style for class with specific IDtags
```bash
<button id="decreaseBtn" class="buttons">decrease</button> 

.buttons{padding: 10px 20px;
        font-size: 1.5em;                                                                            
        color: white;                                                                            
        background-color: hsl(214, 100%, 74%);
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.25s;
        }
```
## Basic javascript concepts

### Console log
```bash
console.log(`Hello`);  # Note the use of back-ticks  
window.alert(`This is an Alert window`);  
name = window.prompt("Enter your name:");  
document.getElementById("myH1").textContent = `Hello`;   


```

### variables
A container that stores a value. Behaves as if it were the value it contains.
```bash
let x; # declaration
x = 100; # assignment
console.log(`You are ${age} years old`); # Use with template literal (back-ticks)
```
### Datatypes
- number: 25, 3.54, -15.6
- strings: "Client"
- booleans: true or false

### Arithmetic operators
operands: values, variables, etc  
operators: + - * / ** % += -= *= /= **= %= ++ --  
operator precedance: parenthesis, exponent, multiplication/division/modulo, addition/substraction  

### User input
```bash
username = window.prompt( "What's your username?");   # window prompt

# HTML textbox:  
    <label>username: </label>  
    <input id="myText"><br>  
    <button id="MySubmitBtn" >submit</button>  

# Btn function:  
    document.getElementById("MySubmitBtn").onclick = function(){  
        username = document.getElementById("myText").value;  
        console.log(username);  
        document.getElementById("myH1").textContent = `Hello ${username}`;  
    }  
```
### Conversion  
- Different datatype behaviour differently with oerators  
- Number fcn: converts string to number  
- typeof fcn: typeof <variable>  
- String fcn: convert variable into a string  
- Boolean fcn  

### Constant  
- variable that cannot be changed  
```bash
const PI = 3.14159;  
```
### Math object
- Provide a collection of prperties and methods  
```bash
Math.PI, Math.trunc(), Math.round(), Math.floor(), Math.pow(), Math.ceil(), Math.log(), Math.sin(), Math.min(),...  
```

### Random number generation
```bash
Math.random();
```

### Conditional statements
Syntax:  
```bash
if (condition) {  
    code 1  
}  
else if (){  
    code 2  
}  
else {  
    code 3  
}  
```

### checked method
- property that determines the checked state of an HTML checkbox or radio button element  

### toFixed(digitsNumber) method
- property that defines precision digits of a number

### ternary operator 
- a shortcut to if{} and else{} statements that helps to assign a variable based on a condition
Ex: <condition> ? <codeIfTrue> : <codeIfFalse>;  

### switch
- efficient replacement to many else if statements  
```bash
switch(choice){  
        case 1:  
            console.log("choice 1");  
            break;  
        case 2:  
            console.log("choice 2");  
            break;  
        default:  
            console.log("no matching");  
        } 
```
### string methods  
- allows to manipulate and work with text (strings)  
```bash
"example_string".charAt(0); 
"example_string".indexOf("e"); 
"example_string".lastIndexOf("e"); 
"example_string".length;  
"example_string".trim();            # removed leading/trailing spaces
"example_string".toUpperCase(); 
"example_string".toLowerCase();  
"example_string".startsWith("exa");  
"example_string".repeat(3); 
"example_string".endsWith("ng"); 
"example_string".includes("m");  
"example_string".replaceAll("_","-"); 
"example_string".padStart(15, "0");  
"example_string".padEnd(15, "0");  
```
### string slicing
- creating a substring from a portion of another string (w/o altering the original string)
Ex: string.slice(start, end) 

### Boolean operators
- used to combine or manipulate boolean values (true or false)  
```bash
AND = &&  
OR = ||  
NOT = !  
```

### strict equality operator
```bash
=       # assignment operator  
==      # Comparison operator (compare if values are equal)  
===     # strict equality operator (compare if values & datatype are equal)  
!=      # inequality operator  
I==     # strict inequality operator  

const PI = 3.14;  
if(PI !==. "3.14"){  
    console.log("That is NOT the number Pi");  
    }  
else{  
    console.log("That is the number Pi");  
    }  
```

### while loop 
- repeat some code WHILE some condition is true   
```bash
while (condition){  
        code  
        } ;  
```
### do loop 
- same as while but execute code before evaluating the condition  
```bash
do{  
        code  
    } while (condition);  
```
### for loop 
- repeat some code a LIMITED amount of times  
```bash
for(let i = 0; i <= 2; i++){
        console.log("Hello"); 
        }
```

### function 
- A section of reusable code. Declare code once, use it whenever you want.  
Call the function to execute that code.  
```bash
function FunctioName(){  
        code  
    }   
```

### variable-scope 
 - part of the code where a variable is recognized and accessible (local vs global)  
- local variables are only accessible in the scope they are defined in   
- global variables are accessible from anywhere   

### array 
- a variable like structure that can hold more than 1 value  
- Array properties:  
    - length:  
- Array methods:
```bash
let fruits = ["apple", "orange", "banana"];  
for(let fruit of fruits){ code }  

fruits.push("coconut");     # add element at the end  
fruits.pop()                # remove last element    
fruits.unshift("pizza")     # add at the beginning  
fruits.shift()              # remove element at begining   
fruits.indexOf("orange")    # return index of element if matched  
fruits.sort()               # sort in alphbet order  
fruits.reverse()            # arrange in reverse  
```

### spread operator ...<iterable>
- allows an iterable such as an array or string to be expanded into seperate elements  
(unpacks the elements)   
```bash
let numbers = [1, 2, 3, 4, 5];  
let maximum = Math.max(...numbers);  

let username = "John McDonald";  
let letters = [...username];  

let fruits = ["apple", "orange", "banana"];  
let newFruits = [...fruits];            # aka shallow copy  
let foods = [...fruits, ...vegetables, "eggs", "milk"];  
```

### rest operator ...<function>
- (...rest) allow a function work with a variable number of arguments by bundling them into an array.  
Note: spread = expands an array into seperate elements   
      rest = bundles seperate elements into an array    
```bash
function getFoods(...foods){return foods}  
const food1 = "pizza";  
const food2 = "hamburger";  
const food3 = "hotdog";  
const food4 = "sushi";  
const foods = getFoods(food1, food2, food3, food4); # returns an array of 4  strings    
console.log(foods);  
```

### callback 
- a function that is passed as an argument to another function.  
- used to handle asynchronous operations such as:  
1. Reading a file  
2. Network requests  
3. Interacting with databases   
```bash
hello(goodbye);  # we pass the goodbye fcn to the hello fcn as an argument 
function hello(callback){  
    console.log("Hello!");  
    callback();   # the passed fcn as an argument is called back !
}  
function goodbye(){  
        console.log( "Goodbye!");  
        }
```
```bash
sum(displayConsole, 1, 2);  
    function sum(callback, x, y){  
        let result = x + y;  
        callback(result);  
    }  
    function displayConsole(result){  
        console.log(result);  
    }  
```

### forEach() 
- method used to iterate over the elements of an array and apply a specified function (callback) to each element  
```bash
<array>.forEach(callback)  

let numbers = [1, 2, 3, 4, 5];  
function double(element, index, array){  
    array[index] = element * 2;  
}  
numbers.forEach(double);    # .forEach passes the element, index, array to the callback fcn  
```

### .map() 
- accepts| a callback and applies that function to each element of an array, then return a new array  
Note: Key difference to forEach => returns a NEW array  
```bash
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square); # returns new array squares
function square(element){
    return Math.pow(element, 2)
    }
```

### .filter() 
- creates a new array by filtering out elements   
```bash
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
function isEven(element){
    return element % 2 === 0;
} 
```

### reduc method
- reduce the elements of an array to a single value  
```bash
const prices = [5, 30, 1090, 25, 15, 20];
const total = prices.reduce(sum);
function sum(result_prev_element, element) {
    # reduce keeps track of the results of the callback function applied to the previous element of the array
    return result_prev_element + element;
}
```

```bash
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
function getMax(result_prev_element, element){
    return Math.max(result_prev_element, element);
    }
```

### function expression
- a way to define functions as values or variıables  
Note: function declaration = define a reusable block of code that performs a specific task  
Note: function expression are used in  
    1. Callbacks in asynchronous operations  
    2. Higher-Order Functions  
    3. Closures  
    4. Event Listeners  
```bash
const hello = function(){
        console.log("Hello");
        }
# invoking the fcn through the variable
hello(); 

# functions can be passed as an argument
setTimeout(hello, 3000); 

# the function can be passed directly, in which case it does not require a NAME
setTimeout(function(){console.log("Hello");}, 3000); 
```

### arrow functions 
- a concise way to write function expressions good for simple functions that you use only once  
```bash
# Syntax: (parameters) => some code (using {} if multiple lines required)  
const hello = () => console.log(""Hello");
```

### object 
- A collection of related properties and/or methods  
- Intent: represent real world objects (people, products, places)  

```bash
# Syntax: object = {key:value, function()}  
const person1 = {
        fırstName: "Spongebob",
        lastName: "Squarepants",
        age: 30,
        isEmployed: true,
        sayHello: function(){console.log("Hi! I am Spongebob!")},
        sayByel: function(){console.log( Goodbye! ")}
    }
```

### this 
- reference to the object where THIS is used (the object depends on the immediate context)  
```bash
person.name = this.name;
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log( Hi! I am ${this.name} )}
} 
const person2 = {
    name: "Patrick",
    favFood: "Pizzy",
    sayHello: function(){console.log( Hi! I am ${this.name} )}
} 
# No need to change the detail of the object for person2
```

### constructor 
- special method for defining| the properties and methods of objects  
```bash
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}
const carl = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue"); 
```

### class (ES6 feature) 
- provides a more structured and cleaner way to work with objects compared to tradıtional constructor| functions  
Note: usefull for static keyword, encapsulation, inheritance  
```bash
class Product{
        constructor(name, price){
        thıs.name = name;
        this.price = price;
        }
        displayProduct(){
            console.log( Product: ${this.name} );
            console.log( Price: USD${this.price.toFixed(2)});
        }
    }
    const product1 = new Product("Shirt", 19.99);
    const product2 = new Product( Pants", 22.50);
```

### static keyword
- keyword that defines properties or methods that belong to a class itself rather than the objects created from that class 
- the class owns anything static, not the instantiated objects
```bash
class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    sayHello(){
        console.log("Hello, my username is ${this.username}");
    }
} 
const user1 = new User("Spongebob");
const user2 = new User("Patrick");
console.log(User.userCount)
```

### inheriıtance 
- allows a new class to inherit properties and methods from an existing class (parent -> child)
- helps with code reusability
```bash
class Animal{
    alive = true;
    eat(){
        console.log("This ${this.name} is eating"‘");
    }
    sleep(){
        console.log("This ${this.name} is sleeping");
    }
}   
class Rabbit extends Animal{
    name = "rabbit";
    }
class Fish extends Animal{
    name = "fish";
    } 
const rabbit = new Rabbit();
rabbit.eat(); 
```

### super keyword
- keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
- In analogy with "this":   this = this object
                            super = the parent
```bash
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);  # must call super class to be able to use "this"
        this.runSpeed = runSpeed;
    }
    runSpeed = runSpeed;
} 
const fish = new Fish("fish", 2, 12); 
```

### getter & setter
- getter = special method that makes a property readable
- setter = special method that makes a property writeable
- validate and modify a value when reading/writing a property 


### destructuring 
-extract values from arrays and objects, then assign them to variables in a convenient way
[] = to perform array destructuring
{} = to perform object destructuring

```bash
# Example1: SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;
[a, b] = [b, a]; 
# Example2: SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];
[colors[9], colors[4]] = [colors[4], colors[0]];
# Example 3: ASSIGN ARRAY ELEMENTS TO VARIABLES
const colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor] = colors;
# Example 4: EXTRACT VALUES FROM OBJIECTS
const person = {
                firstName: "Patrick",
                lastName: "Star",
                age: 34,
        }
const {fırstName, lastName, age, job="Unemployed"} = person; 
# Example 5: DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({fFirstName, lastName, age, job="Unemployed"}){
    console.log( name: ${firstName} ${lastName}’);
    console.log( age: ${age}');
    console.log(’ job: ${job} );
}
const person1 = {firstName: "Spongebob",
                lastName: "SquarePants",
                age: 30,
                job: "Fry Cook",
}
displayPerson(person1
)
```

### nested objects 
- Objects inside of other Objects, allows you to represent more complex data structures
- Child-Object is enclosed by a Parent Object
```bash
Person{Address{}, ContactInfo{}}
ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

const person = {
        fullName: "Spongebob Squarepants",
        age: 30,
        isStudent: true,
        hobbies: ["karate", "jellyfishing", "cooking"],
        address: {
                street: "124 Conch St.",
                city: "Bikini Bottom",
                country: "Int. Water"
                }
}
console.log(person.fullName); 
```

### working with arrays
```bash
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];
fruits.push({name: "grapes", color: "purple", calories: 62}); # add element at the end
fruit.pop();                                                  # removes last element
fruit.splice(1, 2);                                           # removes elements at certain indices
fruit.forEach(fruit => console.log(fruit.name));              # iterate through elements
fruitNames = fruit.map(fruit => fruit.name);                  # return an array
yellowFruits = fruits.filter(fruit => fruit.color === "yellow");  # filter through elements
maxCalFruit = fruits.reduce((accumulator, fruit) => fruit.calories > accumulator.calories ? fruit : accumulator)
```

### sort method
- method used to sort elements of an array in place.
- Sorts elements as STRINGS in lexicographic order, not alphabetical
Nb: lexicographic = (alphabet + numbkrs + symbols) as STRINGS
```bash
let numbers = [1, 2, 9, 3, 10, 8, 4, 7, 5, 6];
numbers.sort();                             # returns [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort((a, b) => a-b);                # returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]
people.sort((a, b) => a.age - b.age);                   # returns elements Sandy, Spongebob, Patrick, Squidward
people.sort((a, b) => a.name.localeCompare(b.name));|   # returns elements Sandy, Squidward, Spongebob, Patrick
```

### Random picks - the right way
```bash
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 19, 'J', 'Q', ’K'];  # cards deck
# The following is Not 100% random and inefficient
cards.sort(() => Math.random() - 0.5); 

# ... use instead the Fisher-Yates algorithm:
function shuffle(array){
for(let i = array.length - 1; i > 0; i--){
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
    }
}
```

### Date objects
- Objects that contain values that represent dates and times. These date objects can be-changed and formatted.
```bash
const date = new Date(); 
# formatted:  Date(year, month, day, hour, minute, second, ms) 
const date = new Date(2024, 0, 1, 2, 3, 4, 5);   # Mon Jan 01 2024 02:03:04 GMT-9600 (Central Standard Time)
# formatted with a string
const date = new Date("2024-01-027T12:00:090Z"); # add Z for UTC time
# formatted with no of seconds since epic (day computer time starts = unix time)
const date = new Date(1700000000000|);  # Tue Nov 14 2023 16:13:20 GMT-0600 (Central Standard Time)
# Getting elements of Date constructor
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours () ;
# Setting elements of Date constructor
date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date. setMinutes(3);
```

### console.time()  method
- tool that allows you to measure the time it takes for a section of code or process to execute
- Great for identifying performance "bottlenecks"
```bash
console.time("labelID");
console.timeEnd("labelID"); 
```

### closure 
- A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
- Allow for private variables and state maintenance (similarly to calsses)
- Used frequently in JS frameworks: React, Vue, Angular 
```bash
function CreateCounter(){
    let count = 0;
    function increment (){
        count++;
        console.log(count);
    }
    return(inner);
}
const counter = CreateCounter();
counter.increment();
console.log(counter.count); # returns "Reference error, count is not defined"
```

### setTimeout method
- function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds)  
Note: Times are approximate (varies based on the workload of the JavaScript runtime env.)  

```bash
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);  # delete a timeout before it triggers
```

### ES6 Module 
- An external file that contains reusable code that can be imported into other JavaScript files.  
- write resusable code for many OS PENSaDPSN.  
- Can contain varıables, classes, functions ... and more  

Reqt:   
- Modules can be imported from within the index.js  
- This requires   
    1- the html to include:  type="module"  
    2- export the variables and functions defined in the module  
```bash
# reqt 1
<script type="module" src="index.js"></script>

# reqt 2
export const PI = 3.141593;
export function getCircumference(radius){
    return 2 * PI * radius;
}

# reqt 3
import {PI, getCircumference} from './mymodule.js';
```

### synchronous vs asynchronous
- synchronous: Executes line by line consecutiıvely in a sequential manner a Code that waits for an operatıon to complete.  
- asynchronous: 
    - Allows multiple operations to be performed concurrently without waiting.  
    - Doesn’t block the execution flow and allows the program to continue (I/0 operations, network requests, fetching data)  
    - Handled with: Callbacks (see above), Promises, Async/Await   


### Errors
- An Object that is created to represent a problem that occurs often with user input or establishing a connection 
- Error interrupt programs and should be handled not to interupt using:
    - try { }  Encloses code that might potentially cause an error
    - catch { } Catch and handle any thrown Errors from try { }
    - finally { } (optional) Always executes. Used mostly for clean up
```bash
try{
    console.log(x); # x is not defined
    # typical errors: NETWORK ERRORS, PROMISE REJECTION, SECURITY ERRORS
}
catch(error){
    console.error(error);
}
finally{
# Typical actions: close files, connections, release resources
    console.log(”This always executes”);
} 
console.log("You have reached the end!");
```
Code that can cause an error can be caught with "throw new error"
```bash
if(isNaN(dividend)){
    throw new Error("Values must be a number");
} 
```

### DOM (DOCUMENT OBJECT MODEL)
- Object{} that represents the page you see in the web browser and provides you with an API to interact with it.  
- The web browser constructs the DOM when ıt loads an HTML document, and structures all the elements in a tree-like representation.  
- JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.   
```bash
console.log(document);  # 
console.dir(document);  # list all properties of the html document
```
Any property of the document can be dynamically accessed:  
```bash
document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%) "
```

### element selectors 
-  Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements.
```bash
document.getElementById()        #  ELEMENT OR NULL
document.getElementsClassName()  #  HTML COLLECTION
document.getElementsByTagName()  #  HTML COLLECTION
document.querySelector()         #  ELEMENT OR NULL
document.querySelectorAll()      #  NODELIST 
```
IMPORTANT:  
- if accessed through the DOM, the HTML properties have a **CamelCase** naming convention.
- if accessed through the DOM, the HTML properties have a **hyphenated** naming convention.  
```bash
const myHeading = document.getElementById( "my-heading");
console.log(myHeadıing); #  ELEMENT OR NULL
```
```bash
const fruits = document.getElementsByClassName("fruits"); #  HTML COLLECTION
Array.from(fruits).forEach(fruit => {fruit.style.backgroundColor = "yellow";})
```
```bash
const h4Elements = document.getElementsByTagName("h4"); # HTML COLLECTION
for(let h4Element of h4Elements){h4Element.style.backgroundColor = "yellow";} 
```
```bash
const element = document.querySelector("div"); #  ELEMENT OR NULL
console.log(element); 
```
```bash
const fruits = document.querySelectorAll(".fruits"); #  NODELIST 
fruits[1].style.backgroundColor = "yellow";
```

### DOM Navigation 
- The process of navigatiıng through the structure of an HTML document using JavaScript.
```bash
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
```
```bash
#firstElementChild
const ulElements = document.querySelectorAll(”ul”);
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    fırstChild.style.backgroundColor = "yellow";
})
# lastElementChild
const element = document.getElementById("desserts");
const firstChild = element.lastElementChild;
firstchild.style.backgroundColor = "yellow"; 
# nextElementSibling
const element = document.getElementById("banana");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";
# previousElementSibling
const element = document.getElementById("banana");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "yellow";
# parentElement
const element = document.getElementById("banana");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
# children
const element = document.getElementById("fruits");
const children = element.children; # return a HTML collection
```

### Adding & changing html elements
- Create element
- Add attributes & properties  
- Append element to DOM
- Remove HTML element
```bash
# Create element
const newH1 = document.createElement(”h1”);
# Add attributes & properties  
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato”";
newH1.style.textAlign = "center";
# Append element to DOM
document.body.append(newH1);
document.body.prepend(newH1);
document.getElementById("box1").append(newH1) ;
document.getElementById(”box1”).prepend(newH1);
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
const boxes = document.querySelectorAll("box");
document.body.insertBefore(newH1, boxes[0]);
# Remove HTML element 
document.body.removeChild(newH1); 
```

### Mouse events (eventListener)
- Listen for specific events to create interactive web pages events: clıck, mouseover, mouseout  
```bash
addEventListener(event, callback);
# 
const myBox = document.getElementById("myBox");
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "oUucCH! ";
}
myBox.addEventListener("click", changeColor);
# An element can have several event listeners
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
});
myBox.addEventListener("mouseout", event => {
event.target.style.backgroundColor = "lightgreen";
});
```

### show / Hide HTML elements

### NodeList 
- Static collection of HTML elements by (id, class, element)  
- Can be created by using querySelectorAll()  
- Similar to an array, but no (map, filter, reduce)  
- NodeList won't update to automatically reflect changes  

#  classList
- Element property in JavaScript used to interact with an element's list of classes (CSS classes)   
-  Allows you to make reusable classes for many elementsacross your webpage.  
```bash
#  add()
#  remove()
#  toggle(Remove if present, Add if not)
#  replace(oldClass, newClass)
#  contains() 
```