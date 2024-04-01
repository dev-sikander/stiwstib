import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Technologieslpdubainew.module.css'
import Link from 'next/link'
//
import icon1 from '@/public/dubailp/technology/1.webp'
import icon2 from '@/public/dubailp/technology/2.webp'
import icon3 from '@/public/dubailp/technology/3.webp'
import icon4 from '@/public/dubailp/technology/4.webp'
import icon5 from '@/public/dubailp/technology/5.webp'
import icon6 from '@/public/dubailp/technology/6.webp'

const Technologieslpdubai = () => {

    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }

    return (
        <>
            <section className={styles.tech}>
                <Container>
                    <Row>
                        <Col xl={12} className={styles.york}>
                            <h2 className={styles.work}>Rev-Up App Development in Dubai with  Bitswits All- <br></br>Encompassing Services </h2>
                            <p className='font16 font-normal black text-center'>We've helped businesses cross the chasm with our data-driven approach toward app development, and we've brought the same passion for disruption and growth to UAE. Having expertise and first-hand experience in multiple tangents of mobile app development in Dubai, our mobile apps development company rev up your growth engine by building new revenue streams allowing you to rethink possibilities and ensure long-term growth. We know that the Dubai mobile app development market has gained traction mainly due to the tourism and business economy that Dubai has built over the years.</p>
                            <p className='font16 font-normal black text-center'>Our list of satisfied clients and businesses empowered is growing rapidly. We've worked with businesses and entrepreneurs coming from all walks of life, and we aim to continue empowering businesses with advanced mobile applications. Speaker of empowering businesses, here are other services that our app developers in Dubai are offering:</p>
                        </Col>
                        <Col xl={12} className='mb-5 d-none d-lg-block'>
                            <div className={styles.analpost}>
                                <div className={activeTab1 == 'tab1' ? styles.active : styles.new1} onClick={() => fun1('tab1')} href="#">Mobile App</div>
                                <div className={activeTab1 == 'tab2' ? styles.active : styles.new1} onClick={() => fun1('tab2')} href="#">Native App</div>
                                <div className={activeTab1 == 'tab3' ? styles.active : styles.new1} onClick={() => fun1('tab3')} href="#">Hybrid App</div>
                                <div className={activeTab1 == 'tab4' ? styles.active : styles.new1} onClick={() => fun1('tab4')} href="#">Product Strategy</div>
                                <div className={activeTab1 == 'tab5' ? styles.active : styles.new1} onClick={() => fun1('tab5')} href="#">E-Commerce App</div>
                                <div className={activeTab1 == 'tab6' ? styles.active : styles.new1} onClick={() => fun1('tab6')} href="#">B2B App</div>
                            </div>
                        </Col>

                        <Col xl={12} className='mb-5 d-block d-lg-none'>
                            <div className={styles.analpost}>
                                <select onChange={(e) => setActiveTab1(e.target.value)}>
                                    <option className={styles.selOpt} value="tab1" label='Mobile App'>Mobile App</option>
                                    <option className={styles.selOpt} value="tab2" label='Native App'>Native App</option>
                                    <option className={styles.selOpt} value="tab3" label='Hybrid App'>Hybrid App</option>
                                    <option className={styles.selOpt} value="tab4" label='Product Strategy'>Product Strategy</option>
                                    <option className={styles.selOpt} value="tab5" label='E-Commerce App'>E-Commerce App</option>
                                    <option className={styles.selOpt} value="tab6" label='B2B App'>B2B App</option>
                                </select>
                            </div>
                        </Col>

                        <Col xl={12}>
                            {activeTab1 == 'tab1' &&

                                <div className={styles.newyork}>

                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6}>
                                            <h3 className={styles.stook}>Mobile App Development</h3>
                                            <p>Build and scale your business with Bitswits mobile app developer in Dubai that offer remarkable iOS app development and Android app development
                                                in Dubai.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Talk To Our Experts</Link>
                                        </Col>
                                        <Col lg={5}>
                                            <Image className='img-fluid' src={icon1} />
                                        </Col>
                                    </Row>
                                </div>
                            }
                            
                            {activeTab1 == 'tab2' &&
                                <div className={styles.newyork}>

                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6}>
                                            <h3 className={styles.stook}>Native App Development</h3>
                                            <p>Develop platform-specific mobile applications and make an impact on the market while gradually capturing market share.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Talk To Our Experts</Link>
                                        </Col>
                                        <Col lg={5}>
                                            <Image className='img-fluid' src={icon2} />
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {activeTab1 == 'tab3' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6}>
                                            <h3 className={styles.stook}>
                                                Hybrid App Development</h3>
                                            <p>Get Hybrid or cross-platform app development with Bitswits’s app developers in UAE to build and deploy apps on multiple platforms – ensuring uniformity and a high-end user-experience.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Talk To Our Experts</Link>
                                        </Col>
                                        <Col lg={5}>
                                            <Image className='img-fluid' src={icon3} />
                                        </Col>
                                    </Row>
                                </div>
                            }


                            {activeTab1 == 'tab4' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6}>
                                            <h3 className={styles.stook}>Product Strategy Development</h3>
                                            <p>Strategic insights from Bitswits's expert app development consultant ensure the success of your product long before it hits the market.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Talk To Our Experts</Link>
                                        </Col>
                                        <Col lg={5}>
                                            <Image className='img-fluid' src={icon4} />
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {activeTab1 == 'tab5' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6}>
                                            <h3 className={styles.stook}>E-Commerce App Development</h3>
                                            <p>Get an impeccable design iterated and refined by our marketing experts, along with unprecedented functionality that generates more sales and conversions with our e-commerce apps.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Talk To Our Experts</Link>
                                        </Col>
                                        <Col lg={5}>
                                            <Image className='img-fluid' src={icon5} />
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {activeTab1 == 'tab6' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6}>
                                            <h3 className={styles.stook}>B2B App Development</h3>
                                            <p>Always business is always human to human (H2H); Bitswits's business apps are meant to streamline an organization's internal processes, i.e., communication, interactions, and more.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Talk To Our Experts</Link>
                                        </Col>
                                        <Col lg={5}>
                                            <Image className='img-fluid' src={icon6} />
                                        </Col>
                                    </Row>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Technologieslpdubai