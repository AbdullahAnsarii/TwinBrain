import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1. felt moments of sudden terror, fear, or fright.",
            id: 1
        },
        {
            title: "2. felt anxious, worried, or nervous.",
            id: 2
        },
        {
            title: "3. had thoughts of bad things happening, such as family tragedy, ill health, loss of a job, or accidents.",
            id: 3
        },
        {
            title: "4. felt a racing heart, sweaty, trouble breathing, faint, or shaky.",
            id: 4
        },
        {
            title: "5. felt tense muscles, felt on edge or restless, or had trouble relaxing or trouble sleeping.",
            id: 5
        },
        {
            title: "6. avoided, or did not approach or enter, situations about which I worry.",
            id: 6
        },
        {
            title: "7. left situations early or participated only minimally due to worries.",
            id: 7
        },

        {
            title: "8. spent lots of time making decisions, putting off making decisions, or preparing for situations, due to worries.",
            id: 8
        },

        {
            title: "9. needed help to cope with anxiety (e.g., alcohol or medication, superstitious objects, or other people).",
            id: 9
        },
    ]
    return {
        props: { questions }
    }
}

const GASMA = ({ questions }) => {
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
                <title>Generalized Anxiety Severity Measure Adolescents 11-17 (GASMA)</title>
                <meta name="description" content="Generalized Anxiety Severity Measure Adolescents 11-17 (GASMA) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h3>Generalized Anxiety Severity Measure Adolescents 11-17 (GASMA)</h3>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/GASMA")}>GASMA</Breadcrumb.Item>
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
                        <h4>Generalized Anxiety Severity Measure Adolescents 11-17 (CAMM)</h4>
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
                                    <Radio value={1}>Occasionally</Radio>
                                    <Radio value={2}>Half of the time</Radio>
                                    <Radio value={3}>Most of the time</Radio>
                                    <Radio value={4}>All of the time</Radio>
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
                            <h6>You scored {score} out of 36</h6>
                            {/* <p className='text-muted text-center' >The score ranges are as follows:<br/>
                                First reverse all scores by changing 0 to 4, 1 to 3, 3 to 1, and 4 to 0 (2 stays unchanged). Then
                                sum all items. Higher scores correspond to higher levels of mindfulness.
                            </p> */}
                        </Row>}
                    </Form>
                </Row>
            </Container >
        </>
    )
}

export default GASMA;