import { fullName, age } from "./modules/variables";

function printPersonName(fullName: string, age: number): void {
    console.log(`Hello, My Name is : ${fullName} and now i'm ${age} years old`);
}

export const app = () => {
    printPersonName(fullName, age);
};
