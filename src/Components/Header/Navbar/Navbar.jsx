import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Utils/Components';
import '../Header.scss';

const Navbar = () => {
    return (
        <nav className='header__nav'>
            <Link className='header__logo'>
                <img src="src/assets/Imgs/Layer 4 1.svg" alt="Logo" />
            </Link>
            <ul className='header__list'>
                <Link to='/' className='header__item'>
                    Home
                </Link>
                <Link to='/aboutCompany' className='header__item'>
                    About us
                </Link>
                <Link to='/services' className='header__item'>
                    Services
                </Link>
                <Link to='/blog' className='header__item'>
                    Blog
                </Link>
                <Link to='/contact' className='header__item'>
                    Contact
                </Link>
                <div className='header__select'>
                    <img src="src/assets/Imgs/Ellipse 8.svg" alt="USA" />
                    <select className='header__option'>
                        <option>EN</option>
                    </select>
                </div>
                <div className='header__btns'>
                    <Button type={'light'} text='For driver'/>
                    <Button type={'dark'} text='Get quote'/>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;