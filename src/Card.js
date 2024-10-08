import React, { useState } from 'react';

function Card({ imgSrc, title, capacity, price }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="card-back">
                    <h1>{title}</h1>
                    <p>Capacity: {capacity} people</p>
                    <p>Min. Price: ${price}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
