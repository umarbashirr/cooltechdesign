import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../../components';
import ContactForm from '../../components/ContactForm';
import { Container } from '../../styles/globalstyles';

const ContactPage = () => {
	return (
		<>
			<PageHero title='contact us' />
			<Section>
				<Container>
					<ContactForm />
				</Container>
			</Section>
		</>
	);
};

export default ContactPage;

const Section = styled.section`
	margin: 50px 0;

	@media screen and (min-width: 768px) {
		margin: 100px 0;
	}
`;
