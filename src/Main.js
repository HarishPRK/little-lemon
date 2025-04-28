import React, { useReducer } from 'react'; // Keep only one React import
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking'; // Import ConfirmedBooking
import { initializeTimes, updateTimes } from './utils/times';

// Make sure the global submitAPI function is available
const submitAPI = window.submitAPI;

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to submit form data
  const submitForm = (formData) => {
    console.log("Submitting form data:", formData);
    try {
      const success = submitAPI(formData); // Call the API
      if (success) {
        console.log("API submission successful, navigating to /confirmed");
        navigate('/confirmed'); // Navigate on success
        return true; // Indicate success
      } else {
        console.error("API submission failed.");
        // Handle submission failure (e.g., show error message)
        return false; // Indicate failure
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle submission error
      return false; // Indicate failure
    }
  };

  return (
    <main className="app-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Pass state, dispatch, and submitForm down */}
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm} // Pass submitForm function
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        {/* Add routes for About, Menu, Order, Login later */}
      </Routes>
    </main>
  );
}

export default Main;
