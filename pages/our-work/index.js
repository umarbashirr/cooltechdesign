import styled from 'styled-components';
import { PageHero } from '../../components';
import { Container } from '../../styles/globalstyles';
import { portfolioData } from '../../data/data';
import SinglePortfolio from '../../components/SinglePortfolio';

const OurWork = ({ portfolios }) => {
	return (
		<>
			<PageHero title='Our Work' />
			<MainSection>
				<Container>
					<Row>
						{portfolios.map((portfolio) => {
							return (
								<Col key={portfolio.id}>
									<SinglePortfolio portfolio={portfolio} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</MainSection>
		</>
	);
};

export default OurWork;

export const getStaticProps = async () => {
	return {
		props: {
			portfolios: portfolioData,
		},
	};
};

const MainSection = styled.section`
	margin: 100px 0;
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
