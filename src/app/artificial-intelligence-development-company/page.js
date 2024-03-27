"use client"

import Head from "next/head";
import React, { useState, useEffect } from "react";
//components
import ServicesBanner from "../../components/ServicesBanner";
import ServicesMaintain from "../../components/ServicesMaintain";
import Justbuildit from "../../components/Justbuildit";
import ServicesPortfolio from "../../components/ServicesPortfolio";
import Newsuccess from "../../components/NewMblSuccess";
import Technologieswe from "../../components/Technologieswe";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/images/iosbanner/ai.png";
import customios from "/public/artificalai/smartsystems.png";
import iphoneapp from "/public/artificalai/gesturerecognition.png";
import applewatch from "/public/artificalai/facialrecognition.png";
import appletvappdevelopment from "/public/artificalai/locationtracking.png";
import iphoneappdesigning from "/public/artificalai/motionsensing.png";
import hybridiphone from "/public/artificalai/webconferencing.png";


export default function gamedevelopmentcompany() {

  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const severcedata = [
    {
      classlayout: {
        newclass: "iosclass",
      },
      heading: {
        subtitle: "Go an Extra Mile with",
        title1: "Our Advanced",
        title2: "Artificial Intelligence Development",
        title3: "Services",
      },
      serdata: [
        {
          title: "Smart Systems",
          text: "We create clever systems that can do tasks automatically for your business, can understand information, learn from it, and help make your work easier and faster.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: <> Gesture Recognition </>,
          text: (
            <>

              BitsWits specializes in creating technology that can recognize and
              respond to your movements. Our systems understand gestures like
              hand waves or nods, allowing you to control devices effortlessly
              through simple motions.
            </>
          ),
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: <> Facial Recognition </>,
          text: "Hire us to build technology that can recognize your face, just like a key unlocks a door. Our systems use your unique features to grant access and make interactions easier and more secure.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Location Tracking",
          text: "We develop location tracking technology using intelligent AI algorithms to monitor the whereabouts of people or things. Our system predicts movement patterns, assisting businesses in effectively managing their assets and making informed decisions.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: <> Motion Sensing </>,
          text: (
            <>

              we merge AI algorithms with motion sensors, enabling
              high-precision motion detection. Our model training and
              optimization ensure smooth integration for real-time and reliable
              motion sensing capabilities.
            </>
          ),
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: <> Web Conferencing </>,
          text: "At BitsWits, we use smart technology to make online meetings better. Our system has features like automatic note-taking, language translation, and clear video, making virtual meetings easier and more effective.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags & OG Tags Added Through Route */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <ServicesBanner
        subtitle="BitsWits is a Home to All Your Demands Regarding"
        title={<> Artificial Intelligence Development and Advancement </>}
        text={
          <>
            BitsWits welcomes you to the one-stop destination for innovative
            mobile applications development with artificial intelligence. Our
            skilled developers and designers provide forward-thinking solutions
            for all your AI development and integration requirements.
          </>
        }
        BannerImage={BannerImage}
        assignClass="ai"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="ai"
          subtitle={<> Go an Extra Mile with </>}
          title0={<> Our Advanced </>}
          title={<> Artificial Intelligence Development </>}
          title1={<> Services </>}
          appContent={[]}
          appContent1={[
            {
              title: "Smart Systems",
              text: "We create clever systems that can do tasks automatically for your business, can understand information, learn from it, and help make your work easier and faster.",
              appclass: "app",
            },
            {
              title: <> Gesture Recognition </>,
              text: (
                <>

                  BitsWits specializes in creating technology that can recognize
                  and respond to your movements. Our systems understand gestures
                  like hand waves or nods, allowing you to control devices
                  effortlessly through simple motions.
                </>
              ),
              appclass: "app1",
            },
            {
              title: <> Facial Recognition </>,
              text: "Hire us to build technology that can recognize your face, just like a key unlocks a door. Our systems use your unique features to grant access and make interactions easier and more secure.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Location Tracking",
              text: "We develop location tracking technology using intelligent AI algorithms to monitor the whereabouts of people or things. Our system predicts movement patterns, assisting businesses in effectively managing their assets and making informed decisions.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: <> Motion Sensing </>,
              text: (
                <>

                  we merge AI algorithms with motion sensors, enabling
                  high-precision motion detection. Our model training and
                  optimization ensure smooth integration for real-time and
                  reliable motion sensing capabilities.
                </>
              ),
              appclass: "app4",
            },
            {
              title: <> Web Conferencing </>,
              text: "At BitsWits, we use smart technology to make online meetings better. Our system has features like automatic note-taking, language translation, and clear video, making virtual meetings easier and more effective.",
              appclass: "app5",
            },
          ]}
          appContent4={[]}
          appContent5={[]}
          appContent6={[]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our Artificial Intelligence App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
  streamlined process for app development is <br /> designed to be
  transparent and collaborative, ensuring your vision comes to life
  exactly as you imagined."
      />

      <Justbuildit />
      <LpChoose transform="transform" />
      <ServicesPortfolio
        title={
          <>
            Showcasing Our <span className="newfycolr">
              Creative Vision
            </span>
          </>
        }
      />
      <Newsuccess
        assignClass="spacing"
        subtitle="Ready for Success?"
        maintitle={
          <>
            Accelerate Your Growth With <br /> AI Solutions
          </>
        }
        successSteps={[
          {
            number: "01",
            title: "Consult Our Specialists",
            text: "Reach out to our specialists without any hesitation via email or call to attain a free consultation.",
            buttonText: "Connect Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "02",
            title: (
              <>

                Request a <br /> Quote
              </>
            ),
            text: "Get a detailed cost breakdown for your app development project.",
            buttonText: "Chat Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "03",
            title: "Build An MVP",
            text: "Start your app development journey with no-obligation consultation via email and phone.",
            buttonText: "Call Now!",
            link: "tel:+18335006007",
          },
        ]}
      />
      <Technologieswe />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question: "What AI services does BitsWits offer?",
            answer: (
              <>

                BitsWits provides AI consulting, custom AI solutions
                development, and AI integration services.
              </>
            ),
          },
          {
            question:
              "How long does AI development with BitsWits usually take?",
            answer: (
              <>

                The timeline depends on the project's complexity but typically
                ranges from a few months to a year.
              </>
            ),
          },
          {
            question:
              "What kind of support does BitsWits offer post-deployment?",
            answer: (
              <>

                BitsWits provides ongoing support and maintenance to ensure the
                smooth functioning and optimal performance of AI solutions.
              </>
            ),
          },
          {
            question:
              "What industries does BitsWits specialize in for AI development?",
            answer: (
              <>

                BitsWits has extensive experience in providing AI solutions for
                industries such as healthcare, finance, retail, and
                manufacturing, among others.
              </>
            ),
          },
          {
            question:
              "Does BitsWits offer AI maintenance services after the project is completed?",
            answer: (
              <>

                Yes, BitsWits provides ongoing AI maintenance services,
                including updates and optimizations for continued performance.
              </>
            ),
          },
          {
            question:
              "Can BitsWits help in the integration of AI-driven analytics for data insights?",
            answer: (
              <>

                Absolutely, BitsWits specializes in integrating AI-driven
                analytics to provide valuable data insights for informed
                decision-making and improved business strategies.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}