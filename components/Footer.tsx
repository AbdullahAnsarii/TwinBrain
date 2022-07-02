import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import { useRouter } from "next/router";
import { CaretRightFilled, EnvironmentFilled, FacebookFilled, LinkedinFilled, PhoneFilled, TwitterOutlined } from '@ant-design/icons';
const Footer = () => {
    const router = useRouter()
    return(
        <footer className='pt-5' style={{background: "#e6e6e6", bottom: 0 }}>
            <section>
                <div className="container ">

                    <div className="row g-md-5">
                        <div className="col-md-3 col-xs-12">
                            <div className="row ">

                                <div className="col d-flex flex-column align-items-center" >
                                <img width="45%" src="/assets/images/logo.png" />

                                    <p><small>We are a UK based healthcare social enterprise in London supporting family’s psychological, physical, financial, legal, and housing well-being. It was founded in 2007. We offer Counseling, Therapy and Well-being Associated services globally.</small></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="row">
                                <div className="col">
                                    <h5 className='my-4 text-center'>Services</h5>

                                    <ul className='footer-links'>
                                        <li><a href="/services/free-self-assessment"><CaretRightFilled style={{fontSize: 18}} />Free Self-Assessment</a></li>
                                        <li><a href="/services/paid-assessment"><CaretRightFilled style={{fontSize: 18}} />Paid Assessment</a></li>
                                        <li><a href="https://cbt.healthbj-uk.org" target="_blank"><CaretRightFilled style={{fontSize: 18}} />CBT Service</a></li>
                                        <li><a href="https://counselling.healthbj-uk.org" target="_blank"><CaretRightFilled style={{fontSize: 18}} />Counselling Service</a></li>
                                        <li><a href="https://psychassessment.twinbrain.org/" target="_blank"><CaretRightFilled style={{fontSize: 18}} />Psychological Assessment</a></li>
                                        <li><a href="https://eap.healthbj-uk.org/" target="_blank"><CaretRightFilled style={{fontSize: 18}} />Employee Assistance Programme</a></li>
                                        <li><a href="http://search.healthbj-uk.org/" target="_blank"><CaretRightFilled style={{fontSize: 18}} />Search Directory</a></li>

                                    </ul>


                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-xs-12">
                            <div className="row g-0">
                                <div className="col">
                                    <h5 className='my-4 text-center'>Quick Links</h5>

                                    <ul className='footer-links'>
                                        <li><a href="/book-now"><CaretRightFilled style={{fontSize: 18}} />Book An Appointment</a></li>
                                        <li><a href="/books-to-read"><CaretRightFilled style={{fontSize: 18}} />Books To Read</a></li>
                                        <li><a href="/keeping-you-safe"><CaretRightFilled style={{fontSize: 18}} />Keep You Safe</a></li>
                                        <li><a href="/my-account"><CaretRightFilled style={{fontSize: 18}} />My Account</a></li>
                                        <li><a href="/disclaimer"><CaretRightFilled style={{fontSize: 18}} />Disclaimer</a></li>
                                        <li><a href="/terms-and-conditions"><CaretRightFilled style={{fontSize: 18}} />Terms and Conditions</a></li>
                                    </ul>


                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="row g-0">
                                <div className="col footerContact">

                                    <h5 className='my-4 text-center'>Contact Us</h5>
                                    <p><EnvironmentFilled style={{fontSize: 22, color: '#082366'}} /> Twin Brain Davenport House <br/>
                                        16 Pepper Street, Canary Wharf, London, E14 9RP, United Kingdom</p>

                                    <a href="tel:0333 800 3006"><PhoneFilled style={{fontSize: 22, color: '#082366'}} />  0333 800 3006 </a>
                                    <div className='py-2'>
                                        <a href="https://www.facebook.com/HealthCityandTwinBrain"><FacebookFilled style={{fontSize: 25, color: '#4267B2'}} /></a>
                                        <a><TwitterOutlined style={{fontSize: 25, color: '#1DA1F2'}} /></a>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black text-white'>
                <div className="container p-3">
                    <div className="row">
                        <div className="col text-center">
                        &copy; {(new Date()).getFullYear()} Twin Brain. All rights reserved.
              </div>
                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer;