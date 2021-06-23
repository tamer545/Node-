import './App.css';
import {useState} from 'react';

export default function JavaScriptTricks() {

    //Conditionally Add Properties to Object
    const condition = true;
    const person = {
        id: 1,
        name: 'John Doe',
        ...(condition && {age: 16}),
    };


    //Check if a Property Exists in an Object
    console.log("id" in person)


    //Dynamic Property Names in Objects
    const dynamic = 'flavour';
    let item = {
        name: 'Biscuit',
        [dynamic]: 'Chocolate'
    }

    console.log(item);  // -> { name: 'Biscuit', flavour:'Chocolate' }

    const keyName = 'name';

    console.log(item[keyName]); // returns 'Biscuit'


    //Object Destructuring With a Dynamic Key
    const templates = {
        'hello': 'Hello there',
        'bye': 'Good bye'
    };
    const templateName = 'bye';
    const {[templateName]: template} = templates;
    console.log(template) // returns 'Good bye'


    //Nullish Coalescing, ?? Operator
    const foo = null ?? 'Hello';
    console.log(foo); // returns 'Hello'
    const bar = 'Not null' ?? 'Hello';
    console.log(bar); // returns 'Not null'
    const baz = 0 ?? 'Hello';
    console.log(baz); // returns 0

    const cannotBeZero = 0 || 5;
    console.log(cannotBeZero); // returns 5
    const canBeZero = 0 ?? 5;
    console.log(canBeZero); // returns 0


    //Optional chaining (?.)
    const book = {id: 1, title: 'Title', author: null};

    // normally, you would do this
    //console.log(book.author.age) // throws error
    console.log(book.author && book.author.age); // returns null (no error)

    //with optional chaining
    console.log(book.author?.age); // returns undefined

    // or deep optional chaining
    console.log(book.author?.address?.city); // returns undefined


    //Boolean Conversion Using the !! Operator
    const greeting = 'Hello there!';
    console.log(!!greeting) // returns true
    const noGreeting = '';
    console.log(!!noGreeting); // returns false


    //String and Integer Conversions
    const stringNumber = '123'
    console.log(+stringNumber) // returns integer 123
    console.log(typeof +stringNumber) // returns number

    const myString = 25 + ''
    console.log(myString) // returns '25'
    console.log(typeof myString); // returns 'string'


    //Check Falsy Values in an Array
    const myArray = [null, false, 'Hello', undefined, 0];
    // filter falsy values
    const filtered = myArray.filter(Boolean);
    console.log(filtered); // returns ['Hello']

    // check if at least one value is truthy
    const anyTruthy = myArray.some(Boolean);
    console.log(anyTruthy); // returns true

    // check if all values are truthy
    const allTruthy = myArray.every(Boolean);
    console.log(allTruthy); // returns false


    //Flattening Arrays of Arrays
    const normalArray = [{id: 1}, [{id: 2}], [{id: 3}]];
    const flattedArray = myArray.flat(); // returns [ { id: 1 }, { id: 2 }, { id: 3 } ]

    const arr = [0, 1, 2, [[[3, 4]]]];
    console.log(arr.flat(2)); // returns [0, 1, 2, [3,4]]

    return (
        <div>

        </div>

    );
}
