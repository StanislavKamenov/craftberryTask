import React, { useEffect, useState, useCallback } from 'react';
import resultsImage from '../../assets/ResultsImage.png';
import { useNavigate } from 'react-router';
import './Results.css';
import '../../App.css';

const PRODUCTS_API = 'https://jeval.com.au/collections/hair-care/products.json?page=1';

const Results = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const fetchProducts = useCallback(async () => {
        try {
            const response = await fetch(PRODUCTS_API);
            const data = await response.json();
            setProducts(data.products);
        } catch {
            return
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, [products.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    }, [products.length]);

    const displayedProducts = products.slice(currentIndex, currentIndex + 2);

    return (
        <div className='finalPage'>
            <img src={resultsImage} alt='results' className='full-size-image-results' />
            <div className="centered-text-final-page">
                <h1 className='bigText'>Build your everyday self care routine.</h1>
                <p className='smallText'>
                    Perfect for if you're looking for soft, nourished skin, our moisturizing body washes 
                    are made with skin-natural nutrients that work with your skin to replenish moisture. 
                    With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. 
                    By choosing relaxing fragrances, you can add a moment of calm to the end of your day.
                </p>
                <button className='retakeButton' onClick={() => navigate('/quiz')}>Retake Quiz</button>
            </div>

            <div className='cards'>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <ProductCard 
                    title="Daily routine" 
                    description="Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day."
                />
                {displayedProducts.map((product, index) => (
                    <ProductCard 
                        key={index} 
                        title={product.title} 
                        price={`$${product.variants[0].price}`} 
                        imageSrc={product.images[0].src}
                    />
                ))}
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

const ProductCard = ({ title, description, price, imageSrc }) => (
    <div className='card'>
        {imageSrc && <img src={imageSrc} alt={title} className='product-image' />}
        <h3>{title}</h3>
        {price && <p className='price'>{price}</p>}
        {description && <p className='description'>{description}</p>}
    </div>
);

export default Results;
