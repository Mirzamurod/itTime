import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    Spinner,
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux'
import toast from 'react-hot-toast'
import '../Register/index.css'

const Index = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user } = useSelector(state => state.login)

    function onSubmit(e) {
        e.preventDefault()
        dispatch(userLogin({ email: e.target[0].value, password: e.target[1].value }))
    }

    useEffect(() => {
        if (user) {
            if (user.status == 200) {
                localStorage.setItem('token', user?.token ?? '')
                navigate('/home')
            } else toast.error("Elektron pochta yoki parol noto'g'ri")
        }
    }, [user])

    return (
        <Row>
            <Col md='4' className='position'>
                <div className='register'>
                    <h2>Login</h2>
                    <p>
                        Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir
                        tizimga kiring!
                    </p>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for='exampleEmail'>Elektron pochta</Label>
                            <InputGroup>
                                <InputGroupText>
                                    <i className='fa-solid fa-at'></i>
                                </InputGroupText>
                                <Input required type={'email'} placeholder={'Ex. Saul Ramirez'} />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for='exampleEmail'>Parol</Label>
                            <InputGroup>
                                <InputGroupText>
                                    <i className='fa-solid fa-lock'></i>
                                </InputGroupText>
                                <Input required type={'password'} placeholder={'********'} />
                            </InputGroup>
                        </FormGroup>
                        <Link className={'forget-password'} to={'/forgotpassword/email'}>
                            Parolni unutdingizmi?
                        </Link>
                        <Button disabled={isLoading} type={'submit'} className={'w-100'}>
                            Kirish {isLoading && <Spinner size='sm' />}
                        </Button>
                    </Form>
                    <div className={'d-flex justify-content-center my-3 login-register'}>
                        <p className={'mx-2'}> Accountingiz mavjud emasmi?</p>
                        <Link to={'/register'}>Ro‘yxatdan o‘tish</Link>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Index
