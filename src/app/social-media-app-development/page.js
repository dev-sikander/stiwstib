"use client"
 
import React from "react";
//CSS
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
import SocialLpBanner from "../../components/SocialLpBanner";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import SocialLpForm from "../../components/SocialLpForm";
import Nothing from "../../components/Nothing";
import SocialExpertapp from "../../components/SocialExpertapp";
import SocialLpSolutions from "../../components/SocialLpSolutions";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";
import LpChoose from "../../components/LpChoose";
import Technologieswe from "../../components/Technologieswe";
import Justbuilditlp from "../../components/Justbuilditlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";


export default function SocialMediaApp() {

  return (
    <> 
      <SocialLpBanner newHomeBgprops="newHomeBg" />
      <People People="people" />
      <HomeBannerSliderlp />
      <SocialLpForm />
      <Nothing Nothing="nothingLp6" />
      <SocialExpertapp expertapp="expertapp" />
      <SocialLpSolutions />
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our App Development Journey"
        desc="We believe in efficiency without compromising quality. Our streamlined process for app development is <br /> designed to be transparent and collaborative, ensuring your vision comes to life exactly as you imagined."
      />
      <LpChoose transform="transformlp" />
      <Technologieswe />
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
  );
}