import React from "react";
import Card from "./cards/Card";
import DownloadButton from "./buttons/DownloadButton";


function Contact() {

    const contactInfo = [
        { title: 'LinkedIn', image: 'linkedin.png', link: 'https://www.linkedin.com/in/siddharth-gope-software-developer/', height: 70, width: 70, download: false },
        { title: 'Email', image: 'mail.png', link: 'mailto:gsiddharth.1601@gmail.com', height: 70, width: 70, download: false },
        { title: 'GitHub', image: 'github-sign.png', link: 'https://github.com/siddharthGope', height: 70, width: 70, download: false },
        { title: 'Download CV', image: 'download.png', download: true, height: 70, width: 70 }
    ]

    return (
        <section id="contact" className="bg-gradient-to-br from-[var(--tenth-color)] via-[var(--second-color)] to-[var(--eleventh-color)] flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-8 text-[var(--thirteen-color)] text-center">
                Connect with me
            </h2>
            <p className="text-lg text-white  mb-10 text-center">
                Let's connect and build something amazing together
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 items-center">
                {contactInfo.map((info, index) => (
                    <Card key={index} {...info} contactCard="contactCard" />
                ))}
                {/* <DownloadButton /> */}
            </div>
        </section>
    );
}

export default Contact;
