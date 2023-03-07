/**
 * define Literal Type
 * Author : Ivandjoh
 */

// define Literal Type
// let userType: 'ADMIN' | 'USER'
// userType = 'USER'

function saveUser(userId: number, type: 'ADMIN' | 'USER'): void {
    if (type === 'ADMIN') {
        console.log(`Saving new User : \n (${userId}, ${type})`)
    } else {
        console.log(`Saving new User : \n (${userId}, ${type})`)
    }
}

export function getUserDataSave(): void {
    saveUser(1, 'USER')
    saveUser(2, 'ADMIN')
}