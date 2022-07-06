import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/GiftVoucher.module.scss';
import { Breadcrumb, Card, Image, Spin } from "antd";
import router from "next/router";
import { Slide } from "react-awesome-reveal";
const GiftVoucher = () => {
    return (
        <>
            <Head>
                <title>Gift Vouchers</title>
                <meta name="description" content="Gift Vouchers | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Gift Vouchers</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/gift-voucher")}>Gift Vouchers</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6}>
                        <Slide triggerOnce direction='up' fraction={0.5} delay={50}>
                            <Image placeholder={<Spin />} preview={false} src="/assets/images/twinbrain-gift-voucher.jpg" width="100%" />
                        </Slide>
                    </Col>
                    <Col xs={12} md={6}>
                        <Slide triggerOnce direction='up' fraction={0.5} delay={100}>
                            <h4>Like to Buy a Gift Voucher for someone?
                            </h4>
                            <p>
                                You can give a family member, a friend or someone the gift of well-being, self-development or professional development. Do this by buying therapy sessions, training courses or other services offered by TwinBrain. Subject to availability, the person receiving your gift voucher can receive a service from TwinBrain via face to face in our London venus or anywhere in the World via phone, Online or other facilities like Whatsapp, Skype, and Zoom.
                            </p>
                            <p><a href="/contact-us">Contact Us</a> for details.</p>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GiftVoucher;