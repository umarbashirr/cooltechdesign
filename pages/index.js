import {
	AboutSection,
	HeroSection,
	Portfolio,
	SectionTitle,
	Services,
} from '../components';
import { Container, Section } from '../styles/globalstyles';

export default function Home() {
	return (
		<>
			<HeroSection />
			<Services />
			<Portfolio />
			<Section>
				<Container>
					<SectionTitle>
						Why <span>Cool Tech Design?</span>
					</SectionTitle>
					<AboutSection reverse />
				</Container>
			</Section>
		</>
	);
}
