/**
 * define Function
 * Author : Ivandjoh
 */

// define Function
const formatName = (firstName: string, lastName?: string): string => {
    if (lastName === undefined) {
        return `The Input Name is : ${firstName}`
    } else {
        return `The Input Name is : ${firstName} ${lastName}`
    }
}

export { formatName }