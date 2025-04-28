import React from 'react';

// Placeholder data for testimonials
const testimonialsData = [
  {
    rating: 5, // e.g., number of stars
    imgSrc: '%PUBLIC_URL%/customer1.jpg', // Replace with actual image path
    name: 'Jane Doe',
    review: 'Absolutely loved the authentic flavors! The atmosphere was wonderful too.',
  },
  {
    rating: 4,
    imgSrc: '%PUBLIC_URL%/customer2.jpg', // Replace with actual image path
    name: 'John Smith',
    review: 'Great food, especially the Bruchetta. Service was a bit slow but friendly.',
  },
  {
    rating: 5,
    imgSrc: '%PUBLIC_URL%/customer3.jpg', // Replace with actual image path
    name: 'Alice Green',
    review: 'The Lemon Dessert was divine! A perfect end to a lovely meal.',
  },
];

// Helper to render stars (simple example)
const renderStars = (rating) => {
  let stars = '';
  for (let i = 0; i < rating; i++) {
    stars += '⭐'; // Using emoji star
  }
  return stars;
};


function CustomersSay() {
  return (
    // Add role and aria-labelledby
    <section className="testimonials" role="region" aria-labelledby="testimonials-heading"> {/* Keep existing class, add container logic if needed via CSS */}
      <div className="container"> {/* Wrap content in container */}
        <h2 id="testimonials-heading">What our customers say!</h2>
        <div className="testimonials-cards">
        {testimonialsData.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <p className="rating">{renderStars(testimonial.rating)}</p>
            <div className="customer-info">
              <img src={testimonial.imgSrc} alt={`Photo of ${testimonial.name}`} className="customer-photo" />
              <p className="customer-name">{testimonial.name}</p>
            </div>
            <p className="review-text">"{testimonial.review}"</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
