import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/HowToPay.module.scss';
import { Breadcrumb, Card, Image, Spin } from "antd";
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
                <h2 className="text-center mb-6">Paying Fees and Terms
                </h2>

                <p><strong>Payments: </strong>We offer a number of ways to help you pay for your services with TwinBrain:</p>
                <p>(a) Bank transfer is our preferred payment method:</p>
                <p><strong>Bank Name: </strong>CashPlus,<strong> Sort Code: </strong>087199, Account<strong> number:</strong> 02926739.<strong> Account name: </strong>Twin Brain Ltd.</p>
                <p><strong>Payment reference:</strong> Your initials, surname, and date you received the service e.g.,J. Kane23/06/16.</p>
                <p><strong>Payment via Insurance Firms:</strong></p>

                <p>Therapy, Counselling, Psychology, and some other services can be paid via all health insurance firms including but not limited to:- Standard Life, Cigna, AVIVA, AXA PPP, BUPA International, Vitality (PruHealth). We require your full names, your address with full postcode (if applicable), a name of your Insurer, your Insurance Policy Number, your Authorisation Number from your Insurer, and the number of sessions author authorized Insurer.</p>
                <p><strong>Note:</strong> BUPA UK is only accepted by some of our therapists so contact us.</p>
                <p><strong>Paying by Direct Debit:</strong> Clients can set up a direct debit payment using their bank.</p>
                <p><strong>Paying with debit or credit card:</strong> Clients can pay via <a href="#">Paypal </a> or <a href="#">‘Stripe’</a>. They will charge you a small fee.</p>

                <p><strong>Terms and conditions (inclusive of the above)</strong></p>
                <p><strong>Payments for Counselling, therapy and treatment services: </strong> All face to face, telephone, email and video-based services are paid in advance. This can be via bank transfer or  PayPal. A receipt will be emailed to you.
                </p>
                <p><strong>Travel Fees: </strong>Please note that home and school visits requiring our therapist to use a public or private transport will incur an additional travel fee to reflect the therapist’s expenses and time away from the clinic.</p>

                <p><strong>Cancellation policy:</strong> Services once booked are to be paid in full and no refund for canceled or missed sessions with or without notice.</p>

                <p><strong>Waiting rooms:</strong> Please note that the waiting rooms in some of our offices or clinics are closed evenings and weekends, so clients will be asked to meet their Counsellors or therapists service deliverer (e.g. therapist) at the exact appointment time.</p>

            </Container>
        </>
    )
}

export default HowToPay;