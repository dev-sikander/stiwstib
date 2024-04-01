import React from 'react'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Delivered.module.css";

const Delivered = () => {
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>We've Delivered 100+ Mobile Applications To Clients Worldwide!</h2>
                            <p>Your app idea can be the next game-changer! Do you wish to be on that list?</p>
                            <Link href="javascript:$zopim.livechat.window.show();">Book A Consultation Now!</Link>

                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Delivered