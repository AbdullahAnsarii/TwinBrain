import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Navbar, Row, Nav, NavDropdown, Button } from "react-bootstrap";
import { navbarItems } from '../data/navbar';

const Header = () => {
    const router = useRouter();
    return (
        <Navbar id="header" collapseOnSelect expand="md">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {navbarItems.map((navbarItem, index) => {
                            if (navbarItem.text === "logo")
                                return (
                                    <Link key={index} href={navbarItem.url}><img width="10%" src="/assets/images/logo.png"></img></Link>
                                )
                            else if (navbarItem.subItems.length == 0) return (
                                <Nav.Link key={index} href={navbarItem.url}>
                                    {navbarItem.text}
                                </Nav.Link>
                            )
                            else return (
                                <NavDropdown key={index} title={navbarItem.text}>
                                    {navbarItem.subItems.map((subItem, index) => (
                                        <NavDropdown.Item onClick={() => router.push({
                                            pathname: subItem.url
                                        })} key={index} id="header-dropdown-items">
                                            {subItem.text}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Header;