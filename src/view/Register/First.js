import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'

import 'react-phone-number-input/style.css'
import './index.css'

const First = ({ setFullName, setPhone, phone, fullName }) => {
    function check() {
        if (fullName === null || !fullName) setFullName('')
        if (phone === null || !phone) setPhone('')
    }

    return (
        <Form>
            <FormGroup>
                <Label for='exampleEmail'>To‘liq ism</Label>
                <InputGroup className={fullName === '' ? 'error' : ''}>
                    <InputGroupText>
                        <i className='fa-regular fa-user'></i>
                    </InputGroupText>
                    <Input
                        invalid={fullName === null ? false : fullName !== '' ? false : true}
                        onChange={e => setFullName(e.target.value)}
                        value={fullName}
                        placeholder={'Ex. Saul Ramirez'}
                    />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for='exampleEmail'>Telefon nomer</Label>
                <PhoneInput
                    className={phone === '' ? 'error' : ''}
                    placeholder='Enter phone number'
                    value={phone}
                    initialValueFormat='national'
                    international
                    limitMaxLength={'national'}
                    defaultCountry={'UZ'}
                    onChange={setPhone}
                />
            </FormGroup>
            <Link to={!phone || !fullName ? '' : '/register/step'}>
                <Button type={'button'} onClick={check} className={'w-100'}>
                    Keyingi
                </Button>
            </Link>
        </Form>
    )
}

export default First
