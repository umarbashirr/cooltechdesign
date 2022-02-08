import Image from 'next/image';
import styled from 'styled-components';
import { CtaBanner, PageHero } from '../../components';
import { aboutData } from '../../data/data';
import { Container } from '../../styles/globalstyles';

const About = ({ data }) => {
	const { title, description, img, subtitle } = data;

	console.log(data, title);
	return (
		<>
			<PageHero title='About us' />
			<Section>
				<Container>
					<Row>
						<Col>
							<TextWrapper>
								<Title>{subtitle}</Title>
								<Description>{description}</Description>
							</TextWrapper>
						</Col>
						<Col>
							<ImageContainer>
								<Image src={img} alt={title} layout='fill' objectFit='cover' />
							</ImageContainer>
						</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<CtaBanner />
				</Container>
			</Section>
		</>
	);
};

export default About;

const Section = styled.section`
	margin: 50px 0;

	@media screen and (min-width: 1024px) {
		margin: 100px 0;
	}
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media screen and (min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const Col = styled.div``;

const TextWrapper = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Title = styled.h2`
	font-weight: 400;
	text-transform: capitalize;
	position: relative;
	border-left: 5px;
	border-top: 0;
	border-right: 0;
	border-bottom: 0;
	border-style: solid;
	border-color: var(--primary-color);
	padding-left: 1rem;
`;

const Description = styled.p`
	margin-top: 0.5rem;
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 500px;
	border-radius: 30px;
	overflow: hidden;

	@media screen and (min-width: 1024px) {
		height: 300px;
	}
`;

export const getStaticProps = async () => {
	return {
		props: {
			data: aboutData,
		},
	};
};
