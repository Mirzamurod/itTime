import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupText,
    Label,
    Spinner,
} from 'reactstrap'
import { useSelector } from 'react-redux'

import './index.css'

const Second = ({ email, setEmail, password, setPassword, setUserName, userName, submit }) => {
    const { isLoading } = useSelector(state => state.register)

    function check() {
        if (email === null || !email) setEmail('')
        if (password === null || !password) setPassword('')
        if (userName === null || !userName) setUserName('')
    }

    return (
        <Form>
            <FormGroup>
                <Label for='exampleEmail'>Elektron pochta</Label>
                <InputGroup className={email === '' ? 'error' : ''}>
                    <InputGroupText>
                        <i className='fa-solid fa-at'></i>
                    </InputGroupText>
                    <Input
                        type={'email'}
                        invalid={email === null ? false : email !== '' ? false : true}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder={'Ex: abs@example.com'}
                    />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for='exampleEmail'>Parol</Label>
                <InputGroup className={password === '' ? 'error' : ''}>
                    <InputGroupText>
                        <i className='fa-solid fa-lock'></i>
                    </InputGroupText>
                    <Input
                        type={'password'}
                        invalid={password === null ? false : password !== '' ? false : true}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder={'********'}
                    />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for='exampleEmail'>Foydalanuvchi nomi</Label>
                <InputGroup className={userName === '' ? 'error' : ''}>
                    <InputGroupText>
                        <i className='fa-solid fa-link'></i>
                    </InputGroupText>
                    <Input
                        invalid={userName === null ? false : userName !== '' ? false : true}
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        placeholder={'Ex: Saul Ramirez'}
                    />
                </InputGroup>
            </FormGroup>
            <Button
                disabled={isLoading}
                onClick={!userName || !password || !email ? check : submit}
                type={'button'}
                className={'w-100'}
            >
                Qabul qilish {isLoading && <Spinner size='sm' />}
            </Button>
        </Form>
    )
}

export default Second
