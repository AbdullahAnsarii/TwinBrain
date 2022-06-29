import { CaretDownFilled } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { navbarItems } from '../data/navbar';

const Header = () => {
    const router = useRouter();
    return (
        <>
            <Menu id="header" mode="horizontal" className='justify-content-center px-5 fixed-top d-none d-md-flex'>
                <div className='my-2'>
                    <Link href="/"><img width="70%" src="/assets/images/logo.png"></img></Link>
                </div>
                {navbarItems.map((navbarItem, index) => {
                    if (navbarItem.text == "Book Now") return (
                        <Menu.Item className='align-self-center' key={navbarItem.url} >
                        <Button id='navbarButton' type="primary">{navbarItem.text}</Button>
                        </Menu.Item>
                    )
                    if (navbarItem.subItems.length == 0) return (
                        <Menu.Item className='align-self-center' key={navbarItem.url} >
                            <Link href={navbarItem.url}>{navbarItem.text}</Link>
                        </Menu.Item>
                    )
                    else return (
                        <Menu.SubMenu /*icon={<CaretDownFilled />}*/ className='align-self-center' key={index} title={navbarItem.text}>
                            {navbarItem.subItems.map((subItem, index) => (
                                <Menu.Item onClick={() => router.push({
                                    pathname: subItem.url
                                })} key={index} id="header-dropdown-items">
                                    {subItem.text}
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    )
                })}
            </Menu>
            <Navbar id="header" className='d-md-none d-xs-flex' collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/">
                        <Link href="/"><img width="40%" src="/assets/images/logo.png"></img></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {navbarItems.map((navbarItem, index) => {
                                if (navbarItem.subItems.length == 0) return (
                                    <Nav.Link key={index} href={navbarItem.url}>{navbarItem.text}</Nav.Link>
                                )
                                else return (
                                    <NavDropdown key={index} title={navbarItem.text} id="collasible-nav-dropdown">
                                        {navbarItem.subItems.map((subItem, index) => (
                                            <NavDropdown.Item id="header-dropdown-items" key={index} href={subItem.url}>{subItem.text}</NavDropdown.Item>

                                        ))}
                                    </NavDropdown>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default Header;