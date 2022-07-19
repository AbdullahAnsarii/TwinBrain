import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1. I was irritated more than people knew.",
            id: 1
        },
        {
            title: "2. I felt angry.",
            id: 2
        },
        {
            title: "3. I felt I was ready to explode.",
            id: 3
        },
        {
            title: "4. I was grouchy.",
            id: 4
        },
        {
            title: "5. I felt annoyed.",
            id: 5
        }
    ]
    return {
        props: { questions }
    }
}

const DSM5 = ({ questions }) => {
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
                <title>Anger Assessment DSM-5</title>
                <meta name="description" content="Anger Assessment DSM-5 | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Anger Assessment DSM-5</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/dsm5")}>Anger Assessment DSM-5</Breadcrumb.Item>
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
                        <h4>Anger Assessment DSM-5</h4>
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
                                    <Radio value={1}>Never</Radio>
                                    <Radio value={2}>Rarely</Radio>
                                    <Radio value={3}>Sometimes</Radio>
                                    <Radio value={4}>Often</Radio>
                                    <Radio value={5}>Always</Radio>
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
                            <h6>You scored {score} out of 25</h6>
                            <p className='text-muted text-center' >
                                Higher score means you have anger issues
                            </p>
                        </Row>}
                    </Form>
                </Row>
            </Container >
        </>
    )
}

export default DSM5;