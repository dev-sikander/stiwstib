import React from 'react'
import asia from "@/public/images/mobilelpfinal/asia.png"
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerlpfianl.module.css";
//
import banImg1 from '/public/images/people/people.png'
import star from '/public/images/mobilelpfinal/star.png'
import clutch from '/public/images/mobilelpfinal/clutch.png'
import star1 from '/public/images/people/1.png'
import star2 from '/public/images/people/2.png'
import usa from "@/public/images/mobilelpfinal/usa.png"
import dubai from "@/public/images/mobilelpfinal/dubai.png" 


const Bannerlpfinal = (props) => {


    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])


    const [score, setScore] = useState('ENQUIRE NOW');


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
            last: 'null',
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.message.value,
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

            <section className={styles[props.newHomeBgprops]} >

                <Container className={` ${styles.conform1}`}>

                    <Row className={`${styles.alignpost} gx-5`}>
                        <Col xl={7}>
                            <div className={` ${styles.conform} ${styles.oppp}`}>
                                <h1 className='font-bold white f-25'>Mobile App Development Services</h1>
                                <h2 className='white font50 f-700'>We Don't Just <span className={styles.corpost}>Create Apps</span>, We <span className={styles.corpost}>Create Experiences</span> </h2>
                                <p className='font16 white fw400 mt-4 mb-lg-5'>Transform your idea into a remarkable app with Bitswits Mobile app development services. Our creative and efficient development process caters to both native and cross-platform needs, ensuring your app makes a lasting impact.</p>
                                <div className={styles.careatapp}>
                                    <Link href='tel:8335006007' className={styles.delivernow}>CALL NOW</Link>
                                    <Link href='javascript:$zopim.livechat.window.show();' className={styles.deliver}>LIVE CHAT</Link>
                                </div>
                            </div>
                            <div className={styles.comple}>
                                <Image quality={95} alt='BitsWits' src={banImg1} className={`${styles.newone} img-fluid w-25`} />

                                <div className={styles.comple1}>
                                    <Image quality={95} alt='BitsWits' src={star} className='img-fluid' />
                                    <p className='mb-0'> <span className='fw700'>4.9 out of 5</span> <span className={styles.rating}>(review rating) <br></br>
                                        Over 1,200+ reviews
                                        Over 1,200+ reviews</span> </p>
                                </div>
                                <Image quality={95} alt='BitsWits' src={clutch} className='img-fluid' />
                            </div>

                            <div className={styles.posty}>
                                <div className={styles.comple3}>
                                    <Image quality={95} alt='BitsWits' src={star2} className='img-fluid' />
                                    <div className={styles.comple5}>
                                        <p className='mb-0'>US TOP 3 BEST RATED</p>
                                        <p className='mb-0 fw700'>App & Software Development Company</p>
                                    </div>
                                </div>
                                <div className={styles.comple3}>
                                    <Image quality={95} alt='BitsWits' src={star1} className='img-fluid' />
                                    <div className={styles.comple5}>
                                        <p className='mb-0'>HIGH PERFORMER</p>
                                        <p className='mb-0 fw700'>Top App Development Company</p>
                                    </div>
                                </div>

                            </div>

                        </Col>
                        <Col xl={5}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='white fw500'>Transform Your App Idea Into A Success Story</h3>
                                <h2 className='mb-3 fw500 white'>Today Is The Day To Start!</h2>
                                <input type='text' minLength="4" name='first' required className={styles.newform} placeholder="Your Name*"></input>
                                <input type='email' name='email' required className={styles.newform} placeholder="Your Email*"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className={styles.newform} placeholder="Your Phone Number*"></input>
                                <textarea placeholder='Message*' required name='message' className={styles.newformtext}></textarea>
                                <div className={styles.takesread}>
                                    <p>
                                        We takes yout privacy seriously. Read our
                                        Privacy Notice.
                                    </p>
                                    <input type='submit' name='submit' className={styles.value} placeholder="Submit" value={score}></input>
                                </div>
                                <div>
                                    <h4 className='font20 white fw800 center mt-2'>OUR OFFICES</h4>
                                </div>
                                <div className={styles.ouroff}>
                                    <span>
                                        <Image quality={95} alt='BitsWits' src={usa} className='img-fluid' />
                                        <p>USA</p>
                                    </span>
                                    <span>
                                        <Image quality={95} alt='BitsWits' src={dubai} className='img-fluid' />
                                        <p>MIDDLE EAST</p>
                                    </span>
                                    <span>
                                        <Image quality={95} alt='BitsWits' src={asia} className='img-fluid' />
                                        <p>ASIA</p>
                                    </span>
                                </div>

                            </form>

                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Bannerlpfinal