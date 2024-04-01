import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertappdubaiadvanced.module.css";
//images
import banImg1 from '@/public/dubailp/services/1.png'
import banImg2 from '@/public/dubailp/services/2.png'
import banImg3 from '@/public/dubailp/services/3.png'
import banImg4 from '@/public/dubailp/services/4.png'
import banImg5 from '@/public/dubailp/services/5.png'
import banImg6 from '@/public/dubailp/services/6.png'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const appData = [
    {
        title: 'Blockchain',
        description: 'Bitswits app developers in Dubai are capable of building blockchain-powered mobile apps that provide optimal protection for your data.',
        imageSrc: banImg1,
    },
    {
        title: 'IoT',
        description: 'Harnessing the power of Internet-of-things technology, we build a connected infrastructure of devices that exchange data and communicate to improve business operations.',
        imageSrc: banImg2,
    },
    {
        title: 'AI/ML',
        description: 'Blending artificial intelligence and machine learning, Bitswits creates applications that automate certain processes and tasks, saving businesses a lot of time and cost while ensuring efficiency.',
        imageSrc: banImg3,
    },
    {
        title: 'AR/VR',
        description: 'Our app development company in Dubai builds AR/VR applications that maximize the percentage of conversions while ensuring innovation.',
        imageSrc: banImg4,
    },
    {
        title: 'Cloud Computing',
        description: (<> If you're in search of more security, scalability, and performance, then Bitswits cloud computing solution can help you move forward by connecting your mobile strategy to the cloud. </>),
        imageSrc: banImg5,
    },
    {
        title: 'Staff Augmentation',
        description: (<> Get remarkable talent working on your project and scale up your team when it's required and scale down whenever you want with Bitswits staff augmentation solution. </>),
        imageSrc: banImg6,
    },
];


export default function Expertappdubaiadvanced(props) {

    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };


    return (
        <>
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center g-2 d-none d-lg-flex'>
                        <Col lg={12} className={styles.newtown}>

                            <h2 className='black  f-700 center mb-5'>Advanced Technology Solutions for  Entrepreneurs <br></br> & Businesses </h2>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                    <h3 className=' black fw700'>Blockchain</h3>
                                </div>
                                <p className='fw400 m-0'>Bitswits app developers in Dubai are capable of building blockchain-powered mobile apps that provide optimal protection for your data. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg3} className='img-fluid' />
                                    <h3 className=' black fw700'>IoT</h3>

                                </div>
                                <p className='fw400 m-0'>Harnessing the power of Internet-of-things technology, we build a connected infrastructure of devices that exchange data and communicate to improve business operations. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg4} className='img-fluid' />
                                    <h3 className=' black fw700'>AI/ML</h3>

                                </div>
                                <p className='fw400 m-0'>Blending artificial intelligence and machine learning, Bitswits creates applications that automate certain processes and tasks, saving businesses a lot of time and cost while ensuring efficiency. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg6} className='img-fluid' />
                                    <h3 className=' black fw700'>AR/VR</h3>

                                </div>
                                <p className='fw400 m-0'>Our app development company in Dubai builds AR/VR applications that maximize the percentage of conversions while ensuring innovation.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg2} className='img-fluid' />
                                    <h3 className=' black fw700'>Cloud Computing</h3>

                                </div>
                                <p className='fw400 m-0'>If you're in search of more security, scalability, and performance, then Bitswits cloud computing solution can help you move forward by connecting your mobile strategy to the cloud.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg5} className='img-fluid' />
                                    <h3 className=' black fw700'>Staff Augmentation</h3>

                                </div>
                                <p className='fw400 m-0'>Get remarkable talent working on your project and scale up your team when it's required and scale down whenever you want with Bitswits staff augmentation solution.</p>
                            </div>
                        </Col>

                    </Row>

                    {/* For Mobile */}
                    <Row className='gy-5 d-block d-lg-none'>

                        <Col lg={12} >

                            <h2 className='black font50 f-700 center mb-5'>Advanced Technology Solutions for <br></br> Entrepreneurs & Businesses </h2>

                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                            {appData.map((app, index) => (
                                <Col lg={4} key={index}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <Image alt='BitsWits' src={app.imageSrc} className='img-fluid mb-3' />
                                            <h3 className=' black fw700'>{app.title}</h3>
                                        </div>
                                        <p className='fw400 m-0'>{app.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Slider>
                    </Row>
                </Container>

            </section>
        </>
    )
}

