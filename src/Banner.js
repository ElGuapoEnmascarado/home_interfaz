import React, { useState, useEffect } from 'react';

function Banner() {
    const images = [
        "/assets/images/michael-wave-gVkAiPchYhY-unsplash.jpg",
        "/assets/images/aneta-pawlik-GJwKzsxUQu4-unsplash.jpg",
        "/assets/images/aniket-narula-5_mQ5qhfCE4-unsplash.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={currentImage === index ? 'active' : ''}
                />
            ))}
            <div className="banner-content">
                <h1>EventMate</h1>
                <p>Tu amigo para una planeación de eventos sencilla y cómoda</p>
                <br />
                <a href="/contacto_pagina/contacto.html" className="btn-contact">Contacto</a>
            </div>
        </div>
    );
}

export default Banner;
