import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import BrandLogo from '../app/assests/img/UI/logo.png'
import NavDropdown from './NavDropdown';
import { setActiveTab } from '../pages/tabSlice';
import { useDispatch } from 'react-redux';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateLocationsTab = (tab) => {
        dispatch(setActiveTab(tab));
        navigate('/locations');
    }

    return (
        <Navbar dark sticky='top' expand='xl' className='py-3 px-5'>
            <NavbarBrand className='ps-5' href='/'>
                <img src={BrandLogo} height='30px' alt='Tamamura Honten' />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse navbar isOpen={menuOpen}>
                <Nav className='ms-auto'>
                    <NavItem>
                        <Button className='nav-link' onClick={() => navigateLocationsTab('1')}>
                            玉村本店について
                        </Button>
                    </NavItem>
                    <NavItem>
                        <Button className='nav-link' onClick={() => navigateLocationsTab('3')}>
                            直営ビアレストラン＆バー
                        </Button>
                    </NavItem>
                    <NavItem>
                        <NavDropdown />
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' href='http://slowbrewing.blog104.fc2.com/' target='_blank' rel='noreferrer'>
                            醸造責任者のブログ  <i className='fa fa-clone fa-flip-horizontal' style={{ position: 'relative', bottom: '2px', left: '4px', fontSize: 'x-small' }} />
                        </a>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    );
};

export default Header;