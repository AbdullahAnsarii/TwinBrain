import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/Assessors.module.scss';
import { Breadcrumb, Image, Spin } from "antd";
import Link from "next/link";
import router from "next/router";
import { ArrowRightOutlined, CheckOutlined, CalendarTwoTone, DollarCircleTwoTone, EditFilled, FacebookFilled, LinkedinFilled, MedicineBoxTwoTone, PhoneTwoTone, RightCircleOutlined, RightCircleTwoTone, SearchOutlined, SendOutlined, TwitterOutlined } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
const Assessors = () => {
    return (
        <>
            <Head>
                <title>Assessors</title>
                <meta name="description" content="Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Assessors</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/assessors")}>Assessors</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/dr-francis-selemo.png" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Dr. Francis Selemo</h3>
                                <h4 className="title">CPsychol, AFBPsS, MBABCP, MCMI</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/lucy-arnold.png" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Lucy Arnold</h3>
                                <h4 className="title">Clinical Specialist</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/lindita-nerguti.jpg" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Linditi Nerguti</h3>
                                <h4 className="title">Psychotheraphy Practitioner</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/farida.jpg" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Farida</h3>
                                <h4 className="title">Integrative Counsellor</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/daniel.jpg" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Daniel Mirea</h3>
                                <h4 className="title">Consultant Cognitive Behavioural</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/raymond-vandy.jpg" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Raymond Vandy</h3>
                                <h4 className="title">Psychodynamic Counsellor</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/ms-emma-tierney.jpg" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Ms. Emma Tierney</h3>
                                <h4 className="title">Integrative Counsellor</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/danelle-devi-hollenbeck.jpg" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Danelle Devi</h3>
                                <h4 className="title">Consultant Cognitive Behavioural</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/edward-bbira.png" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Edward Bbira</h3>
                                <h4 className="title">Psychodynamic Counsellor</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="/assets/images/caroline-howard.jpg" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Caroline Howard</h3>
                                <h4 className="title">Integrative Counsellor</h4>
                            </div>
                            <ul className="social">
                                <li><a href="/"><FacebookFilled /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><LinkedinFilled /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Assessors;