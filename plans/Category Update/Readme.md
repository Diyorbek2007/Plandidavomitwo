## - 1) admina-app papkasini ichidagi terminalda:
        npm i --save react-checkbox-tree ni o'rnatamiz
## - 2) Category papkasini ichidagi index.js faylini ichida:
        CheckboxTreeni import qilamiz
        checkboxtreeni cssini ulimiz
## - 3) admina-app papkasini ichidagi terminalda:
        npm i --save react-icons qilib react-iconsni o'rnatamiz
## - 3) Category papkasini ichidagi index.js faylini ichida:
        import { bu yerga kerakli ikonkalarni nomini yozamiz } from 'react-icons/io'

        const [ikkta nom beramiz] = useState([])
        const [ikkta nom beramiz] = useState([])
        const [ikkta nom beramiz] = useState([])
        const [ikkta nom beramiz] = useState([])
        const [ikkta nom beramiz] = useState([])

        renderCategories funksiyasini ichidagi massivni nomi.push(
            {
                label: fordagi o'zgaruvchini nomi.name,
                value: fordagi o'zgaruvchini nomi._id,
                children: fordagi o'zgaruvchini nomi.children.length > 0 && renderCategories(fordagi o'zgaruvchini nomi.children)
            }
        )

        Layoutni ichidagi ikkinchi Rowni ichidagi Colni ichida:
        <CheckboxTree
            nodes={renderCategories(fordagi o'zgaruvchini nomi.tepadagi funksiyani ichidagi parametr)}
            checked={birinchi useStatedagi birinchi nom}
            expanded={ikkinchi useStatedagi birinchi nom}
            onCheck={birinchi useStatedagi birinchi nom => birinchi useStatedagi ikkinchi nom(birinchi useStatedagi birinchi nom)}
            onExpand={ikkinchi useStatedagi birinchi nom => ikkinchi useStatedagi ikkinchi nom(ikkinchi useStatedagi birinchi nom)}
            icons={{
                check: <kerakli ikonka yozamiz/>
                uncheck: <kerakli ikonka yozamiz/>
                halfcheck: <kerakli ikonka yozamiz/>
                expandClose: <kerakli ikonka yozamiz/>
                expandOpen: <kerakli ikonka yozamiz/>
            }}
        />

        <Modal
            show={}
            handleClose={beshinchi useStatedagi birinchi nom}
        />
## - 4) react-icons.github.io saytidan:
        Checkboxni ikonkasini olamiz
## - 5) CheckboxTree dan keyin 
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