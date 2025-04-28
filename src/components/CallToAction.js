import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for the button
import deliciousFoodImage from '../assets/delicious-image.jpg'; // Import the image

function CallToAction() {
  return (
    // Add role and aria-labelledby
    <section className="call-to-action hero-section" role="region" aria-labelledby="cta-heading">
      <div className="hero-content">
        <h1 id="cta-heading">Little Lemon</h1> {/* Changed to h1 */}
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        {/* Link button to the booking page */}
         <Link to="/booking" className="button primary-button">Reserve a Table</Link>
       </div>
       {/* Use the imported image */}
       <div className="hero-image">
         <img src={deliciousFoodImage} alt="Delicious restaurant food" />
       </div>
     </section>
  );
}

export default CallToAction;
