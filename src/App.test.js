import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
  

it('renders App without crashing', () => {
  render(<App/>)
})
test("the email component", () => {
  render(<App />);
  
  const email = screen.getByLabelText('Email*');

  expect(email).toBeInTheDocument();
  fireEvent.change(email,{target:{value:"uyuy@yahoo.com"}})
});

test("name", () => {
  render(<App />);
  
  const fName = screen.getByLabelText(/first name/i);
  const lName = screen.getByLabelText(/last name/i);

  expect(fName).toBeInTheDocument();
  expect(lName).toBeInTheDocument();
});

test("message", () => {
  render(<App />);
  
  const messag = screen.getByLabelText(/message/i);

  expect(messag).toBeInTheDocument();
});

test("works", () => {
  render(<App />);
  
  const email = screen.getByLabelText(/email/i);
  const fName = screen.getByLabelText(/first name/i);
  const lName = screen.getByLabelText(/last name/i);
  const messag = screen.getByLabelText(/message/i);
  const button = screen.getByRole("button", {name:/submit/i})

  fireEvent.change(email,{target:{value:"uyuy@yahoo.com"}})
  fireEvent.change(fName,{target:{value:"uyuy@yahoo.com"}})
  fireEvent.change(lName,{target:{value:"uyuy@yahoo.com"}})
  fireEvent.change(messag,{target:{value:"uyuy@yahoo.com"}})

  
});
