import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1	I found it hard to wind down",
            id: 1
        },
        {
            title: "2	I was aware of dryness of my mouth",
            id: 2
        },
        {
            title: "3	I couldn't seem to experience any positive feeling at all",
            id: 3
        },

        {
            title: "4	I experienced breathing difficulty (eg, excessively rapid breathing breathlessness in the absence of physical exertion)",
            id: 4
        },
        {
            title: "5	I found it difficult to work up the initiative to do things",
            id: 5
        },
        {
            title: "6	I tended to over-react to situations",
            id: 6
        },
        {
            title: "7	I experienced trembling (eg, in the hands)",
            id: 7
        },
        {
            title: "8	I felt that I was using a lot of nervous energy",
            id: 8
        },

        {
            title: "9	I was worried about situations in which I might panic and make a fool of myself",
            id: 9
        },
        {
            title: "10	I felt that I had nothing to look forward to",
            id: 10
        },
        {
            title: "11	I found myself getting agitated",
            id: 11
        },
        {
            title: "12	I found it difficult to relax",
            id: 12
        },
        {
            title: "13	I felt down-hearted and blue",
            id: 13
        },

        {
            title: "14	I was intolerant of anything that kept me from getting on with what I was doing",
            id: 14
        },
        {
            title: "15	I felt I was close to panic",
            id: 15
        },
        {
            title: "16	I was unable to become enthusiastic about anything",
            id: 16
        },
        {
            title: "17	I felt I wasn't worth much as a person",
            id: 17
        },
        {
            title: "18	I felt that I was rather touchy",
            id: 18
        },

        {
            title: "19	I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)",
            id: 19
        },
        {
            title: "20	I felt scared without any good reason",
            id: 20
        },
        {
            title: "21	I felt that life was meaningless",
            id: 21
        },

    ]
    return {
        props: { questions }
    }
}

const DASS21 = ({ questions }) => {
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
                <title>Depression Anxiety Stress Scale (DASS21)</title>
                <meta name="description" content="Depression Anxiety Stress Scale (DASS21) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h3>Depression Anxiety Stress Scale (DASS21)</h3>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/dass21")}>Depression Anxiety Stress Scale (DASS21)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="DASS21"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Depression Anxiety Stress Scale (DASS21)</h4>
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
                                    <Radio value={0}>Did not apply to me at all</Radio>
                                    <Radio value={1}>Applied to me to some degree, or some of the time</Radio>
                                    <Radio value={2}>Applied to me to a considerable degree, or a good part of time</Radio>
                                    <Radio value={3}>Applied to me very much, or most of the time</Radio>
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

export default DASS21;