/*
----------------------------------------------------------------------------
TypeScript Tutorial #2 - Compiling TypeScript
----------------------------------------------------------------------------
How to compile typescript codes in javascript codes?

tsc fileName.ts fileName.js

If the file names are the same, just do...
tsc fileName.ts 


To watch the changes in typescript, 
tsc fileName.ts -w

----------------------------------------------------------------------------
TypeScript Tutorial #3 - Type Basics
----------------------------------------------------------------------------
Integer and float do not exist. We use numbers in typescript.



----------------------------------------------------------------------------
TypeScript Tutorial #4 - Objects & Arrays
----------------------------------------------------------------------------
You cannot push a value that has different type in an array

If you want to do this, you must declare the array in mix types. 
For example:
const array = [10, 'ken', 5];

array.push('jack'); This works!


Objects:
let ninja = {
    name: "mario",
    age: 30, 
    belt: "black"
}

ninja.name = 'caleb'; Correct!
ninja.belt = 'yellow'; Correct!
ninja.age = '5'; Wrong!


----------------------------------------------------------------------------
TypeScript Tutorial #5 - Explicit Types
----------------------------------------------------------------------------
Variables:
let ninjaName: string;
let age: number;
let statusOfNinja: boolean;

Arrays:
let ninjaName: string[];
OR
let ninjaName: string[] = []; this is declared to be used for push methods!

Arrays with mixed types:
This is also called as a union type

let ninja: (string | number)[] = [];

ninja.push("Jack")
ninja.push(18)

console.log(ninja);

Objects:
let newObject: {name: string, age: number, states: boolean}
OR
let newObject: {
    name: string, 
    age: number, 
    states: boolean
}


newObject = {
    name: "shaun",
    age: 90,
    states: true,
}

----------------------------------------------------------------------------
TypeScript Tutorial #6 - Dynamic (any) Types
----------------------------------------------------------------------------
let age: any = 25;

avoid dynamic programming becaus eit defeats the purpose of typescript

----------------------------------------------------------------------------
TypeScript Tutorial #7 - Better Workflow & tsconfig
----------------------------------------------------------------------------
public folder:
-> the file for codes that are meant to be published
-> such as index.js, index.html, styles.css

src folder:
-> for typescript files

To create tsconfig.json:
-> tsc --init

In tsconfig.json:
"outDir": "./public"
"rootDir":"./src"

To compile all again, we use .....
tsc -w

To prevent other files from affecting all these process.....
"skipLibCheck": true
},
"include": ["src"]
}

----------------------------------------------------------------------------
TypeScript Tutorial #8 - Function Basics
----------------------------------------------------------------------------
How to declare function?
let greed: Function;

How to add an optional argument?
-> Using question mark 
-> Always do the optional parameters (last or right side)
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)

}

How to explicitly declare the type of return of a function?
-> :type
-> it must be returned not console.log
const minus = (a: number, b:number):number => {
    return a - b;
}

What is void?
Lack of return value

----------------------------------------------------------------------------
TypeScript Tutorial #9 Type Aliases
----------------------------------------------------------------------------
-> To prevent repetitive codes

type StringOrNum = string | number;
type objWithName = {
    name: string,
    uid: StringOrNum
}

----------------------------------------------------------------------------
TypeScript Tutorial #10 - Function Signatures
----------------------------------------------------------------------------
Function signatures describes the general structure of a function 

// function one
let greed: (a: string, b: string) => void;

greed = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// function two
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}

// function two
let logDetails: (ninja: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} year old`);
}

logDetails({name:"Jim", age: 18});

----------------------------------------------------------------------------
TypeScript Tutorial #11 - The DOM & Type Casting
----------------------------------------------------------------------------
To grab an anchor tag (same as Javascript):
const anchor = document.querySelector('a');
console.log(anchor.href); 

anchor is null or a html tag in this case because typscript does not have access
to the index page

To make things clear for the browser, we can do two things.
Either if statements or exclamation trick

If statement:
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href)
}

Exclamation trick:
-> ! meaning return anything that is not NULL

const anchor = document.querySelector('a')!;
console.log(anchor.href);


What about grabbing an individual class?
-> we use type casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form);


----------------------------------------------------------------------------
TypeScript Tutorial #12 - Classes
----------------------------------------------------------------------------
classes are used to generate objects!
class Invoice {
    client:string;
    details: string;
    amount: number;

    constructor(c: string , d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const clientOne = new Invoice('Ali','new website', 1000);

let invoice: Invoice[] = [];
invoice.push(clientOne);
console.log(invoice);


----------------------------------------------------------------------------
TypeScript Tutorial #13 - Public, Private & Readonly
----------------------------------------------------------------------------

class Invoice {
    readonly client:string; <-----only read, cannot change
    private details: string; <----- it can only be accessed in the class scope, method of it still works outside of class
    public amount: number; <-----default of typescript

    constructor(c: string , d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a; 
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}


Better version:
-> remember to put public, private or readonly!
class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}
    
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

----------------------------------------------------------------------------
TypeScript Tutorial #14 - Modules
----------------------------------------------------------------------------
module system only works for modern broswers like chrome and firebox

In tsconfig.json:
change it to
"target": "es6",
"module": "es2015"

In index.html:
<script src='app.js' type="module"></script>

In src folder:
add a classes file, 
and add the reusable codes in a typescript intp the classes file

To export:
use export FucntionName 

In the file that imports:
import { className } from 'path+fileName.js'

-> It must be in js format because the file 
is compiled into javascript


----------------------------------------------------------------------------
TypeScript Tutorial #15 - Interfaces
----------------------------------------------------------------------------
Think of it like a type, it enfores new objects to have exact structures.

interface IsPerson{
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number,
}

const me: IsPerson = {
    name: 'shaun',
    age: 18,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`I spent $${amount}`);
        return amount;
    }
}

const randomDude = (person: IsPerson) => {
    console.log(`${person.age}`);
}

randomDude(me);

interface IState{
  people: {
    name: string,
    url: string,
    quote: string
    note?: string
  }[] <---- this has to be defined, to show that the "people" property is an array of objects.
}  

const [people, setPeople] = useState<IState["people"]>([]);


----------------------------------------------------------------------------
TypeScript Tutorial #16 - Interfaces with Classes
----------------------------------------------------------------------------
In src folder, create a directory called Interface

In Interface folder:
-> We create a file and add the exported class

export interface HasFormatter {
    format(): string,
}

In the classes directory:
import { HasFormatter } from '../Interface/HasFormatter'

export class Invoice implements HasFormatter{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}
    
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
In app.ts:
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './Interface/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Ali','new static website', 1000);
docTwo = new Payment('Jack', 'new React website', 2000);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

----------------------------------------------------------------------------
TypeScript Tutorial #18 - Generics
----------------------------------------------------------------------------
Aim: To access data from things with no prestructures
(it can be an object)

const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  
let docOne = addUID({name: 'yoshi', age: 40});
let docTwo = addUID('string');

console.log(docOne.name)

ONLY object case:

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  
let docOne = addUID({name: 'yoshi', age: 40});
let docTwo = addUID('string');

console.log(docOne.name)

{Using generics with intefaces:}

interface Resource <T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docFour: Resource <object> = {
    uid: 10,
    resourceName: 'netninja',
    data: {name: 'siuuu'}
}

// prints {name: 'siuuu'}
console.log(docFour.data)

----------------------------------------------------------------------------
TypeScript Tutorial #19 - Enums
----------------------------------------------------------------------------
enum is a special type that allow us to store a set of constant 
of keywords and associate them with a numeric value

// BOOK is indexed 1, AUTHOR is indexed 2, FILM is indexed 3 etc....
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);


----------------------------------------------------------------------------
TypeScript Tutorial #20 - Tuples
----------------------------------------------------------------------------
let tup:[dataType] = [yourValue];










*/
//
