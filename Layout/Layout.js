import Head from 'next/head';
import { Footer, Navbar } from '../components';
import GlobalStyle from '../styles/globalstyles.js';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Cool Tech Design | Web Development Agency</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
				<meta
					name='description'
					content='Cool Tech Design is one of the best web development agency in india. We provide modern, professional and lead generation website design and development. '
				/>
				<meta
					name='keywords'
					content='cool tech design, cooltechdesign, web development agency, web development, website development, web developer in banglore, website design, seo, ecommerce development, corporate website development, software development'
				/>
				<link rel='canonical' href='https://www.cooltechdesign.com/' />
				<meta name='”robots”' content='”index,' follow />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<meta
					name='keywords'
					content='Modern website design, Cool Tech Design, cooltechdesign, website developer near me, website designer near me, professional website, professional website template, web developer near me, ecommerce development, ecommerce website development, ecommerce developer, best website builder for small business, small business website, create a business website, professional website designer, website developers, website developer, website development company'
				/>
				<meta
					name='description'
					content='Cool Tech Design is an India-based website development company that provides professional website template, website development, ecommerce website development for your business.'
				/>
				<meta
					name='title'
					content='Cool Tech Design | Modern and Professional Website Development'
				/>
				<meta
					name='description'
					content='Cool Tech Design is an India-based website development company that provides professional website template, website development, ecommerce website development for your business.'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://cooltechdesign.com/' />
				<meta
					property='og:title'
					content='Cool Tech Design | Modern and Professional Website Development'
				/>
				<meta
					property='og:description'
					content='Cool Tech Design is an India-based website development company that provides professional website template, website development, ecommerce website development for your business.'
				/>
				<meta
					property='og:image'
					content='https://cooltechdesign.com/images/cooltechdesignlogo.png'
				/>

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@codewithumar' />
				<meta name='twitter:creator' content='@codewithumar' />
				<meta
					name='twitter:title'
					content='Cool Tech Design | Modern and Professional Website Development'
				/>
				<meta
					name='twitter:description'
					content='Cool Tech Design is an India-based website development company that provides professional website template, website development, ecommerce website development for your business.'
				/>
				<meta
					name='twitter:image'
					content='https://cooltechdesign.com/images/cooltechdesignlogo.png'
				/>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
			</Head>

			<Navbar />
			<main>{children}</main>
			<Footer />
			<GlobalStyle />
		</>
	);
};

export default Layout;
