import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  it("renders the home page by default", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Check that the home page content is rendered
    expect(getByText("Home Page")).toBeInTheDocument(); // Replace with your actual home page content
  });

  it("renders the home page when /home route is accessed", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>
    );

    // Check that the home page content is rendered
    expect(getByText("Home Page")).toBeInTheDocument(); // Replace with your actual home page content
  });

  it("renders the reservation page when /reservationpage route is accessed", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/reservationpage"]}>
        <App />
      </MemoryRouter>
    );

    // Check that the reservation page content is rendered
    expect(getByText("Reservation Page")).toBeInTheDocument(); // Replace with your actual reservation page content
  });

  it("renders the confirmation page when /confirmationpage route is accessed", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/confirmationpage"]}>
        <App />
      </MemoryRouter>
    );

    // Check that the confirmation page content is rendered
    expect(getByText("Confirmation Page")).toBeInTheDocument(); // Replace with your actual confirmation page content
  });

  it("renders the confirmed page when /confirmedpage route is accessed", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/confirmedpage"]}>
        <App />
      </MemoryRouter>
    );

    // Check that the confirmed page content is rendered
    expect(getByText("Confirmed Page")).toBeInTheDocument(); // Replace with your actual confirmed page content
  });
});
