## - 1) ProductListPage papkasini ichidagi style.css faylini ichida:
        .card va .cardHeaderni o'chirib tashimiz
## - 2) Card papkasini ichidagi index.js faylini ichida:
        .card classli divni ichida:
            .cardHeader classli div ochamiz va uni ichida:
                {
                    props.headerLeft && <div>{props.headerLeft}</div>
                }
                {
                    props.headerRight && props.headerRight
                }
## - 3) ProductStore papkasini ichidagi index.js faylini ichida:
        .card classli divni Cardga o'zgartiramiz
        <Card
            headerLeft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
            headerRight={<button>kerakli so'z yozamiz</button>}
            style={{
                width va margini beramiz
            }}
        >
            .cardHeader classli divni o'chirib tashimiz
        </Card>
## - 4) CartPage papkasini ichida index.js faylini ichida:
        returni ichida Layoutni ichida:
            cartContainer classli divni ichida:
                <Card
                    headerLeft={`...`}
                    headerRight={<div>...</div>}
                >
                    flexRow classli div ochamiz va uni ichida:
                        cartProductContainer classli div ochamiz va uni ichida:
                            <img src="" />
                        cartItemDetails classli div ochamiz va uni ichida:
                            <div>
                                ...
                            </div>
                            <div>...</div>
                </Card>
                <Card style={{
                    width beramiz
                }}>...</Card>
## - 5) App.js faylini ichida:
        Switchni ichida Routedan bitta ko'paytiramiz pathini="/cart" component={CartPage papkasini ichidagi index.js faylini ichidagi funksiyani nomi}ga o'zgartiramiz
## - 6) constants.js faylini ichida:
        export const nom beramiz = {
            ADD_TO_CART: "ADD_TO_CART"
        }
## - 7) actions papkasini ichida cart.action.js faylini ochamiz va uni ichida:
        export const nom beramiz = (bitta parametr kiritamiz) => {
            return async dispatch => {
                const { cartItems } = store.getState().cart
                // console.log('action::products', cartitems)
                // const nom beramiz = action.payload.yonidagi konstantani nomi
                // const nom beramiz = state.yonidagi konstantani nomi
                const nom beramiz = cartItems[birinchi konstantani nomi(yoki parametrni nomi)._id] ? parseInt(cartItems[birinchi konstantani nomi(yoki parametrni nomi)._id].uchinchi konstantani nomi + 1) : 1;
                cartItems[birinchi konstantani nomi(yoki parametrni nomi)._id] = {
                    ...birinchi konstantani nomi(yoki parametrni nomi),
                    uchinchi konstantani nomi
                };

                localStorage.setItem('cart', JSON.stringify(cartItems))
                dispatch({
                    type: constants.js fayldagi oxirgi funksiyani nomi.ADD_TO_CART,
                    payload: { cartItems }
                })
            }
        }
## - 8) cart.reducer.js faylini ichida:
        const initState = {
            cartItems: {
                // nom beramiz: {
                //     _id: ...,
                //     name: '...',
                //     img: '...',
                //     price: '...',
                //     cart.action.js faylini ichidagi birinchi funksiyani ichidagi uchunchi konstantani nomi: ...
                // }
            }
        }

        export default (state = initState, action) => {
            switch(action.type){
                case constants.js fayldagi oxirgi funksiyani nomi.ADD_TO_CART:
                    state = {
                        ...state,
                        cartItems: action.payload.cartItems
                    }
                    break
            }
            return state
        }
## - 9) ProductDetailsPage papkasini ichidagi index.js faylini ichida:
        const product = useSelector(state => state.product)

        flexRow classli divni ichida:
        <MaterilaButton
            ...,
            onClick={() => {
                const { uchta parametr kiritamiz } = product.productDetails
                const nom beramiz = product.productDetails.productPictures[0].img
                dispatch(cart.action.js faylini ichidagi birinchi funksiyani nomi({ uchta parametrni nomi, tepadagi ikkinchi konstantani nomi }))
                props.history.push("/kerakli url")
            }}
        />
## - 10) App.js faylini ichida:
         useEffect(() => {
             dispatch(cart.action.js faylini ichidagi ikkinchi funksiyani nomi())
         })
## - 11) cart.action.js faylini ichida:
         export const nom beramiz = () => {
            return async dispatch => {
                const cartItems = localStorage.getItem('cart') ?
                    JSON.parse(localStorage.getItem('cart')) : null

                    if(cartItems){
                        dispatch({
                            type: constants.js fayldagi oxirgi funksiyani nomi.ADD_TO_CART,
                            payload: { cartItems }
                        })
                    }
            }
        }
## - 12) CartPage papkasini ichidagi index.js faylini ichida:
         const cart = useSelector(state => state.cart)
         const cartItems = cart.cartItems

         Cardni ichida:
            {
                Object.keys(cartItems).map((ikkta parametr kiritamiz) => 
                    <div key={ikkinchi parametrni nomi} className='flexRow'>
                        <div className='cartProductContainer'>
                            <img src="" alt="" />
                        </div>
                        <div className='cartItemDetails'>
                            <div>
                                {cartItems[birinchi parametrni nomi].name} - qty - {cartItems[irinchi parametrni nomi].qty}
                            </div>
                            <div>Delivery in 3 - 5 days</div>
                        </div>
                    </div>
                )
            }
## - )
## - )
## - )
## - )
## - )
## - )
## - )
## - )