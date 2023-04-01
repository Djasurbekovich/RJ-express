import React from 'react';
import '../../Components/Main/Main.scss';

const Contact = () => {
    return (
        <section className='sect-4'>
            <h2 className='sect-4__title1'>Contact</h2>
            <div className='sect-4__box1'>
                <div className='sect-4__box'>
                    <h3 className='sect-4__title2'>The Republic of Panama, Panama City</h3>
                    <ul className='sect-4__list'>
                        <li className='sect-4__item'>
                            <h4 className='sect-4__title'>Adress</h4>
                            <p className='sect-4__text'>Sortis Business Tower, Office 17H Street 56/57</p>
                        </li>
                        <li className='sect-4__item'>
                            <h4 className='sect-4__title'>Contact us</h4>
                            <p className='sect-4__text'>+1 278 890 89 76 usmon.designer@mail.com</p>
                        </li>
                        <li className='sect-4__item'>
                            <h4 className='sect-4__title'>Fax</h4>
                            <p className='sect-4__text'>Sortis Business Tower, Office 17H Street 56/57</p>
                        </li>
                    </ul>
                </div>
                <div className='sect-4__box'>
                    <iframe className='sect-4__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073068887354!2d69.20162391526064!3d41.28551417927359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Talim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1678731164933!5m2!1sru!2s">
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;