import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Main App", () => {
  it('should render the Orders Link', () => {
    render(<App />);
    expect(screen.getByText("Orders")).toBeInTheDocument();
  })

  it('should render the Payments Link', () => {
    render(<App />);
    expect(screen.getByText("Payment")).toBeInTheDocument();
  })

  it('should render the Home Link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'cd Home'})).toBeInTheDocument();
  })

  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level:2 })).toBeInTheDocument();
  })

});