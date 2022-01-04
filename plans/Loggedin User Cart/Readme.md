## - 1) constants.js faylini ichida:
        oxirgi funksiyani ichida:
        ADD_TO_CARTni so'rov, muvaffaqiyatli va muvaffaqiyatsiz typelarini yozamiz
        RESET_CARTni tepadagi uchta typedan keyin yozamiz
## - 2) cart.reducer.js faylini ichida:
        initState funksiyasini ichida:
            updateCart: false,
            error: null

        export default (state = initState, action) => {
            switch(action.type){
                case constants.js faylini ichidagi oxirigi funksiyani nomi.so'rov type:
                    state = {
                        ...state,
                        updatingCart: true
                    }
                    break
                case constants.js faylini ichidagi oxirigi funksiyani nomi.muvaffaqiyatli type:
                    state = {
                        ...state,
                        cartItems: action.payload.cartItems,
                        updatingCart: false
                    }
                    break
                case constants.js faylini ichidagi oxirigi funksiyani nomi.muvaffaqiyatsiz type:
                    state = {
                        ...state,
                        updatingCart: false,
                        error: action.payload.error
                    }
                    break
                case constants.js faylini ichidagi oxirigi funksiyani nomi.RESET_CART:
                    state = {
                        ...initState
                    }
            }
            return state
        }ga o'zgartiramiz
## - 3) auth.action.js faylini ichida:
        export const signout = () => {
            return async dispatch => {
               dispatch({type: constants.js faylini ichidagi uchinchi funksiyani nomi.LOGOUTni so'rov type});
            //    localStorage.removeItem('user')
            //    localStorage.removeItem('token')
                localStorage.clear()
               dispatch({ type: constants.js faylini ichidagi uchinchi funksiyani nomi.LOGOUTni muvaffaqiyatli type })
               dispatch({ type: constants.js faylini ichidagi to'rtinchi funksiyani nomi.RESET_CART })
            //    const res = await axios.post(`kerakli url`)
            //    if(res.status === 200){
                    
            //    }else{
            //        dispatch({
            //            type: constants.js faylini ichidagi uchinchi funksiyani nomi.       LOGOUTni muvaffaqiyatsiz type,
            //            payload: { error: res.data.error }
            //        })
            //    }
            }
        }ga o'zgartiramiz
## - 4) cart.action.js faylini ichida:
        import { cartConstants } from './constants'
        import store from '../store'
        import axios from '../helpers/axios'

        const nom beramiz = () => {
            return async dispatch => {
                try {
                    dispatch({ type: constants.js faylini ichidagi oxirgi funksiyani nomi ADD_TO_CARTni so'rov shakli })
                    const res = await axios.post(`kerakli url`)
                    if(res.status === 200){
                        const { cartItems } = res.data
                        console.log({tepadagi funksiyani nomi: cartItems})
                        if(cartItems){
                            dispatch({
                                type: constants.js faylini ichidagi oxirgi funksiyani nomi ADD_TO_CARTni muvaffaqiyatli shakli,
                                payload: { cartItems }
                            })
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }

        export const nom beramiz = (product, newQty=1) => {
            return async dispatch => {
                const { 
                    cart : {
                        cartItems
                    }, auth } = store.getState()
                // console.log('action::products', products)
                // const nom beramiz = action.payload.yonidagi konstantani nomi
                // const nom beramiz = state.yonidagi konstantani nomi
                const nom beramiz = cartItems[birinchi konstantani nomi._id] ? parseInt(cartItems[birinchi konstantani._id].yonidagi konstantani nomi + newQty) : 1;
                cartItems[birinchi konstantani nomi._id] = {
                    ...birinchi konstantani nom,
                    uchinchi konstantani nomi
                };

                if(auth.authenticate){
                    dispatch({ type: constants.js faylini ichidagi oxirgi funksiyani nomi ADD_TO_CARTni so'rov shakli })
                    const payload = {
                        // cartItems: Object.keys(cartItems).map((key, index) => {
                        //     return {
                        //         quantity: cartItems[key].qty,
                        //         product: cartItems[key]._id
                        //     }
                        // })
                        cartItems: [{
                            product: product._id,
                            quantity: qty
                        }] 
                    }
                    console.log(payload)
                    const res = await axios.post(`kerakli url`, payload)
                    console.log(res)
                    if(res.status === 201){
                        dispatch(getCartItems())
                    }
                }else{
                    localStorage.setItem('cart', JSON.stringify(cartItems))
                }

                console.log('addToCart::', cartItems)

                dispatch({
                    type: constants.js faylini ichidagi oxirgi funksiyani nomi ADD_TO_CARTni muvaffaqiyatli shakli,
                    payload: { cartItems }
                })
            }
        }

        export const nom beramiz = () => {
            return async dispatch => {
                const { auth } = store.getState()
                let nom beramiz = localStorage.getItem('cart') ?
                    JSON.parse(localStorage.getItem('cart')) : null

                    console.log('uppppp')

                    if(auth.authenticate){
                        localStorage.removeItem('cart')
                        dispatch(getCartItems())
                        if(cartItems){
                            const payload = {
                                cartItems: Object.keys(cartItems).map((key, index) => {
                                    return{
                                        quantity: cartItems[key].qty,
                                        product: cartItems[key]._id
                                    }
                                })
                            }
                            if(Object.keys(cartItems).length > 0){
                                const res = await axios.post(`kerakli url`, payload)
                                if(res.status === 201){
                                    dispatch(getCartItems())
                                }
                            }
                        }
                    }else{
                        if(cartItems){
                            dispatch({
                                type: constants.js faylini ichidagi oxirgi funksiyani nomi ADD_TO_CARTni muvaffaqiyatli shakli,
                                payload: { cartItems }
                            })
                        }
                    }


            }
        }

        export {
            getCartItems
        }ga o'zgartiramiz
## - 5) CartPage papkasini ichidagi index.js faylini ichida:
        const auth = useSelector(state => state.auth)

        useEffectdan keyin:

        useEffect(() => {
            if(auth.authenticate){
                dispatch(getCartItems())
            }
        }, [auth.authenticate]) 
## - 6) axios.js faylini ichida:
        axiosInstance.interceptors.request.use((req) => {
            const { auth } = store.getState(
                if(auh.token){
                    req.headers.Authorization = `Bearer ${auth.token}`
                }
                return req
            )
        })
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )