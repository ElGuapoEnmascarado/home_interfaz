import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Section from './Section';
import Card from './Card';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Nav />
            <Banner />
            <div className="content">
                <Section
                    title="Catering"
                    text="Encuentra a tu proveedor ideal en nuestra amplia selección. Ofrecemos una variedad de opciones de catering, incluyendo opciones veganas y tomando en cuenta las restricciones de tus invitados."
                    imgSrc="/assets/images/aniket-narula-5_mQ5qhfCE4-unsplash.jpg"
                    link="../catering/catering.html"
                />
                <Section
                    title="Mobiliario"
                    text="Nuestra colección de mobiliario incluye sillas y mesas elegantes para darle armonía a tu evento."
                    imgSrc="/assets/images/nick-fewings-yzqR-1tZVKI-unsplash-2.jpg"
                    link="../inmobiliario/inmobiliario.html"
                />
            </div>
            <hr className="section-divider" />
            <div className="cards-container">
                <Card
                    imgSrc="/assets/images/b1.webp"
                    title="Indoor Venue"
                    capacity="150"
                    price="50,000"
                />
                <Card
                    imgSrc="/assets/images/b2.webp"
                    title="Rooftop Venue"
                    capacity="200"
                    price="70,000"
                />
                <Card
                    imgSrc="/assets/images/b3.webp"
                    title="Poolside Venue"
                    capacity="100"
                    price="40,000"
                />
                <Card
                    imgSrc="/assets/images/b4.webp"
                    title="Historic Venue"
                    capacity="120"
                    price="60,000"
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
