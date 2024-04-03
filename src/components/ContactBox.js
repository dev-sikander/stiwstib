
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ContactUs.module.css'
//
import malaysia from '/public/images/contact/malaysia.png'
import pakistan from '/public/images/contact/pakistan.png'
import delaware from '/public/images/contact/delaware.png'
import houston from '/public/images/contact/houston.png'
import Sharjah from '/public/images/contact/sharjah.png'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"

const ContactBox = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    function loc(tabs1) {
        setActiveTab(tabs1);
    }
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])
    const [score, setScore] = useState('Submit');
   const router = usePathname();
    const currentRoute = router;
     const [pagenewurl, setPagenewurl] = useState('');
      useEffect(() => {
        const pagenewurl = window.location.href;
        setPagenewurl(pagenewurl);
      }, []);
    const handleSubmit = async (e) => {
        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''
        const data = {
            name: e.target.name.value,
            last: e.target.last.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }
        const JSONdata = JSON.stringify(data)
        setScore('Sending Data');
    
        fetch('api/emailapi/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Bitswits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });
        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }
    return (
        <>
            <section className={styles.bannerContact}>
                <Container fluid>
                    <div className={styles.contactCard}>
                        <Row className='align-items-center cntctRow'>
                            <Col lg={6}>
                                <div className={styles.locSlider}>

                                    <div className={styles.tabsBtns}>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab1" ? styles.active : ""}`}
                                            onClick={() => loc("tab1")}
                                            href="#">
                                            USA
                                        </div>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab2" ? styles.active : ""}`}
                                            onClick={() => loc("tab2")}
                                            href="#">
                                            Middle East
                                        </div>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab3" ? styles.active : ""}`}
                                            onClick={() => loc("tab3")}
                                            href="#">
                                            ASIA
                                        </div>
                                    </div>
                                    <div>
                                        {activeTab == "tab1" && (
                                            <div className="locBox">
                                                <div className={styles.locTxt}>
                                                    <h2 className="font30 font-bold white mb-3 text-center">United States</h2>
                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">DELAWARE</h3>
                                                    <p className="font13 font-medium white mb-1 text-center">
                                                        8 The Green STE 300, Dover DE 19901.
                                                    </p>
                                                    <Link className='font14 white text-center mb-3' href='tel:8335006007'>+1 833 500 6007</Link>
                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={delaware} alt='Location' className='img-fluid mb-4' />
                                                    </div>

                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">HOUSTON</h3>
                                                    <Link className='font13 font-medium white mb-1 text-center' href='https://maps.app.goo.gl/oWks8ofWd5X8qVZs9'>Williams Tower, 41st Floor 2800 Post Oak Blvd, Suite 4100 Houston, TX 77056</Link>
                                                    <Link className='font14 white text-center mb-3' href='tel:+17135657656'>+1 713 565 7656</Link>
                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={houston} alt='Location' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab == "tab2" && (
                                            <div className="locBox">
                                                <div className={styles.locTxt}>
                                                    <h2 className="font30 font-bold white mb-3 text-center">Middle East</h2>
                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">SHARJAH</h3>
                                                    <Link className='font15 font-medium white mb-1 text-center' href='https://maps.app.goo.gl/ebo8RKEPUPVkDfZu9'>Office #101, 32 Street, Al Mujarrah, Sharjah</Link>
                                                    <Link className='font14 white text-center' href='tel:+971555031266'>+971 555 031266</Link>
                                                </div>
                                                <div className={styles.locImg}>
                                                    <Image src={Sharjah} alt='Location' className='img-fluid mt-4' />
                                                </div>
                                            </div>
                                        )}
                                        {activeTab == "tab3" && (
                                            <div className="locBox">
                                                <div className={styles.locTxt}>
                                                    <h2 className="font30 font-bold white mb-3 text-center">Asia</h2>
                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">MALAYSIA</h3>
                                                    <p className="font13 font-medium white text-center">
                                                        Office 13 A - Main Office Tower - Financial Park , Labuan , Malaysia
                                                    </p>

                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={malaysia} alt='Location' className='img-fluid mb-4' />
                                                    </div>

                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">PAKISTAN</h3>
                                                    <Link className='font13 font-medium white text-center mb-1' href='https://maps.app.goo.gl/rnCBvBgv9SdWXUHL7'>12th Floor Caesar's Tower, Karachi, Pakistan</Link>
                                                    <Link className='font14 white text-center' href='tel:+923468280101'>+92 346 828 0101</Link>
                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={pakistan} alt='Location' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <h1 className="font40 font-bold newfycolr">Say Hello!</h1>
                                <p className="font16 font-medium white">
                                    Let’s make headlines together! We’re excited to collaborate with you on your fantastic project.
                                </p>
                                <h3 className="font30 font-bold f-s mb-2 newfycolr">
                                    For Work Inquiry
                                </h3>
                                <p className="font14 font-medium white mb-4">
                                    Whether you need a mobile app or a particular game solution, every venture starts with a
                                    simple email or phone call. Fill in the following information and we will get in touch.
                                </p>
                                <form id="contactusform1" onSubmit={handleSubmit}>
                                    <Row className='gy-3'>
                                        <Col lg={6}>
                                            <input type="text"   name="name" id="name" placeholder="Full Name" required />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="text" name="last"  placeholder="Last Name" required />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" id="phone" placeholder="Phone" required />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="email" name="email"  placeholder="Email Address" required />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea type="textarea"  name="comment" id="comments" placeholder="Comments" required />
                                        </Col>
                                        <Col>
                                            <div className={styles.notic}>
                                                <p className='white font16'>We take your privacy seriously. <br /> Read our <span className='font-bold'> <Link className='newfycolr' href='/privacy-policy'>Privacy Policy</Link> .</span></p>
                                                <button value={score} id="savebtns" type="submit" className={styles.bttns1}>{score}</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactBox
