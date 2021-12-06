## - 1) Home papkasini ichidagi index.js faylini ichidagi:
        Containerni kopiya qilib, o'chirib tashimiz
        Layoutni oldiga sidebarni yozamiz
## - 2) actions papkasini ichida category.action.js, order.action.js, product.action.js faylarini ochamiz
## - 3) reducers papkasini ichida category.reducer.js, order.reducer.js, product.reducer.js
## - 4) containers papkasini ichida Category papkasini ochamiz va uni ichida index.js faylini ochamiz
## - 5) Category papkasini ichidagi index.js faylini ichida:
        Layoutni oldiga sidebarni yozamiz
## - 6) App.js faylini ichida:
        PrivateRoutedan yana 1 yozamiz faqat path="/category" componentini Category qilamiz
## - 7) Layout papkasini ichidagi index.js faylini ichida:
        NavLink yana 1 yozamiz faqat to={`/category`} qilamiz
## - 8) Category papkasini ichidagi index.js faylini ichida:
        Layoutni ichida Container ochamiz, uni ichida Row ochamiz, uni ichida Col ochamiz, uni ichida div ochamiz, uni ichida text va knopka kodini yozamiz
## - 9) category.action.js faylini ichida:
        getAllCategoryni export qilamiz uni ichida 
        const ... = get metodi yordamida kerakli url yozamiz
## - 10) Category papkasini ichidagi index.js faylini ichida: 
         useDispatchni ishlatamiz
         useEffectni chaqirib uni ichida getAllCategory funksiyasini chaqiramiz
## - 11) actions papkasini ichidagi constants.js faylini ichida:
         export const ... = {
            sorov, muvaffaqiyatli va muvaffaqiyatsiz typelarini kiritishimiz kerak 
         }
## - 12) category.action.js faylini ichida:
         if status kodi 200 dispatchda type muvaffaqiyatli bo'ladi, payloadiga res.data yozamiz
         else dispatchda type muvaffaqiyatsiz bo'ladi, payloadiga error yozamiz
## - 13) category.reducer.js faylini ichida:
         const ... = {
             massiv,
             loading: true or false,
             error
         } yozamiz

         export default(state = tepadagi nom, action) => {
             switch(action.type){
                 case yozamiz
             }
         }
## - 14) Category papkasini ichidagi index.js faylini ichida:
         const ... = useSelector(state => state...)
         const ... = (...) => {
             let ... = []
             for(let tepadagi constantani nomi of parametrni nomi){
                 o'zgaruvchini nomi.push(
                     <li key={tepadagi constantani nomi.name}>
                        {tepadagi constantani nomi.name}
                        {tepadagi constantani nomini length > 0 ? (<ul>{tepadagi funksiyani nomi(tepadagi constantani nomi.children)}</ul>) : null}
                     </li>
                 )
             }
         }

         ikkinchi Colni ichida:
         <ul>
            {tepadagi constantani nomi(tepadagi funksiyani nomi.parametrni nomi)}
         </ul>
## - 15) react-bootstrap.github.io saytidan:
         bitta modal olamiz
## - 16) Category papkasini ichidagi index.js faylini ichida:
         Containerdan keyin kopiya qilingan modalni qo'yamiz
## - 17) Category papkasini ichidagi index.js faylini ichida:
         const ... = () => setShow(true or false)
         const ... = () => setShow(true or false)
## - 18) Category papkasini ichidagi index.js faylini ichida:
         const [..., ...] = useState('') - bundan nechta kerak bo'lsa shuncha yozamiz
## - 19) Category papkasini ichidagi index.js faylini ichida:
         const ... = useSelector(state => state...)
         const ... = (..., ... = []) => {
             for(let tepadagi constantani nomi of birinchi parametrni nomi){
                 ikkinchi parametrni nomi.push({ value: constantani nomi._id, name: constantani nomi._id })
                 if(constantani nomi.children.length > 0){
                     hozirgi funksiyani nomi(constantani nomi.children, ikkinchi parametrni nomi)
                 }
             }

             return ikkinchi parametrni nomi
         }
## - 20) Category papkasini ichidagi index.js faylini ichida:
         const ... = useSelector(state => state...)

         const ... = (e) => {
             tepadagi useStateni ikkinchisi(e.target.files[0])
         }

         Modal.Bodyni ichida:
         value, placeholderini, onChangini yozamiz

         <select>
            <option>...</option>
            {
                oxirgi funksiyani nomi(tepadagi constantani nomi.tepadagi funksiyani birinchi parametri).map(option => <option key={option.value} value={option.value}>{option.name}</option>)
            }
         </select>

         input yozamiz type=file, name="...", onChangi={tepadagi funksiyani nomi}
## - 21) Category papkasini ichidagi index.js faylini ichida:
         const ... = () => {

             const ... = new FormData()
             tepadagi constantani nomi.append('name' ...)
             tepadagi constantani nomi.append('parentId' ...)
             tepadagi constantani nomi.append('categoryImage' ...)

            setShow(true or false)
         }
## - 22) category.action.js faylini ichida:
         export const ... = (parametrga nom beramiz) => {
             return async dispatch => {
                 dispatch({ type: oxirgi kiritgan so'rov type kiritamiz })
                 const ... = await qilib kerakli url post metodi orqali jonatamiz
                 if status kodi === 201 bo'lsa dispatch({
                     type: oxirgi kiritilgan muvaffaqiyatli typeni kiritamiz
                     payload: ...
                 })else{
                     dispatch({
                         type: oxirgi kiritilgan muvaffaqiyatsiz typeni kiritamiz
                         payload: ...
                     })
                 }
             }
         }
## - 23) constants.js faylini ichida:
         yangi so'rov, muvaffaqiyatli va muvaffaqiyatsiz typelar yozamiz
## - 24) category.reducer.js faylini ichida:
         case type so'rov bo'lsa:
            state = {
                ...
                loading: true or false
            }
            break;
         case type muvaffaqyatli bo'lsa:
            state = {
                ...
                loading: true or false
            }
            break;
         case type muvaffaqyatsiz bo'lsa:
            state = {
                ...
            }
            break;
## - )