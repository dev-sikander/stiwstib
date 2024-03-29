"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
// css
import styles from "@/styles/bannerlp.module.css";
import stylesjust from "@/styles/Justbuilditlp.module.css";
// components
import Bannerlp from "../../components/Bannerlp";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm from "../../components/LpFormprops";
import Nothing from "../../components/Nothing";
import Hurdles from "../../components/Hurdles";
import Expertapp from "../../components/Expertapp";
import ProjectProcesslp1 from "../../components/ProjectProcesslp1";
import LpChoose from "../../components/LpChoose";
import Technologieslp from "../../components/Technologieslp";
import Justbuilditlp from "../../components/Justbuilditlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";

export default function gamedevelopmentcompany() {
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Bannerlp
        title={
          <>
            <h1 className={`${styles.develop} text-center font50 font-bold mb-3`}>
              Top Mobile App Development Company
            </h1>
          </>
        }
        para={
          <>
            <p className="font20 white center mb-3">
              Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span>
            </p>
          </>
        }
        btn2={
          <>
            <div className={styles.pont}>
              <Link className={styles.about} href="javascript:$zopim.livechat.window.show();">
                Transform Your App Idea Into A Success Story - Today Is The Day
                To Start!
              </Link>
            </div>
          </>
        }
        newHomeBgprops="newHomeBg"
      />
      {showFolds &&
        <>
          <People People="people" />
          <HomeBannerSliderlp />
          <LpForm
            addresClass="iosclass"
            heading={`Discover excellence in app innovation with Bitswits, a leading mobile app development company. We turn your ideas into impactful mobile app solutions. Our expertise isn't just in coding; it's about understanding your needs and delivering an app that resonates with your audience. Experience the Bitswits difference: where expertise meets excellence, and your vision becomes a reality.`}
          />
          <Nothing Nothing="nothing" />
          <Hurdles />
          <Expertapp expertapp="expertapp" />
          <ProjectProcesslp1 processclass="process" />
          <LpChoose transform="transform" />
          <Technologieslp />
          <Justbuilditlp
            title={
              <>
                <h2 className={stylesjust.just}>Just Build It.</h2>
              </>
            }
            para={
              <>
                <h3 className={stylesjust.develop}>
                  Design, Develop, and Grow with BitsWits.
                </h3>
              </>
            }
            slide="slide1lp"
          />
          <Globallplp6 />
          <Partnerships />
          <Formnewlp />
          <NewFaqslp />
          <HomeLocationlp />
        </>
      }
    </>
  );
}
