import { Col, Container, Row } from 'react-bootstrap';
import SignUpComponent from "../components/SignUpComponent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../utility/firebase';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Spin } from 'antd';

const Register = () => {
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);
    console.log(user, loading, error);
    if (loading) {
        return <Container style={{ marginTop: 300, marginBottom: 300, textAlign: 'center' }}><Spin size='large' /></Container>
    }
    else if (user) {
        router.replace("/my-account");
    }
    else if (!user) {
        return (
            <Container style={{ marginTop: 100, marginBottom: 100 }}>
                <Head>
                    <title>Sign Up</title>
                    <meta name="description" content="Sign Up | Twin Brain" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Row className='d-flex justify-content-center' >
                    <Col xs={12} md={6}>
                    <SignUpComponent />
                    </Col>
                    
                </Row>
            </Container>
    
        )
    }
    return <Container style={{ marginTop: 300, marginBottom: 300, textAlign: 'center' }}><Spin size='large' /></Container>
}

export default Register;