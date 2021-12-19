## - 1) NewPage papkasini ichidagi index.js faylini ichida:
        handleBannerImage funksiyasini ichida:
        oxirdan bitta oldingi useStatedagi ikkinchi nom([...oxirdan bitta oldingi useStatedagi birinchi nom, e.target.files[0]])

        handleProductImage funksiyasini ichida:
        oxirdagi useStatedagi ikkinchi nom([...oxirdagi useStatedagi birinchi nom, e.target.files[0]])

        uchta katta Rowdan keyin:
        {
            oxirdan bitta oldingi useStatedagi birinchi nom.length > 0 ?
            oxirdan bitta oldingi useStatedagi birinchi nom.map((ikkta parametr kiritamiz) => 
                Row ochamiz Rowga key={mapdagi ikkinchi parametr}, uni ichida Col ochamiz, uni ichida {mapdagi birinchi parametrni nomi}
            ) : null
        }

        to'rtta katta Rowdan keyin:
        {
            oxirgi useStatedagi birinchi nom.length > 0 ?
            oxirgi useStatedagi birinchi nom.map((ikkta parametr kiritamiz) => 
                Row ochamiz Rowga key={mapdagi ikkinchi parametr}, uni ichida Col ochamiz, uni ichida {mapdagi birinchi parametrni nomi}
            ) : null
        }

        handleProductImagedan keyin:
        const nom beramiz = () => {

            if(ikkinchi useStatedagi birinchi nom === ""){
                alert("...")
                birinchi useStatedagi ikkinchi nom(false)
                return
            }

            useDispatch funksiyasini chaqiramiz

            const nom beramiz = new FormData()
            tepadagi konstantani nomi.append('...', ikkinchi useStatedagi birinchi nom)
            tepadagi konstantani nomi.append('...', beshinchi useStatedagi birinchi nom)
            tepadagi konstantani nomi.append('...', to'rttinchi useStatedagi birinchi nom)
            tepadagi konstantani nomi.append('...', oltinchi useStatedagi birinchi nom)
            yettinchi useStatedagi birinchi nom.forEach((ikkta parametr kiritamiz) => {
                tepadagi konstantani nomi.append('...', birinchi parametrni nomi)
            })
            sakkizinchi useStatedagi birinchi nom.forEach((ikkta parametr kiritamiz) => {
                tepadagi konstantani nomi.append('...', birinchi parametrni nomi)
            })
            dispatch(page.action.js fayldagi funksiyani nomi(o'sha funksiyadagi parametrni nomi))
        }

        renderCreatePageModal funksiyasini ichidagi Modalni ichida handleClose={tepadagi funksiyani nomi}

        useEffectdan keyin:
        const nom beramiz = (e) => {
            const nom beramiz = uchinchi useStatedagi birinchi nom.find(category => category._id === e.target.value)
            to'rttinchi useStatedagi to'rtinchi nom(e.target.value)
            oltinchi useStatedagi ikkinchi nom(tepadagi konstantani nomi.oltinchi useStatedagi birinchi nom)
        }

        Modalni ichidagi birinchi Rowni ichidagi selectni ichidagi onChange={tepadagi funksiyani nomi}
## - 2) constants.js faylini ichida:
        oxirgi funksiyadan keyin:
        export const nom beramiz = {
            bu yerga dispatchni yangi so'rov, muvaffaqiyatli va muvaffaqiyatsiz typelarini yozamiz
        }
## - 3) actions papkasini ichida page.action.js faylini ochamiz va ichida:
        export const nom beramiz = (bitta parametr kiritamiz) => {
            return async dispatch => {
                dispatch({ type: constants.js faylini ichidagi oxirgi funksiyadagi so'rov typeni yozamiz })
                try{
                    const nom beramiz = await axios.post('kerakli url', parametrni nomi)
                    if(tepadagi konstantani status kodi === 201){
                        dispatch({
                            type: constants.js faylini ichidagi oxirgi funksiyadagi muvaffaqiyatli typeni yozamiz,
                            payload: { page: res.data.page }
                        })
                    }else{
                        dispatch({
                            type: constants.js faylini ichidagi oxirgi funksiyadagi muvaffaqiyatsiz typeni yozamiz,
                            payload: payload: { error: res.data.error }
                        })
                    }
                }catch(error){
                    console.log(error)
                }
            }
        }
## - 4)
## - 5)
## - 6)
## - 7)
## - 8)
## - 9)
## - 10)
## - 11)
## - 12)
## - 13)
## - 14)
## - 15)
## - 16)
## - 17)
## - 18)
## - 19)
## - 20) 