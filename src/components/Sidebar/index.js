import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Button,
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from 'reactstrap'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Navbar color='faded' light>
            <NavbarBrand href='/' className='mr-auto'>
                Toplink
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} className='mr-2' />
            <Collapse className='ml-auto' isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink to='/login' className='nav-link register'>
                            <Button>Kirish</Button>
                        </NavLink>
                        <NavLink to='/login' className='nav-link register-bg'>
                            <Button>Ro'yxatdan o'tish</Button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sidebar
