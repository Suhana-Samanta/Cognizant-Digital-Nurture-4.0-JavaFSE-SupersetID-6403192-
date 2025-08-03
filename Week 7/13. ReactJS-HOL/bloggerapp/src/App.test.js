import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to BloggerApp/i);
  expect(heading).toBeInTheDocument();
});

test('shows Book Details by default', () => {
  render(<App />);
  const bookHeading = screen.getByText(/Book Details/i);
  expect(bookHeading).toBeInTheDocument();
});

test('shows Blog Details when Blog button clicked', () => {
  render(<App />);
  const blogButton = screen.getByText(/Show Blog Details/i);
  fireEvent.click(blogButton);
  const blogHeading = screen.getByText(/Blog Details/i);
  expect(blogHeading).toBeInTheDocument();
});

test('shows Course Details when Course button clicked', () => {
  render(<App />);
  const courseButton = screen.getByText(/Show Course Details/i);
  fireEvent.click(courseButton);
  const courseHeading = screen.getByText(/Course Details/i);
  expect(courseHeading).toBeInTheDocument();
});
