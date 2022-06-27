import { Card, Carousel, Divider } from 'antd'
// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { CalendarTwoTone, DollarCircleTwoTone, EditFilled, FacebookFilled, LinkedinFilled, MedicineBoxTwoTone, PhoneTwoTone, RightCircleOutlined, RightCircleTwoTone, SearchOutlined, SendOutlined, TwitterOutlined } from '@ant-design/icons';
import { Slide } from "react-awesome-reveal";
import { Button, Checkbox, Form, Input } from 'antd';
import ReactPlayer from 'react-player';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';



const Home = () => {
  const router = useRouter();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Carousel dots={false} effect='fade' autoplay>
        <div>
          <div className={styles.contentStyle}>
            <h2 style={{ fontSize: '3vw' }}><b>Leading the way in<br />medical excellence</b></h2>
            <p style={{ fontSize: '1vw' }}><b>Earth greater grass for good. Place for divide evening yielding<br />them that. Creeping beginning over gathered brought.</b></p>
            <Button type="primary" onClick={() => router.push("/services")}>Browse Services</Button>
          </div>
          <img width="100%" src="/assets/images/home-1.jpg"></img>
        </div>
        <div>
          <div className={styles.contentStyle}>
            <h2 style={{ fontSize: '3vw' }}><b>What are you<br />looking for?</b></h2>
            <p style={{ fontSize: '1vw' }}><b>I Like to Complete a Free Anxiety and Depression/Low Mood<br />Questionnaire to See How I am Feeling.</b></p>
            <Button type="primary" onClick={() => router.push("/services/free-self-assessment")}>Take Questionnaire</Button>
          </div>
          <img width="100%" src="/assets/images/home-2.png"></img>
        </div>
        <div>
          <div className={styles.contentStyle}>
            <h2 style={{ fontSize: '3vw' }}><b>About Us</b></h2>
            <p style={{ fontSize: '1vw' }}><b><strong>TwinBrain Ltd</strong>, owner of TwinBrain App, is a&nbsp;UK&nbsp;based healthcare in London<br />that operates on social enterprise principles. It was registered 30 April 2020<br />with Companies House  number 12580210.</b></p>
            <Button type="primary" onClick={() => router.push("/about-us")}>Find Out More</Button>
          </div>
          <img width="100%" src="/assets/images/home-3.png"></img>
        </div>
      </Carousel>
      <Container>
        <Head>
          <title>Twin Brain</title>
          <meta name="description" content="Twin Brain" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Row className='my-3'>
          <Col xs={12} sm={6} md={3}>
            <Slide triggerOnce direction='up' fraction={1}>
              <Card onClick={() => router.push("/")} className={styles.card} bordered={false} hoverable={true}>
                <CalendarTwoTone twoToneColor="#0dcaf0" style={{ fontSize: 40, color: "#0dcaf0" }} />
                <p>Book An Appointment</p>
              </Card>
            </Slide>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Slide triggerOnce direction='up' fraction={1} delay={200}>
              <Card onClick={() => router.push("/")} className={styles.card} bordered={false} hoverable={true}>
                <SendOutlined style={{ fontSize: 40, color: "#0dcaf0" }} />
                <p>Send A Message</p>
              </Card>
            </Slide>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Slide triggerOnce direction='up' fraction={1} delay={400}>
              <Card onClick={() => router.push("/")} className={styles.card} bordered={false} hoverable={true}>
                <PhoneTwoTone twoToneColor="#0dcaf0" style={{ fontSize: 40, color: "#0dcaf0" }} />
                <p>Call Our Team</p>
              </Card>
            </Slide>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Slide triggerOnce direction='up' fraction={1} delay={600}>
              <Card onClick={() => router.push("/")} className={styles.card} bordered={false} hoverable={true}>
                <SearchOutlined style={{ fontSize: 40, color: "#0dcaf0" }} />
                <p>Therapist Search</p>
              </Card>
            </Slide>
          </Col>
        </Row>

        <Row className='my-3' id={styles.row2}>
          <Col xs={12} sm={6}>
            <Slide triggerOnce direction='up' fraction={1}>
              <ReactPlayer
                url='/assets/video.mp4'
                width='100%'
                height='100%'
                controls={true}
              />
            </Slide>
          </Col>
          <Col xs={12} sm={6}>
            <Slide triggerOnce direction='up' fraction={1}>
              <h2 className='text-center'>Book An Appointment</h2>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
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
                  label="Phone#"
                  name="phone"
                  rules={[{ required: true, message: 'Please input your Phone#!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Location"
                  name="location"
                  rules={[{ required: true, message: 'Please input your Location!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Book Now
                  </Button>
                </Form.Item>
              </Form>
            </Slide>
          </Col>
        </Row>

        <Row className='my-3'>
          <h2 className='text-center'>Questionnaires</h2>
          <AutoPlaySwipeableViews>
            <div className={styles.questionnaire}>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>PHQ9 (Depression)</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>GAD7 (Anxiety)</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>IAPT Phobia Scale</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>Work and Social Adjustment Scale</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
            </div>
            <div className={styles.questionnaire}>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>Empathy Quotient (EQ)</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>Autism Spectrum Quotient (AQ)</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>Complicated Grief Inventory</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
              <Card size='small'>
                <div>
                  <EditFilled style={{ fontSize: 40 }} />
                </div>
                <div>
                  <h5>Child and Adolescent Disruptive Behaviour Inventory - Parent Survey (CADBI)</h5>
                  <Button type="primary" ghost={true}>
                    Click Here
                  </Button>
                </div>
              </Card>
            </div>
          </AutoPlaySwipeableViews>
        </Row>
      </Container>

      <Row id={styles.assessment} className='my-3'>
      <Col xs={12} md={5} className="d-flex justify-content-end my-5">
        <Slide triggerOnce direction='up' fraction={1}>
          
            <Card onClick={() => router.push("/")} className={styles.assessmentCard} bordered={true} hoverable={true}>
              <div>
                <MedicineBoxTwoTone twoToneColor="#0dcaf0" style={{ fontSize: 40 }} />
              </div>
              <div>
                <h3>Free Self-Assessment</h3>
                Each free  self-assessment is  done Online  on this website. The time to complete a questionnaire  will vary among individuals.
              </div>
              <div className='my-2'>
                <RightCircleTwoTone twoToneColor="#0dcaf0" style={{ fontSize: 40 }} />
              </div>
            </Card>
          
        </Slide>
        </Col>
        <Col xs={12} md={5} className="d-flex justify-content-start my-5">
        <Slide triggerOnce direction='up' fraction={1} delay={200}>
            <Card onClick={() => router.push("/")} className={styles.assessmentCard} bordered={true} hoverable={true}>
              <div>
                <DollarCircleTwoTone twoToneColor="#0dcaf0" style={{ fontSize: 40 }} />
              </div>
              <div>
              <h3>Paid Assessment</h3>
              Each paid assessment is  done Online, face to face, on phone or video call. The assessor  will  inform  you how long  .....
              </div>
              <div className='my-2'>
                <RightCircleTwoTone twoToneColor="#0dcaf0" style={{ fontSize: 40 }} />
              </div>
            </Card>
        </Slide>
        </Col>
      </Row>

      <Container className="mb-5">
        <Row className='my-3'>
          <h2 className='text-center'>Assessors</h2>
          <AutoPlaySwipeableViews>
            <div className={styles.assessors}>
              <div className="col-12 col-sm-12 col-md-4 col-lg-3 mx-2">
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src="/assets/images/dr-francis-selemo.png" />
                  </div>
                  <div className="team-content">
                    <h3 className="name">Dr. Francis Selemo</h3>
                    <h4 className="title">CPsychol, AFBPsS, MBABCP, MCMI</h4>
                  </div>
                  <ul className="social">
                    <li><a href="/"><FacebookFilled /></a></li>
                    <li><a href="/"><TwitterOutlined /></a></li>
                    <li><a href="/"><LinkedinFilled /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-3 mx-2">
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src="/assets/images/lucy-arnold.png" />
                  </div>
                  <div className="team-content">
                    <h3 className="name">Lucy Arnold</h3>
                    <h4 className="title">Clinical Specialist</h4>
                  </div>
                  <ul className="social">
                    <li><a href="/"><FacebookFilled /></a></li>
                    <li><a href="/"><TwitterOutlined /></a></li>
                    <li><a href="/"><LinkedinFilled /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-3 mx-2">
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src="/assets/images/lindita-nerguti.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="name">Linditi Nerguti</h3>
                    <h4 className="title">Psychotheraphy Practitioner</h4>
                  </div>
                  <ul className="social">
                    <li><a href="/"><FacebookFilled /></a></li>
                    <li><a href="/"><TwitterOutlined /></a></li>
                    <li><a href="/"><LinkedinFilled /></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.assessors}>
              <div className="col-12 col-sm-12 col-md-4 col-lg-3 mx-2">
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src="/assets/images/farida.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="name">Farida</h3>
                    <h4 className="title">Integrative Counsellor</h4>
                  </div>
                  <ul className="social">
                    <li><a href="/"><FacebookFilled /></a></li>
                    <li><a href="/"><TwitterOutlined /></a></li>
                    <li><a href="/"><LinkedinFilled /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-3 mx-2">
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src="/assets/images/daniel.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="name">Daniel Mirea</h3>
                    <h4 className="title">Consultant Cognitive Behavioural</h4>
                  </div>
                  <ul className="social">
                    <li><a href="/"><FacebookFilled /></a></li>
                    <li><a href="/"><TwitterOutlined /></a></li>
                    <li><a href="/"><LinkedinFilled /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-3 mx-2">
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src="/assets/images/raymond-vandy.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="name">Raymond Vandy</h3>
                    <h4 className="title">Psychodynamic Counsellor</h4>
                  </div>
                  <ul className="social">
                    <li><a href="/"><FacebookFilled /></a></li>
                    <li><a href="/"><TwitterOutlined /></a></li>
                    <li><a href="/"><LinkedinFilled /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </AutoPlaySwipeableViews>
        </Row>
      </Container>
    </>
  )
}

export default Home
