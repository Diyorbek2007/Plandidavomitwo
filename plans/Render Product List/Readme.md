## - 1) App.js faylini ichida:
        Router, Route va Switchni importni qilamiz

        divni ichida Routerni chaqiramiz, uni ichida Switchni chaqiramiz, uni ichida Route ni chaqiramiz
## - 2) containers papkasini ichida ProductsListPage papkasini ochamiz, uni ichida index.js faylini ochamiz
## - 3) App.js faylini ichida Routedan bitta ko'paytiramiz pathini="/:slug"ga o'zgartiramiz
## - 4) components papkasini ichida Layout papkasini ochamiz va uni ichida index.js faylini ochamiz
## - 5) Layout papkasini ichidagi index.js faylini ichida:
        Header va MenuHeader funksiyalarini chaqiramiz
## - 6) HomePage papkasini ichidagi index.js faylini ichida:
        divni o'chirib tashimiz, o'rniga Layoutni chaqiramiz
## - 7) ProductsListPage papkasini ichidagi index.js faylini ichida:
        Layoutni chaqiramiz
## - 8) actions papkasini ichida product.action.js faylini ochamiz
## - 9) actions papkasini ichidagi product.action.js faylini ichida:
        export const nom beramiz = (slug) => {
            return async dispatch => {
                const nom beramiz = await axios.get(`kerakli urlni yozamiz${slug}`)
                console.log(tepadagi constantani nomi)
            }
        }
## - 10) ProductsListPage papkasini ichidagi index.js faylini ichida:
         useDispatchni chaqiramiz

         useEffectni ni ichida:
         const { match } = props
         dispatch(product.action.js fayldagi funksiyani nomi(tepadagi match.params.slug))
## - 11) constants.js faylini ichida:
         distpatch uchun yangi bitta type yozamiz
## - 12) product.action.js faylini ichida:
         if status kodi === 200 bo'lsa:
            dispatch({
                type: oxirgi yozilgan type,
                payload: ...data
            })
         else 
            dispatch({
                type
            })
## - 13) reducers papkasini ichida product.reducer.js faylini ochamiz uni ichida:
         const nom beramiz = {
             ... : [],
             ... : {
                 under5k : [],
                 under10k : [],
                 under15k : [],
                 under20k : [],
                 under30k : [],
             }
         }

         export default (state = tepadagi konstantani nomi, action) => {
             switch(action.type){
                 case constants fayldagi oxirgi type:
                    state = {
                        ...state,
                        tepadagi massivni nomi: action.payload.tepadagi massivni nomi,
                        tepadagi objectni nomi: {
                            ...action.payload.tepadagi objectni nomi
                        }
                    }
                    break
             }
             return state
         }
## - 14) ProductsListPage papkasini ichidagi index.js faylini ichida:
         Layoutni ichida div ochamiz divga className beramiz uni ichida div ochamiz unga ham className beramiz, uni ichida div ochamiz divni ichida kerakli tekst yozamiz
         divdan keyin button yaratamiz, buttonni ichiga kerakli tekstni yozamiz

         katta divni ichida yana bitta div ochamiz, uni ichida yana bitta div ochamiz unga className beramiz, uni ichida <img src="" alt="" />
         bitta div ochamiz unga className beramiz, uni ichida yana bitta div ochamiz uni ichiga kerakli tekstni yozamiz bu divdan keyin yana  bitta div ochamiz uni ichida ikkta span ochamiz
         tepadagi divdan keyin yana bitta div ochamiz unga className beramiz uni ichiga kerakli tekstni yozamiz
## - 15) ProductsListPage papkasini ichida style.css faylini ochamiz, uni ichida:
         Layoutni ichidagi asosiy katta divga: widthini, marginini, borderini va box-shadowini beramiz

         asosiy katta divni ichidagi birinchi divga: displayini, justify-contentini, paddingini va border-bottomini beramiz

         asosiy katta divni ichidagi ikkinchi divni ichidagi divga: widthini va marginini beramiz

         asosiy katta divni ichidagi ikkinchi divni ichidagi divni ichidagi divga: widthini, heightini, overflowini, text-aligini va marginini beramiz

         asosiy katta divni ichidagi ikkinchi divni ichidagi divni, ichidagi divni ichidagi rasmga: max-widthini, max-heightini va object-fitini beramiz

         asosiy katta divni ichidagi ikkinchi divni ichidagi ikkinchi divga: text-aligini va font-sizeni beramiz

         asosiy katta divni ichidagi ikkinchi divni ichidagi ikkinchi divni ichidagi oxirgi divga: font-sizeni, font-weightini va marginini beramiz
## - 16) ProductsListPage papkasini ichidagi index.js faylini ichida:
         useDispatchni tepasida 
         const nom beramiz = useSelector(state => state.konstantani nomi)
         const [..., ...] = useState({
             under5k: 5000,
             under10k: 10000,
             under15k: 15000,
             under20k: 20000,
             under30k: 30000,
         })

         Layoutni ichida:
         {
             Object.keys(tepadagi konstantani nomi.product.reducer.js fayldagi objectni nomi).map((ikkta nom beramiz) => {
                 return (
                     asosiy divni shu yerga qoyamiz

                     asosiy divni ichidagi divni ichidagi ikkinchi divni ichida:
                    {
                        tepadagi konstantani nomi.product.reducer.js fayldagi objectni nomi[key].map(tepadagi konstantani nomi => 
                            asosiy divni ichidagi divni ichidagi ikkinchi divni ichidagi kodlarni shu yerga qoyamiz

                            katta divni ichida yana bitta div ochamiz, uni ichida yana bitta div ochamiz unga className beramiz, uni ichida <img src={tepadagi konstantani nomi.urlConfig.js faylini ichidagi ikkinchi constni nomi} alt="" />
                        )
                    }
                 )
             })
         }
## - 17)
## - 18)
## - 19)
## - 20)
## - 21)
## - 22)
## - 23)
## - 24)
## - 25)
## - 26)
## - 27)
## - 28)
## - 29)
## - 30)