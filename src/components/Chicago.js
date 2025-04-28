import React from 'react';

function Chicago() {
  return (
    // Add role and aria-labelledby and container class
    <section className="chicago-about about-section container" role="region" aria-labelledby="chicago-heading"> {/* Added container class */}
      <div className="about-content">
        <h2 id="chicago-heading">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The restaurant
          features a locally-sourced menu with daily specials. We are proud of our commitment to
          quality ingredients and warm hospitality. Come join us for a memorable dining experience!
        </p>
      </div>
      <div className="about-images">
        {/* Placeholder for overlapping images */}
        <img src="%PUBLIC_URL%/restaurant_chef_b.jpg" alt="Little Lemon Chef" className="about-image about-image-1" />
        <img src="%PUBLIC_URL%/mario_and_adrian_a.jpg" alt="Mario and Adrian, Little Lemon owners" className="about-image about-image-2" />
        {/* Note: Add 'restaurant_chef_b.jpg' and 'mario_and_adrian_a.jpg' to public folder */}
      </div>
    </section>
  );
}

export default Chicago;
