import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import { useRouter } from "next/router";
const Footer = () => {
    const router = useRouter()
    return(
        <footer className="text-white bg-dark">
            <section>
                <div className="container">

                    <div className="row g-md-5">
                        <div className="col-md-3 col-xs-12">
                            <div className="row">

                                <div className="col">
                                    <h5 className='my-4'>About Us</h5>

                                    <p><small>We are a UK based healthcare social enterprise in London supporting family’s psychological, physical, financial, legal, and housing well-being. It was founded in 2007. We offer Counseling, Therapy and Well-being Associated services globally.</small></p>
                                    <div>
                                        <a href="https://www.facebook.com/HealthCityandTwinBrain"><i className="fab fa-facebook-f"></i></a>
                                        <a><i className="fab fa-twitter"></i></a>
                                        <a><i className="fab fa-pinterest-p"></i></a>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="row">
                                <div className="col">
                                    <h5 className='my-4'>Services</h5>

                                    <ul className='footer-links'>
                                        <li><Link href="/services/free-self-assessment">Free Self-Assessment</Link></li>
                                        <li><Link href="/services/paid-assessment">Paid Assessment</Link></li>
                                        <li><a href="https://cbt.healthbj-uk.org" target="_blank">CBT Service</a></li>
                                        <li><a href="https://counselling.healthbj-uk.org" target="_blank">Counselling Service</a></li>
                                        <li><a href="https://psychassessment.twinbrain.org/" target="_blank">Psychological Assessment</a></li>
                                        <li><a href="https://eap.healthbj-uk.org/" target="_blank">Employee Assistance Programme</a></li>
                                        <li><a href="http://search.healthbj-uk.org/" target="_blank">Search Directory</a></li>

                                    </ul>


                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-xs-12">
                            <div className="row g-0">
                                <div className="col">
                                    <h5 className='my-4'>Quick Links</h5>

                                    <ul  className='footer-links'>
                                        <li><Link href="/book-now">Book An Appointment</Link></li>
                                        <li><Link href="/books-to-read">Books To Read</Link></li>
                                        <li><Link href="/keeping-you-safe">Keep You Safe</Link></li>
                                        <li><Link href="/my-account">My Account</Link></li>
                                        <li><Link href="/disclaimer">Disclaimer</Link></li>
                                        <li><Link href="/term-and-conditions">Terms and Conditions</Link></li>
                                    </ul>


                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="row g-0">
                                <div className="col">

                                    <h5 className='my-4'>Contact Us</h5>
                                    <p>Twin Brain Davenport House</p>
                                    <p>16 Pepper Street, Canary Wharf, London, E14 9RP, United Kingdom</p>

                                    <a href="tel:0333 800 3006"className={`btn btn-outline-primary `}>Call Us:  0333 800 3006 </a>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black'>
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