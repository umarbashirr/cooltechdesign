import styled from 'styled-components';
import { Container } from '../styles/globalstyles';

const PageHero = ({ title }) => {
	return (
		<HeroBG>
			<Container>
				<Heading>{title}</Heading>;
			</Container>
		</HeroBG>
	);
};

export default PageHero;

const HeroBG = styled.div`
	background-color: var(--primary-color);
`;

const Heading = styled.h2`
	padding: 100px;
	text-align: center;
	font-size: 3rem;
	color: #fff;
	text-transform: capitalize;
	font-weight: 600;
`;
