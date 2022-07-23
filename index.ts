// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Arrow Function</h1>
  <p>This is also called Lamda Function in C Sharp</p>
`

//WORKING WITH ARROW FUNCTION

//A JavaScript example
let log = function (message) {
  console.log(message);
}

//A Typescript replicate of example 1 =>  line 13 - 16
let doLog = () => console.log() //writen as this
let doneLog = (everything: any) => console.log(everything) //can be writen as this specifying 
                                                          //object type 
let doingLog = (nothing) => console.log(nothing) //can be writen as this too