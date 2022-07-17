import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../../styles/FreeSelfAssessment.module.scss';
import { Breadcrumb, Card, Button, Form, Radio } from "antd";
import router from "next/router";
import { useState } from "react";

export const getStaticProps = () => {
    //type0 = no score
    //type1 = score on agree
    //type2 = score on disagree
    const questions = [
        {
            title: "1. I can easily tell if someone else wants to enter a conversation.",
            id: 1,
            type: 1
        },
        {
            title: "2. I prefer animals to humans.",
            id: 2,
            type: 0
        },
        {
            title: "3. I try to keep up with the current trends and fashions.",
            id: 3,
            type: 0
        },
        {
            title: "4. I find it difficult to explain to others things that I understand easily, when they don’t understand it the first time.",
            id: 4,
            type: 0
        },
        {
            title: "5. I dream most nights.",
            id: 5,
            type: 0
        },
        {
            title: "6. I really enjoy caring for other people.",
            id: 6,
            type: 1
        },
        {
            title: "7. I try to solve my own problems rather than discussing them with others.",
            id: 7,
            type: 0
        },
        {
            title: "8. I find it hard to know what to do in a social situation.",
            id: 8,
            type: 2
        },
        {
            title: "9. I am at my best first thing in the morning.",
            id: 9,
            type: 0
        },
        {
            title: "10. People often tell me that I went too far in driving my point home in a discussion.",
            id: 10,
            type: 2
        },
        {
            title: "11. It doesn’t bother me too much if I am late meeting a friend.",
            id: 11,
            type: 2
        },
        {
            title: "12. Friendships and relationships are just too difficult, so I tend not to bother with them.",
            id: 12,
            type: 2
        },
        {
            title: "13. I would never break a law, no matter how minor.",
            id: 13,
            type: 0
        },
        {
            title: "14. I often find it difficult to judge if something is rude or polite.",
            id: 14,
            type: 2
        },
        {
            title: "15. In a conversation, I tend to focus on my own thoughts rather than on what my listener might be thinking.",
            id: 15,
            type: 2
        },
        {
            title: "16. I prefer practical jokes to verbal humor.",
            id: 16,
            type: 0
        },
        {
            title: "17. I live life for today rather than the future.",
            id: 17,
            type: 0
        },
        {
            title: "18. When I was a child, I enjoyed cutting up worms to see what would happen.",
            id: 18,
            type: 2
        },
        {
            title: "19. I can pick up quickly if someone says one thing but means another.",
            id: 19,
            type: 1
        },
        {
            title: "20. I tend to have very strong opinions about morality.",
            id: 20,
            type: 0
        },
        {
            title: "21. It is hard for me to see why some things upset people so much.",
            id: 21,
            type: 2
        },
        {
            title: "22. I find it easy to put myself in somebody else’s shoes.",
            id: 22,
            type: 1
        },
        {
            title: "23. I think that good manners are the most important thing a parent can teach their child.",
            id: 23,
            type: 0
        },
        {
            title: "24. I like to do things on the spur of the moment.",
            id: 24,
            type: 0
        },
        {
            title: "25. I am good at predicting how someone will feel.",
            id: 25,
            type: 1
        },
        {
            title: "26. I am quick to spot when someone in a group is feeling awkward or uncomfortable.",
            id: 26,
            type: 1
        },
        {
            title: "27. If I say something that someone else is offended by, I think that that’s their problem, not mine.",
            id: 27,
            type: 2
        },
        {
            title: "28. If anyone asked me if I liked their haircut, I would reply truthfully, even if I didn’t like it.",
            id: 28,
            type: 2
        },
        {
            title: "29. I can’t always see why someone should have felt offended by a remark.",
            id: 29,
            type: 2
        },
        {
            title: "30. People often tell me that I am very unpredictable.",
            id: 30,
            type: 0
        },
        {
            title: "31. I enjoy being the center of attention at any social gathering.",
            id: 31,
            type: 0
        },
        {
            title: "32. Seeing people cry doesn’t really upset me.",
            id: 32,
            type: 2
        },
        {
            title: "33. I enjoy having discussions about politics.",
            id: 33,
            type: 0
        },
        {
            title: "34. I am very blunt, which some people take to be rudeness, even though this is unintentional.",
            id: 34,
            type: 2
        },
        {
            title: "35. I don’t find social situations confusing.",
            id: 35,
            type: 1
        },
        {
            title: "36. Other people tell me I am good at understanding how they are feeling and what they are thinking.",
            id: 36,
            type: 1
        },
        {
            title: "37. When I talk to people, I tend to talk about their experiences rather than my own.",
            id: 37,
            type: 1
        },
        {
            title: "38. It upsets me to see an animal in pain.",
            id: 38,
            type: 1
        },
        {
            title: "39. I am able to make decisions without being influenced by people’s feelings.",
            id: 39,
            type: 2
        },
        {
            title: "40. I can’t relax until I have done everything I had planned to do that day.",
            id: 40,
            type: 0
        },
        {
            title: "41. I can easily tell if someone else is interested or bored with what I am saying.",
            id: 41,
            type: 1
        },
        {
            title: "42. I get upset if I see people suffering on news programs.",
            id: 42,
            type: 1
        },
        {
            title: "43. Friends usually talk to me about their problems as they say that I am very understanding.",
            id: 43,
            type: 1
        },
        {
            title: "44. I can sense if I am intruding, even if the other person doesn’t tell me.",
            id: 44,
            type: 1
        },
        {
            title: "45. I often start new hobbies, but quickly become bored with them and move on to something else.",
            id: 45,
            type: 0
        },
        {
            title: "46. People sometimes tell me that I have gone too far with teasing.",
            id: 46,
            type: 2
        },
        {
            title: "47. I would be too nervous to go on a big rollercoaster.",
            id: 47,
            type: 0
        },
        {
            title: "48. Other people often say that I am insensitive, though I don’t always see why.",
            id: 48,
            type: 2
        },
        {
            title: "49. If I see a stranger in a group, I think that it is up to them to make an effort to join in.",
            id: 49,
            type: 2
        },
        {
            title: "50. I usually stay emotionally detached when watching a film.",
            id: 50,
            type: 2
        },
        {
            title: "51. I like to be very organized in day-to-day life and often makes lists of the chores I have to do.",
            id: 51,
            type: 0
        },
        {
            title: "52. I can tune into how someone else feels rapidly and intuitively.",
            id: 52,
            type: 1
        },
        {
            title: "53. I don’t like to take risks.",
            id: 53,
            type: 0
        },
        {
            title: "54. I can easily work out what another person might want to talk about.",
            id: 54,
            type: 1
        },
        {
            title: "55. I can tell if someone is masking their true emotion.",
            id: 55,
            type: 1
        },
        {
            title: "56. Before making a decision, I always weigh up the pros and cons.",
            id: 56,
            type: 0
        },
        {
            title: "57. I don’t consciously work out the rules of social situations.",
            id: 57,
            type: 1
        },
        {
            title: "58. I am good at predicting what someone will do.",
            id: 58,
            type: 1
        },
        {
            title: "59. I tend to get emotionally involved with a friend’s problems.",
            id: 59,
            type: 1
        },
        {
            title: "60. I can usually appreciate the other person’s viewpoint, even if I don’t agree with it.",
            id: 60,
            type: 1
        }
    ]
    return {
        props: { questions }
    }
}

const EQ = ({ questions }) => {
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const onFinish = (values) => {
        const total = 0;
        Object.values(values).filter(value => value < 3).forEach(value => total += value)
        setScore(total);
        setShowResult(true);
    };
    return (
        <>
            <Head>
                <title>Empathy Quotient (EQ)</title>
                <meta name="description" content="Empathy Quotient (EQ) | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Empathy Quotient (EQ)</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services")}>Services</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment")}>Free Self Assessment</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/services/free-self-assessment/eq")}>Empathy Quotient (EQ)</Breadcrumb.Item>
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
                        <h4>Empathy Quotient (EQ)</h4>
                        <p>This question
                            ‘assesses a
                            person’s empathy
                            ability to feel their
                            own appropriate
                            emotions and the
                            ability to
                            understand and
                            respond to another
                            person’s emotions’.</p>

                        {questions.map(ques =>
                        (<Row key={ques.id} className={styles.question}>
                            <h5>{ques.title}</h5>
                            <Form.Item
                                name={`Q${ques.id}`}
                                className="mx-3"
                                rules={[{ required: true, message: 'Please pick an option.' }]}
                            >
                                <Radio.Group id={ques.id}>
                                    <Radio id='1' value={(ques.type == 1) ? 2 : 3}>Strongly Agree</Radio>
                                    <Radio id='2' value={(ques.type == 1) ? 1 : 4}>Slighty Agree</Radio>
                                    <Radio id='3' value={(ques.type == 2) ? 2 : 5}>Strongly Disagree</Radio>
                                    <Radio id='4' value={(ques.type == 2) ? 1 : 6}>Slighlty Disagree</Radio>
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
                            <h6>You scored {score} out of 80</h6>
                            <p className='text-muted text-center' >Scores of 30 or less indicate a lack of empathy common in people with Autism or Asperger’s Syndrome.
                                <i>Higher scores indicate greater levels of empathy.</i></p>
                            <p className="text-center"><i>Developed by
                                Simon Baron-Cohen and Sally
                                Wheelwright,
                                University of
                                Cambridge, UK</i></p>
                        </Row>}
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default EQ;