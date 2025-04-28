import React, { useState } from 'react';

// Accept availableTimes, dispatch, and submitForm as props
function BookingForm({ availableTimes, dispatch, submitForm }) {
  // Define state variables for each field
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('None');

  // Handler for date change - updates local state and dispatches action
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate); // Update local date state
    // Dispatch action to potentially update times based on the new date
    dispatch({ type: 'DATE_CHANGE', date: newDate });
  };

  // Submit handler - calls the submitForm prop from Main
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Call the submitForm function passed via props, with the current state
    submitForm({ date, time, guests, occasion });
  };

  // Simple validation logic
  const isFormValid = date && time && guests >= 1;

  return (
    // Add noValidate to rely more on React validation for enabling/disabling submit
    <form style={{ display: 'grid', maxWidth: '300px', gap: '20px' }} onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange} // Use the combined handler
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time} // Bind value to state
        onChange={(e) => setTime(e.target.value)} // Update state on change
        required
      >
        <option value="" disabled>Select a Time</option>
        {/* Map over availableTimes prop to create options */}
        {availableTimes && availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests} // Bind value to state
        onChange={(e) => setGuests(parseInt(e.target.value, 10))} // Update state on change
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion} // Bind value to state
        onChange={(e) => setOccasion(e.target.value)} // Update state on change
      >
        <option value="None">None</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Disable button based on validation */}
      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid} // Disable if form is not valid
        aria-disabled={!isFormValid} // Accessibility
      />
    </form>
  );
}

export default BookingForm;
