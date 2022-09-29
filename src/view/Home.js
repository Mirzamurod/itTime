import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) navigate('/login')
    }, [token, navigate])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
