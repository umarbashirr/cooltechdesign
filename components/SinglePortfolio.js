import styled from 'styled-components';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

const SinglePortfolio = ({ portfolio }) => {
	const { id, img, alt } = portfolio;
	return (
		<Link href={`/our-work/${id}`}>
			<a>
				<ImageWrapper>
					<Image src={img} alt={alt} layout='fill' objectFit='cover' />
					<Icon>
						<FaEye />
					</Icon>
				</ImageWrapper>
			</a>
		</Link>
	);
};

export default SinglePortfolio;

const ImageWrapper = styled.article`
	position: relative;
	height: 400px;
	width: 400px;
	border-radius: 20px;
	overflow: hidden;
	transition: all 0.4s ease-in-out;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		background-color: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		transition: all 0.4s ease-in-out;
		opacity: 0;
	}

	&:hover ::after {
		opacity: 1;
	}

	&:hover div {
		display: block;
	}
`;

const Icon = styled.div`
	position: absolute;
	color: #fff;
	display: flex;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 3rem;
	z-index: 1;
	display: none;
	transition: all 0.4s ease-in-out;
`;
