import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/blockchain/leftContent.module.css';
//
import CTA from '../../components/blockchain/cta';

const LeftContent = (props) => {
    return (
        <>
            <div className={`${styles[props.whychooseclass]}  ${styles.secPad}`}>
                <Container>
                    <Row className={`${styles.middle} gy-4`}>
                        <Col lg={6}>
                            <div className={styles.cube}>
                                <h2 className="fw700 f40 text-white mb-2">{props.title}</h2>
                                <p className='f15 text-white mt-3'>{props.text}</p>
                                {props.subtext ?
                                    <p className='font15 text-white mt-3'>{props.subtext}</p>
                                    :
                                    ''
                                }
                                <CTA number="1 312 379 5987"
                                    discuss="Hire Blockchain Developer" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.image}>
                                <div className='text-center'>
                                    <video className={`${styles.bgVideo} img-fluid`} width={500} autoPlay muted loop src="../../../blockchain/images/starlycoin.mp4" type="video/mp4"></video>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LeftContent