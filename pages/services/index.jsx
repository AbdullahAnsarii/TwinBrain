import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../styles/Services.module.scss';
import { Breadcrumb, Card, Image, Spin } from "antd";
import { MedicineBoxTwoTone, RightCircleTwoTone, DollarCircleTwoTone } from "@ant-design/icons";
import router from "next/router";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
const Services = () => {
    return (
        <>
            <Head>
                <title>Our Services</title>
                <meta name="description" content="Our Services | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Our Services</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Our Services</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <Row id={styles.assessment} className='my-3'>
                    <Col xs={12} md={3} className="d-flex justify-content-center my-5">
                        <Slide triggerOnce direction='up' fraction={1}>
                            <Card onClick={() => router.push("/services/free-self-assessment")} className={styles.assessmentCard} bordered={true} hoverable={true}>
                                <div>
                                    <img src="https://img.icons8.com/color-glass/96/000000/mental-health.png" />
                                    <h5>Free Self-Assessment</h5>
                                </div>
                               
                            </Card>
                        </Slide>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center my-5">
                        <Slide triggerOnce direction='up' fraction={1} delay={200}>
                            <Card onClick={() => router.push("/services/paid-assessment")} className={styles.assessmentCard} bordered={true} hoverable={true}>
                                <div>
                                    <img src="https://img.icons8.com/color-glass/96/000000/refund.png" />
                                    <h5>Paid Assessment</h5>
                                </div>
                            </Card>
                        </Slide>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center my-5">
                        
                        <Slide triggerOnce direction='up' fraction={1} delay={400}>
                        <a href="https://twinbrain.org/" target="_blank">
                            <Card className={styles.assessmentCard} bordered={true} hoverable={true}>
                                    <img src="https://img.icons8.com/color-glass/96/000000/discount.png" />
                                    <h5>Free or Discounted Therapy</h5>
                            </Card>
                            </a>
                        </Slide>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center my-5">
                        <Slide triggerOnce direction='up' fraction={1} delay={600}>
                            <a href='https://cbt.healthbj-uk.org/' target="_blank">
                            <Card className={styles.assessmentCard} bordered={true} hoverable={true}>
                                    <img src="https://img.icons8.com/color-glass/96/000000/treatment-plan.png" />      
                                    <h5>CBT Service</h5>
                            </Card>
                            </a>
                        </Slide>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center my-5">
                        <Slide triggerOnce direction='up' fraction={1}>
                            <a href="https://counselling.healthbj-uk.org/" target="_blank">
                            <Card className={styles.assessmentCard} bordered={true} hoverable={true}>
                                    <img src="https://img.icons8.com/color-glass/96/000000/trust.png" />      
                                    <h5>Counselling Service</h5>
                            </Card>
                            </a>
                        </Slide>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center my-5">
                        <Slide triggerOnce direction='up' fraction={1} delay={200}>
                            <a href="https://coupletherapy.healthbj-uk.org/" target="_blank">
                            <Card className={styles.assessmentCard} bordered={true} hoverable={true}>
                                    <img src="https://img.icons8.com/color-glass/96/000000/break-up.png" />      
                                    <h5>Couple Therapy Service</h5>
                            </Card>
                            </a>
                        </Slide>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-end my-5">
                        <Slide triggerOnce direction='up' fraction={1} delay={400}>
                            <a href="https://clinicalpsychology.healthbj-uk.org/" target="_blank">
                            <Card className={styles.assessmentCard} bordered={true} hoverable={true}>
                                    <img src="https://img.icons8.com/color-glass/96/000000/brain.png" />      
                                    <h5>Clinical & Health Psychology Service</h5>
                            </Card>
                            </a>
                        </Slide>
                    </Col>
                    <Col xs={12} md={3} className="d-flex justify-content-center my-5">
                        <Slide triggerOnce direction='up' fraction={1} delay={600}>
                            <a href="https://eap.healthbj-uk.org/" target="_blank">
                            <Card className={styles.assessmentCard} bordered={true} hoverable={true}>
                                    <img src="https://img.icons8.com/color-glass/96/000000/doctor-female.png" />      
                                    <h5>Occupational & Employee Assisted Programme</h5>
                            </Card>
                            </a>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services;