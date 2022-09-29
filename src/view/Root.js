import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Root = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/home')
    }, [navigate])

    return
}

export default Root
