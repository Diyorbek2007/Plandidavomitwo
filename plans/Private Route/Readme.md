## - 1) src papkasini ichida helpers papkasini ochamiz
## - 2) Terminalda npm i axios --save qilib axiosni ustanovka qilamiz
## - 3) src papkasini ichida urlConfig.js faylini ochamiz va ichida: 
        export const funksiyani nomi = " bu yerga backenddan kelayotgan apini yozamiz" 
## - 4) helpers papkasini ichida axios.js faylini ochamiz va ichida:
        axiosni import qilamiz
        const funksiyani nomi = axios.create({
           baseURl: urlConfig.js faylini ichidagi funksiyani nomi yozamiz
        })
        tepadagi funksiyani nomini yozib uni export qilamiz
## - 5) Signin papkasini ichidagi index.js faylini ichida:
        const [... , ...] = useState('') 
## - 6) auth.actions.js faylini ichida:
        dispatch({bu yerda dispatchni typeni kiritamiz})
        const funksiyani nomi = await axios.jsdagi funksiyani nomi.post(`/.../...`, { 
               ...
        })
## - 7) auth.reducers.js faylini ichida:
        const funksiyani nomi = {
            token: ...,
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "
            }
            authenticate: true or false,
            authenticating: true or false
        }
## - 8) auth.actions.js faylini ichida:
        if(res.status === ...){
            const {} = ...
            dispatch({
                typeni va payloadini yozamiz
            })
        }else{
            if(res.status === ...){
                dispatch({
                    typeni va payloadini kiritamiz
                })
            }
        }
## - 9) components papkasini ichida HOC papkasini ochamiz va uni ichida PrivateRoute.js nomli fayli ochamiz
## - 10) PrivateRoute.js faylini ichida:
         Reactni import qilamiz
         const funksiyani nomi = (...: Component, ...rest) => {
             return <Route {...rest} ...={(props) => {
                 const nom beramiz = window.localStorage.getItem('...')
                 if(tepadagi nomni yozamiz){
                     return ...
                 }else{
                     return <Redirect qilib kerakli sahifani linkini yozamiz />
                 }
             }}/>

         }
         funksiyani export
## - 11) App.js faylini ichida:
         PrivateRoute.jsdagi funksiyani import qilamiz
         Routesni ichidagi birinchi Routeni PivateRoutega o'zgartiramiz
## - 12) Signin papkasini ichidagi index.js faylini ichiga:
         const nom beramiz = useSelectorni ishlatamiz

         if(....authenticate){
             return Redirect qilib kerakli sahifaga jonatamiz
         }
## - 13) auth.actions.js faylini ichida:
         export const nom beramiz = () => {
             return async dispatch => {
                 const ... = ...
                 if(...){
                     const ... = JSON.parse(localStorage.getItem(''))
                     dispatch({
                        typeni va payloadini yozamiz
                     })
                 }else{
                     dispatch({
                        typeni va payloadini yozamiz
                     })
                 }
             }
         }
## - 14) Signin papkasini ichidagi index.js faylini ichida:
         useEffectni ichida:
         if(!....authenticate){
            dispatch(auth.actions.jsdagi function ishlatamiz)
         }
         
##
##
##
##
##
##
##
##
##