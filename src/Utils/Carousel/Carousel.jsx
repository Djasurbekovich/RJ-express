import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './Carousel.scss';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            position: 'absolute',
            alignSelf: 'center',
            border: 'none',
            color: '#000000',
            background: 'initial',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '50px',
            textAlign: 'center',
            zIndex: '1',
            right: '220px',
          },
          children: <span>{`>>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            position: 'absolute',
            alignSelf: 'center',
            border: 'none',
            color: '#000000',
            background: 'initial',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '50px',
            textAlign: 'center',
            zIndex: '1',
            left: '220px',
          },
          children: <span>{`<<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
          },
        ]}
        speed={300}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className='carousel'>
            <img className='carousel__img' src="src/assets/Imgs/image 1.svg" alt="Truck" />
        </div>
        <div className='carousel'>
            <img className='carousel__img' src="src/assets/Imgs/image 1.svg" alt="Truck" />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;