import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1 How much have you been able to laugh and see the funny side of things?",
            id: 1
        },
        {
            title: "2 How much have you looked forward with enjoyment to things?",
            id: 2
        },
        {
            title: "3 How much have you blamed yourself unnecessarily when things went wrong?",
            id: 3
        },

        {
            title: "4 How much have you felt anxious or worried for no good reason?",
            id: 4
        },
        {
            title: "5 How much have you felt scared or panicky for no very good reason?",
            id: 5
        },
        {
            title: "6 How much have things have been getting on top of me?",
            id: 6
        },
        {
            title: "7 How much have you been so unhappy that you have had difficulty sleeping?",
            id: 7
        },
        {
            title: "8 How much have you felt sad or miserable?",
            id: 8
        },

        {
            title: "9 How much have you been so unhappy that you have been crying?",
            id: 9
        },
        {
            title: "10 How much have you had thoughts of harming yourself?",
            id: 10
        }
    ]
    return {
        props: { questions }
    }
}

const EPDS = ({ questions }) => {
    //issue with scoring
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const onFinish = (values) => {
        const total = 0;
        Object.values(values).forEach(value => total += value)
        setScore(total);
        setShowResult(true);
    };
    return (
        <>
            <Head>
                <title>Edinburgh Postnatal Depression Scale (EPDS)</title>
                <meta name="description" content="Edinburgh Postnatal Depression Scale (EPDS) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h3>Edinburgh Postnatal Depression Scale (EPDS)</h3>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/EPDS")}>Edinburgh Postnatal Depression Scale (EPDS)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="EPDS"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Edinburgh Postnatal Depression Scale (EPDS)</h4>
                        <p>In the past 7 days...</p>

                        {questions.map(ques =>
                        (<Row key={ques.id} className={styles.question}>
                            <h5>{ques.title}</h5>
                            <Form.Item
                                name={`Q${ques.id}`}
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group id={ques.id}>
                                    <Radio value={0}>As much as I could</Radio>
                                    <Radio value={1}>Not quite so much now</Radio>
                                    <Radio value={2}>Definitely not so much now</Radio>
                                    <Radio value={3}>Not at all</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>))}

                        <Row className={styles.button}>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Row>
                        {showResult && <Row className={styles.button}>
                            <h6>You scored {score}</h6>
                            {/* <p className='text-muted text-center' >
                                Higher score means you have anger issues
                            </p> */}
                        </Row>}
                    </Form>
                </Row>
            </Container >
        </>
    )
}

export default EPDS;