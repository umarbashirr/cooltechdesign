import styled from 'styled-components';
import { Container } from '../styles/globalstyles';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<Container>
			<HeroRow>
				<HeroCol>
					<HeroArticle>
						<Subtitle>Cool Tech Design</Subtitle>
						<HeroTitle>
							Website <span>Design & Development</span> Agency
						</HeroTitle>
						<HeroDesc>
							We provide modern and professional lead generation websites for
							your business.
						</HeroDesc>
						<Link href='/our-work' passHref>
							<a>
								<HeroButton primary>Explore Portfolio</HeroButton>
							</a>
						</Link>
					</HeroArticle>
				</HeroCol>
				<HeroCol>
					{/* <HeroImage> */}
					<Image
						src='/images/heroImg.png'
						alt='3d art'
						layout='fill'
						objectFit='cover'
					/>
					{/* </HeroImage> */}
				</HeroCol>
			</HeroRow>
		</Container>
	);
};

export default HeroSection;

// const HeroContainer = styled(Container)``;

const HeroRow = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	align-items: center;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		padding: 100px 0;
		height: auto;
	}
`;
const HeroCol = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	jusitfy-content: center;
	flex: 1;

	img {
		@media screen and (max-width: 1024px) {
			display: none;
		}
	}
`;

const HeroArticle = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1rem 0;
	max-width: 90%;

	@media screen and (max-width: 1024px) {
		align-items: center;
		text-align: center;
		width: 100%;
		max-width: 100%;
	}
`;

const Subtitle = styled.p`
	font-size: 10px;
	background-color: var(--primary-color);
	color: #fff;
	padding: 0.2rem 0.6rem;
	align-self: flex-start;
	border-radius: 50px;

	@media screen and (max-width: 1024px) {
		align-self: center;
	}
`;

const HeroTitle = styled.h1`
	font-weight: 800;
	font-size: 40px;
	text-transform: uppercase;
	// letter-spacing: 1px;

	span {
		color: var(--primary-color);
		// display: block;
	}

	@media screen and (max-width: 568px) {
		font-size: 30px;
	}
`;

const HeroDesc = styled.p`
	font-size: 1.3rem;
	margin-bottom: 1rem;

	@media screen and (max-width: 568px) {
		font-size: 1rem;
	}
`;

const HeroButton = styled(Button)`
	align-self: flex-start;
`;
