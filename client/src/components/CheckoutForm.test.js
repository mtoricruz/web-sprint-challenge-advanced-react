import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // render the CheckoutForm component
    const { getByLabelText } = render(<CheckoutForm />)
    // query for the form fields - fName, lName, address, city, state, zip
    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const addressInput = getByLabelText(/address/i)
    const cityInput = getByLabelText(/city/i)
    const stateInput = getByLabelText(/state/i)
    const zipInput = getByLabelText(/zip/i)
    // assert that all form fields are rendered
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId } = render(<CheckoutForm />)
    // const firstNameInput = getByLabelText(/first name/i)
    // const lastNameInput = getByLabelText(/last name/i)
    // const addressInput = getByLabelText(/address/i)
    // const cityInput = getByLabelText(/city/i)
    // const stateInput = getByLabelText(/state/i)
    // const zipInput = getByLabelText(/zip/i)
    // const checkoutButton = getByTestId(/checkout/i)

    // assert that all form fields are rendered

    // expect(firstNameInput).toBeInTheDocument();
    // expect(lastNameInput).toBeInTheDocument();
    // expect(addressInput).toBeInTheDocument();
    // expect(cityInput).toBeInTheDocument();
    // expect(stateInput).toBeInTheDocument();
    // expect(zipInput).toBeInTheDocument();
    // expect(checkoutButton).toBeInTheDocument();
    
    // automate and checkout
    fireEvent.change(getByLabelText(/first name/i), { target: { value: 'Holttasdfasd' } })
    fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Holttd' } })
    fireEvent.change(getByLabelText(/address/i), { target: { value: '23 23rd #23'} })
    fireEvent.change(getByLabelText(/city/i), { target: { value: 'TestCity'} })
    fireEvent.change(getByLabelText(/state/i), { target: { value: 'Oregon'} })
    fireEvent.change(getByLabelText(/zip/i), { target: { value: '45681'} })
    fireEvent.click(getByTestId(/checkout/i))
    // expect(checkoutButton)
    const successMessage = getByTestId(/successmessage/i)
    expect(successMessage).toBeInTheDocument();
});
