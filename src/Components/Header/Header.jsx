import React from 'react';
import Container from '../../Utils/Container/Container';
import Navbar from './Navbar/Navbar';
import './Header.scss';
import Hero from './Hero/Hero';

const Header = () => {
    return (
        <Container>
            <div className='header'>
                <Navbar/>
                <Hero/>
            </div>
        </Container>
    );
}

export default Header;