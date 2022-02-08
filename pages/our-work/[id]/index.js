import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { PageHero, Portfolio } from '../../../components';
import Button from '../../../components/Button';
import { portfolioData } from '../../../data/data';
import { Container } from '../../../styles/globalstyles';

const SinglePortfolioPage = ({ portfolio }) => {
	console.log(portfolio);
	return (
		<>
			<PageHero title={portfolio.label} />
			<Container>
				<Section>
					<Link href='/our-work' passHref>
						<a>
							<Button>Back to Portfolio</Button>
						</a>
					</Link>
					<Row>
						<Col>
							<ImageContainer>
								<Image
									src={portfolio.img}
									alt={portfolio.label}
									objectFit='cover'
									layout='fill'
								/>
							</ImageContainer>
						</Col>
						<Col>
							<TextWrapper>
								<Title>{portfolio.label}</Title>
								<div>
									{portfolio.detail &&
										portfolio.detail.map((p, index) => {
											return <Description key={index}>{p}</Description>;
										})}
								</div>
								<TechnologyUsed>
									<span>Technology Used: </span>Wordpress
								</TechnologyUsed>
								<Link href={portfolio.path} passHref>
									<a target='_blank'>
										<Button primary>Visit Now</Button>
									</a>
								</Link>
							</TextWrapper>
						</Col>
					</Row>
				</Section>
			</Container>
		</>
	);
};

export default SinglePortfolioPage;

export const getStaticPaths = async () => {
	const paths = portfolioData.map((portfolio) => ({
		params: { id: portfolio.id.toString() },
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const portfolios = portfolioData.filter((p) => p.id.toString() === params.id);

	return {
		props: {
			portfolio: portfolios[0],
		},
	};
};

const Section = styled.section`
	margin: 100px 0;
`;

const Row = styled.div`
	margin-top: 50px;
	display: grid;
	grid-template-columns: 500px 1fr;
	gap: 3rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const Col = styled.div``;

const ImageContainer = styled.div`
	position: relative;
	height: 500px;
	width: 100%;
`;

const TextWrapper = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1rem 0;
`;

const Title = styled.h2`
	font-weight: 600;
	text-transform: capitalize;
`;

const Description = styled.p`
	font-size: 1rem;
	margin: 1rem 0;
	span {
		font-weight: 600;
	}
`;

const TechnologyUsed = styled.p`
	span {
		font-weight: 600;
	}
`;
