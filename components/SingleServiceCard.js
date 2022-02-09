import styled from 'styled-components';

const SingleServiceCard = ({ service }) => {
	return (
		<Article>
			<Icon>{service.icon}</Icon>
			<Title>{service.title}</Title>
			<Desc>{service.desc}</Desc>
		</Article>
	);
};

export default SingleServiceCard;

const Article = styled.article`
	border-radius: 10px;
	padding: 3rem 2rem;
	min-height: 320px;
	display: flex;

	flex-direction: column;
	gap: 1rem 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;

	&:hover {
		border: none;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}
`;

const Icon = styled.div`
	font-size: 2rem;
	color: var(--primary-color);
`;

const Title = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
`;

const Desc = styled.p`
	opacity: 0.7;
`;
