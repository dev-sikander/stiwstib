import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Faqsdubia.module.css";
//
import close from "@/public/newdubai/close.png";
import open from "@/public/newdubai/do.png";

const Faqdubai = (props) => {
    const [faqStates, setFaqStates] = useState(Array(props.faqsData.length).fill(false));
    const [isClassAdded, setClassAdded] = useState(false);
    const toggleFaq = (index) => {
        const newFaqStates = faqStates.map((state, i) => (i === index ? !state : false));
        setFaqStates(newFaqStates);
        setClassAdded(true);
    };

    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble newlevel`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 class="font40 black f-700 center pb-5">FAQs</h4>
                            {props.faqsData.map((faq, index) => (
                                <div key={index} className={`${faqStates[index] ? "touchFaq activefapost" : ""} mb-4 mb-lg-0`}>
                                    <div>
                                        <div onClick={() => toggleFaq(index)} className={`${styles.heading} newfoldpost p-3`}>
                                            <h3 className={`${faqStates[index] ? "black" : "black"} `}>
                                                {faq.question} {faqStates[index] ? <Image quality={75} src={open} className="img-fluid" alt="Bitswits" /> : <Image quality={75} src={close} className="img-fluid" alt="Bitswits" />}
                                            </h3>

                                        </div>
                                    </div>
                                    <div className={faqStates[index] ? `d-block ${styles.mostimg}` : "d-none"}>
                                        <div>
                                            <p>{faq.answer}</p>
                                            <Link href="javascript:$zopim.livechat.window.show();">Develop An Android Mobile Application</Link>
                                        </div>
                                        <Image className="img-fluid" src={faq.imggodd} />
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Faqdubai;
