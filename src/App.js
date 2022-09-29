import { Sidebar } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from './view/Root'
import Login from './view/Login'
import Register from './view/Register/'
import ForgotPassword from './view/ForgotPassword'
import Home from './view/Home'

import './App.css'
import { Container } from 'reactstrap'

function App() {
    return (
        <div>
            <Router>
                <Container>
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<Root />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register step={false} />} />
                        <Route path='/register/step' element={<Register step={true} />} />
                        <Route path='/forgotpassword/:keyword' element={<ForgotPassword />} />
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </Container>
            </Router>
        </div>
    )
}

export default App
