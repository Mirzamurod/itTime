import { useLocation } from 'react-router-dom'
import Email from './Email'
import Parol from './Parol'
import Password from './Password'

const ForgotPassword = () => {
    const location = useLocation()

    return (
        <div>
            {location.pathname === '/forgotpassword/email' ? (
                <Email />
            ) : location.pathname === '/forgotpassword/parol' ? (
                <Parol />
            ) : (
                <Password />
            )}
        </div>
    )
}

export default ForgotPassword
