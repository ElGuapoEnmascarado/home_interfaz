import React from 'react';

function Section({ title, text, imgSrc, link }) {
    return (
        <div className="section">
            <div className="text">
                <h1>{title}</h1>
                <p>{text}</p>
                <br />
                <a href={link} className="btn-contact">Descubre más</a>
            </div>
            <div className="image">
                <img src={imgSrc} alt={title} />
            </div>
        </div>
    );
}

export default Section;
