import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Utils/Container/Container';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='footer__box1'>
                    <div className='footer__box'>
                        <Link to='tel: +1 (314) 396-6922' className='footer__tel'>+1 (314) 396-6922</Link>
                        <p className='footer__text'>If you have any questions or need help, feel free to contact us.</p>
                        <Link to='/'>
                            <img src="src/assets/Imgs/Layer 4 1.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className='footer__box'>
                        <ul className='footer__list'>
                            <Link to='/' className='footer__item'>
                                Home
                            </Link>
                            <Link to='/aboutCompany' className='footer__item'>
                                About us
                            </Link>
                            <Link to='/services' className='footer__item'>
                                Services
                            </Link>
                            <Link to='/blog' className='footer__item'>
                                Blog
                            </Link>
                            <Link to='/contact' className='footer__item'>
                                Contact
                            </Link>
                        </ul>
                        <div className="footer__webs">
                            <div className='footer__web'></div>
                            <div className='footer__web'></div>
                            <div className='footer__web'></div>
                            <div className='footer__web'></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;