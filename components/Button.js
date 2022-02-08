import styled from 'styled-components';

const Button = styled.button`
	background: ${(props) => (props.primary ? '#1a73e8' : '#444')};
	color: ${(props) => (props.primary ? '#fff' : '#fff')};
	padding: ${(props) => (props.lg ? '1.2rem 2rem' : '.6rem 1.5rem')};
	cursor: pointer;
	font-size: 0.9rem;
	border: 1px solid transparent;
	border-radius: 4px;
	letter-spacing: 1px;
	font-family: 'Montserrat', sans-serif;
`;

export default Button;
