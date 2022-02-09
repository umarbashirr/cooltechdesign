import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #1a73e8;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        max-width: 100%;
    }

    body {
        font-size: 1rem;
        line-height: 1.5;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
    }

`;

export const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 50px;

	@media screen and (max-width: 768px) {
		padding: 0 30px;
	}
`;

export const Section = styled.section`
	margin: 50px 0;

	@media screen and (min-width: 1024px) {
		margin: 100px 0;
	}
`;

export default GlobalStyle;
