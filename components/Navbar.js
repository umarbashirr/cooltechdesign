import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '../styles/globalstyles';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { pageLinks } from '../data/data';

const Navbar = () => {
	return (
		<Nav>
			<NavContainer>
				<Link href='/' passHref>
					<LogoImage>
						<Image
							src='/images/logo-new.jpg'
							alt='Cool Tech Design'
							width={140}
							height={70}
						/>
					</LogoImage>
				</Link>
				<ToggleButton>
					<FaBars />
				</ToggleButton>
				<Links>
					{pageLinks.map((page, index) => {
						return (
							<Link href={page.path} passHref key={index}>
								<StyledLink>{page.label}</StyledLink>
							</Link>
						);
					})}
				</Links>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;

const Nav = styled.nav`
	height: 100px;
	position: sticky;
	top: 0;
	background-color: #fff;
	z-index: 100;
`;

const LogoImage = styled.div`
	position: relative;
`;

const StyledLink = styled.a`
	color: #444;
	text-decoration: none;
	font-weight: 500;

	&:hover {
		color: var(--primary-color);
	}
`;

const NavContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

const Links = styled.div`
	display: flex;
	gap: 0 1rem;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const ToggleButton = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	font-size: 1.3rem;
	cursor: pointer;
	display: none;

	@media screen and (max-width: 768px) {
		display: flex;
	}
`;
