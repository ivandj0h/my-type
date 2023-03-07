/**
 * Inspired By https://khalilstemmler.com/blogs/typescript/node-starter-project/
 * App.ts
 * @author Ivandjoh
 * @version 1.0.0
 */

import { fullName, age } from "./modules/variables";
import { names, numbs } from "./modules/arrays";
import { dog } from './modules/objects'
import { userId, customers } from './modules/union-types'
import { getTypeAlias } from './modules/type-alias'
import { city } from './modules/tupples'
import { user } from './modules/enum'
import { printUnknownInput } from './modules/unknown'
import { getUserDataSave } from './modules/literal-type'
import { formatName } from './modules/functions'

// string function
function printPersonName(fullName: string, age: number): void {
    console.log(`Hello, My Name is ${fullName} and now i'm ${age} years old`);
}

// add string into array
names.push("juna")
names.push("dave")

// get City Infos
function getCityInfos(city: [name: string, area: number, population: number]): void {
    console.log(city)
}

const app = () => {
    printPersonName(fullName, age);
    console.log(names)
    console.log(numbs)
    console.log(dog)
    console.log(userId)
    console.log(customers)
    getTypeAlias({ name: 'juna', age: 7 })
    getCityInfos(city)
    console.log(user)
    printUnknownInput()
    getUserDataSave()
    console.log(formatName("juna"))
    console.log(formatName("dave", "djoh"))
};

export default app