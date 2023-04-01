import React from 'react';
import '../../Components/Main/Main.scss';

const Services = () => {
    return (
        <section className='sect-2'>
            <h2 className='sect-2__title1'>Our services</h2>
            <ul className='sect-2__list'>
                <li className='sect-2__item'>
                    <h3 className='sect-2__title'>Dry van</h3>
                    <p className='sect-2__text'>Dry Van services and their consolidation requires a lot of experience to ensure...</p>
                    <img className='sect-2__img' src="src/assets/Imgs/one-truck 1.svg" alt="Truck" />
                </li>
                <li className='sect-2__item'>
                    <h3 className='sect-2__title'>Refeer</h3>
                    <p className='sect-2__text'>Dry Van services and their consolidation requires a lot of experience to ensure...</p>
                    <img className='sect-2__img' src="src/assets/Imgs/one-truck 2.svg" alt="Truck" />
                </li>
                <li className='sect-2__item'>
                    <h3 className='sect-2__title'>Expedited</h3>
                    <p className='sect-2__text'>Dry Van services and their consolidation requires a lot of experience to ensure...</p>
                    <img className='sect-2__img' src="src/assets/Imgs/one-truck 3.svg" alt="Truck" />
                </li>
            </ul>
        </section>
    );
}

export default Services;