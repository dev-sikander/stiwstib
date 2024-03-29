"use client"
import React, { useState, useEffect } from "react";
// css
import stylesjust from "@/styles/Justbuilditlp.module.css";
// componets
import Bannerdubai from "../../components/Bannerdubai";
import HomeLocation from "../../components/HomeLocation";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm from "../../components/LpFormpropsdubai";
import Nothing from "../../components/Nothing";
import Expertappdubai from "../../components/Expertappdubai";
import Technologieslp from "../../components/Technologieslp";
import Justbuilditlp from "../../components/Justbuilditlp";
import Globallplp6 from "../../components/Globallplp6";
import Formnewlpdubai from "../../components/Formnewlpdubai";
import ServicesFaqsdubai from "../../components/ServicesFaqsdubai";
import Tale from "../../components/Tale";
import Technologieslpdubai from "../../components/Technologieslpdubai";
import LpChoosedubai from "../../components/LpChoosedubai";
import LpChoosedubaitower from "../../components/LpChoosedubaitower";
import LpChoosedubaiship from "../../components/LpChoosedubaiship";
import Nextproject2dubai from "../../components/Nextproject2dubai";
import Succes from "../../components/Succes";
import Experiance from "../../components/Experiance";
import Transformative from "../../components/Transformative";
import ServicesFaqsdubaimobile from "../../components/ServicesFaqsdubaimobile";
import Process from "../../components/Process";
//Images 
import appEight1 from "/public/dubailp/faqs/andriod.png";
import appEight2 from "/public/dubailp/faqs/2.png";
import appEight3 from "/public/dubailp/faqs/3.png";
import appEight4 from "/public/dubailp/faqs/4.png";

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
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Bannerdubai newHomeBgprops="newHomeBg" />
      {showFolds &&
        <>
          <People People="people" />
          <HomeBannerSliderlp />
          <LpForm
            addresClass="iosclass"
            heading={`BitsWits, a mobile app development company in UAE, specializes in empowering startups and established brands with advanced mobile app development solutions. Recognized on platforms like Zawya and Lovin Dubai, BitsWits is a premier end-to-end solution provider for mobile app development solutions. `}
          />
          <Nothing Nothing="nothingLphomefy" />
          <ServicesFaqsdubaimobile
            faqsData={[
              {
                question: "Leading the Charge in Android App Development in Dubai",
                // ques2: "Bitswits' Android mobile app development in Duba",
                answer: (
                  <>
                    BitsWits stands proudly as the vanguard of Dubai's mobile app development industry, where we are dedicated to revolutionizing the very essence of mobile app development. Our exceptional team of Android app developers in Dubai excels in designing Android applications that transcend the ordinary. At BitsWits, we mobilize the innate potential of Android's open-source nature and channel our expertise to engineer thorough functionalities, innovative features, and unparalleled user experiences.
                    <br /> <br />
                    We carefully plan our approach to make sure your mobile app not only does well but also stands out in a competitive industry. Our advanced Android app development can improve your brand and connect better with customers. Let us turn your app idea into something that can really help your business.
                  </>
                ),
                imggodd: appEight1,
                hiteclass: "class1",
                btnText: "Get in touch with BitsWits today and let the innovation begin!"
              },
              {
                question: "Pioneering iPhone App Development in Dubai",
                // ques2: "Develop an iPhone Application ",
                answer: (
                  <>
                    BitsWits is the top choice for iPhone app development in Dubai, offering an exceptional experience. Our team of iPhone app developers in Dubai are armed with an in-depth understanding of Apple's innovative platform. They skillfully blend emerging and conventional technologies to design revolutionary iPhone applications that make a mark.
                    <br /> <br />
                    At BitsWits, we are driven to empower businesses to excel in their markets by delivering exceptional application-based solutions. Our iOS app developers in Dubai are not just experts; they are visionaries ready to create apps that drive revenue, unlock new opportunities, and captivate and retain customers.
                  </>
                ),
                imggodd: appEight2,
                hiteclass: "class2",
                btnText: "Advance Your App Vision with BitsWits Today!"
              },
              {
                question:
                  "Experience Top-Tier Flutter App Development in Dubai",
                // ques2: "Develop Your Flutter Mobile Application ",
                answer: (
                  <>
                    BitsWits is a Dubai-based company that specializes in Flutter app development. Our team of expert Flutter app developers in Dubai is skilled in creating seamless apps for iOS and Android platforms. With years of experience and a deep understanding of Flutter, we ensure your app meets or exceeds your expectations.
                    <br /> <br />
                    At BitsWits, we bring years of experience and a deep understanding of Flutter to the table. By choosing Flutter, you can benefit from cost-saving advantages and a consistent brand experience across different devices. BitsWits is available to startups and established brands looking to expand their mobile presence. Our flutter app developers in Dubai are committed to transforming your ideas into stunning Flutter apps that make an impact.
                  </>
                ),
                imggodd: appEight3,
                hiteclass: "class3",
                btnText: "Let us get started for impactful flutter apps now!"
              },
              {
                question:
                  "Empowering Web Experiences with Progressive Web Applications in Dubai",
                // ques2: "Develop Your PWA Application ",
                answer: (
                  <>
                    Experience the convenience, accessibility, and usability of Progressive Web Applications (PWAs) with BitsWits, your reliable companion in PWA development in Dubai. Our team of progressive web application developers in Dubai is committed to delivering seamless and engaging web experiences that instantly captivate your audience.
                    <br /> <br />
                    Progressive web application development offers a simpler and cost-effective alternative to native app development, providing a quicker path to market. While it may have some limitations in terms of functionality and features compared to native apps, the focus is on providing an excellent user experience that is accessible instantly through PWAs. Let us create web experiences that leave a lasting impact.
                  </>
                ),
                imggodd: appEight4,
                hiteclass: "class4",
                btnText: "Contact Us to Embrace PWAs Today!"
              },

            ]}
          />
          <Process tale="tale" />
          <Tale tale="tale" />
          <Technologieslpdubai />
          <LpChoosedubai transform="transformlp" />
          <Nextproject2dubai />
          <Succes tale="tale" />
          <Experiance tale="tale" />
          <LpChoosedubaitower transform="transformlp" />
          <Transformative tale="tale" />
          <LpChoosedubaiship transform="transformlp" />
          <Expertappdubai expertapp="expertapp" />
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
          <Formnewlpdubai />
          <ServicesFaqsdubai
            faqsData={[
              {
                question:
                  "What services does BitsWits offer in Dubai?",
                answer: (
                  <>
                    At BitsWits, we provide a wide range of services, including mobile app development, Android app development, iOS app development, Flutter app development, and PWA development, tailored to meet your unique business needs in Dubai.
                  </>
                ),
              },
              {
                question: "What sets BitsWits apart from other app development companies in Dubai?",
                answer: (
                  <>
                    Our expertise, dedication to innovation, and commitment to delivering high-quality mobile applications make us stand out. We focus on data-driven strategies, ensuring that your app becomes a strategic asset contributing to your business's success.
                  </>
                ),
              },
              {
                question:
                  "How experienced is BitsWits in mobile app development in Dubai?",
                answer: (
                  <>
                    We have a strong track record of creating growth-driven apps for startups and established brands in Dubai. With years of experience, we understand the local market dynamics and how to navigate them effectively.
                  </>
                ),
              },
              {
                question:
                  "Can you provide examples of successful projects in Dubai?",
                answer: (
                  <>
                    Absolutely! We've worked on numerous projects across various industries in Dubai. From e-commerce and healthcare to tourism and finance, our portfolio showcases our ability to deliver outstanding mobile solutions that drive success.
                  </>
                ),
              },
              {
                question:
                  "What is the typical timeline for app development with BitsWits in Dubai?",
                answer: (
                  <>
                    The timeline varies depending on the complexity of your project. However, we follow an efficient development process that emphasizes quality and timeliness, ensuring that your app is delivered within a reasonable timeframe.
                  </>
                ),
              },
              {
                question:
                  "How does BitsWits ensure data security and privacy in mobile app development?",
                answer: (
                  <>
                    Data security is a top priority for us. We implement advanced encryption and follow industry best practices to protect your data from cyber threats and unauthorized access, ensuring the utmost privacy and compliance.
                  </>
                ),
              },
              {
                question:
                  "What industries do you serve in Dubai?",
                answer: (
                  <>
                    We serve a wide range of industries in Dubai, including but not limited to e-commerce, healthcare, tourism, finance, and more. Our adaptable solutions can meet the unique needs of various sectors.
                  </>
                ),
              },
              {
                question:
                  "How can I get started with BitsWits for my mobile app project in Dubai?",
                answer: (
                  <>
                    Getting started is easy! Simply reach out to our team, and we'll schedule a consultation to discuss your project's requirements, and goals, and how we can bring your app vision to life in Dubai.
                  </>
                ),
              },
              {
                question:
                  "Is BitsWits committed to ongoing support and maintenance after the app is launched?",
                answer: (
                  <>
                    Yes, we offer ongoing support and maintenance services to ensure your app continues to perform optimally. We're here to assist with updates, bug fixes, and any enhancements you may require.
                  </>
                ),
              },
              {
                question:
                  "Can I expect a dedicated project manager for my app development project in Dubai?",
                answer: (
                  <>
                    Absolutely! We provide a dedicated project manager who will serve as your main point of contact throughout the development process, ensuring clear communication and efficient project management.
                  </>
                ),
              },

            ]}
          />
          <HomeLocation />
        </>
      }
    </>
  );
}
