import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

// Mock props for the BookingForm component
const mockAvailableTimes = ['17:00', '18:00', '19:00'];
const mockDispatch = jest.fn(); // Mock dispatch function

test('Renders the "Choose date" label in BookingForm', () => {
    // Render the component with mock props
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

    // Find the label element by its text content
    // Using a case-insensitive regex to be more robust
    const labelElement = screen.getByText(/choose date/i);

    // Assert that the element is present in the document
    expect(labelElement).toBeInTheDocument();
});

test('Renders the "Choose time" label in BookingForm', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText(/choose time/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the "Number of guests" label in BookingForm', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText(/number of guests/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the "Occasion" label in BookingForm', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText(/occasion/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the submit button in BookingForm', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    // Find by role and name (accessible name)
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
});
