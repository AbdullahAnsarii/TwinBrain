import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/Feedback.module.scss';
import { Breadcrumb, Form, Input, Button } from "antd";
import router from "next/router";
const { TextArea } = Input;
const Feedback = () => {
    const onFinish = (values) => {

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Head>
                <title>Feedback</title>
                <meta name="description" content="Feedback | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Feedback</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/feedback")}>Feedback</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Phone#!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Feedback"
                        name="feedback"
                        rules={[{ required: true, message: 'Please input your Feedback!' }]}
                    >
                        <TextArea placeholder="Please suggest other free questionnaires that can be added to the website" rows={4} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4, span: 30 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default Feedback;