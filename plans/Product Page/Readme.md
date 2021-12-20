## - 1) product.action.js faylini ichida:
        export const nom beramiz = (bitta parametr kiritamiz) => {
            return async dispatch => {
                try{
                    const { ikkta nom beramiz } = payload.params;
                    const nom beramiz = await axios.get(`/kerakli url/${tepadagi konstantadagi  birinchi nom}/${tepadagi konstantadagi ikkinchi nom}`)
                    dispatch({ type: oxirgi funksiyadagi so'rov shakli })
                    if ikkinchi konstantadagi nom.status === 200{
                        const { page } = res.data
                        dispatch({ 
                            type: oxirgi funksiyadagi muvaffaqiyatli shakli
                            payload: { page }
                        })
                    }else{
                        const { error } = res.data
                        dispatch({ 
                            type: oxirgi funksiyadagi muvaffaqiyatsiz shakli
                            payload: { error }
                        })
                    } 
                }catch(error){
                    console.log(error)
                }
                
            }
        }
## - 2) ProductListPage papkasini ichida ProductStore papkasini ochamiz uni ichida index.js va style.css faylarini ochamiz
## - 3) ProductListPage papkasini ichidagi Layoutni ichidagi kodlarni kopiya qilamiz, o'chirib tashimiz va ProductStore papkasini ichidagi index.js faylini ichidagi return ichiga qoyamiz
## - 4) ProductListPage papkasini ichidagi index.js faylini ichida:
        returni tepasidagi kodlarni kopiya qilamiz va o'chirib tashimiz
## - 5) ProductListPage papkasini ichidagi ProductStore papkasini ichidagi index.js faylini ichida:
        returni tepasida kopiya qilingan kodni qoyamiz
## - 6) ProductListPage papkasini ichidagi index.js faylini ichida:
        Layoutni ichida:
        ProductStore funksiyasini chaqiramiz
## - 7) MenuHeader papkasini ichidagi index.js faylini ichida:
        renderCategories funksiyasini ichidagi {}ni ichida:
        {
            ... <a 
                href={`/${forni ichidagi letni nomi.slug}?cid=${forni ichidagi letni nomi._id}&type=${forni ichidagi letni nomi.type`}>
                {forni ichidagi letni nomi.name}
            </a> :
            <span>{forni ichidagi letni nomi.name}</span>
        }
## - 8) ProductListPage papkasini ichidagi index.js faylini ichida:
        returni tepasida:
        const nom beramiz(bu funksiya Productni render qiladi) = () => {
            console.log(props)
            const nom beramiz = getParams(props.location.search)
            let nom beramiz = null
            switch(tepadagi konstantani nomi.type){
                case "store":
                    letni nomi = <ProductStore {...props} />;
                    break;
                case "page":
                    letni nomi = <ProductPage {...props} />
                    break;
                default:
                    letni nomi = null
            }
            return content
        }

        return(
            Layoutni ichida ProductStore funksiyasidan keyin:
            {tepadagi funksiyani nomi()}
        )
## - 9) src papkasini ichida utils papkasini ochamiz va uni ichdia getParams.js faylini ochamiz va uni ichida:
        export defaul (bitta parametr kiritamiz) => {
            if(parametrni nomi){
                const nom beramiz = parametrni nomi.split("?")[1]
                if(konstantani nom.length > 0){
                    const nom beramiz = konstantani nomi.split("&")
                    const nom beramiz = {}
                    ifni ichidagi birinchi konstantani nomi.forEach(param => {
                        const nom beramiz = param.split("=")
                        ifni ichidagi ikkinchi konstantani nomi[tepadagi konstantani nomi[0] = tepadagi konstantani nomi[1]]
                    })
                    return ifni ichidagi ikkinchi konstantani nomi
                }
            }

            return {}
        }
## - 10) ProductListPage papkasini ichida ProductPage papkasini ochamiz, uni ichida index.js va style.css faylarini ochamiz va uni ichida:
         returni tepasida:
         useDispatchni chaqiramiz
         const product = useSelector(state => state.product)
         const { page } = product

         useEffect(() => {
             const nom beramiz = getParams(prosp.location.search)
             console.log({tepadagi konstantani nomi})
             const nom beramiz = {
                 tepadagi konstantani nomi
             }

             dispatch(product.action.js fayldagi oxirgi funksiyani nomi(tepadagi ikkinchi konstantani nomi))
         }, [])
## - 11) constants.js faylini ichida:
         oxirgi funksiyani ichida:
         product page uchta type: so'rov, muvaffaqiyatli va muvaffaqiyatsiz typelarini kiritamiz
## - 12) product.reducer.js faylini ichida:
         const initState = {
             ...,
             pageRequest: false,
             page: {},
             error: null
         }

         switchni ichidagi ocxirgi casedan keyin:
         case oxirgi funksiyadagi so'rov shakli
            state = {
                ...state,
                pageRequest: true
            }
            break;
         case oxirgi funksiyadagi muvaffaqiyatli shakli
            state = {
                ...state,
                page: action.payload.products,
                pageRequest: false
            }
            break;
         case oxirgi funksiyadagi muvaffaqiyatsiz shakli
            state = {
                ...state,
                pageRequest: false,
                error: action.payload.error
            }
            break;
## - 13) terminalda npm i react-responsive-carousel --save qilib o'rnatamiz
## - 14) ProductPage papkasini ichidagi index.js falylini ichida:
         react-responsive-carouselni min.css va Carouselni import qilamiz

         returni ichida:
         <h3>{page.title}</h3>
         <Carousel
            renderThumbs={() => {}}
         >
            {
                page.banners && page.banners.map((ikkta parametr kiritamiz) => 
                    <a
                        key={mapdagi ikkinchi parametrni nomi}
                        style={{...}}
                        href={birinchi parametrni nomi.navigateTo}
                    >
                        <img src={birinchi parametrni nomi.img} alt=''/>
                    </a>
                )
            }
         </Carousel>
         <div style={{
            display, justifyContent, flexWrap va margin beramiz
         }}>
            {
                page.products && page.products.map((ikkta parametr kiritamiz) => 
                    <Card 
                        key={ikkinchi parametrni nomi}
                        style={{
                            width, height va margin beramiz
                        }}
                    >
                        <img style={{
                            width va height beramiz
                        }} src={birinchi parametrni nomi.img} alt="" />
                    </Card>
                )
            }
         </div>
## - 15) components papkasini ichida UI papkasini ochamiz, uni ichida Card papkasini ochamiz, uni ichida index.js va style.css faylarini ochamiz va style.css faylini ichida:
         .cardga width, background, border va box-shadow beramiz
## - 16) UI papkasini ichidagi Card papkasini ichidagi index.js faylini ichida:
         returni ichida:
         <div 
            className="card"
            {...props}
        >
            {props.children}
         </div>
## - )
## - )