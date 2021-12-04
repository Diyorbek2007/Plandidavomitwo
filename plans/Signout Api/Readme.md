## - 1) Backend papkasini ichidagi, src papkasini ichidagi, routes papkasini ichidagi, admin papkasini ichidagi auth.js faylini ichiga:
        (`/admin/signout, requireSignin, signout) apisini post metodi orqali jonatamiz
## - 2) Backendagi src papkasini ichidagi, controller papkasini ichidagi, admin papkasini ichidagi auth.js faylini ichida:
        exports.signout = (req, res) =. [
            bu yerda status code 200 teng bo'lsa muvaffaqiyatli xabar jo'natsin
        ]
## - 3) auth.actions.js faylini ichida:
        dispatch({type : so'rov shaklida bo'lishi kerak})
        const nom beramiz = await axios.post(`kerakli apini qo'yamiz`)
        if status kodi 200 teng bo'lsa dispatch({type muvaffaqiyatli bo'lishi kerak})
        else dispatch({type: muvaffaqiyatsiz bo'lishi kerak va payloada: res.datadagi.error bo'lishi kerak})
## - 4) App.jsni ichida:
        PrivateRoute dan uchta yaratamiz:
        Birinchisini pathi="products" bo'ladi
        Ikkinchisini pathi="orders" bo'ladi
        Uchinchisini pathi="category" bo'ladi
## - 5) Home papkasini ichidagi index.js ichiga:
        Rowni ichidagi Colni ichida ul uni ichida li ochamiz
        lini ichida uchta NavLink ochamiz:
        Birinchisi to="/products" bo'ladi
        Ikkinchisi to="/orders" bo'ladi
        Uchinchisi to="/products" bo'ladi
## - 6) Layout papkasini ichidagi index.jsni ichiga:
        {
            props.sidebar ?
            Home papkasini ichidagi index.js faylini ichidagi codelarni qoyamiz
            :
            props.children
        }
## - 7) containers papkasini ichida Products, Orders va Category papkalarini ochamiz ularni ichdia index.js faylini ochamiz
## - 8) containers papkasini ichida Products, Orders va Category papkalarini ichidagi index.js faylini ichiga:
        Reactni import qilamiz
        Layoutni import qilamiz
        
        <Layout sidebar>
            ...
        </Layout> qilib yozamiz
        export default qilib funksiyani nomini yozib export qilamiz
## - 9)
## - 10)
