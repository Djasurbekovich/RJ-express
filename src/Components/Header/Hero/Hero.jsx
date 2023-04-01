import React from 'react';
import '../Header.scss';

const Hero = () => {
    return (
        <div className='header__hero'>
            <ul className='header__hero-list'>
                <li className='header__hero-item'>
                    <strong className='header__hero-num'>240,000</strong>
                    <p className='header__hero-text'>Miles per year</p>
                </li>
                <li className='header__hero-item'>
                    <strong className='header__hero-num'>45,000</strong>
                    <p className='header__hero-text'>Delivered loadsper year</p>
                </li>
                <li className='header__hero-item'>
                    <strong className='header__hero-num'>650,000</strong>
                    <p className='header__hero-text'>Tons of annual delivered goods</p>
                </li>
                <li className='header__hero-item'>
                    <strong className='header__hero-num'>500,000</strong>
                    <p className='header__hero-text'>Happy customers</p>
                </li>
            </ul>
        </div>
    );
}

export default Hero;