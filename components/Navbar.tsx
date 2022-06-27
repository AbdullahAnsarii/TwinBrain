import { CaretDownFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar } from 'react-bootstrap';
import { navbarItems } from '../data/navbar';

const Header = () => {
    const router = useRouter();
    return (
        <>
            <Menu id="header" mode="horizontal" className='justify-content-center px-5 fixed-top d-none d-sm-flex'>
            <div className='my-2'>
                <Link href="/"><img width="40%" src="/assets/images/logo.png"></img></Link>
            </div>
                {navbarItems.map((navbarItem, index) => {
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
            <Navbar>
                
            </Navbar>
            </>
    );

}

export default Header;