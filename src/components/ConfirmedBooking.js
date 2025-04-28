import React from 'react';
// import { Link } from 'react-router-dom'; // Uncomment if using Link

function ConfirmedBooking() {
  return (
    // Add section wrapper and ARIA label
    <section aria-labelledby="confirmation-title" className="confirmed-booking" style={{ textAlign: 'center', padding: '40px', minHeight: '200px' }}>
      <h1 id="confirmation-title">Booking Confirmed!</h1>
      <p>Thank you for your reservation. We look forward to welcoming you to Little Lemon!</p>
      {/* Optionally add a link back to the homepage */}
      {/* <Link to="/">Back to Home</Link> */}
    </section>
  );
}

export default ConfirmedBooking;
