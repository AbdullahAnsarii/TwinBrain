import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/Disclaimer.module.scss';
import { Breadcrumb } from "antd";
import router from "next/router";
const Disclaimer = () => {
    return (
        <>
            <Head>
                <title>Disclaimer</title>
                <meta name="description" content="Disclaimer | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Disclaimer</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/disclaimer")}>Disclaimer</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                <h2>DISCLAIMER, YOUR CONFIDENTIALITY AND YOUR CONSENT.  </h2>

                <p><strong>(a) Time Duration:</strong>  I agreed that the self-screening may take up to 45 minutes to one hour or more. I can commence, save and complete my self-screening whenever it suits </p>
                <p><strong>(b) Disclaimer:</strong> I agreed that this is an emotional health self-screening that  must not and can not be used for self-diagnosis or  court  proceedings. The assessment  must not replace my medical assessments and treatment with a
                    health professional. The self-screening  is only one component of a an assessment a health professional may undertake before providing me treatment. I will consult  my family doctor
                    for diagnosis and treatment  if I am  worried about my health.  Sometimes my health professional may prefer to conduct their own assessment for me rather than using my
                    self-screening report. This means that it may be useful for me to ask my health professional if they want me to complete this self-screening or not.
                    Enaikidigha Ltd, the Twin Brain Ltd and affiliated agencies or  anyone else is not liable for my use of this  assessment facility including the loss of  my screening outcome report any time.
                </p>
                <p><strong>(c) Confidentiality:</strong> I agreed that every information I provide during this screening and the screening outcome report are confidential and not stored or read by the personnel at
                    Twin Brain Ltd or Enaikidigha Ltd.   I am  to decide who I want to share my report with. It is my personal responsibility to print or email my report to myself and to delete the copy in the
                    Twin Brain facility. If I chose to keep a copy of my report under my personal account in the App or website, my report shall be automatically deleted by the App  or website  at the end of 12 hours
                    from the  time my report was  saved by the App or the website.
                </p>
                <p><strong>I agreed that if I feel at risk of committing suicide or harming myself or other people, I must not continue with this screening. Rather I must save the screening and first contact
                    my local Accident and Emergency Services to receive support. I agreed that I must only return to complete the screening when I feel no longer at risk to myself and to
                    other people.  </strong>
                </p>
                <p><strong>I agreed that this App or website is not and does not provide an Emergency Service and is not a substitute to medical and professional support.</strong>
                </p>
            </Container>
        </>
    )
}

export default Disclaimer;