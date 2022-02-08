import styled from 'styled-components';

const SectionTitle = ({ children }) => {
	return <Title>{children}</Title>;
};

export default SectionTitle;

const Title = styled.h2`
	text-align: center;
	font-size: 35px;
	font-weight: 700;

	span {
		color: var(--primary-color);
	}
`;
