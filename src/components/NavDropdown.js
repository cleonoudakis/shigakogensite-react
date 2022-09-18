import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectProductByType } from "../pages/products/productsSlice";

const NavDropdown = () => {
    const [menuOpen, toggleMenu] = useState(false);
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleDispatch = (value) => {
        const filter = {
            type: value
        }
        dispatch(selectProductByType(filter));
        navigator('/store');
    }

    return (
        <Dropdown isOpen={menuOpen} toggle={() => toggleMenu(!menuOpen)} style={{paddingLeft: '4px'}}>
            <DropdownToggle caret onClick={() => toggleMenu(!menuOpen)}>
                商品カテゴリー
            </DropdownToggle>
            <DropdownMenu className='nav-dropdown-menu'>
                <DropdownItem>
                    <span className='dropdown-link' onClick={() => handleDispatch('sake')}>
                        清酒
                    </span>
                </DropdownItem>
                <DropdownItem>
                    <span className='dropdown-link' onClick={() => handleDispatch('beer')}>
                        ビール
                    </span>
                </DropdownItem>
                <DropdownItem>
                    <span className='dropdown-link' onClick={() => handleDispatch('gift')}>
                        セット・ギフト（ギフトボックス）
                    </span>
                </DropdownItem>
                <DropdownItem>
                    <span className='dropdown-link' onClick={() => handleDispatch('good')}>
                        グッズ
                    </span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default NavDropdown;