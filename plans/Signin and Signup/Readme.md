## - 1) src papkasini ichidagi index.js faylini ichida:
        { BrowswerRouter as Router } import qilamiz
        Providerni ichida Routerni chaqiramiz
        Routerni ichida qoga nnarsalarni chaqiramiz
## - 2) App.js faylini ichida:
        useDispatch funksiyasini chaqiramiz
        useSelector funksiyasini ham ishlatamiz

         useEffectni ichida:
         if(!....authenticate){
            dispatch(auth.actions.jsdagi function ishlatamiz)
         }
## - 3) Signup papkasini ichidagi index.js faylini ichida:
        const nom berib useSelector funksiyasini ishlatamiz

        if((useSelector funksiyasidagi nomni yozamiz)authenticate){
            return Redirect qilib kerakli sahifaga jo'natamiz
        }
## - 4) Home papkasini ichidagi index.js faylini ichiga:
        Containerni fluidni ichida Rowni ishlatamiz va Rowni ichida Colni ishlatamiz va kerakli so'zni yozamiz 
## - 5) Home papkasini ichida style.css faylini ochamiz
## - 6) Home papkasini ichidagi style.css faylini ichini to'g'irlimiz
## - 7) Header papkasini ichidagi index.js ichida :
        const nom beramiz useSelector funksiyasini ishlatamiz
## - 8) Header papkasini ichidagi index.js ichida : 
        const nom beramiz = () => {
            return(
                <Nav>
                    li ichida span ishlatamiz
                </Nav>
            )
        }
## - 9) Header papkasini ichidagi index.js ichida : 
        const nom beramiz = () => {
            return(
                <Nav>
                    li ichida NavLinkni ishlatamiz
                </Nav>
            )
        }
## - 10) Header papkasini ichidagi index.js ichida :
        <Navbar.Collapse>ni ichida
            {useSelector funksiyasidagi nom.authenticate ? tepadagi birinchi funksiyani nomi() : tepadagi ikkinchi funksiyani nomi()}
        </Navbar.Collapse>
## - 11) auth.actions.js faylini ichida:
         export const nom beramiz = () => {
             return async dispatch => {
                 dispatch({
                     typeni kiritamiz
                 })
             }
         }
## - 12) Header papkasini ichidagi index.js faylini ichida:
         useDispatch funksiyasini ishlatamiz
         const nom beramiz = () => {
             dispatch(auth.actions.js faylidagi oxirgi funksiyani nomi yozamiz)
         }
         
         spanga onClick hodisasini beramiz
## - 13) constants.js faylini ichida:
         export const ... = {
             ...: "..."
             ...: "..."
             ...: "..."
         }
## - 14) actions papkasini ichida user.actions.js faylini ichida :
         auth.actions.js faylini ichidagi signup funksiyasini shu faylga o'tqazamiz
## - 15) Signup papkasini ichidagi index.js faylini ichida:
         const [... , ...] = useState("") 
         useDispatch funksiyasini chaqiramiz

         const nom beramiz = (e) => {
             hodisani to'xtatadigan code yozamiz

             const nom beramiz = {
                 ...
             }

             dispatch(user.actions.js fayl ichidagi fubksiyani nomini yozamiz)
         }
         Inputni ichida labelni, placeholderni, valueni, typeni, onChangeni(e.target.value) to'g'irlab chiqamiz 
## - 16) reducers papkasini ichida user.reducers.js papkasini ochamiz
## - 17) reducers papkasini ichidagi index.js faylini ichida:
         user.reducers.js faylini chaqiramiz import qilib
## - 18) user.reducers.js faylini ichida:
         const nom beramiz = {
             error, message, loading
         }
         tepadagi o'zgarmasni export qilamiz(state = nomini yozamiz, action){
             switch(){
                 case ...,
                 case ...,
                 case ...
             }
            
         }
## - 19) Signup papkasini ichidagi index.js faylini ichida;
         useSelector funksiyasini chaqiramiz

         if(){
             zagruzka boladigan joyini ifdan o'taqazamiz
         }
##
##
##