import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

test('Fetches data and renders the bubbles', () => {
	// Finish this test
	render(<App />);

	const username = screen.getByPlaceholderText('username');
	const password = screen.getByPlaceholderText('password');
	fireEvent.change(username, { target: { value: 'Lambda School' } });
	fireEvent.change(password, { target: { value: 'i<3Lambd4' } });

	const loginBtn = screen.getByRole('button');
	fireEvent.click(loginBtn);

	// expect(await screen.findByText(/bubbles/i)).toBeInTheDocument();
});
