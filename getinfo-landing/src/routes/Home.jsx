import React from "react";
import Hero from "../components/sections/Hero";
import ContactStrip from "../components/sections/ContactStrip";
import IntroAbout from "../components/sections/IntroAbout";
import Services from "../components/sections/Services";
import TechStrip from "../components/sections/TechStrip";
import Timeline from "../components/sections/Timeline";
import JoinForm from "../components/sections/JoinForm";

export default function Home(){
  return (<><Hero/><ContactStrip/><IntroAbout/><Services/><TechStrip/><Timeline/><JoinForm/></>);
}
