import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/PaidAssessment.module.scss';
import { Breadcrumb, Card, Button } from "antd";
import router from "next/router";
import { Slide } from "react-awesome-reveal";
import { freeQuestionnaires } from "../../../data/freeQuestionnaires";
import Link from "next/link";
import PaidAssessmentTable from "../../../components/PaidAssessmentTable";

const PaidAssessment = () => {
    return (
        <>
            <Head>
                <title>Paid Assessment</title>
                <meta name="description" content="Paid Assessment | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Paid Assessment</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/paid-assessment")}>Paid Assessment</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <div className="text-center">
                    <h4>Paid Psychological Assessment</h4>
                </div>
                <Row className='my-3'>
                    <PaidAssessmentTable />
                </Row>
            </Container>
        </>
    )
}

export default PaidAssessment;