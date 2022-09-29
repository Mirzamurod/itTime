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
    Label,
    Row,
} from 'reactstrap'
import { userParol } from '../../redux'

const Parol = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [parol, setParol] = useState(null)

    const { parolUser } = useSelector(state => state.forgotPassword)

    function check() {
        if (parol === null) setParol('')
        else dispatch(userParol(parol))
    }

    useEffect(() => {
        if (parolUser) navigate('/forgotpassword/password')
    }, [parolUser, navigate])

    return (
        <Row>
            <Col md='4' className='position'>
                <div className='register'>
                    <h2>Parolni unutdingizmi?</h2>
                    <p>Biz sizning elektron pochtangizga tasdiqlash kodi bilan xat yubordik!</p>
                    <Form>
                        <FormGroup>
                            <Label for='exampleEmail'>Verification code</Label>
                            <InputGroup className={parol === '' ? 'error' : ''}>
                                <Input
                                    invalid={parol === null ? false : parol !== '' ? false : true}
                                    onChange={e => setParol(e.target.value)}
                                    value={parol}
                                    placeholder={'EX. 12345'}
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

export default Parol
