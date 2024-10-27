import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';

test('renders button with label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('displays loading spinner when loading', () => {
    render(<Button label="Click Me" isLoading={true} onClick={() => {}} />);
    const spinnerElement = screen.getByRole('status'); // 假设你为 spinner 添加了 role 属性
    expect(spinnerElement).toBeInTheDocument();
});
