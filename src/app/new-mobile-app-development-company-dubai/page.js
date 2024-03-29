"use client"
import React, { useEffect, useState } from "react";
// css
import stylesjust from "@/styles/Justbuilditlp.module.css";
// componets
import Bannerdubai from "../../components/Bannerdubainew";
import Processpro from "../../components/Processpro";
import Whowearenew from "../../components/Whowearenew";
import Sound from "../../components/Sound";
import Delivered from "../../components/Delivered";
import HomeBannerSliderlpnew from "../../components/HomeBannerSliderlpnew";
import Expertappdubaiadvanced from "../../components/Expertappdubaiadvanced";
import Justbuilditlpdubai from "../../components/Justbuilditlpdubai";
import Globallplp6dubai from "../../components/Globallplp6dubai";
import ServicesFaqsdubaimobilenew from "../../components/ServicesFaqsdubaimobilenew";
import Faqdubai from "../../components/Faqdubai";
import Technologieslpdubainew from "../../components/Technologieslpdubainew";
import LpChoosedubainew from "../../components/LpChoosedubainew";
import LpChoosedubaishipnewdubai from "../../components/LpChoosedubaishipnewdubai";
import Globalmap from "../../components/Globalmap";
import Transformativedubai from "../../components/Transformativedubai";
import Brand from "../../components/Brand";
import Latestblog from "../../components/Latestblog";
import Bussiness from "../../components/Bussiness";
import Houtondubai from "../../components/Houtondubai";
//Images
import appEight1 from "/public/newdubai/slider/soul.png";
import appEight2 from "/public/dubailp/faqs/2.png";
import appEight3 from "/public/dubailp/faqs/3.png";
import appEight4 from "/public/dubailp/faqs/4.png";
import blog1 from "/public/newdubai/blog1.png"
import blog2 from "/public/newdubai/blog2.png"
import blog3 from "/public/newdubai/blog3.png"

export default function gamedevelopmentcompany() {
  const blogBox = [
    {
      img: blog1,
      title: 'Leading Grocery Delivery Apps Making Waves In Saudi Arabia',
      content: 'Remember Carrying Heavy Bags Of Groceries Under The Sizzling Saudi Sun? Those Days Are Fast Disappearing Into A Memory As The Expedient Rise Of...'
    },
    {
      img: blog2,
      title: 'Detail Overview For Online Shopping App In Saudi Arabia',
      content: 'Online Shopping Apps Have Become A Keystone Of Today’s Retail Business, Transforming The Shopping Experience With Unprecedented Ease And A Wide...'
    },
    {
      img: blog3,
      title: 'How To Develop An Android App: A Complete Guide',
      content: 'There Are Around 2.69 Million Apps For Android Smartphones. Almost Everyone Understands Android Apps, And Many Are Ready To Launch Their Own. But...'
    },
  ];
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
          <HomeBannerSliderlpnew />
          <ServicesFaqsdubaimobilenew
            faqsData={[
              {
                question: "Android App Development In Dubai",
                ques2: "Bitswits' Android mobile app development in Duba",
                answer: (
                  <>
                    Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.
                  </>
                ),
                imggodd: appEight1,
                hiteclass: "class1",
              },
              {
                question: "Iphone App Development In Dubai",
                ques2: "Develop an iPhone Application ",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
                imggodd: appEight2,
                hiteclass: "class2",
              },
              {
                question:
                  "Flutter App Development In Dubai",
                ques2: "Develop Your Flutter Mobile Application ",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
                imggodd: appEight3,
                hiteclass: "class3",
              },
              {
                question:
                  "PWA App Development In Dubai",
                ques2: "Develop Your PWA Application ",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
                imggodd: appEight4,
                hiteclass: "class4",
              },

            ]}
          />
          <Processpro />
          <Bussiness />
          <Whowearenew />
          <Sound />
          <Delivered />
          <Technologieslpdubainew />
          <LpChoosedubainew
            transform="transformlp"
          />
          <Transformativedubai />
          <LpChoosedubaishipnewdubai
            transform="transformlp"
          />
          <Expertappdubaiadvanced expertapp="expertapp" />
          <Justbuilditlpdubai
            title={
              <>
                <h2 className={stylesjust.just}>Just Build It.</h2>
              </>
            }
            para={
              <>
                <h3 className={`black center fw600`}>
                  Design, Develop, and Grow with BitsWits.
                </h3>
              </>
            }
            slide="slide1lp"
          />
          <Globallplp6dubai />
          <Globalmap />
          <Brand />
          <Houtondubai />
          <Faqdubai
            faqsData={[
              {
                question:
                  "How can I launch an app in the UAE?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question: "How much time is required to build a mobile application?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question:
                  "How much does it cost to create an app in Dubai?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question:
                  "What is a mobile app support service, and does Bitswits offer it?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },

            ]}
          />
          <Latestblog blogBox={blogBox} />
        </>
      }
    </>
  );
}
