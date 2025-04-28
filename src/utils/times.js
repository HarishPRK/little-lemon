// Make sure the global fetchAPI function is available
// This relies on the script being loaded in index.html
const fetchAPI = window.fetchAPI;

// Initializer function for available times - uses fetchAPI
export const initializeTimes = () => {
  // Get today's date
  const today = new Date();
  // Call fetchAPI with today's date and return the result
  // Ensure fetchAPI returns an array, handle potential errors if needed
  try {
    const times = fetchAPI(today);
    // Basic validation: check if it's an array
    return Array.isArray(times) ? times : [];
  } catch (error) {
    console.error("Failed to fetch initial times:", error);
    return []; // Return empty array on error
  }
};

// Reducer function for updating times - uses fetchAPI
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'DATE_CHANGE':
      console.log("Reducer: Date changed to", action.date);
      if (!action.date) {
        return state; // Don't fetch if date is invalid
      }
      const selectedDate = new Date(action.date);
      // Call fetchAPI with the selected date
      try {
        const newTimes = fetchAPI(selectedDate);
        // Basic validation
        return Array.isArray(newTimes) ? newTimes : state; // Return new times or old state on error/invalid data
      } catch (error) {
        console.error("Failed to fetch times for selected date:", error);
        return state; // Return current state on error
      }
    default:
      return state; // Return current state for any other action type
  }
};
