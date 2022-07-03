import { Col, Container, Row } from 'react-bootstrap';
import LoginComponent from "../components/LoginComponent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../utility/firebase';
import Head from 'next/head';
import { Spin } from 'antd';

const MyAccount = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user, loading, error);
    if (loading) {
        return  <Container style={{ marginTop: 300, marginBottom: 300, textAlign: 'center' }}><Spin size='large' /></Container>
    }
    return (
        <Container style={{ marginTop: 100, marginBottom: 100 }}>
            <Head>
                <title>My Account</title>
                <meta name="description" content="My Account | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {user ? <h1>Signed in</h1> : <Row>
                <Col xs={12} md={6} className="d-none d-md-flex justify-content-end">
                    <img src="/assets/images/register.png" width="100%" />
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={12} md={6}>
                    <LoginComponent />
                </Col>
            </Row>}
        </Container>

    )
}

export default MyAccount;