## - 1) CheckoutPage papkasini ichidagi index.js faylini ichida:
        returnni ichidagi Layoutni ichidagi birinchi CheckoutStepni ichidagi bodyni ichida:
        auth.authenticate ?
        <div className='classni nomi'>
            <span style={{ ... }}>{auth.user.fullName}</span>
            <span style={{ ... }}>{auth.user.email}</span>
        </div> : 
        <div>
            <MaterialInput
                label="..."
            />
        </div>

        ikkinchi CheckoutStepdan keyin:
        {
            uchinchi useStatedagi birinchi nom ? null :
            birinchi useStatedagi birinchi nom ?
            <AddressForm
                onSubmitForm={tepadagi birinchi funksiyani nomi}
                onCancel={() => { }}
            /> : <CheckoutStep 
                stepNumber={'...'}
                title={'...'}
                active={true or false}
                onClick={() => birinchi useStatedagi ikkinchi nom(true)}
            />
        }

        birinchi useEffectni ichida:
        auth.authenticate && dispatch(getAddress())

        CheckoutStep funksiyani ichidagi birinchi divdan keyin:
            <div onClick={props.onClick} ...>

        birinchi useEffectdan keyin:
        useEffect(() => {
            const nom beramiz = user.address.map(adr => ({...adr, selected: false, edit: false}))
            ikkinchi useStatedagi ikkinchi nom(address) 
        }, [user.address])

        ikkinchi CheckoutStepni ichida:

        divni ichidagi inputni ichida:
        onClick={() => ikkinchi funksiyani nomi(adr)}

        {
            adr.selected && <MaterialButton
                title="..."
                onClconfirmDeliveryAddress(adr)}
                style={{
                    width: '...'
                }}
            />
            {adr.selected && <div>...</div>}
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