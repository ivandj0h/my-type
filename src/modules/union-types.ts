/**
 * define Union Type
 * Author : Ivandjoh
 */

// define Union type
let userId: number | string | { user: string } = { user: "juna" }
let customers: (number | string)[] = ["juna", "dave"]

// export union type
export { userId, customers }
