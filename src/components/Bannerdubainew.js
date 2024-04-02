import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Axios from "axios";
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerdubainew.module.css";
//
import BannerImage from "@/public/newdubai/aroow.png"

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
                                <div className={styles.newpound}>
                                    <h4 className='white'>Home</h4>
                                    <Image src={BannerImage} className='img-fluid' />
                                    <h4 className='white'>Location</h4>
                                    <Image src={BannerImage} className='img-fluid' />
                                    <h4 className='newfycolr'>Mobile App Development Company Dubai</h4>
                                </div>
                                <h2 className='f-60 white fw700 mb-4'>Mobile App Development
                                    Company Dubai</h2>
                                <p className='font16 white fw500 mt-3 mb-lg-4'>Bitswits is revolutionizing mobile app development in Dubai, driving disruption to elevate the conventional process. Our approach promises a cutting-edge experience, ensuring success for businesses. Leveraging data-driven expertise, we redefine the landscape, delivering ingenious mobile applications to thrive in Dubai's lucrative market.</p>
                                <Link href='javascript:$zopim.livechat.window.show();' className={styles.deliver}>Let’s Discuss Your Project</Link>
                            </div>
                        </Col>
                        <Col xl={5}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='f-60 mb-4 white fw700'>Book a Free Consultation</h3>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="Full Name"></input>

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