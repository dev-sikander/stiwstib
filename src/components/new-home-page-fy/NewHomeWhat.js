import React from 'react'
import Link from 'next/link';
import styles from "./NewHomeWhat.module.css";
import { Container, Row, Col } from 'react-bootstrap'


const NewHomeWhat = () => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <div className={styles.videobackground}>
                    <video autoPlay loop muted src='./v2video.mp4' className='w-100 h-100'></video>
                </div>
                <div className={styles.newHomeOvrly}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <h2 className={`text-white fontpink100 font-bold ${styles.textPink}`}>What we do</h2>
                                <p className={`fontwhite40 font-bold text-white`}>BitsWits transforms businesses <br /> through technology.</p>
                                <p className={`${styles.width} fonthomereg`}>We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.</p>
                                <div className={styles.sec_btn}>
                                    <Link href='javascript:$zopim.livechat.window.show();' className={`${styles.btn_txt} font-extrabold`}>
                                        Get To Know Us
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default NewHomeWhat