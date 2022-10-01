import { useEffect, useState } from 'react'
import First from './First'
import Second from './Second'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Col, Row } from 'reactstrap'

function Index({ step }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [fullName, setFullName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)

    const { register } = useSelector(state => state.register)

    function submit() {
        if (!fullName || !phone) {
            navigate('/register')
            toast.error("Majburiy to'ldirish")
        } else {
            dispatch(
                userRegister({ fullname: fullName, phone, password, username: userName, email })
            )
            toast.success('Success')
        }
    }

    useEffect(() => {
        if (register) {
            if (register.status == 200) navigate('/login')
        }
    }, [register])

    return (
        <Row>
            <Col md='4' className='position'>
                <div className='register'>
                    <h2>Royhatdan o'tish</h2>
                    <p>
                        Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir
                        roʻyxatdan oʻting!
                    </p>
                    {!step ? (
                        <First
                            fullName={fullName}
                            setFullName={setFullName}
                            phone={phone}
                            setPhone={setPhone}
                        />
                    ) : (
                        <Second
                            password={password}
                            setPassword={setPassword}
                            userName={userName}
                            setUserName={setUserName}
                            email={email}
                            setEmail={setEmail}
                            submit={submit}
                        />
                    )}
                    <div className={'d-flex justify-content-center my-3'}>
                        <p className={'mx-2'}> Accountingiz mavjudmi?</p>
                        <Link to={'/login'}>Kirish</Link>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Index
