/**
 * define Enum
 * Author : Ivandjoh
 */

// define Enum
enum Role {
    ROLE_ADMIN = 'Admin',
    ROLE_USER = 'User'
}

let user: { name: string, role: Role };
user = { name: 'Juna', role: Role.ROLE_ADMIN }

export { user }