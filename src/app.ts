/**
 * Inspired By https://khalilstemmler.com/blogs/typescript/node-starter-project/
 * App.ts
 * @author Ivandjoh
 * @version 1.0.0
 */

import { fullName, age } from "./modules/variables";
import { names, numbs } from "./modules/arrays";
import { dog } from './modules/objects'

// string function
function printPersonName(fullName: string, age: number): void {
    console.log(`Hello, My Name is ${fullName} and now i'm ${age} years old`);
}

// add string into array
names.push("juna")
names.push("dave")


const app = () => {
    printPersonName(fullName, age);
    console.log(names)
    console.log(numbs)
    console.log(dog)
};

export default app