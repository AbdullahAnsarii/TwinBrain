import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1	Elevated Mood",
            id: 1,
            options: ["Absent",
                "Mildly or possibly increased on questioning",
                "Definite subjective elevation; optimistic, self-confident; cheerful; appropriate to content",
                "Elevated; inappropriate to content; humorous", "Euphoric; inappropriate laughter; singing"]
        },
        {
            title: "2	Increased Motor Activity-Energy",
            id: 2,
            options: ["Absent",
                "Subjectively increased",
                "Animated; gestures increased",
                "Excessive energy; hyperactive at times; restless (can be calmed)",
                "Motor excitement; continuous hyperactivity (cannot be calmed)"]
        },
        {
            title: "3	Sexual Interest",
            id: 3,
            options: ["Normal; not increased",
                "Mildly or possibly increased",
                "Definite subjective increase on questioning",
                "Spontaneous sexual content; elaborates on sexual matters; hypersexual by self-report",
                "Overt sexual acts (toward patients, staff, or interviewer)"]
        },

        {
            title: "4	Sleep",
            id: 4,
            options: ["Reports no decrease in sleep",
                "Sleeping less than normal amount by up to one hour",
                "Sleeping less than normal by more than one hour",
                "Reports decreased need for sleep",
                "Denies need for sleep"]
        },
        {
            title: "5	Irritability",
            id: 5,
            options: ["Absent",
                "Subjectively increased",
                "Irritable at times during interview; recent episodes of anger or annoyance on ward",
                "Frequently irritable during interview; short, curt throughout",
                "Hostile, uncooperative; interview impossible"]
        },
        {
            title: "6	Speech",
            id: 6,
            options: ["No increase",
                "Feels talkative",
                "Increased rate or amount at times, verbose at times",
                "Push; consistently increased rate and amount; difficult to interrupt",
                "Pressured; uninterruptible, continuous speech"]
        },
        {
            title: "7	Language-Thought Disorder",
            id: 7,
            options: ["Absent",
                "Circumstantial; mild distractibility; quick thoughts",
                "Distractible, loses goal of thought; changes topics frequently; racing thoughts",
                "Flight of ideas; tangentiality; difficult to follow; rhyming, echolalia",
                "Incoherent; communication impossible"]
        },
        {
            title: "8	Content",
            id: 8,
            options: ["Normal",
                "Questionable plans, new interests",
                "Special project(s); hyper-religious",
                "Grandiose or paranoid ideas; ideas of reference",
                "Delusions; hallucinations"]
        },

        {
            title: "9	Disruptive-Aggressive Behavior",
            id: 9,
            options: ["Absent, cooperative",
                "Sarcastic; loud at times, guarded",
                "Demanding; threats on ward",
                "Threatens interviewer; shouting; interview difficult",
                "Assaultive; destructive; interview impossible"]
        },
        {
            title: "10  Apprearance",
            id: 10,
            options: ["Appropriate dress and grooming",
                "Minimally unkempt",
                "Poorly groomed; moderately disheveled; overdressed",
                "Disheveled; partly clothed; garish make-up",
                "Completely unkempt; decorated; bizarre garb"]
        },
        {
            title: "11  Insight",
            id: 11,
            options: ["Present; admits illness; agrees with need for treatment",
                "Possibly ill",
                "Admits behavior change, but denies illness",
                "Admits possible change in behavior, but denies illness",
                "Denies any behavior change"]
        }

    ]
    return {
        props: { questions }
    }
}

const YMRS = ({ questions }) => {
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
                <title>Young Mania Rating Scale (YMRS)</title>
                <meta name="description" content="Young Mania Rating Scale (YMRS) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h3>Young Mania Rating Scale (YMRS)</h3>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/ymrs")}>Young Mania Rating Scale (YMRS)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="YMRS"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Young Mania Rating Scale (YMRS)</h4>
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

export default YMRS;