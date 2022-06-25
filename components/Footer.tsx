import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
    return(
        <div>
            Footer
        </div>
    )
    // if (!content) return <LoadingComponent />
    // return (
    //     <div id="footer">
    //         {isDesktop && <Row>
    //             {Object.values(content.footer).map((val, index) => (
    //                 <Col key={index} className='footerCols' xs={12} sm={6} md={4} lg={2}>
    //                     <h6 >{val[0].text}</h6>
    //                     {val.slice(1).map((item) => (
    //                         item.url ? <p key={item.idMenu}>
    //                             <Link
    //                                 href={item.url.includes("index") ?
    //                                     item.url.replace("/index.html", "") :
    //                                     item.url.replace(".html", "")}>
    //                                 {item.text}
    //                             </Link>
    //                         </p>
    //                             : <p key={item.idMenu}>{item.text}</p>
    //                     ))}
    //                 </Col>
    //             ))}
    //         </Row>}

    //         <Row className='footerDetails'>
    //             <h6>{content.footerContent.businessName}</h6>
    //             <p>{content.footerContent.addressLine1}</p>
    //             <p>{content.footerContent.addressLine2}</p>
    //             <p>Toll Free: {content.footerContent.phoneTollFree} Voice:{content.footerContent.phoneVoice} Text:{content.footerContent.phoneText} Fax:{content.footerContent.phoneFax}</p>
    //             <p>Email: <a href="/inquiry01.html"> Info@sunspotvacationrentals.com</a> Website: <a href={content.footerContent.websiteURL}>{content.footerContent.websiteDisplay}</a></p>
    //             <p><a href={content.footerContent.websiteURL}>Go to Mobile Website</a></p>
    //             <p><a href={content.footerContent.designerURLActual}>{content.footerContent.designerURLDisplay}</a></p>
    //             <p>4900 Copyright Ⓒ {(new Date(content.footerContent.copyrightStart)).getFullYear()}-{(new Date()).getFullYear()}</p>
    //         </Row>
    //     </div>
    // )
}

export default Footer;