import styled from 'styled-components';
import Button from './Button';

const CtaBanner = () => {
	return (
		<Wrapper>
			Are you looking for a beautiful website for your business. Then what are
			your waiting for?
			<CtaButton primary>Contact Now</CtaButton>
		</Wrapper>
	);
};

export default CtaBanner;

const Wrapper = styled.div`
	font-size: 35px;
	padding: 50px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: #fff;
	box-shadow: 0 3px 8px 5px rgba(0, 0, 0, 0.2), 03px 0px 5px rgba(0, 0, 0, 0.2);
	border-radius: 0px;
	text-transform: capitalize;
	width: 80%;
	margin-inline: auto;
`;

const CtaButton = styled(Button)`
	padding: 1.2rem 3rem;
	font-size: 1.2rem;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: #fff;
		border: 1px solid var(--primary-color);
		color: var(--primary-color);
	}
`;
