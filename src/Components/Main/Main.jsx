import React from 'react';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import Services from '../../Pages/Services/Services';
import Container from '../../Utils/Container/Container';
import './Main.scss';

const Main = () => {
    return (
        <Container>
            <div className='sect'>
                <AboutUs/>
                <Services/>
                <Blog/>
                <Contact/>
            </div>
        </Container>
    );
}

export default Main;