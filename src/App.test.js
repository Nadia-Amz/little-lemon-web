import { render, screen } from '@testing-library/react';
import { fetchAvailableTimes, updateTimes, initializeTimes, App } from './App';


test('renders learn react link', () => {
  render( <App/>);  
  const headingElement = screen.getByTestId('little');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent('Little Lemon');
});


jest.mock('./App', () => ({
  ...jest.requireActual('./App'), 
  fetchAvailableTimes: jest.fn(),
}));

describe('initializeTimes', () => {
  test('it should return available times for the current date', () => {
    const originalDateNow = Date.now;
    Date.now = () => new Date('2023-11-06T12:00:00Z').valueOf();

    const result = initializeTimes();

    expect(result).toEqual(['14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 ']);

    Date.now = originalDateNow;
  });
 });

describe('updateTimes', () => {
  test('it should select times for a new date', () => {
    const state = [];
    const action = { type: 'SELECT_DATE', newDate: '2023-11-05' };

    const result = updateTimes(state, action);

    expect(result).toEqual(['18:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 ']);
  });

  test('it should reserve an hour and update available times', () => {
    const state = ['18:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 '];
    const action = { type: 'RESERVE_HOUR', date: '2023-11-05', hour: '18:00 ' };

    const result = updateTimes(state, action);

    expect(result).toEqual(['19:00 ', '20:00 ', '21:00 ', '22:00 ']);
  });

  test('it should return the current state for an unknown action', () => {
    const state = ['19:00 ', '20:00 '];
    const action = { type: 'UNKNOWN_ACTION' };

    const result = updateTimes(state, action);

    expect(result).toEqual(['19:00 ', '20:00 ']);
  });
});

