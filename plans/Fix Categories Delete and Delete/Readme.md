## - 1) Category papkasini ichidagi index.js faylini ichida:
        categoryni o'chiradigan funksiyani ichidagi uchta konstantadan keyin

        if(birinchi konstantani nomi.length > 0){
            pasidagi kodlarni qoyamiz
            dispatch(funksiyani nomi(birinchi konstantani nomi))
        }

        rendercategoryni update qiladigan funksiyani kopiya qilib o'chirib tashimiz 
## - 2) Category papkasini ichida components papkasini ochamiz va uni ichida UpdateCategoriesModal.js faylini ochamiz va ichida:
        Reactni import qilamiz
        Input va Modalni import qilamiz

        kopiya qilingan funksiyani qoyamiz va funksiyani ichida returni tepasida
        const {
            size,
            handleClose,
            ModalTitle,
            show,
            expandedArray,
            checkedArray,
            handleCategoryInput,
            categoryList,
        } = props

        funksiyani export qilamiz
## - 3) Category papkasini ichidagi index.js faylini ichida:
        Layoutni ichidagi Containerdan keyin
        <UpdateCategoriesModal.jsdagi funksiyani chaqiramiz
            show={useStatedagi birinchi nom}
            handleClose={}
            ModalTitle={"..."}
            size="kerakli sizeni yozamiz"
            expandedArray={categoryni o'chiradigan funksiyani ichidagi ikkinchi konstantani nomi}
            checkedArray={categoryni o'chiradigan funksiyani ichidagi birinchi konstantani nomi}
            categoryList={categoryList(bu nomni biz createCategoryList funksiyasini nomini o'zgartiramiz)}
        />
## - 4) UpdateCategoriesModal.js faylini ichida:
        Colni ichidagi selectni ichidagi 
        {
            (createCategoryList)ni categoryListga o'zgartiramiz
        }
## - 5) Category papkasini ichidagi index.js faylini ichida:
        rendercategoryni add qiladigan funksiyani kopiya qilib o'chirib tashimiz 
## - 6) Category papkasini ichida components papkasini ochamiz va uni ichida AddCategoriesModal.js faylini ochamiz va ichida:
        Reactni, Input va Modalni import qilamiz

        kopiya qilingan funksiyani qoyamiz va funksiyani ichida returni tepasida:
        
        const {
            show,
            handleClose,
            ModalTitle,
            categoryName,
            setCategoryName,
            parentCategoryId,
            setParentCategoryId,
            categoryList,
            handleCategoryImage
        }

        funksiyani export qilamiz
## - 7) Category papkasini ichidagi index.js faylini ichida:
        Layoutni ichidagi Containerdan keyin
        <AddCategoryModal.jsdagi funksiyani chaqiramiz
            show={useStatedagi birinchi nom}
            handleClose={handleClose}
            ModalTitle={"..."}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            parentCategoryId={parentCategoryId}
            setParentCategoryId={setParentCategoryId}
            categoryList={categoryList}
            handleCategoryImage={handleCategoryImage}
        />

        const nom beramiz = createCategoryList(...)
## - 8) Category papkasini ichida style.css faylini ochamiz va ichida:
        .modal-headerga padding va background-colorini beramiz
        .modal-titlega font-sizeni va colorini beramiz
        .modal-footerga padding beramiz
## - 9) Category papkasini ichidagi index.js faylini ichida:
        handleClose funksiyasini ichida konstantadan keyin:
        if(categoryName === ""){
            alert("...")
            return
        }

        Rowni ichidagi Colni ichidagi ikkta buttoni kopiya qilamiz va Rowni va uni ichidagilarni o'chirib tashimiz

        Layoutni ichidagi birinchi Rowni ichidagi Colni ichidagi divni ichiga h3 dan keyin div ochamiz va uni ichida kopiya qilingan buttonlarni qoyamiz va button tekstini oldiga kerakli ikonkalarni qoyamiz
## - 10) Category papkasini ichida style.css faylini ochamiz va ichida:
         tepadagi buttonlar turadigan divni classNamega displayini va align-itemsini beramiz

         tepadagi buttonlar turadigan divni classNamega borderini, marginini va font-sizeni beramiz beramiz
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