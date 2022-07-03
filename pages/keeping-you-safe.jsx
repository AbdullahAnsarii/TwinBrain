import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/KeepingYouSafe.module.scss';
import { Breadcrumb, Card, Image, Spin } from "antd";
import router from "next/router";
import { Slide } from "react-awesome-reveal";
const KeepingYouSafe = () => {
    return (
        <>
            <Head>
                <title>Keeping You Safe</title>
                <meta name="description" content="Keeping You Safe | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Keeping You Safe</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/keeping-you-safe")}>Keeping You Safe</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="my-5">
                
            <h4 className="text-primary">Are you feeling suicidal, harming yourself (e.g. pulling hair, cutting, etc) or being bullied, in domestic violence, or at risk to yourself or to another person?</h4>
                            <p><h3>If Yes,</h3>  contact and receive support from a Helpline you know, or from one of the organizations below.</p>
                            <p><strong>(a)  UK Residents:</strong></p>
                            <ul>
                                <li><strong>Samaritans:</strong> 08457 909090. (24-hour crisis line for people contemplating harming themselves).Website: <a href="http://www.samaritans.org/" target="_blank">http://www.samaritans.org/</a>.</li>
                                <li><strong>Saneline:</strong> 0300 304 7000, 07984 967 708 (practical information, crisis care and emotional support). 4.30 pm to 10.30 pm on weekdays and weekends including Bank Holidays.</li>
                                <li><strong>Our GP:</strong> If you need to, contact your GP on their phone number during your surgery working hours.</li>
                                <li><strong>Google the Single Point of Access Crisis Helpline</strong> in your Borough of residence and ask for help 24 hours /seven days.</li>
                                <li><strong>NHS Direct:</strong> 24 hours a day on 0845 4647.</li>
                                <li><strong>NHS 111:</strong > 24 hours a day, 7 days a week. For urgent medical problems.</li>
                                <li><strong>NHS 111 British Sign Language</strong> if you are Deaf and wants a phone service:</li>
                                <li>England – NHS 111 (BSL) interpreter service.</li>
                                <li>Scotland – NHS 24 111</li>
                                <li>Wales – NHS 111 Wales</li>
                                <li>Northern Ireland – NHS 111 Northern Ireland</li>
                                <li>Or call 18001 111 on a textphone.</li>
                                <li><strong>Carers in Mind:</strong> If you are a carer for someone with a mental health problem and feel you could do with some support: telephone 020 8940 7384  Email: <a href="mail-to:carers@rbmind.org">carers@rbmind.org</a></li>
                                <li><strong>999 Emergency:</strong> If you have or feel you are suicidal or about to harm yourself, or harm someone else, phone 999.</li>
                                <li><strong>Accident and Emergency</strong> (A & E) Unit: You can go to A & E department nearest to your location. If you call 999, the call handler shall tell you the nearest A & E that will assist you.</li>
                                <li><strong>Homeless,</strong> 0808 800 4444. <a href="https://homeless.org.uk/" target="_blank">homeless.org.uk/</a></li>
                                <li><strong>MIND,</strong> 0300 123 3393. <a href="mind.org.uk" target="_blank"></a>mind.org.uk</li>
                                <li><strong>CHILDLINE,</strong> 0800 1111.  <a href="https://childline.org.uk" target="_blank">childline.org.uk</a></li>
                                <li><strong>Alcoholics Anonymous</strong> – 0845 769 7555. Website: <a href="http://www.alcoholics-anonymous.org.uk/" target="_blank">http://www.alcoholics-anonymous.org.uk/</a></li>
                                <li><strong>Carers support</strong> – 0808 808 7777. Website: <a href="http://www.carersuk.org" target="_blank">http://www.carersuk.org</a></li>
                                <li><strong>No Panic</strong> – Helpline 0808 808 0545. Support for people who experience panic attacks, and those with phobias, obsessive-compulsive disorder, general anxiety disorder and who are withdrawing from tranquillisers. (10 am-10 pm every day). Email: <a href="mailto:ceo@nopanic.org.uk" target="_blank">ceo@nopanic.org.uk</a>, web: <a href="https://nopanic.org.uk" target="_blank">nopanic.org.uk</a></li>
                                <li><strong>Citizens Advice Bureau</strong> – 01392 425 517. Website: <a href="http://www.citizensadvice.org.uk/" target="_blank">http://www.citizensadvice.org.uk/</a></li>
                                <li><strong>Cruse Bereavement Care</strong> – Website: <a href="http://www.cruse.org.uk" target="_blank">http://www.cruse.org.uk</a></li>
                                <li><strong>Rape Crisis England and Wales.</strong> 0808 802 9999. Website: <a href="http://www.rapecrisis.org.uk" target="_blank">http://www.rapecrisis.org.uk</a></li>
                                <li><strong>Bristol Crisis Service For Women (BCSW)</strong> – Helpline 0117 925 1119. National helpline for women in distress, especially women who self-harm. Open Friday and Saturday evenings 9 pm to 12.30 am and Sundays 6pm to 9pm.</li>
                                <li><strong>Support Line</strong> – 0208 554 9004. A confidential helpline providing emotional support to individuals of any age on any Support line also has a data base of local services. Ring for helpline opening hours. You can also e-mail on <a href="mailto:infor@supportline.org.uk">infor@supportline.org.uk</a></li>
                                <li><strong>42nd Street</strong> – Helpline 0161 832 0170. A mental health service in Manchester for young people aged 14 – 25. Their helpline offers support and advice, particularly around suicide and self injury. Open weekdays from 12.30 pm to4.30 pm.  <a href="https://www.fortysecondstreet.org.uk" target="_blank">www.fortysecondstreet.org.uk</a></li>
                                <li><strong>Nightline (for University students)</strong> National organisation of NightLine student helplines in Universities across the Visit the website to find out if your Uni has one. <a href="https://www.nightline.ac.uk" target="_blank">www.nightline.ac.uk</a></li>
                                <li><strong>Overseas residents:</strong></li>

                                <li>Contact your friends, family members,  next of kin, and your local Accident and Emergencies in your country.</li>
                            </ul>
            </Container>
        </>
    )
}

export default KeepingYouSafe;