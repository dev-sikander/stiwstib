import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Formnewlpdubai.module.css";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const Formnewlpdubai = () => {

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
            name: e.target.first.value,
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
            <section className={styles.team}>
                <Container>
                    <Row className='align-items-center gy-4 gy-md-5 mb-5'>
                    <Col lg={12}>
                            <h2 className='newchoose fontf fw700 white mb-3 text-center'>
                                Start Your Mobile App Development <br /> Journey with Us?
                            </h2>
                            <p className='font16 font-normal white text-center mb-0'>Excited to turn your app concept into reality? Get in touch for a detailed consultation. We're keen to explore your project <br /> and demonstrate how our assistance can make a difference. Choosing Bitswits means partnering with a team <br /> dedicated to your app's success</p>
                        </Col>
                    </Row>
                    <Row className={`gy-5 ${styles.patt}`}>
                        <Col xl={6} className='mt-3 mt-md-4 mt-lg-5'>
                            <div className={styles.star}>
                                <h2 className='font60 white fw600'> Let’s Talk About Your Project</h2>
                                <p className='white'>Ready to turn your app idea into a reality? <span>Bitswits</span> is here to make it happen! Whether you're in the  <span>USA, Canada, GCC,</span> or the <span>UK,</span> our team is geared up to bring your vision to life. Our straightforward <span>approach</span> starts with a conversation about your project. No jargon, no <span>complicated terms</span>  – just a friendly chat to understand what you need. We're all ears, <span>ready to discuss your goals</span> . All you need to do is give that <span>“Get in Touch”</span> button a cheeky little click!.</p>
                            </div>

                        </Col>
                        <Col xl={6}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='font25 white fw700'>Have a Project To Discuss?</h3>
                                <h2 className='f-60 mb-4 grdiant fw700'>We're Ready!</h2>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="First Name"></input>
                                <input type='text' name='last' minLength="4" required className='form-control  mt-3' placeholder="Last Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Enter your Phone No"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Enter your Email"></input>
                                <textarea placeholder='Comment' name='comment' className='form-control mt-3'></textarea>
                                <input type='submit' value={score} name='submit' className={styles.value} placeholder="Submit"></input>

                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Formnewlpdubai