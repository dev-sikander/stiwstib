
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/LpForm.module.css";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const LpForm = (props) => {

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
            last: 'null',
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: 'null',
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
            <section className={`${styles.newAddress} ${styles[props.addresClass]}`}>
                <Container className={styles.appios}>
                    <Row className='align-items-start'>
                        <Col lg={12}>
                            <div className={styles.make}>
                                <form className={styles.formsbanner} onSubmit={handleSubmit}>
                                    <div className={`mb-lg-4 pb-1 text-center`}>
                                        <h4 className='newchoose text-white font-bold mb-3'>Let's Talk Apps. Reserve A Spot! </h4>
                                        <p className='font18 font-medium text-white mb-3'>Schedule A Complimentary Strategy Session Now With Our Experienced Product Strategists.</p>
                                    </div>
                                    <Row>
                                        <Col lg={3}>
                                            <div>
                                                <input type='text' minLength="4" name='name' className={styles.forminput} placeholder='Your Name' required />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type='email' name="email" className={styles.forminput} placeholder='Email Address' required />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" className={styles.forminput} required placeholder='Phone Number' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                            <input type='submit' name='submit' className={styles.book} placeholder="Submit" value={score}></input>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>

                    <div className={styles.para}>
                        <p className='mb-0'>
                            Welcome to our world of innovative app creation. At BitsWits, we don't just create a mobile app, we transform your vision into a digital masterpiece. With a blend of creativity and technical skill, we're recognized as the best app making company dedicated to elevating your business.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpForm
