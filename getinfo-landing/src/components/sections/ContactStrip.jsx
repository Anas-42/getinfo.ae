// src/components/sections/ContactStrip.jsx
import React from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import { Phone, Mail } from "../ui/Icons";

function Item({icon,title,text}){
  return (
    <div className="flex items-center gap-4 px-6 sm:px-8 py-6 sm:py-8">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-teal grid place-items-center bg-white/10">{icon}</div>
      <div>
        <div className="font-extrabold">{title}</div>
        <div className="text-sm text-black/80">{text}</div>
      </div>
    </div>
  );
}

export default function ContactStrip(){
  return (
    <section id="contact">
      <Container>
        <Card className="mt-6 lg:mt-10 rounded-[32px] sm:rounded-[56px] overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <Item icon={<Phone/>} title="Give Us a Call" text="+971 0501088466"/>
            <Item icon={<Mail/>}  title="Send Us a Message" text="info@getinfo.ae"/>
          </div>
        </Card>
      </Container>
    </section>
  );
}
