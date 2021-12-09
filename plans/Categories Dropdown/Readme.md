## - 1) Asosiy papkani ichida terminal ochamiz va ichida:
        npx create-react-app flipkart-clone
## - 2) terminalda cd flipkart-clone qilamiz va 
        npm i --save -react-router-dom redux react-redux redux-thunk axioslarni o'rnatamiz va npm start qilamiz
## - 3) flipkart-clone papkasini ichidagi logo.svg va App.js faylini ichidagi divni ichidagi kodlarni ochirib tashimiz
## - 4) admin-app papkasidagi actions, helpers, reducers, store papkalarini va urlConfig.js faylini kopiya qilamiz va flipkart-clone papkasini ichidagi src papkasini ichidaga kopiya qilingan papkalar va faylni qoyamiz
## - 5) actions papkasini ichidagi auth.actions.js, initialData.action.js, order.action.js, product.action.js, user.action.js faylarini o'chirib tashimiz
## - 6) category.action.js faylini ichidagi oxirgi funksiyani o'chirib tashimiz
## - 7) constants.js faylini ichidagi boshidagi ikkta va oxiridagi dispatchga moljalangan typelarni o'chirib tashimiz
## - 8) reducers papkasini ichidagi auth.reducer.js, order.reducer.js, product.reducer.js faylarini o'chirib tashimiz

## - 9) src papkasini ichidagi index.js faylini ichida:
         Providerni import qilamiz
         
         window.store = store
         React.DOMni ichida Providerni chaqiramiz, Providerga store={store}ni yozamiz va qogan kodlarni Providerni ichiga qoyamiz
## - 10) src papkasini ichida components va containers papkalarini ochamiz
## - 11) containers papkasini ichida HomePage papkasini ochamiz uni ichida index.js faylini ochamiz
## - 12) components papkasini ichida Header papkasini ochamiz uni ichida index.js va style.css faylarini ochamiz
## - 13) Header papkasini ichidagi index.js faylini ichidagi divga className beramiz va style.css faylini ichida:
         width, height va background kodlarini yozamiz
## - 14) HomePage papkasini ichidagi index.js faylini ichida:
         Headerni chaqiramiz
## - 15) components papkasini ichida MenuHeader papkasini ochamiz uni ichida index.js va style.css faylarini ochamiz
## - 16) HomePage papkasini ichidagi index.js faylini ichida:
         MenuHeaderni chaqiramiz
## - 17) admin-app papkasini ichidagi Category papkasini ichidagi index.js faylini ichidagi:
         renderCategories funksiyasini kopiya qilamiz
## - 18) MenuHeader papkasini ichidagi index.js faylini ichida:
         const nom beramiz = useSelectorni ishlatamiz
         useDispatchni chaqiramiz

         useEffectni chaqiramiz va ichida dispatch(hamma kategoriyani chaqiramiz)

         kopiya qilingan kodimizni qoyamiz

         return(
             divni ichida ul ochamiz uni ichida { tepadagi konstantani nomi.kopiya qilingan kodagi parametrni.length > 0 ? kopiya qilingan kodagi funksiyani nomi(tepadagi konstantani nomi.kopiya qilingan kodagi parametr) : null}
         )
## - 19) MenuHeader papkasini ichidagi index.js faylini ichidagi divga className beramiz va style.css faylini ichida:
         berilgan classNamega width, height, background, border-bottom va box-shadow kodlarini yozamiz

         berilgan className ulga list-styleni, marginini va paddingini beramiz

         berilgan className > ulga displayini, paddingini va postionini beramiz

         berilgan className > ul > li > spanga displayini, line-heightini, cursorini, paddingini, font-sizeni beramiz

         berilgan className > ul > li > span:hoverga colorini beramiz

         berilgan className > ul > li > ulga positionini, backgroundini, leftini, rightini, displayini va borderini beramiz

         berilgan className > ul > li:hover > ulga displayini kiritamiz

         berilgan className > ul > li > ul > liga marginini, min-widthini va floatini beramiz

         berilgan className > ul > li > ul > li > aga font-weightini va displayini beramiz

         berilgan className > ul > li > ul > li aga paddingini, displayini, font-sizeni, text-decorationini va colorini beramiz
## - 20) MenuHeader papkasini ichidagi index.js faylini ichida:
         o'zgaruvchinini nomi.psuh({
             <li key={...}>
             {
                tepadagi konstantani nomi.parentId ? <a href={tepadagi konstantani nomi.slug}>{tepadagi konstantani nomi.name}</a> :
                <span>{tepadagi konstantani nomi.name</span>
             }
         })
## - )
## - )
## - )
## - )
## - )
## - )
## - )