const baseUrl = "https://back-end-diyorceek.herokuapp.com"

export const api = `${baseUrl}/api`

export const generatePublicImg = (fileName) => {
    return `${baseUrl}/public/${fileName}`
}