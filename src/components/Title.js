import React from 'react';

const Title = (props) => {
    return (
        <div className='title__wrapper'>
            <div className='title'>{props.title}</div>
            <div className='subtitle'>{props.subtitle}</div>
        </div>
    );
};

export default Title;