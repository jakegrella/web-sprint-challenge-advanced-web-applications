import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialCredentials = {
	username: '',
	password: '',
};

const Login = () => {
	const { push } = useHistory();
	const [credentials, setCredentials] = useState(initialCredentials);
	// console.log('credentials', credentials);

	const handleChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	// make a post request to retrieve a token from the api
	const handleSubmit = (event) => {
		event.preventDefault();
		axiosWithAuth()
			// .post(`./api/login`, {
			.post(`http://localhost:5000/api/login`, {
				// username: 'Lambda School',
				// password: 'i<3Lambd4',
				username: credentials.username,
				password: credentials.password,
			})
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.payload);
				push(`/bubble-page`);
			})
			.catch((err) => console.log(err));
		setCredentials(initialCredentials);
	};
	// when you have handled the token, navigate to the BubblePage route

	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<p>username: Lambda School</p>
			<p>password: i&lt;3Lambd4</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					value={credentials.username}
					placeholder='username'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='password'
					value={credentials.password}
					placeholder='password'
					onChange={handleChange}
				/>
				<button>login</button>
			</form>
		</>
	);
};

export default Login;
