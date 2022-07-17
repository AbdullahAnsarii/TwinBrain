import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Button, Form, Slider } from "antd";
import router from "next/router";
import { useState } from "react";

const WASAS = () => {
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
                <title>Work and Social Adjustment Scale</title>
                <meta name="description" content="Work and Social Adjustment Scale | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Work and Social Adjustment Scale</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/wasas")}>Work and Social Adjustment Scale</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="wasas"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Work and Social Adjustment Scale</h4>
                        <p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>
                        <p className='text-muted text-center' >0 = Would not avoid it, 2 = Slightly avoid it, 4 = Definitely avoid it, 6 = Markedly avoid it, 8 = Always avoid it.
                            In-between answers (1, 3, 5, 7 are allowed)</p>
                        <Row className={styles.question}>
                        <h5>1. Because of my [problem] my ability to work is impaired. ‘0’ means ‘not at all impaired’ and ‘8’ means very severely impaired to the point I can't work.</h5>
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
                        <h5>2. Because of my [problem] my home management (cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired.</h5>
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
                        <h5>3. Because of my [problem] my social leisure activities (with other people e.g. parties, bars, clubs, outings, visits, dating, home entertaining) are impaired.</h5>
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
                        <Row className={styles.question}>
                        <h5>4. Because of my [problem], my private leisure activities (done alone, such as reading, gardening, collecting, sewing, walking alone) are impaired.</h5>
                            <Form.Item
                                name="Q4"
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
                        <h5>5. Because of my [problem], my ability to form and maintain close relationships with others, including those I live with, is impaired.</h5>
                            <Form.Item
                                name="Q5"
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
                            <h6>You scored {score} out of 40</h6>
                        </Row>}
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default WASAS;