import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Image from 'next/image';
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
//
import styles from "@/styles/LpFormdubai.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LpFormpropsdubai = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    // =====================================
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
            {props.data ?
                <section className={styles.datapost}>
                    <Container className={styles.appios}>
                        {isMobile ? (
                            <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                                {props.data.map((item, index) => (
                                    <div className='mt-5 mt-md-0'> 
                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img2} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <Row className='gx-3 gy-3'>
                                {props.data.map((item, index) => (
                                    <Col lg={3}>
                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img2} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Container>
                </section>
                :
                ''
            }
            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.para}>
                        <p className='mb-0'>
                            {props.heading}
                        </p>
                    </div>
                     <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpFormpropsdubai
