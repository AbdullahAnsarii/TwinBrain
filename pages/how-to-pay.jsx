import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/HowToPay.module.scss';
import { Breadcrumb, Descriptions } from "antd";
import Link from "next/link";
import router from "next/router";
import { Slide } from "react-awesome-reveal";
const HowToPay = () => {
    return (
        <>
            <Head>
                <title>How To Pay</title>
                <meta name="description" content="How To Pay | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>How To Pay</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/how-to-pay")}>How To Pay</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">

                <Descriptions title="Paying Fees and Terms" size="small" bordered column={1}>
                    <Descriptions.Item label="Payments">We offer a number of ways to help you pay for your services with TwinBrain</Descriptions.Item>
                    <Descriptions.Item><b>Bank transfer is our preferred payment method</b></Descriptions.Item>
                    <Descriptions.Item label="Bank Name">CashPlus</Descriptions.Item>
                    <Descriptions.Item label="Sort Code">087199</Descriptions.Item>
                    <Descriptions.Item label="Account Number">02926739</Descriptions.Item>
                    <Descriptions.Item label="Account Name">Twin Brain Ltd.</Descriptions.Item>
                    <Descriptions.Item label="Payment Reference">Your initials, surname, and date you received the service e.g. J. Kane, 23/06/16</Descriptions.Item>

                    <Descriptions.Item><b>Payment via Insurance Firms</b></Descriptions.Item>
                    <Descriptions.Item>Therapy, Counselling, Psychology, and some other services can be paid via all health insurance firms including but not limited to:- Standard Life, Cigna, AVIVA, AXA PPP, BUPA International, Vitality (PruHealth). We require your full names, your address with full postcode (if applicable), a name of your Insurer, your Insurance Policy Number, your Authorisation Number from your Insurer, and the number of sessions author authorized Insurer.</Descriptions.Item>
                    <Descriptions.Item label="Note">BUPA UK is only accepted by some of our therapists so contact us.</Descriptions.Item>
                    <Descriptions.Item label="Paying by Direct Debit">Clients can set up a direct debit payment using their bank.</Descriptions.Item>
                    <Descriptions.Item label="Paying with debit or credit card">Clients can pay via <b>Paypal </b> or <b>Stripe</b>. They will charge you a small fee.</Descriptions.Item>
                </Descriptions>
                <Descriptions title="Terms and conditions (inclusive of the above)" size="small" bordered column={1}>
                    <Descriptions.Item label="Payments for Counselling, therapy and treatment services">All face to face, telephone, email and video-based services are paid in advance. This can be via bank transfer or  PayPal. A receipt will be emailed to you.</Descriptions.Item>
                    <Descriptions.Item label="Travel Fees">Please note that home and school visits requiring our therapist to use a public or private transport will incur an additional travel fee to reflect the therapist’s expenses and time away from the clinic.</Descriptions.Item>
                    <Descriptions.Item label="Cancellation Policy">Services once booked are to be paid in full and no refund for canceled or missed sessions with or without notice.</Descriptions.Item>
                    <Descriptions.Item label="Waiting Rooms"> Please note that the waiting rooms in some of our offices or clinics are closed evenings and weekends, so clients will be asked to meet their Counsellors or therapists service deliverer (e.g. therapist) at the exact appointment time.</Descriptions.Item>
                </Descriptions>
            </Container>
        </>
    )
}

export default HowToPay;