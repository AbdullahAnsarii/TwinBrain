import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { Slide } from "react-awesome-reveal";
import { freeQuestionnaires } from "../../../data/freeQuestionnaires";
import Link from "next/link";
import { useState } from "react";

const PHQ9 = () => {
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const onFinish = (values) => {
        const total = 0;
        Object.values(values).map(value => total += value)
        setScore(total);
        if (total <= 4) {
            setResult("no depression.")
        }
        else if (total <= 9) {
            setResult("mild depression.")
        }
        else if (total <= 14) {
            setResult("moderate depression.")
        }
        else if (total <= 19) {
            setResult("moderately severe depression.")
        }
        else if (total <= 27) {
            setResult("severe depression.")
        }
        setShowResult(true);
    };
    return (
        <>
            <Head>
                <title>PHQ9 (Depression)</title>
                <meta name="description" content="PHQ9 (Depression) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>PHQ9 (Depression)</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/phq9")}>PHQ9 (Depression)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="phq9"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>PHQ9 (Depression)</h4>
                        <p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>

                        <Row className={styles.question}>
                            <h5>1. Little interest or pleasure in doing things?</h5>
                            <Form.Item
                                name="Q1"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>2. Feeling down, depressed, or hopeless?</h5>
                            <Form.Item
                                name="Q2"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>3. Trouble concentrating on things, such as reading the newspaper or watching television?</h5>
                            <Form.Item
                                name="Q3"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>4. Feeling tired or having little energy?</h5>
                            <Form.Item
                                name="Q4"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>5. Feeling bad about yourself - or that you are a failure or have let yourself or your family down?</h5>
                            <Form.Item
                                name="Q5"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>6. Thoughts that you would be better off dead, or of hurting yourself in some way?</h5>
                            <Form.Item
                                name="Q6"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>7. Moving or speaking so slowly that other people could have noticed?
                                Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?</h5>
                            <Form.Item
                                name="Q7"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>8. Poor appetite or overeating?</h5>
                            <Form.Item
                                name="Q8"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>

                        <Row className={styles.question}>
                            <h5>9. Trouble falling or staying asleep, or sleeping too much?</h5>
                            <Form.Item
                                name="Q9"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group>
                                    <Radio value={0}>Not at all</Radio>
                                    <Radio value={1}>Several days</Radio>
                                    <Radio value={2}>More than half the days</Radio>
                                    <Radio value={3}>Nearly Everyday</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Row>
                        <Row className={styles.button}>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Row>
                        {showResult && <Row className={styles.button}>
                            <h6>You scored {score} out of 27</h6>
                            <h6>You have {result}</h6>
                            <p className='text-muted text-center' >Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</p>
                        </Row>}
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default PHQ9;