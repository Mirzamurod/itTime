import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupText,
    Label,
    Row,
} from 'reactstrap'
import { userEmail } from '../../redux'

const Email = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState(null)

    const { emailUser } = useSelector(state => state.forgotPassword)

    function check() {
        if (email === null) setEmail('')
        else dispatch(userEmail(email))
    }

    useEffect(() => {
        if (emailUser) {
            localStorage.setItem('email', email)
            navigate('/forgotpassword/parol')
        }
    }, [emailUser, navigate, email])

    return (
        <Row>
            <Col md='4' className='position'>
                <div className='register'>
                    <h2>Parolni unutdingizmi?</h2>
                    <p>Agar parolni unutgan bo'lsangiz, parolni tiklang!</p>
                    <Form>
                        <FormGroup>
                            <Label for='exampleEmail'>Electron pochta</Label>
                            <InputGroup className={email === '' ? 'error' : ''}>
                                <InputGroupText>
                                    <i className='fa-sharp fa-solid fa-at'></i>
                                </InputGroupText>
                                <Input
                                    invalid={email === null ? false : email !== '' ? false : true}
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    placeholder={'ex@example.com'}
                                />
                            </InputGroup>
                        </FormGroup>
                        <Button type='button' onClick={check} className='w-100'>
                            Qabul qilish
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default Email
