## - 1) O'chimiz ishlayotgan brauzerimizga Redux DevTools расщирениясини o'rnatamiz
## - 2) admin-app papkasimizni terminalida:
        npm i --save redux-devtools-extensioni o'rnatamiz
## - 3) store papkasini ichidagi index.js faylini ichida:
        composeWithDevToolsni import qilamiz

        const store = createStore(..., composeWithDevTools(
            ...
        ))
## - 4) constants.js faylini ichida:
        categoryConstantsni ichida updateni so'rov, muvaffaqiyatli va muvaffaqiyatsiz typelarini kiritamiz
## - 5) category.action.js faylini ichida:
        category update qiladigan kunksiyani ichida:
        returndan keyin 
        dispatch({type: ... so'rov shakli})
        ifni ichida: 
        dispatch({type: ... muvaffaqiyatli shakli})
        dispatch(hamma categoryni chaqiradigan funksiyani chaqiramiz)
        elseni ichida:
        const {error} = res
        dispatch({
            type: ... muvaffaqiyatsiz shakli
            payload: {error}
        })
## - 6) Category papkasinin ichidagi index.js faylini ichida:
        dispatchdan keyingi .thenni o'chirib tashimiz
## - 7) category.reducer.js faylini ichida:
        oxirgi casedan keyin:
        case oxirgi yozilgan so'rov type:
            state = {
                ...state,
                loading: true
            }
            break
        case oxirgi yozilgan muvaffaqiyatli type:
            state = {
                ...state,
                loading: false
            }
            break
        case oxirgi yozilgan muvaffaqiyatsiz type:
            state = {
                ...state,
                error: action.payload.error
            }
            break
## - )
## - )
## - )
## - )