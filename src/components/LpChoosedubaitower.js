import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubaitower.module.css";
//images
import banImg1 from "/public/images/lp-images/icon1.png";
import banImg2 from "/public/images/lp-images/icon2.png";
import banImg3 from "/public/images/lp-images/icon3.png";
import banImg4 from "/public/images/lp-images/icon4.png";
import banImg5 from "/public/images/lp-images/icon5.png";
import banImg6 from "/public/images/lp-images/icon6.png";
import banImg7 from "/public/images/lp-images/icon7.png";
import banImg8 from "/public/images/lp-images/icon8.png";
import banImg9 from "/public/images/lp-images/icon9.png";
import towe from "/public/dubailp/towe.png";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LpChoosedubaitower = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4">
            <Col lg={6} className={styles.walk}>
              <h3 className="white newchoose font-bold f-700">BitsWits: Leading the Way as a Mobile Application Development Company in Dubai for Digital Transformation Solutions</h3>

              <p>
                BitsWits has earned recognition both locally and globally for its remarkable achievements. We are now expanding our influence beyond Dubai, reaching out to the MENA region and beyond. Our mission is clear: to create valuable digital products that not only solve business problems but also ensure growth, scalability, and resounding success in Dubai's dynamic market.
              </p>
              <p>
                At BitsWits, we are bringing an exceptional team of certified software engineers, product developers, Q&A engineers, and business strategists to the region. We promise a tech-driven environment that thrives on experience-led digital solutions, further nurturing Dubai's entrepreneurial culture.
              </p>
              <p>BitsWits has developed a comprehensive digital transformation suite, encompassing all the necessary digital tools that businesses need to navigate uncertain times, plan strategically, and maintain the resilience of their industries and business models. With BitsWits, your digital transformation is in expert hands, ready to conquer challenges and secure success.</p>
              <Link href="javascript:$zopim.livechat.window.show();" className={styles.dus}>
                Let’s Get Started
              </Link>
            </Col>
            <Col lg={6}>
              <Image className="img-fluid" src={towe} />
            </Col>


          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoosedubaitower;
