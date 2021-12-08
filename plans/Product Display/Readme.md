## - 1) Category papkasini ichidagi index.js faylini ichida:
        useEffectni o'chirib tashimiz
## - 2) category.reducer.js faylini ichida:
        if(parentId == underfined){
            return [
                ... tepadagi funksiyani ikkinchi parametrni nomini yozamiz,
                {
                    _id: tepadagi funksiyani uchunchi parametrni nomini yozamiz._id,
                    name: tepadagi funksiyani uchunchi parametrni nomini yozamiz.name,
                    slug: tepadagi funksiyani uchunchi parametrni nomini yozamiz.slug,
                    children: []
                }
            ]
        }
## - 3) Category papkasini ichidagi index.js faylini ichida:
        useStatedagi birinchi nomni yozamiz('');
        useStatedagi birinchi nomni yozamiz('');
## - 4) Header papkasini ichidagi index.js faylini ichida:
        Navbarga fixed="top"ni yozamiz
## - 5) Home papkasini ichidagi style.css faylini ichida:
        css kodlarini kopiya qilib o'chirib tashimiz
## - 6) Layout papkasini ichidagi style.css faylini ichida:
        kopiya qilingan css kodlarini qoyamiz
## - 7) UI papkasini ichida Modal papkasini ochamiz uni ichida esa index.js faylini ochamiz
## - 8) Modal papkasini ichidagi index.js faylini ichida:
        rfc enterni bosamiz
## - 9) Category papkasini ichidagi index.js faylini ichidagi:
        Modalni kopiya qilamiz
## - 10) Modal papkasini ichidagi index.js faylini ichida:
         kopiya qilingan Modalni qo'yamiz

         Modal.Titleni ichidagi so'zni o'chirib o'rniga {props.modalTitle}ni yozamiz
         Modal.Bodyni ichida kodlarini ochirib o'rniga {props.children}ni yozamiz
## - 11) Category papkasini ichidagi index.js faylini ichhida:
         Input, select, option va inputni kopiya qilamiz
         Modalni va uni ichidagi hamma narsalarni o'chirib tashimiz va 
         import Modal papkasini ichidagi index.jsdagi funksiyani nomini yozib import qilamiz

         <oxirgi import qilingan funksiyani nomi
            show={show}
            handleClose={handleClose}
            modalTitle={'kerakli Titleni yozamiz'}
         />
         kopiya qilingan Input, select, option va inputni qoyamiz
## - 12) Products papkasini ichidagi index.js faylini ichida:
         Input, select va input kopiya qilamiz
         Modalni ichidagi narsalarini o'chirib tashimiz
         import Modal papkasini ichidagi index.js faylini ichidagi funksiyani import qilamiz
         <oxirgi import qilingan funksiyani nomi
            show={show}
            handleClose={handleClose}
            modalTitle={'kerakli Titleni yozamiz'}
         />
## - 13) react-bootstrap.github.io saytidan table olamiz
## - 14) Products papkasini ichidagi index.js faylini ichida:
         const nom beramiz = () => {
             return(
                 kopiya qilingan tableni qo'yamiz(kerakli joyini to'g'irlimiz)
             )
         }
         Row ochamiz, uni ichida Col ochamiz, uni ichida {tepadagi funksiyani nomi()}
## - 15) actions papkasini ichida initialData.action.js faylini ochamiz
## - 16) constants.js faylini ichida:
         initialData faylda dispatch metodiga type yozildi
## - 17) initialData.action.js faylini ichida:
         export const nom beramiz = () => {
             return async dispatch => {
                const nom beramiz = await axios.post(kerakli url)
                if(status kodi == 200){
                    const {ikkta nom beramiz} = res.data
                    dispatch({
                        type : muvaffaqiyatli,
                        payload: { tepadagi constantagi birinchi nom }
                    })
                    dispatch({
                        type: muvaffaqiyatli,
                        payload: { tepadagi constantagi ikkinchi nom }
                    })
                }
             }
         }
## - 18) constants.js faylini ichida:
         initialData fayli uchun dispatch metodiga type(so'rov, muvaffaqiyatli, muvaffaqiyatiz) yozildi
## - 19) App.js faylini ichida:
         useEffectni ichidagi dispatch(getAllCategory())ni dispatch(getInitialData())ga o'zgartiramiz
## - 20) product.reducer.js faylini ichida:
         const nom beramiz = {
             ... : []
         }

         export default (state = tepadagi constantani nomi, action) => {
             switch(action.type){
                 case muvaffaqiyatli type yozamiz
                 ... = {
                     ...state,
                     tepadagi massiv: action.payload.tepadagi massivni nomi
                 }
             }
         }
## - 21) Products papkasini ichidagi index.js faylini ichida: 
         const product = useSelector(state => state.product)

         <tbody>
         ichidagi tableni kopiya qilamiz va o'chirib tashimiz
            {
                product.products.length > 0 ?
                product.products.map(product =>
                bu yerga kopiya qilingan table qoyamiz 
            }
         </tbody>