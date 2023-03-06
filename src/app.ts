/**
 * Inspired By https://khalilstemmler.com/blogs/typescript/node-starter-project/
 * App.ts
 * @author Ivandjoh
 * @version 1.0.0
 */

import { fullName, age } from "./modules/variables";

function printPersonName(fullName: string, age: number): void {
    console.log(`Hello, My Name is ${fullName} and now i'm ${age} years old`);
}

const app = () => {
    printPersonName(fullName, age);
};

export default app