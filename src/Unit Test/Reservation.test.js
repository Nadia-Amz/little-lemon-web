import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Reservation from "../components/Reservation";

test('render reservation component', () => {
  render( <MemoryRouter><Reservation/></MemoryRouter>);
  const headingElement = screen.getByTestId('reserve-table');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent('Reserve a table');
})

// describe("Reservation Form Validation", () => {
//   it("displays an error message when submitting with invalid data", () => {
//   render( <MemoryRouter><Reservation/></MemoryRouter>);

//     const occasionSelect = screen.getByLabelText("Occasion :");
//     const partySizeSelect = screen.getByLabelText("Party size :");
//     const dateInput = screen.getByLabelText("Date :");
//     const timeSelect = screen.getByLabelText("Time :");
//     const submitButton = screen.getByText("Submit");

//     fireEvent.click(submitButton);

//     expect(screen.getByText("Please select a seating option")).toBeInTheDocument();
//     expect(screen.getByText("Please select an occasion")).toBeInTheDocument();
//     expect(screen.getByText("Please select a party size")).toBeInTheDocument();
//     expect(screen.getByText("Please select a date")).toBeInTheDocument();
//     expect(screen.getByText("Please select a time")).toBeInTheDocument();
//   });

//   it("displays no error message when all fields are filled correctly", () => {
//     render(<Reservation />);

//     const occasionSelect = screen.getByLabelText("Occasion :");
//     const partySizeSelect = screen.getByLabelText("Party size :");
//     const dateInput = screen.getByLabelText("Date :");
//     const timeSelect = screen.getByLabelText("Time :");
//     const standardCheckbox = screen.getByLabelText("Standard");
//     const submitButton = screen.getByText("Submit");

//     fireEvent.select(occasionSelect, { target: { value: "birthday" } });
//     fireEvent.select(partySizeSelect, { target: { value: "2people" } });
//     fireEvent.input(dateInput, { target: { value: "2023-11-15" } });
//     fireEvent.select(timeSelect, { target: { value: "12:00 PM" } });
//     fireEvent.click(standardCheckbox);
//     fireEvent.click(submitButton);

//     expect(screen.queryByText("Please select a seating option")).toBeNull();
//     expect(screen.queryByText("Please select an occasion")).toBeNull();
//     expect(screen.queryByText("Please select a party size")).toBeNull();
//     expect(screen.queryByText("Please select a date")).toBeNull();
//     expect(screen.queryByText("Please select a time")).toBeNull();
//   });
// });


















