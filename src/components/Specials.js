import React from 'react';

import { Link } from 'react-router-dom'; // For "Order" links

// Placeholder data for specials
const specialsData = [
  {
    imgSrc: '%PUBLIC_URL%/greek_salad.jpg', // Replace with actual image path in public folder
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    imgSrc: '%PUBLIC_URL%/bruchetta.jpg', // Replace with actual image path in public folder
    title: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    imgSrc: '%PUBLIC_URL%/lemon_dessert.jpg', // Replace with actual image path in public folder
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

function Specials() {
  return (
    // Add role and aria-labelledby
    <section className="specials container" role="region" aria-labelledby="specials-heading"> {/* Added container class */}
      <div className="specials-header">
        <h2 id="specials-heading">This week's specials!</h2>
        <Link to="/menu" className="button primary-button">Online Menu</Link>
      </div>
      <div className="specials-cards">
        {specialsData.map((item) => (
          <article key={item.title} className="special-card">
            {/* Remove card-image img tag for now */}
            {/* <img src={item.imgSrc} alt={item.title} className="card-image" /> */}
            <div className="card-content">
              <div className="card-title-price">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
              </div>
              <p className="card-description">{item.description}</p>
              <Link to="/order" className="card-link">Order a delivery</Link> {/* Link to potential order page */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
