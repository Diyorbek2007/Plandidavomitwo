## - 1) auth.action.js faylini ichida:
        export const signout = () => {
            return async dispatch => {
                dispatch({type: constants.js fayldagi oxirgi funksiyani nomi.logout so'rov})
                localStorage.clear()
                dispatch({type: constants.js fayldagi oxirgi funksiyani nomi.logout muvaffaqiyatli})
            }
        }
## - 2) Header papkasini ichidagi index.js faylini ichida:
        useEffectni tepasida:
        const nom beramiz = () => {
            dispatch(signout())
        }
## - 3) MaterialUI papkasini ichidagi index.js faylini ichida:
        "headerDropdownMenu" classli ulni ichidagi lini ichidagi ani ichida:
        <a onClick={(e) => {
            e.preventDefault()
            item.onClick && item.onClick()
        }}>
            ...
        </a>
## - 4) https://webscript.info/rizwan/reactjs-flipkart-product-description-page-clone-ui-5f9dc46dd7cea saytidan kerakli kodlarni kopiya qilamiz va qoyamiz