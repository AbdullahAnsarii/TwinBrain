import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/Assessors.module.scss';
import { Breadcrumb, Button, Spin, Modal, Image } from "antd";
import Link from "next/link";
import router from "next/router";
import { FacebookFilled, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
import { assessors } from "../data/assessors";
import { useState } from "react";

const Assessors = () => {
    const [visible, setVisible] = useState(false);
    const [selectedAssessor, setSelectedAssessor] = useState(null);
    const handleDetails = (event) => {
        setSelectedAssessor(assessors.find(assessor => assessor.id == event.currentTarget.id));
        setVisible(true);
        console.log(selectedAssessor)
    }
    return (
        <>
            <Head>
                <title>Assessors</title>
                <meta name="description" content="Assessors | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Assessors</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/assessors")}>Assessors</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <Row>
                    {assessors.map(assessor => (
                        <Col id={assessor.id} xs={12} sm={6} md={4}>
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={assessor.image} />
                                </div>
                                <div className="team-content">
                                    <h3 className="name">{assessor.name}</h3>
                                    <h4 className="title">{assessor.title}</h4>
                                </div>
                                <ul className="social">
                                    <li><a href="/"><FacebookFilled /></a></li>
                                    <li><a href="/"><TwitterOutlined /></a></li>
                                    <li><a href="/"><LinkedinFilled /></a></li>
                                </ul>
                                <Button id={assessor.id} className="mb-3" type='primary' onClick={handleDetails}>View Details</Button>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Modal
                    width="900px"
                    onCancel={() => setVisible(false)}
                    visible={visible}
                    title={selectedAssessor?.name}
                    footer={[
                        <Button key="submit" type="primary" onClick={() => setVisible(false)}>
                            Close
                        </Button>,
                    ]}
                >
                    <div className="d-flex justify-content-center mb-2">
                        <Image preview={false} width='25%' src={selectedAssessor?.image} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: selectedAssessor?.profile }} />
                </Modal>
            </Container>
        </>
    )
}

export default Assessors;