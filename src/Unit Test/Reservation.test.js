import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Reservation from "../components/Reservation";

test('render reservation component', () => {
  render( <MemoryRouter><Reservation/></MemoryRouter>);
  const headingElement = screen.getByTestId('reserve-table');
  expect(headingElement).toBeInTheDocument();
  screen.getByText('Reserve a table');
  // expect(headingElement).toHaveTextContent('Reserve a table');
})





















// // Mock the useNavigate hook
// jest.mock("react-router-dom", () => ({
//   useNavigate: jest.fn(),
// }));

// describe("Reservation Component", () => {
//   it("renders the component without errors", () => {
//     const { getByText, getByLabelText } = render(<Reservation />);
    
//     // Check that the component renders successfully
//     expect(getByText("Reserve a table")).toBeInTheDocument();

//     // Example: Check for an element by its label text
//     expect(getByLabelText("Seating options :")).toBeInTheDocument();
//   });

//   it("handles changes in seating options", () => {
//     const { getByLabelText } = render(<Reservation />);

//     // Check that the standard checkbox can be checked and unchecked
//     const standardCheckbox = getByLabelText("Standard");
//     fireEvent.click(standardCheckbox);
//     expect(standardCheckbox).toBeChecked();
//     fireEvent.click(standardCheckbox);
//     expect(standardCheckbox).not.toBeChecked();

//     // Similar checks for the outdoor checkbox
//     const outdoorCheckbox = getByLabelText("Outdoor");
//     fireEvent.click(outdoorCheckbox);
//     expect(outdoorCheckbox).toBeChecked();
//     fireEvent.click(outdoorCheckbox);
//     expect(outdoorCheckbox).not.toBeChecked();
//   });

//   // You can write similar tests for other form elements and interactions.

//   it("handles form submission with incomplete data", () => {
//     const { getByText } = render(<Reservation />);
//     const submitButton = getByText("Submit");

//     // Click the submit button without checking any checkboxes
//     fireEvent.click(submitButton);

//     // Check that an error message is displayed
//     expect(getByText("Oops! The form is uncompleted")).toBeInTheDocument();
//   });

//   it("handles form submission with complete data", () => {
//     const { getByText, getByLabelText } = render(<Reservation />);
//     const submitButton = getByText("Submit");

//     // Check the standard checkbox
//     const standardCheckbox = getByLabelText("Standard");
//     fireEvent.click(standardCheckbox);

//     // Click the submit button
//     fireEvent.click(submitButton);

//     // Check that the component navigates to the confirmation page
//     // You need to mock the useNavigate hook for this to work
//     expect(submitButton).toHaveProperty("navigate");
//   });
// });
