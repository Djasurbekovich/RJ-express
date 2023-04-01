import React from 'react';
import '../../Components/Main/Main.scss';

const Blog = () => {
    return (
        <section className='sect-3'>
            <h2 className='sect-3__title1'>
                Blog
            </h2>
            <ul className='sect-3__list'>
                <li className='sect-3__item'>
                    <img className='sect-3__img' src="src/assets/Imgs/Rectangle 1.svg" alt="Truck" />
                    <small className='sect-3__data'>18-08-21, 14:00</small>
                    <h3 className='sect-3__title'>Performance health and life</h3>
                    <p className='sect-3__text'>No matter how we keep an eye on the truck...</p>
                </li>
                <li className='sect-3__item'>
                    <img className='sect-3__img' src="src/assets/Imgs/Rectangle 2.svg" alt="Truck" />
                    <small className='sect-3__data'>18-08-21, 14:00</small>
                    <h3 className='sect-3__title'>Performance health and life</h3>
                    <p className='sect-3__text'>No matter how we keep an eye on the truck...</p>
                </li>
                <li className='sect-3__item'>
                    <img className='sect-3__img' src="src/assets/Imgs/Rectangle 3.svg" alt="Truck" />
                    <small className='sect-3__data'>18-08-21, 14:00</small>
                    <h3 className='sect-3__title'>Performance health and life</h3>
                    <p className='sect-3__text'>No matter how we keep an eye on the truck...</p>
                </li>
                <li className='sect-3__item'>
                    <img className='sect-3__img' src="src/assets/Imgs/Rectangle 4.svg" alt="Truck" />
                    <small className='sect-3__data'>18-08-21, 14:00</small>
                    <h3 className='sect-3__title'>Performance health and life</h3>
                    <p className='sect-3__text'>No matter how we keep an eye on the truck...</p>
                </li>
            </ul>
        </section>
    );
}

export default Blog;