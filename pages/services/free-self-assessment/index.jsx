import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button } from "antd";
import router from "next/router";
import { Slide } from "react-awesome-reveal";
import { freeQuestionnaires } from "../../../data/freeQuestionnaires";
import Link from "next/link";

const FreeSelfAssessment = () => {
    return (
        <>
            <Head>
                <title>Free Psychological Questionnaires</title>
                <meta name="description" content="Free Psychological Questionnaires | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Free Psychological Questionnaires</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <div className="d-flex justify-content-center align-items-start">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/info--v1.png" width="2%" />
                    This is  a confidential free  facility that gives you a chance to complete mood questionnaires. Scores  are generated and can be  emailed  to  your family doctor and other healthcare professionals chosen by you. The questionnaires  are intended as a guide only to inform assessment and therapy with your  qualified medical  professional. High scores are not a confirmation of a diagnosis.
                </div>
                <Row id={styles.assessment} className='my-3'>
                    {freeQuestionnaires.map((questionnaire, index) => (
                        <Col key={questionnaire.url} xs={12} md={4} className="d-flex justify-content-center my-5">
                            <Slide triggerOnce direction='up' delay={index * 50}>
                                <Card className={styles.assessmentCard} bordered={true} hoverable={true}>
                                    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-pencil-school-and-learning-flatart-icons-flat-flatarticons.png" />
                                    <h5>{questionnaire.name}</h5>
                                    <Link href={questionnaire.url}>
                                        <Button type="primary" shape="round">Continue</Button>
                                    </Link>
                                </Card>
                            </Slide>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default FreeSelfAssessment;