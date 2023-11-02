import Layout from "../../components/layout/layout";
import React, { useState, useEffect } from 'react';
import { Route, useParams } from "react-router-dom";
import { product } from '../../products';
import SlideId from './slide_id';
import "./id.css";

function ProductDetails() {
    const { id } = useParams();
    const getProductById = product.find(item => item.id == id);
    const descriptionArray = getProductById.Featured.split("|").map(item => item.trim()).filter(item => item);
    const images = [getProductById.Image, getProductById.Image2, getProductById.Image3, getProductById.Image4];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    return (
        <Layout>
            <div className="product-details-container">
                <div className="thumbnail-images">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`thumbnail-image ${index === currentIndex ? 'selected' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img className="thumbnail-img-style" src={image} alt={getProductById.Title} />
                        </div>
                    ))}
                </div>
                <div className="product-images">
                    <div className="image-swiper">
                        <SlideId imageUrl={images[currentIndex]} />
                        <div className="slider-controls">
                            <button className="slider-control left" onClick={prevSlide}>&#9664;</button>
                            <button className="slider-control right" onClick={nextSlide}>&#9654;</button>
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <p className="product-title">{getProductById.Title}</p>
                    <p className="product-name">{getProductById.Name}</p>
                    <p className="product-description">{getProductById.Description}</p>
                    <ul className="product-features">
                        {descriptionArray.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="product-material">{getProductById.Material}</p>
                    <p className="product-made-in">{getProductById.MadeIn}</p>
                    <p className="product-price">&#8364;{getProductById.Price} EUR</p>
                    <div className="product-actions">
                        <select className="select-size-element" id="size">
                            <option selected disabled>select a size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        <button className="add-to-bag">ADD TO BAD</button>
                        <button className="add-to-wishlist">ADD TO WISHLIST</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetails;