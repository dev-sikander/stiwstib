"use client"
 
import React from "react";
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
  return (
    <> 
      <Appmaking />
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
  );
}
