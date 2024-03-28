import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubainew.module.css";
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
import layoff from "/public/dubailp/layoff.webp";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const LpChoosedubai = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4 gx-5">
            <Col lg={6} className={styles.walk}>
              <h3 className="black font-bold f-700">Bitswits More Than A Mere Mobile Application Development Company In Dubai</h3>
              
              <p>
              The ingenious and disruptive mobile app solutions delivered by Bitswits skilled professionals have earned recognition, awards, and accolades globally, and this aspect primarily sets us apart from the rest of the mobile application development companies in Dubai. Utilizing the art of individualistic collectivism as fuel to empower our quest to revolutionize and disrupt, we aim to develop and deliver solutions that are scalable and designed to help businesses achieve their objectives.
              </p>
              <p>
              In addition to leveraging the art of collectivism, our experience of working with multiple industries plays an imperative role in enabling us to craft high-performing applications. With our work being backed by multiple awards and appreciation, you'll always have peace of mind that your mobile application is in the hands of professional app developers in Dubai. Moreover, we've won a lot of awards over the years, but here are the ones that we're proud of:
              </p>
             
              <Link href="javascript:$zopim.livechat.window.show();" className={styles.dus}>
              Let’s Get Started
              </Link>
            </Col>
            <Col lg={6}>
             <Image className="img-fluid" src={layoff} />
            </Col>

          
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoosedubai;
