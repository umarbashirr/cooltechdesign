import styled from 'styled-components';
import { SectionTitle } from '../components';
import { services } from '../data/data';
import { Container } from '../styles/globalstyles';
import SingleServiceCard from './SingleServiceCard';

const Services = () => {
	return (
		<Section>
			<Container>
				<SectionTitle>
					Our <span>Services</span>
				</SectionTitle>
				<ServiceRow>
					{services.map((service) => {
						return (
							<ServiceCol key={service.id}>
								<SingleServiceCard service={service} />
							</ServiceCol>
						);
					})}
				</ServiceRow>
			</Container>
		</Section>
	);
};

export default Services;

const Section = styled.section`
	margin-bottom: 100px;
`;

const ServiceRow = styled.div`
	margin-top: 50px;
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
`;

const ServiceCol = styled.div`
	flex: 1 1 30%;
`;
