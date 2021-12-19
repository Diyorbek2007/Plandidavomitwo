## - 1) App.js faylini ichida:
        useEffectni ichidagi ifdan keyin:
        if(auth.authenticate){
            dispatch(getInitialData())
        }
## - 2) reducers papkasini ichida page.reducer.js faylini ochamiz va uni ichida:
        const initState = {
            error: null,
            loading: false,
            page: {}
        }

        export default (state = initState, action) => {
            switch(action.type){
                case constants.js fayldagi oxirgi funksiyani nomi.so'rov shakli:
                state = {
                    ...state,
                    loading: true or false
                }
                break
                case constants.js fayldagi oxirgi funksiyani nomi.muvaffaqiyatli shakli:
                state = {
                    ...state,
                    loading: true or false
                }
                break
                case constants.js fayldagi oxirgi funksiyani nomi.muvaffaqiyatsiz shakli:
                state = {
                    ...state,
                    loading: true or false,
                    error: action.payload.error
                }
                break
            }
            return state
        }
## - 3) NewPage papkasini ichidagi index.js faylini ichida:
        useDispatchni chaqirganimizdan keyin:
        const nom beramiz = useSelector(state => state.yonidagi nom)

        useEffectdan keyin:
        
        useEffect(() => {
            console.log(tepadagi konstantani nomi)
            if(!tepadagi konstantani nomi.loading){
                birinchi useStatedagi ikkinchi nom(false)
                ikkinchi useStatedagi ikkinchi nom('')
                to'rtinchi useStatedagi ikkinchi nom('')
                beshinchi useStatedagi ikkinchi nom(false)
                sakkizinchi useStatedagi ikkinchi nom([])
                yettinchi useStatedagi ikkinchi nom([])
            }
        }, [tepadagi konstantani nomi])

        renderCreatePageModalni ichidagi Modalni ichida:
        handleClose={() => birinchi useStatedagi ikkinchi nom(false)}
        onSubmit={submitPageForm}

        returni ichidagi Layoutni ichida:
        {
            tepadagi konstantani nomi.loading ? 
            <p>kerakli so'z</p>
            :
            <>
                pasdagi kodlar
            </>
        }
        ...
## - 4) components papkasini ichidagi UI papkasini ichidagi Modal papkasini ichidagi index.js faylini ichida:
        Modal.Footerni ichida:
        <Button
            ...,
            onClick={props.onSubmit}
        >
## - 5) Category papkasini ichidagi index.js faylini ichida:
        <AddCategoryModal
            ...,
            handleClose={() => shu faylini ichidagi to'rtinchi useStatedagi ikkinchi nom(false)}
            onSubmit={handleClose}
        />
        <UpdateCategoriesModal
            ...,
            handleClose={() => to'qqizinchi useStatedagi ikkinchi nom(false)}
            onSubmit={updateCategoriesForm}
        />
## - 6) Category papkasini ichidagi components papkasini ichidagi AddCategoryModal.js faylini ichida:
        const {
            ...,
            oxirida onSubmitni yozamiz
        }

        return ichida:
        <Modal
            ...,
            onSubmit={onSubmit}
        >
## - 7) Category papkasini ichida:

        useEffect(() => {
            if(!category.loading){
                to'rtinchi useStatedagi ikkinchi nom(false)
            }
        }, [])

        handleClose funksiyasini ichida:
            konstantadan keyin:
            if(shu fayldagi birinchi useStatedagi birinchi nom === ""){
                alert("...")
                to'rtinchi useStatedagi ikkinchi nom(false)
                return
            }
## - 8) UpdateCategoriesModal.js faylini ichida:
                const {
            ...,
            oxirida onSubmitni yozamiz
        }

        return ichida:
        <Modal
            ...,
            onSubmit={onSubmit}
        >
## - 9) components papkasini ichidagi UI papkasini ichidagi Input papkasini ichidagi index.js faylini ichida:
        let nom beramiz = null;
        switch(props.type){
            case 'select':
                letni nomi = returni ichidagi Formni qoyamiz:
                Form.Control va Form.Textni kopiya qilamiz va o'chirib tashimiz
                <select
                    className="..."
                    value={props.value}
                    onChange={props.onChange}
                >
                    <option></option>
                    {
                        props.options.length > 0 ?
                        props.options.map((option , index) => 
                            <option key={index} value={option.value}>{option.name}</option>    
                        ) : null
                    }
                </select>
                break
            case 'text':
            default:
                letni nomi = returni ichidagi Formni qoyamiz
        }

        return letni nomi
## - 10) NewPage.js faylini ichida:
         renderCreatePageModal funksiyasini ichidagi birinchi Rowni ichidagi Colni ichidagi selectni o'chirib
         <Input
            type="select"
            value={tepadagi to'rtinchi useStatedagi birinchi nom}
            onChange={onCategoryChange}
            options={tepadagi uchinchi useStatedagi birinchi nom}
            placeholder={'kerakli so'z'}
         />
