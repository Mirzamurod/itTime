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
import { userPassword } from '../../redux'

const Password = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [newPassword, setNewPassword] = useState(null)
    const [cPassword, setCPassword] = useState(null)

    const { passwordUser } = useSelector(state => state.forgotPassword)

    const email = localStorage.getItem('email')

    function check() {
        if (newPassword === null) setNewPassword('')
        if (cPassword === null) setCPassword('')

        if (newPassword !== cPassword) setCPassword('')
        else dispatch(userPassword({ email, newpassword: newPassword }))
    }

    useEffect(() => {
        if (passwordUser) navigate('/login')
    }, [passwordUser, navigate])

    return (
        <Row>
            <Col md='4' className='position'>
                <div className='register'>
                    <h2>Parolni unutdingizmi?</h2>
                    <p>Hisobingizga kirish uchun yange parolni o'rnating!</p>
                    <Form>
                        <FormGroup>
                            <Label for='exampleEmail'>Yangi parolni kiriting</Label>
                            <InputGroup className={newPassword === '' ? 'error' : ''}>
                                <InputGroupText>
                                    <i className='fa-solid fa-lock'></i>
                                </InputGroupText>
                                <Input
                                    invalid={
                                        newPassword === null
                                            ? false
                                            : newPassword !== ''
                                            ? false
                                            : true
                                    }
                                    onChange={e => setNewPassword(e.target.value)}
                                    value={newPassword}
                                    placeholder={'*******'}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for='exampleEmail'>Qayta yangi parol</Label>
                            <InputGroup className={cPassword === '' ? 'error' : ''}>
                                <InputGroupText>
                                    <i className='fa-solid fa-lock'></i>
                                </InputGroupText>
                                <Input
                                    invalid={
                                        cPassword === null ? false : cPassword !== '' ? false : true
                                    }
                                    onChange={e => setCPassword(e.target.value)}
                                    value={cPassword}
                                    placeholder={'*******'}
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

export default Password
