## - 1) Header papkasini ichidagi index.js faylini ichida:
        uchta useStatedan keyin:
        const auth = useSelector(state => state.auth)

        useEffect(() => {
            if(auth.authenticate){
              birinchi useStatedagi ikkinchi nom(false)
            }
        }, [auth.authenticate])

        const nom beramiz = () => {
            return(
                rightMenu classli divni ichidagi DropdownMenuni kopiya qilamiz va shu yerga qoyamiz va pasdagi DropdownMenuni o'chirib tashimiz
                <a className="fullName">
                    {auth.user.fullName}
                </a>
            )
            
        }

        const nom beramiz = () => {
            return(
                rightMenu classli divni ichidagi DropdownMenuni va tagidagi firstMenuni kopiya qilamiz va shu yerga qoyamiz va pasdagi DropdownMenuni o'chirib tashimiz
            )
        }

        <div className="rightMenu">
            {
                !auth.authenticate ?
                    birinchi funksiyani nomi() : 
            }
        </div>
## - 2) App.js faylini ichida:
        useDispatchni chaqiramiz
        const auth = useSelector(state => state.auth)

        useEffectni chaqiramiz va uni ichida:
        if(!auth.authencticate){
            dispatch(isUserLoggedIn())
        }

        <Route>dan bitta ko'paytiramiz, pathini="/:productSlug/:productId/p" va componentini={ProductDetailsPage}ga o'zgartiramiz
## - 3) ProductStore papkasini ichidagi index.js faylini ichida:
        "productContainer" classli divni Linkga o'zgartiramiz
        <Link
            to={`/${product.slug}/${product._id}/p`}
        >
## - 4) containers papkasini ichida ProductDetailsPage papkasini ochamiz va uni ichida index.js faylini ochamiz
## - 5) constants.js faylini ichida:
        productConstants funksiyani ichida:
        uchta type: so'rov, muvaffaqiyatli va muvaffaqiyatsiz typelarini yozamiz
## - 6) product.action.js faylini ichida:
        export const nom beramiz = (payload) => {
            return async dispatch => {
            dispatch({ type: productConstantsdagi oxirgi kiritilgan so'rov typeni yozamiz })
            let res;
            try {
                const { productId } = payload.params;
                res = await axios.get(`/product/${productId}`)
                console.log(res)
                dispatch({
                    type: productConstantsdagi oxirgi kiritilgan muvaffaqiyatli typeni yozamiz
                    payload: { productDetails: res.data.product }
                })
            } catch (error) {
                console.log(error)
                dispatch({
                    type: productConstantsdagi oxirgi kirilgan muvaffaqiyatsiz typeni yozamiz
                    payload: { error: res.data.error }
                })
            }
            }
        }
## - 7) ProductListPage papkasini ichidagi index.js faylini ichida:
        useDispatchni chaqiramiz
        const product = useSelector(state => state.product)

        useEffectni ichida:
        const { productId } = props.match.params
        const payload = {
            params: {
                productId
            }
        }
        dispatch(product.action.js fayldagi oxirgi funksiyani nomi(payload))

        returni ichidagi Layoutni ichida:
        <div>{product.productDetails.name}</div>
## - 8) product.reducer.js faylini ichida:
        const initState = {
            ...,
            productDetails: {},
            loading: false
        }

        case productConstantsdagi oxirgi kiritilgan so'rov typeni yozamiz:
            state = {
                ...state,
                loading: true
            }
            break
        case productConstantsdagi oxirgi kiritilgan muvaffaqiyatli typeni yozamiz:
            state = {
                ...state,
                loading: false,
                productDetails: action.payload.productDetails
            }
            break
        case productConstantsdagi oxirgi kiritilgan muvaffaqiyatsiz typeni yozamiz:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break
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