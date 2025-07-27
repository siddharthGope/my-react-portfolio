import React from "react";
import Card from "./cards/Card";

function Contact() {

    const contactInfo = [
        { title: 'LinkedIn', image: 'linkedin.png', link: '', height: 70, width: 70 },
        { title: 'Email', image: 'mail.png', link: '', height: 70, width: 70 },
        { title: 'GitHub', image: 'github-sign.png', link: '', height: 70, width: 70 },
        { title: 'Download CV', image: 'download.png', link: '', height: 70, width: 70 }
    ]

    return (
        <section className="bg-gradient-to-br from-[var(--tenth-color)] via-[var(--second-color)] to-[var(--eleventh-color)] flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-8 text-[var(--thirteen-color)] text-center">
                Connect with me
            </h2>
            <p className="text-lg text-white  mb-10 text-center">
                Let's connect and build something amazing together
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 items-center">
                {contactInfo.map((skill, index) => (
                    <Card key={index} {...skill} contactCard="contactCard" />
                ))}
            </div>
        </section>
    );
}

export default Contact;
