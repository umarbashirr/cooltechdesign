import styled from 'styled-components';
import { Container } from '../styles/globalstyles';

const Footer = () => {
	return (
		<FooterBar>
			<Container>
				<Copyright>
					Copyrighted &copy; by Cool Tech Design. All Rights Reserved.
				</Copyright>
			</Container>
		</FooterBar>
	);
};

export default Footer;

const FooterBar = styled.footer`
	background-color: var(--primary-color);
`;

const Copyright = styled.p`
	padding: 2rem;
	color: #fff;
	text-align: center;
	font-size: 1rem;
	letter-spacing: 1px;
`;
