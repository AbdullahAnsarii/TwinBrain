import { Container} from "react-bootstrap";
import Head from "next/head";
import styles from '../styles/Terms.module.scss';
import { Breadcrumb} from "antd";
import router from "next/router";
const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms & Conditions</title>
                <meta name="description" content="Terms & Conditions | Twin Brain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parallax}>
                <h1>Terms & Conditions</h1>
                <Breadcrumb className={styles.breadcrumb}>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => router.push("/terms-and-conditions")}>Terms & Conditions</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container className="py-5">

                <h2 className="text-center mb-6">BY BOOKING I ACCEPT THE FOLLOWING:</h2>

                <p><strong>1.1 Self-Funding Clients:</strong></p>
                <p>(a) Bank transfer is our preferred payment method:</p>
                <p><strong>Bank Name: </strong>CashPlus,<strong>, Sort Code: </strong>087199, Account<strong> number:</strong>02926739.<strong> Account name: </strong>Twin Brain Ltd.</p>
                <p><strong>Payment reference:</strong> Your initials, surname, and date you received the service e.g.,J. Kane23/06/16.</p>
                <p>(b) Paying by Direct Debit: Clients can set up a direct debit payment using their bank.</p>

                <p>(c) Paying with debit, credit card, bank or making payments involving international currency conversion: Clients can pay via Go Cardless or their bank. They may charge you a small fee, which is in addition to the full fee you are paying Health City. Please check with your card issuer or bank before making a payment.</p>
                <p><strong>1.2 Funding by Insurance or Organisation:</strong></p>
                <p> (a) (a)	Assessment, Therapy, Counselling and Wellbeing Services can be paid via corporate organizations or all health insurance firms including Standard Life, Cigna, AVIVA, AXA PPP, BUPA International, Vitality etc.</p>
                <p>(b) <strong>Note: </strong>BUPA UK is only accepted by some of our therapists. AXA PPP clients need a psychiatric referral first.</p>
                <p><strong>2.0 PAYMENTS AND CANCELLATION POLICY</strong></p>
                <p><strong>2.1 Payments for services are in advance. </strong>This can be via any of the payment options offered by Twin Brain Ltd. A receipt will be emailed to you.</p>
                <p><strong>2.2   Cancellation policy:</strong></p>
                <p>(a)(a) Booked Assessment, Therapy, Counselling or Wellbeing Service: Evidence is that regular attendance helps with recovery, so to motivate attendance, the full fee will be paid for missed or cancelled sessions even with advance notice. Also, another client would have benefited from the missed or cancelled session.  Risk and wellbeing review and self-help resources shall be provided in the event of a paid cancelled session. </p>
                <p>(b) Other Services: Services booked cannot be cancelled, but must be paid in full whether used or not. Money is not refundable except Health City (HC) or Twin Brain Ltd failed to deliver or provide an alternative when it (HC) or twin Brain Ltd could not offer the original service promised.</p>
                <p><strong>2.3 Prices/Fees: </strong></p>
                <p>(a) Prices can be changed anytime without notice: This shall not affect Bookings previously submitted.</p>
                <p>(b) Fees paid Online during Booking shall cover:</p>
                <p>1. Face to Face appointments where the client comes to the Health City’s or Twin Brain Ltd.’spersonnel at Canary Wharf UK, London Bridge UK or another venue (the UK or overseas) where the Health City’s personnel is based.</p>
                <p>2. Services received Online or via Email, Phone, Text Messaging, Postal Letter or Fax.</p>
                <p>3. Services received in English language or in a language spoken by the Health City’s personnel.</p>
                <p>4. The client doesnot mind their full identity known to the Health City’s or Twin Brain Ltd’s personnel.</p>
                <p>5.	The client wants a Health City’s or Twin Brain Ltd’s personnel who is of a specific gender or who is aware of a specific faith or culture. Note: Subject to availability.</p>
                <p>6.	A session of any service is 50 minutes. Consultation requires a double session (so the client pays for 2 sessions).</p>
                <p>(c)	Fees Paid Online during Booking do not cover extra resource required by a client:</p>
                <p>The extra resources will incur a negotiated additional fee to reflect the Health City’s or Twin Brain Ltd’s personnel’s extra resource used by the client. You should complete the Online Booking with payment as normal and then contact Health City or Twin Brain Ltd to negotiate the cost of the extra resource. If you and Health City or Twin Brain Ltd cannotreach an agreeable cost for the extra resource, then Health City or Twin Brain Ltd will cancel your booking with a full refund of the fee you paid during the booking.</p>
                <p>The following are examples of extra resources:</p>
                <p>1. Travel expenses and time away from the clinic: Face to Face appointments or services where the Health City’s or Twin Brain Ltd’s personnel is required to use a public or a private transport to visit the client’s home, school, office or other agreed venue within London, Outside London, or Overseas.</p>
                <p>2. Interpreter’s fee: Services received in a language that requires an interpreter (including sign language).</p>
                <p>3. Identity protection fee:  The client wants their identity protected from the Health City’s or Twin Brain Ltd’s personnel but not from Health City or Twin Brain Ltd.</p>
                <p>4. Extra time fee: Family Therapy and Exposure Behavioural Programmes are likely to last more than one hour at times.</p>
                <p>5. Extra fee: Any other preference the client wants Health City or twin Brain Ltd to consider that may require extra resource.</p>
                <p><strong>2.4 Late payments: </strong></p>
                <p>Please note that late payment fee of five percent (5%) and the full VAT of the amount owed (and the late payment fee) will be applied to your invoice on a weekly basis if payment is not received by the due date. The ONLY time the late payment fee can be waived is if you contacted us before the due date to give us an agreeable (to us) reason for exception and extension of the due date. We reserved the right to use debt collectors or HMRC Court to recover unpaid fees. </p>
                <p><strong>2.5 UK VAT:</strong> VAT charged from 01/01/2015 for VAT chargeable services as HC becomes VAT registered.</p>
                <p><strong>3.0 WAITING ROOMS:</strong> Please note that the waiting rooms in some of our offices or clinics are closed evenings and weekends, so clients will be asked to meet their professional (e.g., therapist) at the exact appointment time.</p>
                <p><strong>4.0 REFERRAL</strong></p>
                <p>4.1 I agreed to refer myself to Health City or Twin Brain Ltd. I agreed that Health City or Twin Brain Ltd shall contact me for appointment, assessment and service provision.</p>
                <p>4.2 I agreed that even if I refused for information to be shared with my GP/Family or Private MedicalDoctor (Health City or Twin brain Ltd respects your decision and privacy), my GP/Family or Private Medical Doctor (and not Health City or Twin Brain Ltd remains entity who holds the medical responsibility for my medications and healthcare.</p>
                <p><strong>5.0 SHARING INFORMATION:</strong></p>
                <p>5.1 I agreed for my information to be confidentially shared within Health City or twin Brain for the purpose of providing me a better care, as well as Health City’s or Twin Brain Ltd’s supervision and training.</p>
                <p><strong>5.1 GDPR:</strong> Health City or Twin Brain Ltd will not share your personal information or data without your consent.  Health City upholds The General Data Protection Regulation (GDPR).</p>
                <p><strong>6.0   RISK OF HARM AND EMERGENCY SUPPORT.</strong></p>
                <p>6.1   I agreed that Health City pr twin Brain Ltd is not an emergency service, so its email, telephone, personnel, and servicecannotand mustnot to be used in an emergency.</p>
                <p>6.2   If I am in distress and worried about the immediate risk of harm to myself or others, I will go to or contact my nearest Accident & Emergency service (a visit will not be practical if there is a national emergency such as a virus outbreak).</p>
                <p>6.3   If I am not at immediate risk but in distress and like to have support and advice, I will contact my GP/Family or Private Medical Doctor.</p>
                <p><strong>6.3.1 Helplines for UK Residents:</strong></p>
                <p><strong>• 999 Emergency:</strong> If you have or feel you are suicidal or about to harm yourself, or harm someone else, phone 999.</p>
                <p><strong>• Accident and Emergency (A & E)</strong> Unit: You can go to A & E department nearest to your location. If you call 999, the call hander shall tell you the nearest A & E that will assist you. </p>
                <p><strong>• Samaritans:</strong> 08457 909090. (24-hour crisis line for people contemplating harming themselves). Website: <a href="www.samaritans.org/" target="_blank">www.samaritans.org/</a>. </p>
                <p><strong>• Saneline:</strong> 0300 304 7000, 07984 967 708 (practical information, crisis care and emotional support).</p>
                <p><strong>• Our GP:</strong> If you need to, contact your GP on their phone number during your surgery working hours.</p>
                <p><strong>• Google the Single Point of Access Crisis Helpline</strong> in your Borough of residence and ask for help 24 hours /seven days.</p>
                <p><strong>• NHS Direct: 24 hours a day on 0845 4647.</strong></p>
                <p><strong>• NHS 111:</strong> 24 hours a day, 7 days a week. For urgent medical problems.</p>
                <p><strong>• NHS 111 British Sign Language</strong> if you are Deaf and wants a phone service:</p>
                <p>• England – <a href="#">NHS 111 (BSL) interpreter service.</a></p>
                <p>• Scotland – <a href="#">NHS 24 111</a></p>
                <p>• Wales – <a href="#">NHS 111 Wales</a></p>
                <p>• Northern Ireland – <a href="#">NHS 111 Northern Ireland</a></p>
                <p>• Or call 18001 111 on a textphone.</p>
                <p><strong>6.3.2 Helplines for Overseas residents:</strong></p>
                <p>Contact your friends, family members, next of kin and your local Accident and Emergencies in your country.</p>
                <p><strong>7.0 USEFUL WEBSITES</strong></p>
                <p>Health City or Twin Brain Ltd is not responsible and reliable for the contents of external websites. </p>
                <p><strong>• <a href="http://moodgym.anu.edu.au" target="_blank">http://moodgym.anu.edu.au</a> – Free online self-help course.</strong></p>
                <p><strong>• <a href="https://www.cci.health.wa.gov.au" target="_blank">www.cci.health.wa.gov.au</a> – Free self-help workbooks for emotional or mental health problems.</strong></p>
                <p><strong>• <a href="http://livinglifetothefull.com" target="_blank">www.livinglifetothefull.com</a> – Free online life skills course working.</strong></p>
                <p><strong>8.0 Opening hours:</strong> This may change due to unforeseen circumstance</p>
                <p>Monday-Friday 8am-11pm</p>

                <p>Saturday 8am-9pm.</p>

                <p>Sunday: Closed</p>
                <p><strong>9.0 Contact</strong></p>
                <p><strong> 9.1 Contact One:</strong></p>
                <p>Twin Brain<br />
                    Davenport House<br />
                    16 Pepper Street<br />
                    Canary Wharf<br />
                    London E14 9RP<br />
                    United Kingdom.<br />
                    Email: admin@twinbrain.org<br />
                    Phone: 0333 800 3006, 0333 789 0012. <br />
                    Website: <a href="http://www.twinbrain.org" target="_blank">http://www.twinbrain.org</a> <br /></p>
                <p><strong>3.2 Contact Two:</strong> </p>

                <p>Health City<br />
                    Davenport Hous<br />
                    16 Pepper Stree
                    Canary Wharf London E14 9R<br />
                    United Kingdom<br />
                    Email: <a href="mailto:info@healthcity.org.uk" target="_blank">info@healthcity.org.uk</a><br />
                    Phone: 0333 800 3006, 0333 789 001<br />
                    Website: <a href="http://www.healthcity.org.uk" target="_blank">http://www.healthcity.org.uk</a><br />
                    Facebook: <a href="https://www.facebook.com/healthcity.org.uk1" target="_blank">www.facebook.com/healthcity.org.uk1</a>
                </p>
            </Container>
        </>
    )
}

export default Terms;