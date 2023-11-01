import { render, screen } from '@testing-library/react';
import { updateTimes, initializeTimes, App } from './App';


test('renders learn react link', () => {
  render( <App/>);  
  const headingElement = screen.getByTestId('little');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent('Little Lemon');
});

test('updateTimes returns the same state', () => {
  const initialState = '14:00';
  const action = { type: 'SOME_ACTION_TYPE' };
  const result = updateTimes(initialState, action);
  expect(result).toBe(initialState);
});

test('initializeTimes returns the expected value', () => {
  const result = initializeTimes();
  expect(result).toBe('14:00');
});
