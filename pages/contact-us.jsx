import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/ContactUs.module.scss';
import { Breadcrumb, Descriptions, Image, Spin, Form, Button, Input } from "antd";
import Link from "next/link";
import router from "next/router";
import { ArrowRightOutlined, CheckOutlined, EnvironmentFilled, FacebookFilled, GlobalOutlined, InstagramFilled, InstagramOutlined, MailFilled, PhoneFilled, ShopFilled, ShopOutlined } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
const { TextArea } = Input;
const ContactUs = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Contact Us | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Contact Us</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/contact-us")}>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className="my-5">
                    <Col xs={12} md={6}>
                        <Slide triggerOnce fraction={1} direction="up">
                            <h2 className='text-center'>How To Find Us</h2>
                            <Descriptions size="small" bordered column={1}>
                                <Descriptions.Item label={<ShopFilled style={{ fontSize: 25, color: '#082366' }} />}>Davenport House</Descriptions.Item>
                                <Descriptions.Item label={<EnvironmentFilled style={{ fontSize: 25, color: '#082366' }} />}>16 Pepper Street, Canary Wharf, London,E14 9RP, United Kingdom</Descriptions.Item>
                                <Descriptions.Item label={<MailFilled style={{ fontSize: 25, color: '#082366' }} />}><Link href="mailto:admin@twinbrain.org">admin@twinbrain.org</Link></Descriptions.Item>
                                <Descriptions.Item label={<PhoneFilled style={{ fontSize: 25, color: '#082366' }} />}><Link href="tel:0333 800 3006">0333 800 3006</Link>,&nbsp;<Link href="tel:0333 789 0012">0333 789 0012</Link></Descriptions.Item>
                                <Descriptions.Item label={<FacebookFilled style={{ fontSize: 25, color: '#082366' }} />}><Link target="_blank" href="https://www.facebook.com/profile.php?id=100070777856713">Twin Brain</Link></Descriptions.Item>
                                <Descriptions.Item label={<InstagramOutlined style={{ fontSize: 25, color: '#082366' }} />}><Link target="_blank" href="https://www.instagram.com/healthcity35">Health City</Link></Descriptions.Item>
                            </Descriptions>
                        </Slide>
                    </Col>

                    <Col xs={12} md={6}>
                        <Slide className="float-left" triggerOnce direction='up' fraction={1}>
                            <h2 className='text-center'>Get In Touch</h2>
                            <Form
                                name="basic"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your Email!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[{ required: true, message: 'Please input your Phone#!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Query"
                                    name="query"
                                    rules={[{ required: true, message: 'Please input your Query!' }]}
                                >
                                    <TextArea rows={4} />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 4, span: 30 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Slide>
                    </Col>
                </Row>
                <Row className="my-5">
                    <h1 className="text-center">Visit Us</h1>
                    <div className={styles.gmap_canvas}>
                        <iframe className={styles.gmap_iframe} width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=16%20pepper%20street+(Twin%20Brain)&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ContactUs;