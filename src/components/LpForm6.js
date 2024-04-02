import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/LpForm6.module.css";
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
                                        <h4 className='newchoose text-white font-bold mb-3'>Turn Your App Idea Into An App</h4>
                                    </div>
                                    <Row>
                                        <Col lg={3}>
                                            <div>
                                                <input type='text' name='name' minLength="4" required className={styles.forminput} placeholder='Your Name' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type='email' name='email' required className={styles.forminput} placeholder='Email Address' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" required className={styles.forminput} placeholder='Phone Number' />
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
                            Welcome to Bitswits, where app creation meets innovation. Whether it's 'Creating an App,' 'Making an App,' or diving into 'iOS' or 'Android Application' development, we're your team. Let's turn your vision into reality with our leading-edge app development expertise.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpForm
