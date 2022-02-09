import Image from 'next/image';
import styled from 'styled-components';
import { aboutData as data } from '../data/data';

const AboutSection = ({ reverse }) => {
	const { title, description, img, subtitle } = data;

	console.log(data, title);
	return (
		<Row reverse={reverse}>
			<Col>
				<TextWrapper>
					<Title>{subtitle}</Title>
					<Description>{description}</Description>
				</TextWrapper>
			</Col>
			<Col>
				<ImageContainer>
					<Image
						src={img}
						alt={title}
						height={700}
						width={1000}
						objectFit='cover'
					/>
				</ImageContainer>
			</Col>
		</Row>
	);
};

export default AboutSection;

const Row = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media screen and (min-width: 1024px) {
		flex-direction: ${(reverse) => (reverse ? 'row-reverse' : 'row')};
		align-items: center;
	}
`;

const Col = styled.div`
	flex: 1;
`;

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
	font-size: 18px;
	line-height: 2;
`;

const ImageContainer = styled.div`
	position: relative;
	border-radius: 30px;
	overflow: hidden;
`;
