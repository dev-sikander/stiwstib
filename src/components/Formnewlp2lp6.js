import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Formnewlp2lp6.module.css";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const Formnewlp2lp6 = () => {

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
                    <Row>
                        <Col xl={12} className={styles.devget}>
                            <h4 className='font50 fontf fw700 white mb-3 text-center'>Start Your Mobile App Development <br/>
                                Journey with Us?</h4>
                                <p>Excited to turn your app concept into reality? Get in touch for a detailed consultation. We're keen to explore your project <br/> and demonstrate how our assistance can make a difference. Choosing Bitswits means partnering with a team <br/> dedicated to your app's success</p>
                        </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col xl={6}>
                            <div className={styles.star}>
                                <h3 className='font20 white fw800'>30 Minutes Strategy Session</h3>
                                <h2 className='font40 white fw600'> Get Your<span className='fw800 f45'> Free 30 Minute </span>  <br></br>  <span className='fw600'>Strategy Session With An <br></br>
                                    Experienced </span>  <span className='fw800 f45'> App Experts </span> <br></br> <span className='fw600'>Valued</span> At  <span className='fw800 f45'> $300 </span></h2>
                            </div>

                        </Col>
                        <Col xl={6}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='font25 white fw700'>Have a Project To Discuss?</h3>
                                <h2 className='f-60 mb-4 fw700'>We're Ready!</h2>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="First Name"></input>
                                <input type='text' minLength="4" name='last' required className='form-control  mt-3' placeholder="Last Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Enter your Phone No"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Enter your Email"></input>
                                <textarea placeholder='Comment' required name='comment' className='form-control mt-3'></textarea>
                                <input type='submit' value={score} name='submit' className={styles.value} placeholder="Submit"></input>
                              
                            </form>

                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Formnewlp2lp6