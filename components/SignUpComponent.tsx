import { FC, useState } from "react";
import { GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Divider, Form, Input, message } from 'antd';
import { signUpWithEmail, logInWithGoogle } from "../utility/authentication";
import Link from "next/link";
import styles from "../styles/Register.module.scss";

const SignUpComponent: FC = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMesage] = useState("");
    const onFinish = (values: { email: string, password: string, firstname: string, lastname: string, phone: string }) => {
        setLoading(true);
        signUpWithEmail(values.email, values.password, values.firstname, values.lastname, values.phone)
            .then(() => {
                message.success({
                    content: 'Registration successfull!',
                    className: 'custom-class',
                    style: {
                        marginTop: 105,
                    },
                    duration: 5
                })
                setLoading(false);
            })
            .catch(error => {
                console.log(error.code)
                setLoading(false);
                if (error.code == "auth/weak-password") {
                    setErrorMesage("Please provide a strong password.");
                }
                else if (error.code == "auth/invalid-email") {
                    setErrorMesage("Email address is badly formatted.");
                }
                else if (error.code == "auth/email-already-in-use") {
                    setErrorMesage("This email is already registered.");
                }
                else if (error.code == "auth/too-many-requests") {
                    setErrorMesage("Too many requests, please try again after few minutes");
                }
                else {
                    setErrorMesage(error.code);
                }
                setTimeout(() => {
                    setErrorMesage("");
                }, 3500);
            })
    };
    const googleLogin = () =>{
        logInWithGoogle()
        .then(() => {
            message.success({
                content: 'Signed in successfully!',
                className: 'custom-class',
                style: {
                    marginTop: 105,
                },
            })
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            if (error.code == "auth/user-not-found") {
                setErrorMesage("User does not exists for provided email.");
            }
            else if (error.code == "auth/invalid-email") {
                setErrorMesage("Email address is badly formatted.");
            }
            else if (error.code == "auth/wrong-password") {
                setErrorMesage("The password you entered is incorrect.");
            }
            else if (error.code == "auth/too-many-requests") {
                setErrorMesage("Too many requests, please try after few minutes");
            }
            else {
                setErrorMesage("Something bad happened, please try again.");
            }
            setTimeout(() => {
                setErrorMesage("");
            }, 3500);
        })
    }
    const onFinishFailed = (errorInfo: any) => {
        setErrorMesage("Please provide valid credentials to create an account.");
        setTimeout(() => {
            setErrorMesage("");
        }, 3500);
    };
    return (
        <Card id={styles.form}  className="w-100">
            <div className="d-flex flex-column align-items-center">

                <img src="/assets/images/logo-tp.png" width="60%" />
                <h3 className=" text-white">Register</h3>
                {errorMessage && <Alert
                    className="w-100 mb-2"
                    message="Registration Error"
                    description={errorMessage}
                    type="error"
                    showIcon
                />}
            </div>
            <Form
                layout="vertical"
                name="register"
                scrollToFirstError
                className="login-form px-3"
                initialValues={{
                    remember: true,
                }}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
            >
                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your First Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your Last Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please input your Email with proper formatting!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your Phone#!' }]}
                >
                    <Input type="tel"  />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item className="text-center">
                    <Button block loading={loading} type="primary" htmlType="submit" className="login-form-button">
                        Sign Up
                    </Button>
                </Form.Item>

                <Divider className="text-white">OR</Divider>
                <Form.Item className="text-center">
                    <Button onClick={googleLogin} icon={<GoogleOutlined style={{fontSize: 18}} />} block type="primary" danger>
                        Sign Up with Google
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default SignUpComponent;