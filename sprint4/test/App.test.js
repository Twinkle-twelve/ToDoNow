import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to ToDoNow!/i);
    expect(welcomeElement).toBeInTheDocument();
});
