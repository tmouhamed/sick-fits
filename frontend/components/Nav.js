import Link from 'next/link';
import NavStyles from './styles/NavStyles';
const Nav = () => (
    <NavStyles>
        <Link href="/">
            <a>Shop</a>
        </Link>
        <Link href="/sell">
            <a> Sell</a>
        </Link>
        <Link href="/orders">
            <a>Orders</a>
        </Link>
        <Link href="/account">
            <a>My Account</a>
        </Link>
    </NavStyles>
)
export default Nav;