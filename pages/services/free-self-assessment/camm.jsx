import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1. I get upset with myself for having feelings that don’t make sense.",
            id: 1
        },
        {
            title: "2. At school, I walk from class to class without noticing what I’m doing.",
            id: 2
        },
        {
            title: "3. I keep myself busy so I don’t notice my thoughts or feelings.",
            id: 3
        },
        {
            title: "4. I tell myself that I shouldn’t feel the way I’m feeling.",
            id: 4
        },
        {
            title: "5. I push away thoughts that I don’t like.",
            id: 5
        },
        {
            title: "6. It’s hard for me to pay attention to only one thing at a time.",
            id: 6
        },
        {
            title: "7. I get upset with myself for having certain thoughts.",
            id: 7
        },

        {
            title: "8. I think about things that have happened in the past instead of thinking about things that are happening right now.",
            id: 8
        },

        {
            title: "9. I think that some of my feelings are bad and that I shouldn’t have them.",
            id: 9
        },
        {
            title: "10. I stop myself from having feelings that I don’t like.",
            id: 10
        },
    ]
    return {
        props: { questions }
    }
}

const CAMM = ({ questions }) => {
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
                <title>Child Acceptance and Mindfulness Measure (CAMM)</title>
                <meta name="description" content="Child Acceptance and Mindfulness Measure (CAMM) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h3>Child Acceptance and Mindfulness Measure (CAMM)</h3>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/camm")}>CAMM</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="cgi"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Child Acceptance and Mindfulness Measure (CAMM)</h4>
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
                                    <Radio value={0}>Never True</Radio>
                                    <Radio value={1}>Rarely True</Radio>
                                    <Radio value={2}>Somewhat or Sometimes true</Radio>
                                    <Radio value={3}>Often True</Radio>
                                    <Radio value={4}>Always True</Radio>
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
                            <h6>You scored {score} out of 40</h6>
                            <p className='text-muted text-center' >The score ranges are as follows:<br/>
                                First reverse all scores by changing 0 to 4, 1 to 3, 3 to 1, and 4 to 0 (2 stays unchanged). Then
                                sum all items. Higher scores correspond to higher levels of mindfulness.
                            </p>
                        </Row>}
                    </Form>
                </Row>
            </Container >
        </>
    )
}

export default CAMM;