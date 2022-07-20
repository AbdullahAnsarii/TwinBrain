import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1. Choose the statement that best describes your mood for the past week?",
            id: 1,
            options: ["I do not feel happier or more cheerful than usual.",
                "I occasionally feel happier or more cheerful than usual.",
                "I often feel happier or more cheerful than usual.",
                "I feel happier or more cheerful than usual most of the time.",
            "I feel happier of more cheerful than usual all of the time."]
        },
        {
            title: "2. Choose the statement that best describes your self-confidence for the past week?",
            id: 2,
            options: ["I do not feel more self-confident than usual.",
                "I occasionally feel more self-confident than usual.",
                "I often feel more self-confident than usual.",
                "I frequently feel more self-confident than usual.",
                "I feel extremely self-confident all of the time."]
        },
        {
            title: "3. Choose the statement that best describes your sleep pattern for the past week?",
            id: 3,
            options: ["I do not need less sleep than usual.",
                "I occasionally need less sleep than usual.",
                "I often need less sleep than usual.",
                "I frequently need less sleep than usual.",
                "I can go all day and all night without any sleep and still not feel tired."]
        },

        {
            title: "4. Choose the statement that best describes your speech for the past week?",
            id: 4,
            options: ["I do not talk more than usual.",
                "I occasionally talk more than usual.",
                "I often talk more than usual.",
                "I frequently talk more than usual.",
                "I talk constantly and cannot be interrupted."]
        },
        {
            title: "5. Choose the statement that best describes your activity level for the past week?",
            id: 5,
            options: ["I have not been more active (either socially, sexually, at work, home, or school) than usual.",
                "I have occasionally been more active than usual.",
                "I have often been more active than usual.",
                "I have frequently been more active than usual.",
                "I am constantly more active or on the go all the time."]
        },

    ]
    return {
        props: { questions }
    }
}

const ASRM = ({ questions }) => {
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
                <title>Altman Self-Rating Mania Scale (ASRM)</title>
                <meta name="description" content="Altman Self-Rating Mania Scale (ASRM) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h3>Altman Self-Rating Mania Scale (ASRM)</h3>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/ASRM")}>Altman Self-Rating Mania Scale (ASRM)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="ASRM"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Altman Self-Rating Mania Scale (ASRM)</h4>
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
                                    {ques.options?.map((option, id) => (
                                        <Radio key={id} value={id}>{option}</Radio>
                                    ))}
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

export default ASRM;