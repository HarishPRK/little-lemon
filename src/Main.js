import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HomePage from './components/HomePage'; // Import HomePage component
import BookingPage from './components/BookingPage'; // Import BookingPage component

function Main() {
  return (
    <main className="app-main">
      <Routes> {/* Define routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add routes for About, Menu, Order, Login later */}
      </Routes>
    </main>
  );
}

export default Main;
