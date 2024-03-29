"use client"
import React, { useEffect, useState } from "react";
//components
import ServicesBanner from "../../components/ServicesBanner";
import Dedicatedweb from "../../components/Dedicatedweb";
import Justbuildit from "../../components/Justbuildit";
import ServicesPortfolio from "../../components/ServicesPortfolio";
import Newsuccess from "../../components/NewMblSuccess";
import Technologieswe from "../../components/Technologieswe";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import Formnewlp from "../../components/Formnewlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";

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
      <ServicesBanner
        subtitle="Top-Notch Web App Development Company"
        title={<> Where Imagination Meets Creativity </>}
        text={
          <>
            BitsWits is a future-forward, human-centered, and client-focused web
            development company that revolutionizes the way businesses appear on
            the online paradigm. We build dynamic, multi-purpose, secure, and
            highly-performing websites that help brands gain online traction in
            no time.
          </>
        }
        video={
          <video
            autoPlay
            muted
            src="../../bannerVideos/webapp.mp4"
            className="w-75"
          ></video>
        }
        assignClass="web"
      />
      {showFolds &&
        <>
          <People People="people" />
          <HomeBannerSliderlp />
          <LpForm addresClass="iosclass" />
          <Nothing Nothing="nothingLp6" />
          <Dedicatedweb />
          <WeworkLp wework="weworkLpnewhomefy" />
          <StartupsLp startups="startups" />
          <ProjectProcess
            processclass="processLp6"
            title="Explore Our Web App Development Journey"
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
            subtitle="Ready For Success?"
            maintitle="Brace Yourself for What Happens Next"
            successSteps={[
              {
                number: "01",
                title: "Talk To Our Experts",
                text: "Contact us without obligation by email or phone and secure your free consultation.",
                buttonText: "Connect Now!",
                link: "javascript:$zopim.livechat.window.show();",
              },
              {
                number: "02",
                title: "Get A Quote",
                text: "Get an exact cost breakdown structure of your app.",
                buttonText: "Chat Now!",
                link: "javascript:$zopim.livechat.window.show();",
              },
              {
                number: "03",
                title: "Build An MVP",
                text: "Start your app development journey with no-obligation consultation via email and phone.",
                buttonText: "Call Now!",
                link: "tel:+8335006007",
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
                question: "What is a web application?",
                answer: (
                  <>
                    A web application is a software program that runs in a web
                    browser. It is accessed over the internet and provides
                    interactive and dynamic content to users.
                  </>
                ),
              },
              {
                question:
                  "What are the key technologies used in web application development?",
                answer: (
                  <>
                    Key technologies include HTML (Hypertext Markup Language), CSS
                    (Cascading Style Sheets), JavaScript, and server-side languages
                    like Python, Ruby, Java, PHP, and others. Frameworks and
                    libraries like React, Angular, and Node.js are also commonly
                    used.
                  </>
                ),
              },
              {
                question:
                  "What is the difference between a website and a web application?",
                answer: (
                  <>
                    A website typically provides static content for informational
                    purposes. A web application, on the other hand, allows users to
                    perform tasks, interact with databases, and perform various
                    functions.
                  </>
                ),
              },
              {
                question:
                  "What is the front-end and back-end of a web application?",
                answer: (
                  <>
                    The front-end refers to the user interface and user experience
                    of a web application. It's what the user sees and interacts
                    with. The back-end refers to the server, application logic, and
                    database that support the front-end.
                  </>
                ),
              },
              {
                question: "What is responsive web design?",
                answer: (
                  <>
                    Responsive web design is an approach to designing web pages that
                    ensures they look good and function well on various devices and
                    screen sizes, from desktop computers to mobile phones.
                  </>
                ),
              },
              {
                question: "What is a Content Management System (CMS)?",
                answer: (
                  <>
                    A CMS is a software platform that allows users to create,
                    manage, and update digital content on a website without the need
                    for technical expertise. Examples include WordPress, Drupal, and
                    Joomla.
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
