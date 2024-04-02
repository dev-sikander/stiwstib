import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import styles from "@/styles/ecommercebanner.module.css";
//
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import logo from '/public/images/icons/footerlogo.png'
import checkImage from '/public/ecommerce/w-check.svg'
import Email from '/public/ecommerce/email.svg'
import Phone from '/public/ecommerce/b-phone.svg'
import Support from '/public/ecommerce/support.svg'
import PhoneTwo from '/public/ecommerce/w-phone.svg'
import USA from '/public/ecommerce/usa.svg'
import UAE from '/public/ecommerce/uae.svg'
import Malaysia from '/public/ecommerce/malaysia.svg'
import banImg1 from '/public/newHomePage/images/slider1.png'
import banImg2 from '/public/newHomePage/images/slider2.png'
import banImg3 from '/public/newHomePage/images/slider3.png'
import banImg4 from '/public/newHomePage/images/slider4.png'
import banImg5 from '/public/newHomePage/images/slider5.png'
import banImg6 from '/public/newHomePage/images/slider6.png'
import banImg7 from '/public/newHomePage/images/slider7.png'
import banImg8 from '/public/newHomePage/images/slider8.png'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const EcommerceBanner = () => {

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
            name: e.target.name.value,
            last: 'null',
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



    var bannerslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

 

    return (
        <>
            <section className={styles.EcommerceBanner}>
                <Row>
                    <Col lg={6} xl={8} className='p-0'>
                        <div className={styles.bannerbg}>
                        <Link href='/'>  <Image src={logo}  alt='Logo' className={`${styles.logo} img-fluid w-25`} /> </Link>

                            <div className={styles.content}>
                                <h1 className='font-50 text-white font-bold uppercase anton'>Top Ecommerce App <br />
                                    Development Company in USA!</h1>
                                <h6 className='f20 text-white font-bold'>Exceeded Performance Benchmarks, and Beat All Competitors.</h6>
                                <ul className=''>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Upgraded digital sales for expanding brands</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Secured payment systems</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Personalized user accounts
                                        </span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Push notifications and alerts</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Push notifications and alerts</span>
                                    </li>
                                    <li className='mb-2'>
                                        <Image src={checkImage} alt='BitsWits' />
                                        <span className='text-white font16 ms-2 mt-2'>Product catalog and search features for products</span>
                                    </li>
                                </ul>
                                <p className='font20 text-white font-regular'>Our eCommerce app developers have built up to <span className='font-bold'>1200+</span> online stores,
                                    helping dynamic brands achieve high revenue since <span className='font-bold'>21 years.</span></p>

                                <Slider {...bannerslider} className={styles.newLogoSlide}>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg1} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg2} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg3} className="img-fluid w-50" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg4} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg5} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg6} className="img-fluid w-50" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg7} className="img-fluid w-75" />
                                    </div>
                                    <div className="">
                                        <Image alt="BitsWits" src={banImg8} className="img-fluid w-50" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xl={4} className='p-0'>
                        <div className={styles.formsbg}>
                            <ul className='d-flex align-items-center justify-content-evenly pt-3 pt-sm-0'>
                                <li>
                                    <Link href="mailto:info@BitsWits.co" className='d-flex align-items-center'>
                                        <Image src={Email} alt='email' width={18} height={18} />
                                        <span className='font14 text-white font-medium ms-2'>Email</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:8335006007" className='d-flex align-items-center'>
                                        <Image src={Phone} alt='email' width={18} height={18} />
                                        <span className='font14 text-white font-medium ms-2'>Call Now</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="javascript:$zopim.livechat.window.show();" className='d-flex align-items-center'>
                                        <Image src={Support} alt='email' width={18} height={18} />
                                        <span className='font14 text-white font-medium ms-2'>Live Chat</span>
                                    </Link>
                                </li>
                            </ul>
                            <p className={`bg-black d-flex align-items-center justify-content-center w-100 text-white font15 mb-0 ${styles.ankerTag}`}>
                                <Image src={PhoneTwo} alt='Phone' width={18} height={18} className='' />
                                <span className='ms-2'>Let's discuss your project:</span>
                                <Link href="tel:8335006007" className='ms-2 text-white font-medium'>+1 833 500 6007</Link>

                            </p>
                            <Form className={styles.forms} onSubmit={handleSubmit}>
                                <h5 className='text-white font-bold font-28 text-center mb-3'>Make An Obligation-Free Enquiry</h5>
                                <input type='text' minLength="4" required name='name' className='mb-3' placeholder="Hi, what's your name?*"  />
                                <input type='text' required name='email' className='mb-3' placeholder="What's your email address?"  />
                                <input type="tel" required minLength="10" maxLength="13" pattern="[0-9]*" name='phone' className='mb-3' placeholder="Your contact number" />
                                <textarea rows={5} required name='comment' placeholder='Please include any notes or specific questions here'></textarea>
                                <div className='d-flex align-items-center justify-content-between pt-3'>
                                    <span className='text-white font-medium font11'>We takes your privacy seriously. Read our <Link href="javascript:;" className='text-white d-block font-bold'>Privacy Notice.</Link> </span>
                                    <Button value={score} type='submit' className={`text-white bg-black rounded-2 ${styles.secBtn}`}>{score}</Button>
                                </div>
                                <h5 className='text-white font-bold font-28 text-center mt-4 mb-4'>OUR OFFICES</h5>
                                <Row>
                                    <Col className='col-4' sm={4}>
                                        <div className='text-center'>
                                            <div className='image'>
                                                <Image src={USA} alt='USA' />
                                            </div>
                                            <div className='text'>
                                                <span className='d-block text-white font15 font-medium pt-2'>USA</span>
                                                <Link href="tel:8335006007" className='d-block text-white font12 font-regular pt-2'>+1 833 500 6007</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-4' sm={4}>
                                        <div className='text-center'>
                                            <div className='image'>
                                                <Image src={UAE} alt='UAE' />
                                            </div>
                                            <div className='text'>
                                                <span className='d-block text-white font15 font-medium pt-2'>UAE</span>
                                                <Link href="tel:+971555031266" className='d-block text-white font12 font-regular pt-2'>+97 155 503 1266</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-4' sm={4}>
                                        <div className='text-center'>
                                            <div className='image'>
                                                <Image src={Malaysia} alt='Malaysia' />
                                            </div>
                                            <div className='text'>
                                                <span className='d-block text-white font15 font-medium pt-2'>MALAYSIA</span>
                                                <Link href="tel:8335006007" className='d-block text-white font12 font-regular pt-2'>+1 833 500 6007</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default EcommerceBanner