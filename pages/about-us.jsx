import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/AboutUs.module.scss';
import { Breadcrumb, Image, Spin } from "antd";
import Link from "next/link";
import router from "next/router";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="About | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>About Us</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/about-us")}>About Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className="my-5">
                    <h1 className="text-center">Assessment Service</h1>
                    <Col xs={12} md={6}>
                        <Slide triggerOnce fraction={1} direction="up">
                            <Image className={styles.image} src="/assets/images/twinbrain-about-1.jpg"placeholder={<Spin />} preview={false} />
                        </Slide>
                    </Col>
                    <Col xs={12} md={6}>
                        <Slide triggerOnce fraction={1} direction="up" delay={200}>
                            <p><b>The Psychological Assessment Service: </b></p>
                            <p><CheckOutlined style={{ fontSize: 20, color: 'green' }} />&nbsp;Is  one of the menuses of the <strong>Twin Brain App</strong> and website <a href="https://web.archive.org/web/20220618201635mp_/https://www.twinbrain.org" target="_blank">(www.twinbrain.org).</a></p>
                            <p><CheckOutlined style={{ fontSize: 20, color: 'green' }} />&nbsp;Offers paid assessments.</p>
                            <p><CheckOutlined style={{ fontSize: 20, color: 'green' }} />&nbsp;Offers <strong>Psychological Assessment Questionnaires</strong> and a Report.</p>
                        </Slide>
                    </Col>
                </Row>
                <Row className="my-5">
                    <h1 className="text-center">TwinBrain Ltd.</h1>

                    <Col xs={12} md={6}>
                        <Slide triggerOnce fraction={1} direction="up" delay={400}>
                            <p><strong>TwinBrain Ltd</strong>, owner of TwinBrain App, is a&nbsp;UK&nbsp;based healthcare in London that operates on social enterprise principles. It was registered 30 April 2020 with Companies House  number 12580210.</p>
                            <p><strong>TwinBrain</strong> App was founded by <strong>Dr Benaliligha Francis Selemo</strong> (a clinical psychologist and cognitive behavioural therapist), Zuowei Joshua, Zuo-ere Emmanuella, Tekpa-ere Sarra, Kio Uriella, Tamaranane Samuel, Ganna Kudobetska, Mary Selemo, Dennis Opuofeni and  with support  from a group of former clients of Health City (www.healthcity.org.uk),  many professional colleagues and friends.</p>
                            <p><strong>The Twin Brain</strong>  resources endeavour to give  people some understanding of how the proposed idea of the Twin Brain works. Then  people may decide whether they may have a Twin Brain or not. It is hope that the Step-by-Step Guide resources in the <strong>Twin Brain App</strong>,  the <strong>Twin Brain website</strong>, the Twin Brain booklets, other  resources  from <strong>Twin Brain Ltd</strong> and the support from a person’s qualified and accredited local medical professional, may assist  the person to acquire some self-help coping techniques to reduce distress from emotional problems or improve  their  wellbeing.</p>
                        </Slide>
                    </Col>
                    <Col xs={12} md={6}>
                        <Slide triggerOnce fraction={1} direction="up">
                            <Image className={styles.image} src="/assets/images/twinbrain-about-2.jpg"placeholder={<Spin />} preview={false} />
                        </Slide>
                    </Col>
                </Row>
                <Row className="my-5">
                    <h1 className="text-center">TwinBrain Vision</h1>
                    <Col xs={12} md={6}>
                        <Slide triggerOnce fraction={1} direction="up">
                            <Image className={styles.image} src="/assets/images/twinbrain-about-3.jpg"placeholder={<Spin />} preview={false} />
                        </Slide>
                    </Col>
                    <Col xs={12} md={6}>
                        <Slide triggerOnce fraction={1} direction="up" delay={600}>
                        <p>The vision is that billions of people across the globe may use the <strong>Twin Brain</strong> resources along  with support from qualified and accredited professionals to improve their wellbeing.</p>
                        <p><strong>DO I HAVE  A TWIN BRAIN?</strong><br/>The theory of the Twin Brain suggests that:</p>
                        <p><ArrowRightOutlined style={{fontSize: 20, color: 'green'}} /> &nbsp;The human brain behaves like a computer capturing and storing vast information as good or corrupted files. </p>
                        <p><ArrowRightOutlined style={{fontSize: 20, color: 'green'}} /> &nbsp;The human brain behaves like a real human being with ability to use the stored information to help us fight or run from threats or be happy and creative.</p>
                        <p><ArrowRightOutlined style={{fontSize: 20, color: 'green'}} /> &nbsp;If files were installed in the brain, then with proactive steps, good files can be deliberately activated and corrupted files (like virus in a computer) can be deliberately un-</p>
                       </Slide>
                    </Col>
                </Row>
                <Row className="my-5">
                <Slide triggerOnce direction='up' fraction={1} delay={200}>
                    <h1 className="text-center">Privacy - How do we use your information?</h1>
                    <p>Your privacy is important and we take it seriously. Your personal information will only be used to administer your subscription (if any) and your website account (if any) and to offer the services and products you asked from us, example in relationship to your  request for treatments, self-help resources, training etc.</p>
                </Slide>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs;