import Link from 'next/link';
import styled from 'styled-components';
import UnstyledLink from './styled/UnstyledLink';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Nav = styled.nav`
    background: white;
    padding: 2rem;
`;

const NavContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
`;

const ShoppingCart = styled(FaShoppingCart)`
    margin-right: 1rem;

    &:hover {
        cursor: pointer;
    }
`;



const Navbar = () => {
    const { openCart } = useCart();
    const handleClick = () => {
        openCart();
    };

    return (
        <Nav>
            <NavContainer>
                <Link href="/">
                    <UnstyledLink>Binomio Store</UnstyledLink>
                </Link>
                <ShoppingCart onClick={handleClick}/>
            </NavContainer>
            
        </Nav>
        
    );
};

export default Navbar;