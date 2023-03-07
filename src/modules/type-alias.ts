/**
 * define Type Alias
 * Author : Ivandjoh
 */

// define type-alias
type UserAccount = { name: string, age: number }

export function getTypeAlias(account: UserAccount): void {
    console.log(account)
}
