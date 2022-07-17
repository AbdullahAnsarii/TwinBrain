import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "I think about this person so much that it’s hard for me to do the things I normally do.",
            id: 1
        },
        {
            title: "2. Memories of the person who died upset me.",
            id: 2
        },
        {
            title: "3. I cannot accept the death of the person who died.",
            id: 3
        },
        {
            title: "4. I feel myself longing for the person who died.",
            id: 4
        },
        {
            title: "5. I feel drawn to places and things associated with the person who died.",
            id: 5
        },
        {
            title: "6. I can’t help feeling angry about his/her death.",
            id: 6
        },
        {
            title: "7. I feel disbelief over what happened.",
            id: 7
        },
        {
            title: "8. I feel stunned or dazed over what happened.",
            id: 8
        },
        {
            title: "9. Ever since s/he died it is hard for me to trust people.",
            id: 9
        },
        {
            title: "10. Ever since s/he died I feel like I have lost the ability to care about other people or I feel distant from people I care about.",
            id: 10
        },
        {
            title: "11. I have pain in the same area of my body or I have some of the same symptoms as the person who died.",
            id: 11
        },
        {
            title: "12. I go out of my way to avoid reminders of the person who died.",
            id: 12
        },
        {
            title: "13. I feel that life is empty without the person who died.",
            id: 13
        },
        {
            title: "14. I hear the voice of the person who died speak to me.",
            id: 14
        },
        {
            title: "15. I see the person who died stand before me.",
            id: 15
        },
        {
            title: "16. I feel that it is unfair that I should live when this person died.",
            id: 16
        },
        {
            title: "17. I feel bitter over this person’s death.",
            id: 17
        },
        {
            title: "18. I feel envious of others who have not lost someone close.",
            id: 18
        },
        {
            title: "19. I feel lonely a great deal of the time ever since s/he died.",
            id: 19
        },
    ]
    return {
        props: { questions }
    }
}

const CGI = ({ questions }) => {
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
                <title>Complicated Grief Inventory</title>
                <meta name="description" content="Complicated Grief Inventory | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Complicated Grief Inventory</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/cgi")}>Complicated Grief Inventory</Breadcrumb.Item>
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
                        <h4>Complicated Grief Inventory</h4>
                        <p>For each question, record if you “Definitely agree”, “Slightly agree”, “Slightly disagree” or “Definitely disagree”.</p>

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
                                    <Radio value={1}>Rarely</Radio>
                                    <Radio value={2}>Sometimes</Radio>
                                    <Radio value={3}>Often</Radio>
                                    <Radio value={4}>Always</Radio>
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
                            <p className='text-muted text-center' >The score ranges are as follows:
                                0-24 –Experiencing Normal grief
                                25 -30 –On the Complicated Grief Threshold
                                30-76 – Strong Indication of Complicated Grief
                            </p>
                        </Row>}
                    </Form>
                </Row>
            </Container >
        </>
    )
}

export default CGI;