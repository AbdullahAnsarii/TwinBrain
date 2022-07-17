import {  Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Button, Form,  Slider } from "antd";
import router from "next/router";
import { useState } from "react";

const IAPT = () => {
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const onFinish = (values) => {
        const total = 0;
        Object.values(values).map(value => total += value)
        setScore(total);
        setShowResult(true);
    };
    return (
        <>
            <Head>
                <title>IAPT Phobia Scale</title>
                <meta name="description" content="IAPT Phobia Scale | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>IAPT Phobia Scale</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/iapt")}>IAPT Phobia Scale</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="iapt"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>IAPT Phobia Scale</h4>
                        <p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>
                        <p className='text-muted text-center' >0 = Would not avoid it, 2 = Slightly avoid it, 4 = Definitely avoid it, 6 = Markedly avoid it, 8 = Always avoid it.
                            In-between answers (1, 3, 5, 7 are allowed)</p>
                        <Row className={styles.question}>
                            <h5>1. Social situations due to a fear of being embarrassed or making a fool of myself.</h5>
                            <Form.Item
                                name="Q1"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}>

                                <Slider
                                    max={8}
                                    marks={{
                                        0: '0',
                                        2: '2',
                                        4: '4',
                                        6: '6',
                                        8: '8',
                                    }}
                                />
                            </Form.Item>
                        </Row>
                        <Row className={styles.question}>
                            <h5>2. Certain situations because of a fear of having a panic attack or other distressing symptoms
                                (such as loss of bladder control, vomiting or dizziness).</h5>
                            <Form.Item
                                name="Q2"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}>

                                <Slider
                                    max={8}
                                    marks={{
                                        0: '0',
                                        2: '2',
                                        4: '4',
                                        6: '6',
                                        8: '8',
                                    }}
                                />
                            </Form.Item>
                        </Row>
                        <Row className={styles.question}>
                            <h5>3. Certain situations because of a fear of particular objects or activities
                                (such as animals, heights, seeing blood, being in confined spaces, driving or flying).</h5>
                            <Form.Item
                                name="Q3"
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}>

                                <Slider
                                    max={8}
                                    marks={{
                                        0: '0',
                                        2: '2',
                                        4: '4',
                                        6: '6',
                                        8: '8',
                                    }}
                                />
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
                            <h6>You scored {score} out of 24</h6>
                        </Row>}
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default IAPT;