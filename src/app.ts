/**
 * Inspired By https://khalilstemmler.com/blogs/typescript/node-starter-project/
 * App.ts
 * @author Ivandjoh
 * @version 1.0.0
 */

import { fullName, age } from "./modules/variables";
import { names } from "./modules/arrays";

// string function
function printPersonName(fullName: string, age: number): void {
    console.log(`Hello, My Name is ${fullName} and now i'm ${age} years old`);
}

// array function
names.push("juna")
names.push("dave")

const app = () => {
    printPersonName(fullName, age);
    console.log(names)
};

export default app