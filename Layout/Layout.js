import Head from 'next/head';
import { Footer, Navbar } from '../components';
import GlobalStyle from '../styles/globalstyles.js';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<title>Cool Tech Design | Website Design and Development Agency</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<link rel='canonical' href='https://www.cooltechdesign.com/' />
				<meta name='”robots”' content='”index,' follow />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />

				{/* COMMON TAGS  */}
				{/* Search Engine */}
				<meta
					name='description'
					content='Cool Tech Design is an India-based website design and development agency that provides modern and professional lead generation websites for your business.'
				/>
				<meta name='image' content='https://i.ibb.co/n3qfqTv/logo.jpg' />
				{/*  Schema.org for Google  */}
				<meta
					itemProp='name'
					content='Cool Tech Design | Website Design and Development Agency'
				/>
				<meta
					itemProp='description'
					content='Cool Tech Design is an India-based website design and development agency that provides modern and professional lead generation websites for your business.'
				/>
				<meta itemProp='image' content='https://i.ibb.co/n3qfqTv/logo.jpg' />
				{/*  Twitter */}
				<meta name='twitter:card' content='summary' />
				<meta
					name='twitter:title'
					content='Cool Tech Design | Website Design and Development Agency'
				/>
				<meta
					name='twitter:description'
					content='Cool Tech Design is an India-based website design and development agency that provides modern and professional lead generation websites for your business.'
				/>
				<meta name='twitter:site' content='@codewithumar' />
				<meta name='twitter:creator' content='@codewithumar' />
				<meta name='twitter:image:src' content='https://cooltechdesign.com' />
				{/* Open Graph general (Facebook, Pinterest & Google+)*/}
				<meta
					name='og:title'
					content='Cool Tech Design | Website Design and Development Agency'
				/>
				<meta
					name='og:description'
					content='Cool Tech Design is an India-based website design and development agency that provides modern and professional lead generation websites for your business.'
				/>
				<meta name='og:image' content='https://i.ibb.co/n3qfqTv/logo.jpg' />
				<meta name='og:url' content='https://cooltechdesign.com' />
				<meta name='og:site_name' content='Cool Tech Design' />
				<meta
					name='fb:admins'
					content='https://www.facebook.com/cooltechdesign'
				/>
				<meta name='og:type' content='website' />

				{/* Google Font */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<script src='https://smtpjs.com/v3/smtp.js' defer></script>
			</Head>

			<Navbar />
			<main>{children}</main>
			<Footer />
			<GlobalStyle />
		</>
	);
};

export default Layout;
