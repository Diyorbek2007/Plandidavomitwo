const baseUrl = 
   location.hostname === "localhost"
   ? 'http://localhost:3000'
   : "https://back-end-diyorceek.herokuapp.com/";

export const api = `${baseUrl}/api`

export const generatePublicImg = (fileName) => {
    return `${baseUrl}/public/${fileName}`
}