import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/SocialLpBanner.module.css";


const SocialLpBanner = (props) => {

    return (
        <>
            <section className={styles[props.newHomeBgprops]} >
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.smTxt}>
                                <h3>Creative and Customized Solutions</h3>
                                <h1 className='font55home'>Social Media App Development</h1>
                                <p>Crafted To Perfection & Delivered With Precision</p>
                            </div>
                            <div className={styles.smImg}>
                                <video autoPlay loop muted src='./images/socialmedialp/banner.mp4' className={styles.BanVideo}></video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SocialLpBanner