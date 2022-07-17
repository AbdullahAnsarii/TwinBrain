import { Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

const GAD7 = () => {
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const onFinish = (values) => {
        const total = 0;
        Object.values(values).map(value => total += value)
        setScore(total);
        if (total <= 4) {
            setResult("No Anxiety.")
        }
        else if (total <= 9) {
            setResult("Mild Anxiety.")
        }
        else if (total <= 14) {
            setResult("Moderate Anxiety.")
        }
        else if (total <= 21) {
            setResult("Severe Anxiety.")
        }
        setShowResult(true);
    };
    return (
        <>
            <Head>
                <title>GAD7 (Anxiety)</title>
                <meta name="description" content="GAD7 (Anxiety) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>GAD7 (Anxiety)</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/gad7")}>GAD7 (Anxiety)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="gad7"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>GAD7 (Anxiety)</h4>
                        <p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>

                        <Row className={styles.question}>
                        <h5>1. Feeling nervous, anxious or on edge?</h5>
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
                        <h5>2. Worrying too much about different things?</h5>
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
                        <h5>3. Trouble relaxing?</h5>
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
                        <h5>4. Being so restless that it is hard to sit still?</h5>
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
                        <h5>5. Feeling afraid as if something awful might happen?</h5>
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
                            <h5>Becoming easily annoyed or irritable?</h5>
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
                            <h5>7. Not being able to stop or control worrying?</h5>
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
                        <Row className={styles.button}>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Row>
                        {showResult && <Row className={styles.button}>
                            <h6>You scored {score} out of 21</h6>
                            <h6>You have {result}</h6>
                            <p className='text-muted text-center' >Scores of 5, 10, and 15 are taken as the cut-off points for mild, moderate and severe anxiety, respectively. When used as a screening tool, further evaluation is recommended when the score is 10 or greater.</p>
                        </Row>}
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default GAD7;