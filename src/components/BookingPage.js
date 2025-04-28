import React from 'react'; // Keep only one React import
import BookingForm from './BookingForm';

// Accept availableTimes, dispatch, and submitForm as props
function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    // Add a section wrapper for semantic structure and potential ARIA labeling
    <section aria-labelledby="booking-page-title" style={{ padding: '20px' }}>
      <h1 id="booking-page-title">Book a Table</h1>
      {/* Pass all relevant props down to BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
