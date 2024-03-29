"use client"
import { useEffect, useState } from "react";
// CSS
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
import Bannerlpfinal from "../../components/Bannerlpfinal";
import Awardsrecognition from "../../components/Awardsrecognition";
import Nothinglp2 from "../../components/Nothinglp2";
import Innovate from "../../components/Innovate";
import Technologieslp from "../../components/Technologieslp";
import Globallplp6 from "../../components/Globallplp6";
import ProjectProcesslpfinal6 from "../../components/ProjectProcesslpfinal6";
import Justbuilditlp from "../../components/Justbuilditlp";
import Transformideaslp6 from "../../components/Transformideaslp6";
import Formnewlp2lp6 from "../../components/Formnewlp2lp6";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";
import Expertapplp6 from "../../components/Expertapplp6";

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
      <Bannerlpfinal newHomeBgprops="newHomeBg" />
      {showFolds &&
        <>
          <Awardsrecognition />
          <Nothinglp2 Nothing="lp6final" />
          <Innovate />
          <Expertapplp6 expertapp="expertapp" />
          <ProjectProcesslpfinal6 processclass="process1" />
          <Transformideaslp6 transform="transform" />
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
            slide="slide2lp6"
          />
          <Globallplp6 />
          <Formnewlp2lp6 />
          <NewFaqslp />
          <HomeLocationlp />
        </>
      }
    </>
  );
}
