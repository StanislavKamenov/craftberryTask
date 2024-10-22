import React from 'react';
import HeaderImage from '../../assets/Rectangle.png';
import './Start.css';
import { useNavigate } from 'react-router';

const Start = () => {
    const navigate = useNavigate();
    return (
        <div className='image-container'>
            <img src={HeaderImage} alt='Header' className='full-size-image' />
            <div className='centered-text'>
                <h1 className='bigText'>Build a self care routine suitable for you</h1>
                <p className='smallText'>Take our test to get a personalised self care routine based on your needs.</p>
                <button className='startButton' onClick={() => navigate('/quiz')}>
                    Start the Quiz
                </button>
            </div>
        </div>
    );
};

export default Start;
