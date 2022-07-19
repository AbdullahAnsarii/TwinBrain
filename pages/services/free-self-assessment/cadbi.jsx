import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "Your son/daughter often complains about some physical discomfort (for example: a headache, stomach ache, etc.).",
            id: 1
        },
        {
            title: "2. He is excessively worried about illnesses and/or that he will get ill.",
            id: 2
        },
        {
            title: "3. He finds it difficult to fall asleep or says he does not sleep well.",
            id: 3
        },
        {
            title: "4. His sleep is disturbed by nightmares or waking up during the night.",
            id: 4
        },
        {
            title: "5. He appears tense and/or anxious.",
            id: 5
        },
        {
            title: "6. He tends to worry about everything.",
            id: 6
        },
        {
            title: "7. He worries about school too much.",
            id: 7
        },
        {
            title: "8. It is hard for him to be separated or far from his parents.",
            id: 8
        },
        {
            title: "9. He is excessively shy.",
            id: 9
        },
        {
            title: "10. He is usually embarrassed around strangers or people he does not know very well.",
            id: 10
        },
        {
            title: "11. He is excessively afraid of something (e.g. the dark, being alone, insects, thieves) Specify what he is afraid of.",
            id: 11
        },
        {
            title: "12. He is excessively afraid of dirt, so he has to wash continually.",
            id: 12
        },
    ]
    return {
        props: { questions }
    }
}

const CADBI = ({ questions }) => {
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
                <title>Child And Adult Disruptive Behavior Inventory (CADBI)</title>
                <meta name="description" content="Child And Adult Disruptive Behavior Inventory (CADBI) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h3>Child And Adult Disruptive Behavior Inventory (CADBI)</h3>
                <Breadcrumb  className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/cadbi")}>CADBI</Breadcrumb.Item>
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
                        <h4>Child And Adult Disruptive Behavior Inventory (CADBI)</h4>
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
                                    <Radio value={0}>Very True</Radio>
                                    <Radio value={1}>Somewhat or Sometimes true</Radio>
                                    <Radio value={2}>Not True</Radio>
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
                            <h6>You scored {score} out of 24</h6>
                            {/* <p className='text-muted text-center' >The score ranges are as follows:
                                0-24 –Experiencing Normal grief
                                25 -30 –On the Complicated Grief Threshold
                                30-76 – Strong Indication of Complicated Grief
                            </p> */}
                        </Row>}
                    </Form>
                </Row>
            </Container >
        </>
    )
}

export default CADBI;