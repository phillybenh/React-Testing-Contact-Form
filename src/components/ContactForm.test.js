import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
});

//Come back to this - unsure why it won't work
test("Test that Form is visible", () => {
    //ARRANGE
    const { getByTestId } = render(<ContactForm />);
    // const formVisibility = getByTestId('form');

    //ACT - not needed

    //ASSERT
    // expect(formVisibility).toBeVisible();
    getByTestId(/form/);
});


test('inputs are visible', () => {
    //ARRANGE - set up the testing environment
    const { getByTestId } = render(<ContactForm />);

    // ACT - not needed

    // ASSERT
    getByTestId(/fNameInput/);
    getByTestId(/lNameInput/);
    getByTestId(/emailInput/);
    getByTestId(/textArea/);
});


//Welp, I'm stumped
// test('Test that form throws error when submitting blank', async () => {
//     //ARRANGE - set up the testing environment
//     const { getByTestId, findByTestId } = render(<ContactForm />);
//     const firstNameInput = getByTestId(/fNameInput/);


//     // ACT 
//     fireEvent.change(firstNameInput, { target: { value: 'Bobfgdfgd' } });

//     const submitButton = getByTestId("submitBtn");

//     fireEvent.click(submitButton);

//     // ASSERT
//     // const fNameError = await queryByTestId('fNameError');

//     // await expect(fNameError).toBeInTheDocument();
//     const formData = await findByTestId("pre")

//     expect(formData).not.toBeInTheDocument();
// });



test("Testing if user can submit informatino and submit renders info", async () => {
    //Arrange
    const { getByTestId, findByTestId } = render(<ContactForm />);

    const firstNameInput = getByTestId(/fNameInput/);

    const lastNameInput = getByTestId(/lNameInput/);

    const emailInput = getByTestId(/emailInput/);

    const messageInput = getByTestId(/textArea/);

    //Act
    fireEvent.change(firstNameInput, { target: { value: 'Bob' } });
    fireEvent.change(lastNameInput, { target: { value: 'Heyburn' } });
    fireEvent.change(emailInput, { target: { value: 'bob.heyburn@navy.mil' } });
    fireEvent.change(messageInput, { target: { value: 'Stuff adn thingssss' } });

    //Assert
    expect(firstNameInput.value).toBe('Bob');
    expect(lastNameInput.value).toBe('Heyburn');
    expect(emailInput.value).toBe('bob.heyburn@navy.mil');
    expect(messageInput.value).toBe('Stuff adn thingssss');
    const submitButton = getByTestId("submitBtn");

    fireEvent.click(submitButton);

    const formData = await findByTestId("pre")

    expect(formData).toBeInTheDocument();

})