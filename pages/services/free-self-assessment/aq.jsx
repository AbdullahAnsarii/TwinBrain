import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    const questions = [
        {
            title: "1. I prefer to do things with others rather than on my own.",
            id: 1
        },
        {
            title: "2. I prefer to do things the same way over and over again.",
            id: 2
        },
        {
            title: "3. If I try to imagine something, I find it very easy to create a picture in my mind.",
            id: 3
        },
        {
            title: "4. I frequently get so strongly absorbed in one thing that I lose sight of other things.",
            id: 4
        },
        {
            title: "5. I often notice small sounds when others do not.",
            id: 5
        },
        {
            title: "6. I usually notice car number plates or similar strings of information.",
            id: 6
        },
        {
            title: "7. Other people frequently tell me that what I've said is impolite, even though I think it is polite.",
            id: 7
        },
        {
            title: "8. When I'm reading a story, I can easily imagine what the characters might look like.",
            id: 8
        },
        {
            title: "9. I am fascinated by dates.",
            id: 9
        },
        {
            title: "10. In a social group, I can easily keep track of several different people's conversations.",
            id: 10
        },
        {
            title: "11. I find social situations easy.",
            id: 11
        },
        {
            title: "12. I tend to notice details that others do not.",
            id: 12
        },
        {
            title: "13. I would rather go to a library than to a party.",
            id: 13
        },
        {
            title: "14. I find making up stories easy.",
            id: 14
        },
        {
            title: "15. I find myself drawn more strongly to people than to things.",
            id: 15
        },
        {
            title: "16. I tend to have very strong interests, which I get upset about if I can't pursue.",
            id: 16
        },
        {
            title: "17. I enjoy social chitchat.",
            id: 17
        },
        {
            title: "18. When I talk, it isn't always easy for others to get a word in edgewise.",
            id: 18
        },
        {
            title: "19. I am fascinated by numbers.",
            id: 19
        },
        {
            title: "20. When I'm reading a story, I find it difficult to work out the character's intentions.",
            id: 20
        },
        {
            title: "21. I don't particularly enjoy reading fiction.",
            id: 21
        },
        {
            title: "22. I find it hard to make new friends.",
            id: 22
        },
        {
            title: "23. I notice patterns in things all the time.",
            id: 23
        },
        {
            title: "24. I would rather go to the theatre than to a museum.",
            id: 24
        },
        {
            title: "25. It does not upset me if my daily routine is disturbed.",
            id: 25
        },
        {
            title: "26. I frequently find that I don't know how to keep a conversation going.",
            id: 26
        },
        {
            title: "27. I find it easy to 'read between the lines' when someone is talking to me.",
            id: 27
        },
        {
            title: "28. I usually concentrate more on the whole picture, rather than on the small details.",
            id: 28
        },
        {
            title: "29. I am not very good at remembering phone numbers.",
            id: 29
        },
        {
            title: "30. I don't usually notice small changes in a situation or a person's appearance.",
            id: 30
        },
        {
            title: "31. I know how to tell if someone listening to me is getting bored.",
            id: 31
        },
        {
            title: "32. I find it easy to do more than one thing at once.",
            id: 32
        },
        {
            title: "33. When I talk on the phone, I'm not sure when it's my turn to speak.",
            id: 33
        },
        {
            title: "34. I enjoy doing things spontaneously.",
            id: 34
        },
        {
            title: "35. I am often the last to understand the point of a joke.",
            id: 35
        },
        {
            title: "36. I find it easy to work out what someone is thinking or feeling just by looking at their face.",
            id: 36
        },
        {
            title: "37. If there is an interruption, I can switch back to what I was doing very quickly.",
            id: 37
        },
        {
            title: "38. I am good at social chitchat.",
            id: 38
        },
        {
            title: "39. People often tell me that I keep going on and on about the same thing.",
            id: 39
        },
        {
            title: "40. When I was young, I used to enjoy playing games involving pretending with other children.",
            id: 40
        },
        {
            title: "41. I like to collect information about categories of things (e.g. types of cars, birds, trains, plants).",
            id: 41
        },
        {
            title: "42. I find it difficult to imagine what it would be like to be someone else.",
            id: 42
        },
        {
            title: "43. I like to carefully plan any activities I participate in.",
            id: 43
        },
        {
            title: "44. I enjoy social occasions.",
            id: 44
        },
        {
            title: "45. I find it difficult to work out people's intentions.",
            id: 45
        },
        {
            title: "46. New situations make me anxious.",
            id: 46
        },
        {
            title: "47. I enjoy meeting new people.",
            id: 47
        },
        {
            title: "48. I am a good diplomat.",
            id: 48
        },
        {
            title: "49. I am not very good at remembering people's date of birth.",
            id: 49
        },
        {
            title: "50. I find it very easy to play games with children that involve pretending.",
            id: 50
        },
    ]
    return {
        props: { questions }
    }
}

const AQ = ({ questions }) => {
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
                <title>Autism-Spectrum Quotient(AQ)</title>
                <meta name="description" content="Autism-Spectrum Quotient(AQ) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Autism-Spectrum Quotient(AQ)</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/aq")}>Autism-Spectrum Quotient(AQ)</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">
                <Row className={styles.questionnaire}>
                    <Form
                        name="eq"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        scrollToFirstError={true}
                    >
                        <h4>Autism-Spectrum Quotient(AQ)</h4>
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
                                    <Radio value={0}>Strongly Agree</Radio>
                                    <Radio value={1}>Slighty Agree</Radio>
                                    <Radio value={2}>Slighlty Disagree</Radio>
                                    <Radio value={3}>Strongly Disagree</Radio>
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
                            <p className='text-muted text-center' >0-31 No indication.
                                32-50 Potential Indication of Autism Spectrum Disorder.</p>
                        </Row>}
            </Form>
        </Row>
            </Container >
        </>
    )
}

export default AQ;