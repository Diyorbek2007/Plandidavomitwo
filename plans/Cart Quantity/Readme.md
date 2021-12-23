## - 1) CartPage papkasini ichidagi index.js faylini ichida:
        const cart = useSelector(state => state.cart)
        // const cartItems = cart.cartItems
        const [ikkta nom beramiz] = useState(cart.cartItems)
        useDispatch funksiyasini chaqiramiz

        useEffect(() => {
            useStatedagi ikkinchi nom(cart.useStatedagi birinchi nom)
        }, [cart.useStatedagi birinchi nom])

        const nom beramiz = (ikkta parametrni nomi) => {
            // console.log({birinchi parametrni nomi, ikkinchi parametrni nomi})
            const { name, price, img } = useStatedagi birinchi nom[birinchi parametrni nomi]
            dispatch(cart.action.js faylini ichidagi birinchi funksiyani nomi({ _id, name, price, img }, 1))
        }

        const nom beramiz = (ikkta parametrni nomi) => {
            const { name, price, img } = useStatedagi birinchi nom[birinchi parametrni nomi]
            dispatch(cart.action.js faylini ichidagi birinchi funksiyani nomi({ _id, name, price, img }, -1))
        }

        returni ichidagi Layoutni ichida:
            <div className='cartContainer' style={{ alignItems: 'flex-start' }}>
                <Card
                    headerLeft={`...`}
                    headerRight={<div>...</div>}
                >
                    {
                        Object.keys(useStatedagi birinchi nom).map((ikkta parametr kiritamiz) => 
                            <CartItem
                                key={ikkinchi parametrni nomi}
                                cartItem={useStatedagi birinchi nom[birinchi parametrni nomi]}
                                onQuantityInc={tepadagi birinchi funksiyani nomi}
                                onQuantityDec={tepadagi birinchi funksiyani nomi}
                            />
                        )
                    }
                    
                </Card>
                <Card 
                    headerLeft="Price"
                style={{
                    width: '500px'
                }}>
                
                </Card>
            </div>
## - 2) CartPage papkasini ichida CartItem papkasini ochamiz va uni ichida index.js va style.css faylarini ochamiz
## - 3) CartItem papkasini ichidagi index.js faylini ichida:
        const [ikkinchi nom] = useState(props.cartItem.qty)

        const {
            _id, name, price, img
        } = props.cartItem

        const nom beramiz = () => {
            useStatedagi ikkinchi nom(useStatedagi birinchi nom + 1)
            props.onQuantityInc(_id, useStatedagi birinchi nom + 1)
        }

        const nom beramiz = () => {
            if(useStatedagi birinchi nom <= 1) return;
            useStatedagi ikkinchi nom(useStatedagi birinchi nom - 1)
            props.onQuantityDec(_id, useStatedagi birinchi nom - 1)
        }

        returni ichida:
            cartItemContainer classli div ochamiz va uni ichida:
                flexRow classli div ochamiz va uni ichida:
                    cartProImgContainer classli divni ochamiz va uni ichida:
                        <img src={urlConfig.js faylini ichidagi ikkinchi konstantani nomi(img)} alt={''} />
                    cartItemDetails classli div ochamiz va uni ichida:
                        <div>
                            <p>{name}</p>
                            <p>... {price}</p>
                        </div>
                        <div>...</div>
                <div style={{display va marginini kiritamiz}}>
                    quantityControl classli div ochamiz va uni ichida:
                        <button onClick={tepadagi birinchi nom}>...</button>
                        <input value={qty} readOnly />
                        <button onClick={tepadagi ikkinchi nom}>...</button>
                    <button className="cartActionBtn">...</button> 
                    <button className="cartActionBtn">...</button> 
## - 4) CartPage papkasini ichidagi style.css faylini ichida:
        .cardga width, background-color, border va box-shadow

        .cardHeaderga display, justify-content, padding va border-bottom

        .cartContainerga display, max-width va margin beramiz

## - 5) CartItem papkasini ichidagi style.css faylini ichida:
        .cartItemContainer classga margin beramiz

        .cartProImgContainer classga width, height, overflow va text-align beramiz

        .cartProImgContainer imgga max-width, max-height va object-fit beramiz

        .cartItemDetails classga display, justify-content va flex beramiz

        .cartActionBtn classga margin, font-family, font-weight, text-transform, background, border, color, cursor va font-size beramiz

        .quantityControl classga display va align-items beramiz

        .quantityControl buttonga  width, height, border-radius, border, border va background-color beramiz

        .quantityControl inputga  width, height, border, margin va text-align beramiz
## - 6) cart.action.js faylini ichida:
        export const birinchi funksiyani nomi = (birinchi parametrni nomi, nom beramiz=1)
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