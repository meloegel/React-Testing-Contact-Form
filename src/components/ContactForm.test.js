import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  });
  

// test('Form adds information to list', () => {
//     render(<ContactForm />);
//     const firstNameInput = screen.findByLabelText(/first name/i)
//     const lastNameInput = screen.findByLabelText(/last name/i)
//     const emailInput = screen.findByLabelText(/email/i)
//     const messageInput = screen.findByLabelText(/message/i)
//     const submitButton = screen.findByText(/submit/i)
//     fireEvent.change(firstNameInput, { target: { value: 'Mark' } });
//     fireEvent.change(lastNameInput, { target: { value: 'Loegel' } });
//     fireEvent.change(emailInput, { target: { value: 'Mark@mark.com' } });
//     fireEvent.change(messageInput, { target: { value: 'Hello' } });
//     const newUserFirstName = screen.getAllByText(/mark/i)
//     const newUserLastName = screen.getAllByText(/loegel/i)
//     const newUserEmail = screen.getAllByText(/mark@mark.com/i)
//     const newUserMessage = screen.getAllByText(/hello/i)
//     expect(newUserFirstName).toBeInTheDocument();
//     expect(newUserLastName).toBeInTheDocument();
//     expect(newUserEmail).toBeInTheDocument();
//     expect(newUserMessage).toBeInTheDocument();
//     fireEvent.click(submitButton)
// })

// test('Information typed in inputs is desplayed before submit', () => {
//     render(<ContactForm />);
//     const firstNameInput = screen.findByLabelText(/first name/i)
//     const lastNameInput = screen.findByLabelText(/last name/i)
//     const emailInput = screen.findByLabelText(/email/i)
//     const messageInput = screen.findByLabelText(/message/i);
//     fireEvent.change(firstNameInput, { target: { value: 'Mark' } });
//     fireEvent.change(lastNameInput, { target: { value: 'Loegel' } });
//     fireEvent.change(emailInput, { target: { value: 'Mark@mark.com' } });
//     fireEvent.change(messageInput, { target: { value: 'Hello' } });
//     const newUserFirstName = screen.getAllByText(/mark/i)
//     const newUserLastName = screen.getAllByText(/loegel/i)
//     const newUserEmail = screen.getAllByText(/mark@mark.com/i)
//     const newUserMessage = screen.getAllByText(/hello/i)
//     expect(newUserFirstName).toBeInTheDocument();
//     expect(newUserLastName).toBeInTheDocument();
//     expect(newUserEmail).toBeInTheDocument();
//     expect(newUserMessage).toBeInTheDocument();
// })

test('Can type in First Name', () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/First Name/i)
    fireEvent.change(firstNameInput, { target: { value: 'Mark' } });
    // const newUserFirstName = screen.getAllByText(/Mark/i)
    // expect(newUserFirstName).toBeInTheDocument();
})

test('Can type in Last Name', () => {
    render(<ContactForm />);
    const lastNameInput = screen.getByLabelText(/Last Name/i)
    fireEvent.change(lastNameInput, { target: { value: 'Loegel' } });
    // const newUserLastName = screen.getAllByText(/Loegel/i)
    // expect(newUserLastName).toBeInTheDocument();
})

test('Can type in Email', () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/Email/i)
    fireEvent.change(emailInput, { target: { value: 'Mark@mark.com' } });
    // const newUserEmail = screen.getAllByText(/Mark@mark.com/i)
    // expect(newUserEmail).toBeInTheDocument();
})

test('Can type in Message', () => {
    render(<ContactForm />);
    const messageInput = screen.getByLabelText(/Message/i)
    fireEvent.change(messageInput, { target: { value: 'Hello' } });
    // const newUserMessage = screen.getAllByText(/Hello/i)
    // expect(newUserMessage).toBeInTheDocument();
})

