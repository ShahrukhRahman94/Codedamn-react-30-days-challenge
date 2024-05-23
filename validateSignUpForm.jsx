import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
	const [data, setData] = useState({
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		confirmpassword: null
	})

	const [error, setError] = useState({
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		confirmpassword: null
	})

	const handleOnChange = (e) => {
		e.preventDefault()

		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const { firstName, lastName, email, password, confirmPassword } = data

		let isValid = true

		const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

		let newError = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmpassword: null
		}

		if (!firstName) {
			newError.firstName = 'First name cannot be empty'
			isValid = false
		}

		if (!lastName) {
			newError.lastName = 'Last name cannot be empty'
			isValid = false
		}
		if (!regex.test(email)) {
			newError.email = "Invalid email address"
			isValid = false
		}

		if (!password || password.length < 7) {
			newError.password = 'Password must be greater than 7 characters'
			isValid = false
		}
		if (password !== confirmPassword) {
			newError.confirmPassword = "Passwords do not match"
			isValid = false
		}

		setError(newError)

		if(isValid){
			console.log("Form submitted successfully")
		}
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					onChange={(e) => handleOnChange(e)}
					placeholder="First Name"
				/>
				{error.firstName && <p data-testid="first-name-error-id" className="error">
					{error.firstName}
				</p>}
				
				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					onChange={(e) => handleOnChange(e)}
					placeholder="Last Name"
				/>
				{error.lastName && <p data-testid="last-name-error-id" className="error">
					{error.lastName}
				</p>}
				
				<input
					data-testid="email-id"
					type="email"
					name="email"
					onChange={(e) => handleOnChange(e)}
					placeholder="Email Address"
				/>
				{error.email && <p data-testid="email-error-id" className="error">{error.email}</p>}
			
				<input
					data-testid="password-id"
					type="password"
					name="password"
					onChange={(e) => handleOnChange(e)}
					placeholder="Password"
				/>
				<p data-testid="password-error-id" className="error">
					{error.password}
				</p>
				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					onChange={(e) => handleOnChange(e)}
					placeholder="Confirm Password"
				/>
				{error.confirmPassword && <p
					data-testid="confirm-password-error-id"
					className="error"
				>{error.confirmPassword}</p>}
				
				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
	}

	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;

		&:hover {
			opacity: 0.8;
		}
	}

	.error {
		margin: 0 0 24px 0;
		color: red;
	}
`
