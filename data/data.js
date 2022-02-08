import {
	FaCartPlus,
	FaCode,
	FaCogs,
	FaPaintBrush,
	FaWordpress,
	FaYoast,
	FaShoppingCart,
} from 'react-icons/fa';

import { AiFillCode } from 'react-icons/ai';

export const pageLinks = [
	{
		path: '/',
		label: 'Home',
	},
	{
		path: '/about',
		label: 'About',
	},
	{
		path: '/services',
		label: 'Services',
	},
	{
		path: '/our-work',
		label: 'Portfolio',
	},
	{
		path: '/contact',
		label: 'Contact',
	},
];

export const services = [
	{
		id: 1,
		icon: <FaPaintBrush />,
		title: 'UI/UX Design',
		desc: 'We specializes in designing logos and websites that automatically attract the target audience of any business. ',
	},
	{
		id: 2,
		icon: <FaCode />,
		title: 'Website Development',
		desc: 'We work closely with our customers to create outstanding, high performing, and secure custom websites using different latest technologies.',
	},
	{
		id: 3,
		icon: <FaWordpress />,
		title: 'Wordpress Development',
		desc: 'We create modern website design simple to use for both you and your website visitors.',
	},
	{
		id: 4,
		icon: <FaCogs />,
		title: 'Website Maintenance',
		desc: 'We provide website maintenance service on very low cost which help you to generate leads from your business.',
	},
	{
		id: 2,
		icon: <FaCartPlus />,
		title: 'Ecommerce Development',
		desc: 'We are specilize in creating ecommerce website for your business using different kind of technologies.',
	},
	{
		id: 1,
		icon: <FaYoast />,
		title: 'SEO',
		desc: 'For generating leads for business, search engine optimization is very important and we will help you with that.',
	},
];

export const heroObj = {
	title: 'Modern and Professional Website Development',
	subtitle:
		'We provide lead generated professional website design and development for your business.',
	buttonText: 'View Showcase',
	imgStart: '',
	start: '',
	img: '/images/hero.svg'.default,
	alt: 'Webiste Development Technologies',
};

export const aboutData = {
	subtitle: 'we are creative agency',
	title: 'about our agency',
	description: `Cool Tech Design is one of the best web development agency from
  Jammu and Kashmir India that has severed a variety of businesses
  with professional web design and development solutions. We have
  an excellent team of web developers who are capable of building
  creative, stunning and high-performance websites of any
  complexity.
  With our unparalleled web development services, we promise to
  deliver you a website of superior performance that suits your
  organization’s specific needs. Whether you’re a large, medium or
  small corporation, our web development services company is here
  to help you.`,
	ctaButton: 'Get Quote Now',
	img: '/images/about.jpg',
	alt: 'Team Discussion Image',
};

export const portfolioData = [
	{
		id: 1,
		label: 'the finsolution',
		path: 'https://thefinsolutions.com',
		img: '/images/thefinsolutions.PNG',
		alt: 'theFinsolutions Website',
		detail: [
			'At the FinSolutions we have employed our multi-disciplinary skills to add value to our client’s decision-making process.',
			'We are focused on the areas including accounting, financial reporting, book-keeping, financial & business management, business advisory, tax advisory, information technology solution’s development, implementation and review, development & review of business processes, models, ideas and filed research aimed to test the potential of various markets.',
			'At the FinSolutions, we want to be a clear choice for our clients, a “one-stop shop” which fuel their business’s growth. We will deliver global capabilities with the “local” touch that brings world class advising and consulting expertise to our clients through enduring relationships built on genuine understanding and trust.',
		],
	},
	{
		id: 2,
		label: 'accountexs',
		path: 'https://accountexs.com',
		img: '/images/accountexs.PNG',
		alt: 'accountexs Website',
	},
	{
		id: 3,
		label: 'Faisal Noman & Co.',
		path: 'https://faisalnomanco.com',
		img: '/images/faisalnomanco.png',
		alt: 'Faisal Noman & Co. Website',
	},
	{
		id: 4,
		label: 'Flexible Bangalore Airport Taxi',
		path: 'https://flexiblebangaloreairporttaxi.com',
		img: '/images/fbat.png',
		alt: 'Flexible Bangalore Airport Taxi Website',
	},
	{
		id: 5,
		label: 'Umar Bashir Portfolio',
		path: 'https://umarbashir.com',
		img: '/images/umarportfolio.png',
		alt: 'Umar Bashir Portfolio Website',
	},
	{
		id: 6,
		label: 'Lotus Taxi',
		path: 'https://lotustaxi.in',
		img: '/images/lotustaxi.in.png',
		alt: 'Lotus Taxi Website',
	},
	{
		id: 7,
		label: 'ZamSports',
		path: 'https://zamsports.com',
		img: '/images/zamsports_website.png',
		alt: 'ZamSports Website',
	},
];

export const PortfolioPageData = {
	pageTitle: 'Our Portfolio',
};

export const ContactPageData = {
	pageTitle: 'Contact Us',
};
