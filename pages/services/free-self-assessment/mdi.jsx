import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1. Have you felt low in spirits or sad?",
            id: 1
        },
        {
            title: "2. Have you lost interest in your daily activities?",
            id: 2
        },
        {
            title: "3. Have you felt lacking in energy and strength?",
            id: 3
        },
        {
            title: "4. Have you felt less self-confident?",
            id: 4
        },
        {
            title: "5. Have you had a bad conscience or feelings of guilt?",
            id: 5
        },
        {
            title: "6. Have you felt that life wasn’t worth living?",
            id: 6
        },
        {
            title: "7. Have you had difficulty in concentrating?",
            id: 7
        },
        {
            title: "8. Have you felt very restless?",
            id: 8
        },
        {
            title: "9. Have you felt subdued or slowed down?",
            id: 9
        },
        {
            title: "10. Have you had trouble sleeping at night?",
            id: 10
        },
        {
            title: "11. Have you suffered from reduced appetite?",
            id: 11
        },
        {
            title: "12. Have you suffered from increased appetite?",
            id: 12
        }
    ]
    return {
        props: { questions }
    }
}

const MDI = ({ questions }) => {
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
                <title>Major Depression Inventory (MDI)</title>
                <meta name="description" content="Major Depression Inventory (MDI) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Major Depression Inventory (MDI)</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/MDI")}>Major Depression Inventory (MDI)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="DSM5"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Major Depression Inventory (MDI)</h4>
                        <p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>

                        {questions.map(ques =>
                        (<Row key={ques.id} className={styles.question}>
                            <h5>{ques.title}</h5>
                            <Form.Item
                                name={`Q${ques.id}`}
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group id={ques.id}>
                                    <Radio value={0}>Never</Radio>
                                    <Radio value={1}>Some Of Them Time</Radio>
                                    <Radio value={2}>Slightly Less Than Half The Time</Radio>
                                    <Radio value={3}>Slightly More Than Half The Time</Radio>
                                    <Radio value={4}>Most Of The Time</Radio>
                                    <Radio value={5}>All The Time</Radio>
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
                            <h6>You scored {score} out of 60</h6>
                            <p className='text-muted text-center' >
                            Higher scores indicate more severe depression.
                            </p>
                        </Row>}
                    </Form>
                </Row>
            </Container >
        </>
    )
}

export default MDI;