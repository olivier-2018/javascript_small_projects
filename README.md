# javascript_small_projects
a bunch of small javascript projects as tutorials

## Required extensions
Live server

## HTML refresher
- completion --> type keyword and press TAB
- Most common html elements:
    - h1, h2,etc headers
    - p paragraph (use Lorem + TAB to generate random text)

- Identification tags 
    - each HTML element can define an "id" tag


## CSS refresher
- define HTML IDtags --> define style for element with specific IDtags
Ex: <label id="countLabel">0</label>  --> #countLabel{text-align: center; 
                                            text-align: center;
                                            font-size: 10em;
                                            font-family: Helvetica;
                                            }
- define HTML classes -->  define style for class with specific IDtags

Ex: <button id="decreaseBtn" class="buttons">decrease</button> -->  .buttons{padding: 10px 20px;
                                                                            font-size: 1.5em;
                                                                            color: white;
                                                                            background-color: hsl(214, 100%, 74%);
                                                                            border-radius: 5px;
                                                                            cursor: pointer;
                                                                            transition: background-color 0.25s;
                                                                        }

## Basic javascript concepts

### Console log
console.log(`Hello`);  -- Note the use of back-ticks
window.alert(`This is an Alert window`);
document.getElementById("myH1").textContent = `Hello`; // This is changing text of an HTML element based on its tagID




### variables
A container that stores a value. Behaves as if it were the value it contains.
- declaration: let x;
- assignment: x = 100; 
- Use with template literal (back-ticks): console.log(`You are ${age} years old`);

### Datatypes
- number: 25, 3.54, -15.6
- strings: "Client"
- booleans: true or false

### Arithmetic operators
operands: values, variables, etc  
operators: + - * / ** % += -= *= /= **= %= ++ --  
operator precedance: parenthesis, exponent, multiplication/division/modulo, addition/substraction  

### User input
- window prompt:   
username = window.prompt( "What's your username?");  
- HTML textbox:  
    <label>username: </label>  
    <input id="myText"><br>  
    <button id="MySubmitBtn" >submit</button>  
with Btn function:  
    document.getElementById("MySubmitBtn").onclick = function(){  
        username = document.getElementById("myText").value;  
        console.log(username);  
        document.getElementById("myH1").textContent = `Hello ${username}`;  
    }  

### Conversion  
- Different datatype behaviour differently with oerators  
- Number fcn: converts string to number  
- typeof fcn: typeof <variable>  
- String fcn: convert variable into a string  
- Boolean fcn  

### Constant  
- variable that cannot be changed  
Let PI = 3.14159;  

### Math object
- Provide a collection of prperties and methods  
Ex: Math.PI, Math.trunc(), Math.round(), Math.floor(), Math.pow(), Math.ceil(), Math.log(), Math.sin(), Math.min(),...  

### Random number generation
