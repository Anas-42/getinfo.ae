// src/components/sections/JoinForm.jsx
import React from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import { Button } from "../ui/Button";

function Input({ placeholder, type = "text", name, required=false }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/60
                 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--gi-teal-500)]"
    />
  );
}

function Textarea({ placeholder, rows = 6, name, required=false }) {
  return (
    <textarea
      rows={rows}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-5 py-3 rounded-3xl bg-white/10 text-white placeholder-white/60
                 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--gi-teal-500)] resize-y"
    />
  );
}

export default function JoinForm() {
  const toEmail = "info@getinfo.ae"; // <--  email here

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const first = fd.get("firstName") || "";
    const last  = fd.get("lastName")  || "";
    const email = fd.get("email")     || "";
    const phone = fd.get("phone")     || "";
    const subj  = fd.get("subject")   || "New inquiry from GetInfo.ae";
    const msg   = fd.get("message")   || "";

    const subject = encodeURIComponent(subj);
    const body = encodeURIComponent(
`Name: ${first} ${last}
Email: ${email}
Phone: ${phone}

Message:
${msg}

— sent from getinfo.ae`
    );

    // Open user's mail client with prefilled email
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="join" className="py-16 sm:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-[28px] p-[2px] bg-gradient-to-b from-[var(--gi-teal-300)] to-[var(--gi-teal-700)] shadow-card">
          <Card className="rounded-[26px] bg-black/35 px-6 sm:px-10 py-10 sm:py-12">
            <div className="text-center space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold">JOIN GetInfo.ae</h3>
              <div className="text-white/80">Let’s Quickstart Your GetInfo Experience</div>
            </div>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
              <Input name="firstName" placeholder="First Name" required />
              <Input name="lastName" placeholder="Last Name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="phone" placeholder="Phone Number" />
              <div className="md:col-span-2">
                <Input name="subject" placeholder="Subject" />
              </div>
              <div className="md:col-span-2">
                <Textarea name="message" placeholder="Tell Us Something..." required />
              </div>

              <div className="md:col-span-2 flex justify-center pt-2">
                <Button size="lg" className="w-full md:w-auto gi-btn shine">
                  SEND EMAIL
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
