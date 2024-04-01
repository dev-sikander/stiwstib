import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Whowearenew.module.css";
//
import ban1 from "@/public/newdubai/ban1.webp"
import ban2 from "@/public/newdubai/ban2.webp"
import ban3 from "@/public/newdubai/ban3.webp"


const Whowearenew = () => {
    return (
        <>
            <section className={styles.counter}>
                <Container fluid>
                    <Row className={styles.android}>
                        <h3 className='center'>Who We've</h3>
                        <h2 className='center'>Developed Android Apps For</h2>
                        <p className='center'>We work with the best of the best to create the best of the best. We feel passionately about the projects <br /> we choose to take on and that means you get an invested team that will do everything in their power to <br /> turn your idea into a full-fledged app.</p>
                    </Row>
                    <Row>
                        <Col lg={4} className='p-0'>
                            <Image src={ban1} className={`img-fluid ${styles.comm}`} />
                        </Col>
                        <Col lg={4} className='p-0'>
                            <Image src={ban2} className={`img-fluid ${styles.comm}`} />
                        </Col>
                        <Col lg={4} className='p-0'>
                            <Image src={ban3} className={`img-fluid ${styles.comm}`} />
                        </Col>
                        <Col lg={4} className='p-0'>
                            <div className={styles.travel}>
                                <h3>Travel App</h3>
                                <p className=' white'>Wisu Clothing Marketplace App is your one-stop destination for fashion enthusiasts. This sleek and intuitive platform connects you to an extensive array of clothing, offering both top brands and independent designers. Wisu's smart recommendation system ensures that your style preferences are catered to ensuring confident fashion choices.</p>
                            </div>
                        </Col>
                        <Col lg={4} className='p-0'>
                            <div className={styles.travel2}>
                                <h3>Real Estate App</h3>
                                <p className=' white'>Wisu Clothing Marketplace App is your one-stop destination for fashion enthusiasts. This sleek and intuitive platform connects you to an extensive array of clothing, offering both top brands and independent designers. Wisu's smart recommendation system ensures that your style preferences are catered to ensuring confident fashion choices.</p>
                            </div>
                        </Col>
                        <Col lg={4} className='p-0'>
                            <div className={styles.travel3}>
                                <h3>Wisu Clothing App</h3>
                                <p className=' white'>Wisu Clothing Marketplace App is your one-stop destination for fashion enthusiasts. This sleek and intuitive platform connects you to an extensive array of clothing, offering both top brands and independent designers. Wisu's smart recommendation system ensures that your style preferences are catered to ensuring confident fashion choices.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Whowearenew