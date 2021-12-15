## - 1) Category papkasini ichidagi index.js faylini ichida:
        const [ikkta nom beramiz] = useState(false)

        const nom beramiz = () => {
            tepadagi useStatedagi ikkinchi nom(true)
        }

        Category funksiyasini ichidagi returndan tepada:
        const nom beramiz(bu funksiya categoryni o'chirish uchun) = () => {
            return(
                <Modal
                    ModalTitle="..."
                    show={tepadagi useStatedagi birinchi nom}
                    handleClose={() => tepadagi useStatedagi ikkichi nom(false)}
                    buttons={[
                        {
                            label: "...",
                            color: "...",
                            onClick: () => {
                                alert('...')
                            }
                        }
                        {
                            label: "...",
                            color: "...",
                            onClick: () => {
                                alert('...')
                            }
                        }
                    ]}
                >
                    <h5>...</h5>
                    {expandedArray.map((ikkta nom beramiz) => <span key={yonidagi parametrdagi ikkinchi nom}>{yonidagi parametrdagi birinchi nom.name}</span>)}
                    <h5>...</h5>
                    {checkedArray.map((ikkta nom beramiz) => <span key={yonidagi parametrdagi ikkinchi nom}>{yonidagi parametrdagi birinchi nom.name}</span>)}
                
                </Modal>
            )
        }
        Containerni ichidagi oxirgi Rowni ichidagi Col ichidagi birinchi buttonga onClick={tepadagi birinchi funksiyani nomi}hodisasini beramiz

        Containerdan keyin 
        {tepadagi funksiyani nomi()}
## - 2) Components papkasini ichidagi UI papkasini ichidagi Input papkasini ichidagi index.js faylini ichida:
        <ModalFooter>ni ichida
        {
            props.buttons && props.buttons.map((btn , index) => 
                passdagi buttondan kopiya qilib shu yerga qoyamiz
            ):
            <Button>
                ...
            </Button>
        }
        
## - 3) Category papkasini ichidagi index.js faylini ichida:
        categoryni update qiladigan funksiyani ichidagi kodlarni kopiya qilamiz va o'chirib tashimiz

        pasdagi funksiyani nomi yozamiz
        useStatedagi ikkinchi nom(true)

        const nom beramiz = () => {
            kopiya qilingan kodni qoyamiz
        }

        categoryni delete qiladigan funksiyani ichiga:
        tepadagi funksiyani nomi 

        const nom beramiz = () => {
            const nom beramiz = checkedArray.map((ikkta nom yozamiz) => ({_id: yonidagi birinchi parametrni nomi.value}))
            const nom beramiz = expandedArray.map((ikkta nom yozamiz) => ({_id: yonidagi birinchi parametrni nomi.value}))
            const nom beramiz = tepadagi ikkinchi konstantani nomi.concat(tepadagi birinchi konstantani nomi)
            dispatch(...(tepadagi uchinchi konstantani nomi))
            .then(result => {
                if(result){
                    dispatch(hamma categoryni chaqiradigan funksiyami nomi())
                    ... useStatedagi ikkinchi nom(false)
                }
            })
        }
        
        buttonsni ichidagi onClickni ichidagilarni o'chirib tashimiz
## - 4) category action.js faylini ichiad:
        export const nom beramiz = (bitta nom yozamiz) => {
            return async dispatch => {
                const nom beramiz = await axios.post(`kerakli urlni yozamiz`, {
                    payload: {
                        parametrni nomi
                    }
                })
                if(tepadagi konstantani status kodi === 201){
                    return true
                }else{
                    return false
                }
            }
        }
## - 5) Category papkasini ichidagi index.js faylini ichida:
        import { ..., ..., category.action.js fayldagi oxirgi funksiyani nomi as nom beramiz }
## - )
## - )
## - )
## - )
## - )
## - )