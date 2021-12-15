## - 1) category.action.js faylini ichida:
        returnni ichidagi dispatchdan keyin:
        try{
            pasdagi hamma kodlarni qoyamiz
        }catch(error){
            console.log(error.response)
        }
## - 2) helpers papkasini ichidagi axios.js falini ichida:
        import store from '...'

        funksiyadan keyin:

        tepadagi funksiyani nomi.interceptors.request.use((req) => {
            const { aurh } = store.getState()
            if(auth.token){
                req.headers.Authorization = `Bearer ${auth.token}
            }
            return req
        })

        tepadagi funksiyani nomi.interceptors.request.use((res) => {
            return res
        }. error => {
            console.log(error.response)
            const { status } = error.response
            if(tepadagi status === 500 || status === 400){
                localStorage.clear()
                store.dispatch({ type: muvaffaqiyatli signout typeni yozamiz })
            }
            return Promise.reject(error)
        })
## - )
## - )
## - )
## - )
## - )