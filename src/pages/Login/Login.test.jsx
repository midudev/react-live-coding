import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "./index";


describe("<LoginPage />", () => {
  test("renders without crashing", async () => {
    const { findAllByText } = render(<LoginPage />);
    const title = await findAllByText(/Login/i);
    expect(title).toBeTruthy();
  })
  
  test("renders a form with two inputs", async () => {
    const { findByPlaceholderText } = render(<LoginPage />);

    const inputEmail = await findByPlaceholderText(/username/i);
    const inputPassword = await findByPlaceholderText(/password/i);
    
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  })

  test("There is a button to submit the form", async () => {
    const { container } = render(<LoginPage />);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
  })
})