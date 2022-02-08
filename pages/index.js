import Head from 'next/head';
import { HeroSection, Portfolio, Services } from '../components';

export default function Home() {
	return (
		<>
			<HeroSection />
			<Services />
			<Portfolio />
		</>
	);
}
