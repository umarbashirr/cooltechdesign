import styled from 'styled-components';
import { SectionTitle } from '.';
import { Container } from '../styles/globalstyles';
import SinglePortfolio from './SinglePortfolio';
import { portfolioData } from '../data/data';

const Portfolio = () => {
	return (
		<Section>
			<SectionTitle>
				Our <span>Portfolio</span>
			</SectionTitle>
			<Container>
				<Row>
					{portfolioData
						.map((portfolio) => {
							return (
								<Col key={portfolio.id}>
									<SinglePortfolio portfolio={portfolio} />
								</Col>
							);
						})
						.splice(0, 6)}
				</Row>
			</Container>
		</Section>
	);
};

export default Portfolio;

const Section = styled.section`
	margin-bottom: 100px;
`;

const Row = styled.div`
	margin-top: 50px;
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
`;

const Col = styled.div`
	flex: 1 1 auto;
`;
