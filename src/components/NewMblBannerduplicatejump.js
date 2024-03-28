import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblBannerdulicatejump.module.css";
//
import Justbuilditjump from './Justbuilditjump';
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/navigation';

const NewHomeBanner = () => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])
    const [score, setScore] = useState('Submit Now');
    const router = useRouter();
    const currentRoute = router.pathname;
     const [pagenewurl, setPagenewurl] = useState('');
      useEffect(() => {
        const pagenewurl = window.location.href;
        console.log(pagenewurl);
        setPagenewurl(pagenewurl);
      }, []);

    const handleSubmit = async (e) => {

        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            website: e.target.website.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
        console.log(JSONdata);


        fetch('api/website/route', {
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
            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <p className={`${styles.just} ${styles.just2} text-center f30 font-regular mb-2 mb-lg-0`}>

                                <span>America's Leading <Link className="text-white" href="#">Digital Marketing Company</Link></span>

                            </p>
                            <Link className="text-white" href="#">
                                <h3 className={`${styles.develop} text-center f-45 font-bold mt-3 mb-4`}>
                                    Ready. Steady and BitsWits With Our Class-apart Digital Marketing Services!
                                </h3>
                            </Link>


                            <form className={styles.formalign} onSubmit={handleSubmit}>

                                <input type="text" minLength="4" placeholder="Type Name" id="name" name="name" required />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" id="phone" name="phone" placeholder="(000) 000-0000" required />
                                <input type="email" placeholder="Type Your Email" id="email" name="email" required />
                                <input type="url" placeholder="Type Your Website" id="message" name="website" required />
                                <button type="submit" name="saves1" id="butact1" className="primary-btn">{score}</button>
                            </form>

                        </Col>
                    </Row>
                </Container>
                <Justbuilditjump />
            </section>
        </>
    )
}

export default NewHomeBanner