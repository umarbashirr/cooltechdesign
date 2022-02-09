import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

function ContactForm() {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPhone, setEnteredPhone] = useState('');
	const [enteredSubject, setEnteredSubject] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');

	const nameInputHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const emailInputHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const phoneInputHandler = (event) => {
		setEnteredPhone(event.target.value);
	};

	const subjectInputHandler = (event) => {
		setEnteredSubject(event.target.value);
	};

	const messageInputHandler = (event) => {
		setEnteredMessage(event.target.value);
	};

	const sendEmail = (e) => {
		e.preventDefault();
		Email.send({
			Host: 'smtp.gmail.com',
			Username: 'umarbashir601@gmail.com',
			Password: 'uBashir@1993',
			To: 'umarbashir601@gmail.com',
			From: enteredEmail,
			Subject: 'New Query Submitted at Cool Tech Design',
			Body: `<strong>Hi Admin,<br/><br/>Greeting of the Day!</strong><br/><br/> You have received new query on your website. Please find below details: <br/><br/> <strong>Name:</strong> ${enteredName} <br/> <strong>Email:</strong> ${enteredEmail} <br/> <strong>Phone:</strong> ${enteredPhone} <br/><strong>Subject:</strong> ${enteredSubject} <br/><strong>Message:</strong> ${enteredMessage}`,
		}).then((message) => alert('mail sent successfully'));
		setEnteredName('');
		setEnteredEmail('');
		setEnteredPhone('');
		setEnteredSubject('');
		setEnteredMessage('');
	};

	return (
		<Form onSubmit={sendEmail}>
			<FormInputGroup>
				<FormLabel htmlFor='name'>Name</FormLabel>
				<FormInput
					type='text'
					id='name'
					placeholder='Enter Your Name'
					onChange={nameInputHandler}
					value={enteredName}
					required
				/>
			</FormInputGroup>
			<FormInputGroup>
				<FormLabel htmlFor='email'>Email</FormLabel>
				<FormInput
					type='email'
					id='email'
					placeholder='Enter Your Email'
					onChange={emailInputHandler}
					value={enteredEmail}
					required
				/>
			</FormInputGroup>
			<FormInputGroup>
				<FormLabel htmlFor='phone'>Mobile Number</FormLabel>
				<FormInput
					id='phone'
					type='tel'
					placeholder='Enter Your Mobile Number'
					onChange={phoneInputHandler}
					value={enteredPhone}
					required
				/>
			</FormInputGroup>
			<FormInputGroup>
				<FormLabel htmlFor='subject'>Subject</FormLabel>
				<FormInput
					type='text'
					id='subject'
					placeholder='Reason For Contact'
					onChange={subjectInputHandler}
					value={enteredSubject}
					required
				/>
			</FormInputGroup>
			<FormInputGroup>
				<FormLabel htmlFor='message'>Message</FormLabel>
				<FormTextArea
					id='message'
					cols='30'
					rows='10'
					placeholder='Enter Your Message'
					onChange={messageInputHandler}
					value={enteredMessage}
					required
				/>
			</FormInputGroup>
			<FormButton type='submit' primary>
				Send Now
			</FormButton>
		</Form>
	);
}

export default ContactForm;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const FormInputGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 1rem;
`;

const FormLabel = styled.label`
	margin-bottom: 0.1rem;
	text-transform: capitalize;
`;

const FormInput = styled.input`
	padding: 1rem;
	border-radius: 6px;
	outline: none;
	border: 1px solid #0e0321;
`;

const FormTextArea = styled.textarea`
	padding: 1rem;
	resize: none;
`;

const FormButton = styled(Button)``;
