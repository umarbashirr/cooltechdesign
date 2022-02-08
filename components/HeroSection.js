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
						<HeroTitle>
							Welcome to <span>Cool Tech Design</span>
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
		gap: 5rem 0;
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

	@media screen and (max-width: 1024px) {
		height: 500px;
		width: 100%;
	}

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

const HeroTitle = styled.h1`
	font-weight: 800;
	font-size: 40px;
	text-transform: uppercase;
	// letter-spacing: 1px;

	span {
		color: var(--primary-color);
		// display: block;
	}
`;

const HeroDesc = styled.p`
	font-size: 1.3rem;
	margin-bottom: 1rem;
`;

const HeroButton = styled(Button)`
	align-self: flex-start;
`;
