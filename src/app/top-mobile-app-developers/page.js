"use client"

import React, { useEffect, useState } from "react";
// Components
import Appmaking from "../../components/Appmaking";
import Homeslider from "../../components/Homeslider";
import ProjectProcesshome from "../../components/ProjectProcesshome";
import Creative from "../../components/Creative";
import Expertapphome from "../../components/Expertapphome";
import Thrthy from "../../components/Thrthy";
import Everyone from "../../components/Everyone";
import Testimonailslider from "../../components/Testimonailslider";
import Startaproject from "../../components/Startaproject";
import Formnewlpnewhome from "../../components/Formnewlpnewhome";
import SupersaleStiky from "../../components/SupersaleStiky";

export default function Home() {
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Appmaking />
      {showFolds &&
        <>
          <Homeslider />
          <ProjectProcesshome processclass="process" />
          <Creative />
          <Expertapphome expertapp="expertapp" />
          <Thrthy />
          <Everyone />
          <Testimonailslider />
          <Startaproject />
          <Formnewlpnewhome />
          <SupersaleStiky />
        </>
      }
    </>
  );
}
