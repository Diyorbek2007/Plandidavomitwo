## - 1) Layout papkasini ichida style.css faylini ochamiz va kerakli css ko'dlarini yozamiz
## - 2) category.reducer.js faylini ichida:
        const nom beramiz = (parentId, ikkta parametr kiritamiz) => {
            let nom beramiz = []
            for(let ... of tepadagi birinchi parametrni nomi){
                if(fordagi o'zgaruvchini nomi._id == parentId){
                    tepadagi o'zgaruvchini nomi.push({
                        ...,
                        children: ...children && cat.children.length > 0 ? tepadagi konstantani nomi(parentId, [...children,{
                            _id: ikkinchi parametrni nomi._id,
                            name: ikkinchi parametrni nomi.name,
                            slug: ikkinchi parametrni nomi.slug
                            parentId: ikkinchi parametrni nomi.parentId,
                            children: ikkinchi parametrni nomi.children
                        }], ikkinchi parametrni nomi) : []
                    }) 
                }
                else{
                   tepadagi o'zgaruvchini nomi.push({
                    ...,
                    children: ...children && cat.children.length > 0 ? tepadagi konstantani nomi(parentId, ...children, ikkinchi parametrni nomi) : []
                   }) 
                }
                
            }
            return o'zgaruvchini nomi
        }

        case muvaffaqiyatli type:
            const nom beramiz = action.payload.ikkinchi parametrni nomi 
            const nom beramiz = tepadagi funksiyani nomi(ikkinchi parametrni nomi.parentId, state.birinchi parametrni nomi, ikkinchi parametrni nomi)

            state = {
                ...,
                tepadagi funksiyadagi birinchi parametrni nomi: tepadagi ikkinchi funksiyani nomi 
            }
## - 3) Category papkasini ichidagi index.js faylini ichida:
        Modalni kopiya qilamiz
## - 4) Products papkasini ichidagi index.js faylini ichiga:
        const [..., ...] = useState('') (bundan nechta kerakli bo'lsa shuncha yozamiz) 
        const [show, setShow] = useState(false)

        kopiya qilingan Modalni qoyamiz, selectni olib tashimiz
        <Input
            label="..."
            valu={tepadagi useStatedagi birinchisini yozamiz}
            plcaeholder={...}
            onChange={(e) => ...(e.target.value)}
        />
## - 4) Category papkasini ichidagi index.js faylini ichidagi:
        Layoutni ichidagi Containerni kopiya qilamiz
        selectni kopiya qilamiz
## - 5) Products papkasini ichidagi index.js faylini ichiga:
        kopiya qilingan Containerni Layoutni ichiga Modaldan oldin qoyamiz
        kopiya qilingan selectni Modal.Bodyni ichiga qo'yamiz

        const nom beramiz = () => {
            tepadagi useState({
                ...useStatedagi,
                e.target.files[0]
            })
        }

        {
            useStatedagi.length > 0 ?
            useStatedagi.map((ikkta nom beramiz) => <div key={yonidagi berilgan ikkinchi nomi}>{yonidagi berilgan birinchi nom.name}</div>)
        }

        <input type="file" name="..." onChange={tepadagi funksiyani nomi} />
## - 6) product.action.js faylini ichida:
        export const nom beramiz = form => {
            return async dispatch => {
                const nom beramiz = await axios.post(bu yerga kerakli irlni yozamiz, form)
            }
        }
## - 7) Products papkasini ichidagi index.js faylini ichiga:
        useDispatchni chaqiramiz

        const nom beramiz(modalni yopadigan funksiya) = () => {
            const form = new FormData();
            tepadagi constantani nomi.append('useStatedagi birinchi so'zni yozamiz', useStatedagi birinchi so'zni yozamiz)
            tepadagi constantani nomi.append('useStatedagi birinchi so'zni yozamiz', useStatedagi birinchi so'zni yozamiz)
            tepadagi constantani nomi.append('useStatedagi birinchi so'zni yozamiz', useStatedagi birinchi so'zni yozamiz)
            tepadagi constantani nomi.append('useStatedagi birinchi so'zni yozamiz', useStatedagi birinchi so'zni yozamiz)
            tepadagi constantani nomi.append('useStatedagi birinchi so'zni yozamiz', useStatedagi birinchi so'zni yozamiz)

            for(let nom beramiz of ...){
                tepadagi constantani nomi.append('useStatedagi birinchi so'zni yozamiz', tepadagi o'zgaruvchini nomi)
            }

            dispatch(product.action.js faylini ichidagi funksiyani nomi(form))
            
            setShow(false)
        }
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
## - )
## - )
## - )
## - )
## - )
## - )