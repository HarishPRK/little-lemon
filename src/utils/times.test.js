import { initializeTimes, updateTimes } from './times';

// Mock the global fetchAPI function before running tests
// We assume window object exists in the test environment (like JSDOM)
const mockFetchAPI = jest.fn();
window.fetchAPI = mockFetchAPI;

describe('Time Utility Functions', () => {

  // Reset mocks before each test
  beforeEach(() => {
    mockFetchAPI.mockClear();
  });

  // Test for initializeTimes
  test('initializeTimes should call fetchAPI with today\'s date and return its result', () => {
    const expectedTimes = ['10:00', '11:00', '12:00']; // Mock API response
    mockFetchAPI.mockReturnValue(expectedTimes); // Setup mock return value

    const actualTimes = initializeTimes();

    // Check if fetchAPI was called correctly (with a Date object)
    expect(mockFetchAPI).toHaveBeenCalledTimes(1);
    expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
    // Check if the returned value matches the mock API response
    expect(actualTimes).toEqual(expectedTimes);
  });

  // Test for updateTimes
  test('updateTimes should call fetchAPI with the selected date and return its result', () => {
    const currentState = ['17:00', '18:00']; // Example current state (not really used by fetchAPI)
    const testDate = '2025-12-25';
    const action = { type: 'DATE_CHANGE', date: testDate };
    const expectedNewTimes = ['19:00', '20:00', '21:00']; // Mock API response for testDate
    mockFetchAPI.mockReturnValue(expectedNewTimes); // Setup mock return value

    const newState = updateTimes(currentState, action);

    // Check if fetchAPI was called correctly
    expect(mockFetchAPI).toHaveBeenCalledTimes(1);
    // Check if it was called with a Date object representing the testDate
    // Need to compare date parts as object equality won't work directly
    const expectedDateArg = new Date(testDate);
    const actualDateArg = mockFetchAPI.mock.calls[0][0]; // Get the first argument of the first call
    expect(actualDateArg.getFullYear()).toEqual(expectedDateArg.getFullYear());
    expect(actualDateArg.getMonth()).toEqual(expectedDateArg.getMonth());
    expect(actualDateArg.getDate()).toEqual(expectedDateArg.getDate());

    // Check if the returned state matches the mock API response
    expect(newState).toEqual(expectedNewTimes);
  });

  test('updateTimes should return current state for other action types', () => {
    const currentState = ['17:00', '18:00'];
    const action = { type: 'SOME_OTHER_ACTION' };
    const newState = updateTimes(currentState, action);

    // Expect fetchAPI not to have been called for other actions
    expect(mockFetchAPI).not.toHaveBeenCalled();
    // Expect state to remain unchanged
    expect(newState).toEqual(currentState);
  });

});
