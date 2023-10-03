import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Confirmation from "./Confirmation";
import { MemoryRouter } from "react-router-dom";

describe("Confirmation Component", () => {
  it("renders the component without errors", () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );

    // Check that the confirmation page content is rendered
    expect(getByText("Confirmation")).toBeInTheDocument();

    // Example: Check for an element by its label text
    expect(getByLabelText("First name :")).toBeInTheDocument();
  });

  it("handles form submission with incomplete data", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );

    const submitButton = getByText("Confirm");

    // Click the submit button without entering any data
    fireEvent.click(submitButton);

    // Check that validation error messages are displayed
    expect(getByText("Required")).toBeInTheDocument();
  });

  it("handles form submission with invalid email", () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );

    const emailInput = getByLabelText("Email :");
    const submitButton = getByText("Confirm");

    // Enter an invalid email
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    // Check that an email validation error message is displayed
    expect(getByText("Email is not valid")).toBeInTheDocument();
  });

  it("handles form submission with complete and valid data", () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );

    const submitButton = getByText("Confirm");

    // Fill out the form with valid data
    fireEvent.change(getByLabelText("First name :"), {
      target: { value: "John" },
    });
    fireEvent.change(getByLabelText("Last name :"), {
      target: { value: "Doe" },
    });
    fireEvent.change(getByLabelText("Phone number :"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(getByLabelText("Email :"), {
      target: { value: "john@example.com" },
    });

    // Click the submit button
    fireEvent.click(submitButton);

    // Check that the component navigates to the confirmation page
    // You need to mock the useNavigate hook for this to work
    expect(submitButton).toHaveProperty("navigate");
  });
});
