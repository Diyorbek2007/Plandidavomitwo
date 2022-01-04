const baseUrl = 'http://localhost:3000';

export const api = `${baseUrl}/api`

export const generatePublicImg = (fileName) => {
    return `${baseUrl}/public/${fileName}`
}