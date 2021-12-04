## - 1) Codemizni terminalida npm i redux react-redux redux-thunk --save qilib Reduxni o'rnatamiz
## - 2) src papkasini ichida store, actions, reducers papkalarini ochamiz
## - 3) store papkasini ichida index.js faylini ochamiz va ichida:
        createStoreni import qilamiz
        const createStore qilib createStore funksiyasini chaqiramiz
        va createStoreni export qilamiz
## - 4) index.js faylini ichida: 
        Providerni import qilamiz
## - 5) actions papkasini ichida auht.actions.js, constants.js, index.js faylini ochamiz
## - 6) constants.js ichida:
        export const ... = {
            ...
        }
## - 7) auth.actions.js faylini ichida:
        export const ... = {
            return async (dispatch) => {
                dispatch({
                    bu yerga dispatchni typeni va payloadini kiritamiz
                })
            }
        }
## - 8) actions papkasini ichidagi index.js faylini ichida:
        export * from "..."
## - 9) Signin papkasini ichidagi index.js faylini ichida:
        const ... = (e) => {

            hodisani to'xtadigan function qilamiz

            const ... {
                email va parolni kiritamiz
            }
            ...(...)
        }
## - 10) reducers papkasini ichida auth.reducers.js faylini ochamiz va ichida:
         const ... = {
            kerakli codeni yozamiz 
         }

         export default (stata = tepadagi functionni nomi yozamiz, action) => {
            switch, case yozamiz
         }
## - 11) reducers papkasini ichidagi index.js faylini ichida:
         combineReducersni import qilamiz
         const combineReducers funksiyasini chaqiramiz va ichida kerakli code yozamiz
## - 12) useDispatchni chaqiramiz
## - 13) store papkasini ichidagi index.js faylini ichida:
         createStore funksiyasini ichida applyMiddlewareni(thunk) va thunk chaqiramiz
