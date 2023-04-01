import React from 'react';
import ReactSimplyCarouselExample from '../../Utils/Carousel/Carousel';
import '../../Components/Main/Main.scss'

const AboutUs = () => {
    return (
        <section className='sect-1'>
            <div>
                <h2 className='sect-1__title'>
                    About Company
                </h2>
                <center>
                    <p className='sect-1__text'>
                        Trucking-Times is an active participant in the transport and logistics market of USA, providing a full range of services for the transportation of goods of any complexity. 
                    </p>
                </center>
            </div>
            <div>
                <ReactSimplyCarouselExample/>
            </div>
        </section>
    );
}

export default AboutUs;