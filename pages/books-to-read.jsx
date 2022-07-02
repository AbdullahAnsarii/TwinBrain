import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/Books.module.scss';
import { Breadcrumb, Card, Image, Spin } from "antd";
import Link from "next/link";
import router from "next/router";
import { ArrowRightOutlined, CheckOutlined, LinkOutlined, SettingFilled } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
const { Meta } = Card;
const AboutUs = () => {
    return (
        <>
            <Head>
                <title>Books To Read</title>
                <meta name="description" content="Books To Read | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Books To Read</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/books-to-read")}>Books To Read</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6} className="my-2">
                        <Slide triggerOnce direction='up' fraction={0.5} delay={50}>
                            <Card
                                actions={[<a target="__blank" href="https://shop.healthbj-uk.org/" className="d-flex align-items-center justify-content-center">Get it here<LinkOutlined /></a>]}
                                hoverable
                                cover={<img src="/assets/images/book-1.jpg" width="100%" />}>
                                <Meta
                                    title="Do I have a Twin Brain?"
                                    description="Download or read a free copy of the book with free subscription." />
                            </Card>
                        </Slide>
                    </Col>
                    <Col xs={12} md={6} className="my-2">
                        <Slide triggerOnce direction='up' fraction={0.5} delay={100}>
                            <Card
                                actions={[<a target="__blank" href="https://shop.healthbj-uk.org/" className="d-flex align-items-center justify-content-center">Get it here<LinkOutlined /></a>]}
                                hoverable
                                cover={<img src="/assets/images/book-1-tablet.jpg" width="100%" />}>
                                <Meta
                                    title="Do I have a Twin Brain?"
                                    description="Buy a printed copy of the book." />
                            </Card>
                        </Slide>
                    </Col>
                    <Col xs={12} md={6} className="my-2">
                        <Slide triggerOnce direction='up' fraction={0.5} delay={150}>
                            <Card
                                actions={[<a target="__blank" href="https://shop.healthbj-uk.org/" className="d-flex align-items-center justify-content-center">Get it here<LinkOutlined /></a>]}
                                hoverable
                                cover={<img src="/assets/images/book-2.jpg" width="100%" />}>
                                <Meta
                                    title="Thought Techniques For Simple Brain"
                                    description="Download or read a free copy of the book with free subscription" />
                            </Card>
                        </Slide>
                    </Col>
                    <Col xs={12} md={6} className="my-2">
                        <Slide triggerOnce direction='up' fraction={0.5} delay={200}>
                            <Card
                                actions={[<a target="__blank" href="https://shop.healthbj-uk.org/" className="d-flex align-items-center justify-content-center">Get it here<LinkOutlined /></a>]}
                                hoverable
                                cover={<img src="/assets/images/book-2-tablet.jpg" width="100%" />}>
                                <Meta
                                    title="Thought Techniques For Simple Brain"
                                    description="Buy a printed copy of the book." />
                            </Card>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs;