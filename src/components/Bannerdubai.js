import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerdubai.module.css";
//
import BannerImage from "@/public/images/lpmobile2/img2.png"
import banImg1 from '/public/images/people/people.png'
import star from '/public/images/people/star2.png'
import star1 from '/public/images/people/1.png'
import star2 from '/public/images/people/2.png'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"

const Bannerdubai = (props) => {

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

    const [checkboxes, setCheckboxes] = useState([]);
    const handleOptionChange3 = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setCheckboxes([...checkboxes, value]);
        } else {
            setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
        }
    };
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
            checkboxesdata: checkboxes,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
    

        fetch('api/emailapidubai/route', {
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
                <Container className={` ${styles.conform}`}>
                    <Row className={`g-5 ${styles.applost}`}>
                        <Col xl={6}>
                            <div className={styles.oppp}>
                                <h1 className='f-60 white fw700 mb-4'>Leading Mobile App Development Company in Dubai</h1>
                                <p className='font16 white fw400 mt-3 mb-lg-4 letterspace_1'>Are you looking for a Dubai-based app development company that truly understands the power of innovation and data-driven strategies? Look no further than <strong>BitsWits</strong>! Based in Dubai, we are a leading app development company that excels in designing growth-driven applications for both startups and established brands. We have a knack for transforming digital presences into strategic assets that pave the way for business success. Our dedicated team of developers is unwavering in their commitment to delivering top-notch, innovative apps. When achieving excellence in app development, <strong>BitsWits</strong> unquestionably stands out as the ultimate choice.</p>
                                <p className='font16 white fw400 mt-3 mb-lg-4 letterspace_1'>Hire us for mobile app development excellence in Dubai and ensure your success!</p>
                                <Link href='javascript:$zopim.livechat.window.show();' className={styles.deliver}>Let’s Discuss Your Project</Link>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='f-60 mb-4 white fw700'>Book a Free <br></br>Consultation</h3>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="First Name"></input>
                                <input type='text' name='last' minLength="4" required className='form-control  mt-2' placeholder="Last Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-2' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-2' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-2'></textarea>
                                <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                <label className='form-check-label' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                <input type='submit' value={score} name='submit' className={styles.value} placeholder="Submit"></input>
                            </form>
                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Bannerdubai