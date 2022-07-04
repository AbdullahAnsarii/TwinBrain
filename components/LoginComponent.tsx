import { FC, useState } from "react";
import { GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Divider, Form, Input, message } from 'antd';
import { logIn, logInWithGoogle } from "../utility/authentication";
import Link from "next/link";
import styles from "../styles/Register.module.scss";

const LoginComponent: FC = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMesage] = useState("");
    const onFinish = (values: { email: string, password: string }) => {
        setLoading(true);
        logIn(values.email, values.password)
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

    return (
        <Card id={styles.form} className='w-100 h-100'>
            <div className="d-flex flex-column align-items-center ">

                <img src="/assets/images/logo-tp.png" width="60%" />
                <h3 className="text-white">Login</h3>
                {errorMessage && <Alert
                    className="w-100 mb-2"
                    message="Login Error"
                    description={errorMessage}
                    type="error"
                    showIcon
                />}
            </div>
            <Form
                name="normal_login"
                className="login-form px-3"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    className="text-center"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    className="text-center"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item className="text-center">
                    <Button block loading={loading} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>

                <Divider className="text-white">OR</Divider>
                <Form.Item className="text-center">
                    <Button onClick={googleLogin} icon={<GoogleOutlined style={{fontSize: 18}} />} block type="primary" danger>
                        Sign In with Google
                    </Button>
                </Form.Item>
                <Form.Item className="text-center text-white">
                    Don't have an account?&nbsp;<b><Link href="/register">Sign Up</Link></b>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default LoginComponent;