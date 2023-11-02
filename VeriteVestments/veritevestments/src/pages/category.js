import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Slider from '../components/main/content/slider';
import Layout from '../components/layout/layout';
import "./category.css";
import banner1 from "../images/banner1.jpg";
import banner2 from '../images/womenswear.jpg';
import banner3 from '../images/menswear.jpg';
import {product} from '../products';



function Category() {
    return (
        <Layout>
            <div className="main-catalog-container">
                <Slider />
                <div className="product-list">
                    {product.map((product) => (
                        <div className="product-content" key={product.id}>
                            <Link to={`/category/${product.id}`}>
                                <img className="product-image" src={product.Image} />   
                                <p>{product.Title}</p>
                                <p>{product.Name}</p>
                                <p>{product.Price}&#8364;</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Category;
