/**
 * define Unknown
 * Author : Ivandjoh
 */

// define Unknown
let customerInput = "This is Unknown Input"

function getUnknownInputParams(customerInput: unknown): void {
    console.log(customerInput)
}

export function printUnknownInput(): void {
    getUnknownInputParams(customerInput)
}