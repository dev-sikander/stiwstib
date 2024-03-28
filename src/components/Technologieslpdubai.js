import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Technologieslpdubai.module.css'
import Link from 'next/link'
//
import icon1 from '/public/dubailp/technology/1.png'
import icon2 from '/public/dubailp/technology/2.png'
import icon3 from '/public/dubailp/technology/3.png'
import icon4 from '/public/dubailp/technology/4.png'
import icon5 from '/public/dubailp/technology/5.png'
import icon6 from '/public/dubailp/technology/6.png'
// import icon2 from '/public/dubailp/technology/2.png'
// import icon3 from '/public/dubailp/technology/3.png'
// import icon4 from '/public/dubailp/technology/4.png'
// import icon5 from '/public/dubailp/technology/5.png'
// import icon6 from '/public/dubailp/technology/6.png'
// import icon7 from '/public/dubailp/technology/7.png'
// import icon8 from '/public/dubailp/technology/8.png'
//
import frontend1 from '/public/newHomePageImages/tech/frontend/1.png'
import frontend2 from '/public/newHomePageImages/tech/frontend/2.png'
import frontend3 from '/public/newHomePageImages/tech/frontend/3.png'
import frontend4 from '/public/newHomePageImages/tech/frontend/4.png'
import frontend5 from '/public/newHomePageImages/tech/frontend/5.png'
import frontend6 from '/public/newHomePageImages/tech/frontend/6.png'
//
import database1 from '/public/newHomePageImages/tech/database/1.png'
import database2 from '/public/newHomePageImages/tech/database/2.png'
import database3 from '/public/newHomePageImages/tech/database/3.png'
import database4 from '/public/newHomePageImages/tech/database/4.png'
import database5 from '/public/newHomePageImages/tech/database/5.png'
import database6 from '/public/newHomePageImages/tech/database/6.png'
//
import php1 from '/public/newHomePageImages/tech/php/1.png'
import php2 from '/public/newHomePageImages/tech/php/2.png'
import php3 from '/public/newHomePageImages/tech/php/3.png'
//
import cms1 from '/public/newHomePageImages/tech/cms/1.png'
import cms2 from '/public/newHomePageImages/tech/cms/2.png'
import cms3 from '/public/newHomePageImages/tech/cms/3.png'
//
import dev1 from '/public/newHomePageImages/tech/dev/1.png'
import dev2 from '/public/newHomePageImages/tech/dev/2.png'
import dev3 from '/public/newHomePageImages/tech/dev/3.png'
import dev4 from '/public/newHomePageImages/tech/dev/4.png'
import dev5 from '/public/newHomePageImages/tech/dev/5.png'
import dev6 from '/public/newHomePageImages/tech/dev/6.png'
import dev7 from '/public/newHomePageImages/tech/dev/7.png'
import dev8 from '/public/newHomePageImages/tech/dev/8.png'
import dev9 from '/public/newHomePageImages/tech/dev/9.png'


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
                            <h2 className={styles.work}>Catalyzing Business Growth in Dubai as a Premier Mobile <br /> app development company in Dubai</h2>
                            <p className='font16 font-normal white text-center'>BitsWits is a Dubai-based mobile app development company that focuses on growth and innovation. We offer comprehensive services, from ideation to execution, aiming to accelerate business growth. With Dubai's thriving tourism and robust economy, we leverage this potential to create new revenue streams and foster long-term success. </p>
                            <p className='font16 font-normal white text-center'>With a growing client list, BitsWits is committed to excellence and aims to create a catalyst for growth and prosperity in Dubai.</p>
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
                                            <h3 className={styles.stook}>Business Growth with BitsWits: Your Trusted Mobile App Development Company</h3>
                                            <p>Build and scale your business with BitsWits Mobile App Development Company. Our Dubai-based iOS and Android developers offer customized solutions for a robust mobile presence, ensuring quality, innovation, and exceptional user experiences.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Get In Touch With Our Experts</Link>
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
                                            <h3 className={styles.stook}>Native App Development: Creating Platform-Specific Excellence</h3>
                                            <p>For a winning mobile app strategy, turn to BitsWits. We specialize in native app development services tailored for the iOS and Android ecosystems. Our expert team guarantees superior performance, unbeatable user experience, and an extensive market reach. With BitsWits, your brand's success in this ever-evolving market is not just possible; it is inevitable.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Get In Touch With Our Experts</Link>
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
                                            <h3 className={styles.stook}>Upgrade Business Growth with Hybrid App Development</h3>
                                            <p>At BitsWits, we empower businesses to reach their full potential with hybrid app development. Our app development company excels in creating and deploying apps across multiple platforms, ensuring seamless consistency and delivering top-notch user experiences. Do not limit your app's reach – choose hybrid app development for versatility, efficiency, and excellence.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Get In Touch With Our Experts</Link>
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
                                            <h3 className={styles.stook}>Expert Product Strategy Development Ensures Market Success</h3>
                                            <p>BitsWits' consultants specialize in product strategy development, ensuring innovative and strategically positioned product ideas for market launch. We navigate market complexities, conduct in-depth research, and identify opportunities and challenges. Our guidance ensures products meet and exceed customer expectations, driving success and market prominence.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Get In Touch With Our Experts</Link>
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
                                            <h3 className={styles.stook}>Revolutionize Your Online Retail with Our Ecommerce App Development</h3>
                                            <p>BitsWits offers an Ecommerce app development service that combines digital marketing expertise with app development expertise to create visually appealing, functional apps that drive sales and conversions, enhancing user experience and revenue.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Get In Touch With Our Experts</Link>
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
                                            <h3 className={styles.stook}>Elevating B2B Interaction with Human-Centric B2B App Development</h3>
                                            <p>BitsWits focuses on putting people at the heart of business operations, developing B2B apps that streamline internal processes, foster efficient communication, and enhance collaboration. Our  human-centric approach empowers organizations to thrive in a competitive environment.</p>
                                            <Link className={styles.buld} href="javascript:$zopim.livechat.window.show();">Get In Touch With Our Experts</Link>
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