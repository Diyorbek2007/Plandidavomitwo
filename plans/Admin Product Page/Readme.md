## - 1) constants.js faylini ichida:
        categoryConstantsni ichida daleteni so'rov, muvaffaqiyatli va muvaffaqiyatsi typelarini kiritamiz
## - 2) category.action.js faylini ichida:
        categoryni o'chiradigan funksiyani ichida returnni ichida:  
        dispatch({ type: daleteni so'rov shakli })

        ifni ichida:
        dipatch(hamma category chaqiradigan funksiyani nomi())
        dispatch({ type: daleteni muvaffaqiyatli shakli })
        elseni ichida:
        const { error } = res.data
        dispatch({
            type: daleteni muvaffaqiyatsiz shakli,
            payload: { error }
        })
## - 3) category.reducer.js faylini ichida:
        oxirgi casedan keyin:
        case daleteni so'rov shakli:
         state = {
            ...state,
            loading: true
         }
         break
        case daleteni muvaffaqiyatli shakli:
         state = {
            ...state,
            loading: false
         }
         break
        case daleteni muvaffaqiyatsiz shakli:
         state = {
            ...state,
            loading: false,
            error: action.payload.error
         }
         break
## - 4) Category papkasini ichidagi index.js faylini ichida:
        createCategoryList funksiyasini ichidagi forni ichidagi options.pushni ichida:
        type: category.type
## - 5) UpdateCategoriesModal.js faylini ichida:
        returni ichidagi {}ni ichidagi Rowni ichidagi oxirgi Colni ichida:
        <select
            className="...",
            value={item.type}
            onChange={(e) => handleCategoryInput('type', e.target.value, index, 'expanded')}
        />

            returnni ichidagi oxirgi Colni ichida:
            <select
                className="...",
                value={item.type}
                onChange={(e) => handleCategoryInput('type', e.target.value, index, 'checked')}
            />
        />
## - 6) category.reducer.js faylini ichida:
        buildNewCategories funksiyasini ichida:
        {
            ...: ...,
            type: category.type
        }

        buildNewCategories funksiyasini ichidagi forni ichidagi ifni ichidagi konstantani ichida = {
            ...: ...,
            type: category.type
        }
## - 7) components papkasini ichidagi Layout papkasini ichidagi index.js faylini ichida:
        Containerni ichidagi Rowni ichidagi Colni ichidagi ulni ichida:
        <li><NavLink to={`kerakli url`}>...</NavLink></li>
## - 8) App.js faylini ichida:
        PrivateRoutedan bitta ko'paytiramiz pathini va componentni o'zgartiramiz
## - 9) containers papkasini ichida NewPage papkasini ochamiz va uni ichida index.js faylini ochamiz va uni ichida:
        Reactni import qilamiz va Modalni import qilamiz

        const [ikkita nom beramiz] = useState(false)
        const [ikkita nom beramiz] = useState('')

        function NewPage = (props) => {

            const nom beramiz = () => {
                return(
                    <Modal
                        show={birinchi useStatedagi birinchi nom}
                        ModalTitle={"..."}
                        handleClose={() => birinchi useStatedagi ikkinchi nom}
                    >
                        <Row>
                            <Col>
                                <Input
                                    value={ikkinchi useStatedagi birinchi nom}
                                    onChange={(e) => ikkinchi useStatedagi ikkinchi nom(e.target.value)}
                                    placeholder={'...'}
                                />
                            </Col>
                        </Row>

                    </Modal>
                )
            }

            return (
                Layoutni chaqiramiz va uni ichida:
                {tepadagi funksiyani nomi()}
                <button onClick={() => birinchi useStatedagi ikkinchi nom(true)}>...</button>
            )   
        }

        createCategoryList funksiyasini kopiya qilamiz
## - 10) helpers papkasini ichida linearCategories.js faylini ochamiz va uni ichida:
         kopiya qilingan funksiyani qoyamiz

         createCategories nomini linearCategoriesga o'zgartiramiz
## - 11) NewPage papkasini ichidagi index.js faylini ichida:
         const category = useSelector(state => state.category)
         const [ikkta nom beramiz] = useState([])
         const [ikkta nom beramiz] = useState('')
         const [ikkta nom beramiz] = useState('')
         const [ikkta nom beramiz] = useState('')
         const [ikkta nom beramiz] = useState('')

         ikkta useStatedan keyin

         useEffect(() => {
            useStatedagi ikkinchi nom(linearCategories.js faylini ichidagi funksiyani nomi yozamiz(category.useStatedagi birinchi nom))
         }, [category])

         const nom beramiz = (e) => {
             console.log(e)
         }

         const nom beramiz = (e) => {
             console.log(e)
         }

         Modalni ichida Row ochamiz, uni ichida Col ochamiz, uni ichida:
         <select
            className="..."
            value={ikkinchi useStatedagi birinchi nom}
            onChange={(e) => ikkinchi useStatedagi ikkinchi nom(e.target.value)}

         >
            <option>...</option>
            {
                birinchi useStatedagi birinchi nom.map(cat =>
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                )
            }

         </select>

         Modalni ichidagi kodlarni Containerga olamiz

         Oxirgi Rowdan keyin:
         <Row>
            <Col>
                <Input
                    value={uchunchi useStatedagi birinchi nom}
                    onChange={(e) => uchunchi useStatedagi ikkinchi nom}
                    placeholder={"..."}
                    className="..."
                />
            </Col>
         </Row>

         <Row>
            <Col>
                <input
                    className="kerakli classni yozamiz"
                    type="kerakli typeni kiritamiz"
                    name="..."
                    onChange={tepadagi birinchi funksiyani nomi}
                />
            </Col>
         </Row>

         <Row>
            <Col>
                <input
                    className="kerakli classni yozamiz"
                    type="kerakli typeni kiritamiz"
                    name="..."
                    onChange={tepadagi ikkinchi funksiyani nomi}
                />
            </Col>
         </Row>
## - )
## - )
## - )
## - )
## - )