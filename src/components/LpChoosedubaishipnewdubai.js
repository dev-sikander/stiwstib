import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubaishipnewdubai.module.css";
//images
import ship from "@/public/newdubai/ship.webp";

const LpChoosedubaiship = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4">
            <Col lg={6} className={styles.walk}>
              <h3 className="black font-bold f-700">We're Growing In Dubai & We Want Your Business
                To Grow With Us</h3>

              <div className="mt-4">
                <Link href="javascript:$zopim.livechat.window.show();" className={styles.dus}>
                  Let's Work On Your App Together
                </Link>
              </div>
            </Col>
            <Col lg={6} className={styles.work}>
              <Image className="img-fluid" src={ship} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoosedubaiship;
