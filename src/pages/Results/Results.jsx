import React, { useEffect, useState } from 'react';
import resultsImage from '../../assets/ResultsImage.png';
import './Results.css';
import '../../App.css';

function Results() {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const displayedProducts = products.slice(currentIndex, currentIndex + 2);

    return (
        <div className='finalPage'>
            <img src={resultsImage} alt='results' className='full-size-image-results' />
            <div className="centered-text-final-page">
                <h1 className='bigText'>Build your everyday self care routine.</h1>
                <p className='smallText'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients
                    that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for.
                    And by choosing relaxing fragrances you can add a moment of calm to the end of your day..</p>
                <button className='retakeButton'>Retake Quiz</button>
            </div>

            <div className='cards'>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <div className='card left-card'>
                    <h2 className='title-text'>Daily routine</h2>
                    <p className='description'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients
                        that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin
                        feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                </div>

                {displayedProducts.map((product, index) => (
                    <div className='card' key={index}>
                        <img src={product.images[0].src} alt={product.title} className='product-image' />
                        <h3>{product.title}</h3>
                        <p className='price'>${product.variants[0].price}</p>
                    </div>
                ))}
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
}

export default Results;
