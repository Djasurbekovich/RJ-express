import React from 'react';

const Logo = () => {
    return (
        <div>
            <img src="src/assets/Imgs/Layer 4 1.svg" alt="Logo" />
        </div>
    );
}

const Button = ({type, text}) => {
    return (
        <button className={type == 'light' ? 'btn-light' : 'btn-dark'}>
            {text}
        </button>
    );
}

export {Logo, Button};