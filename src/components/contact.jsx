import { MapPin, Mail, Phone, Facebook } from "lucide-react";
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoCall, IoMailSharp } from "react-icons/io5";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkedAlt } from "react-icons/fa";

const contactInfo = [
    {
        icon: MapPin,
        label: "Address",
        value: "Hasanganj, Jamalpur, Bihar 811214"
    },
    {
        icon: Mail,
        label: "Email",
        value: "newnaturaloilcorporation@gmail.com"
    },
    {
        icon: Mail,
        label: "Alternative Email",
        value: "rsnpetroleum@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "09123 456789"
    }
];

const socialMedia = [
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61575884859111&mibextid=rS40aB7S9Ucbxw6v", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/newnaturaloilcorporation?igsh=MXU2MTZzanFqNGkyZg==", label: "Instagram" },
    // { icon: IoCall, href: "tel:+09123456789", label: "Call" },
    // { icon: IoMailSharp, href: "mailto:newnaturaloilcorporation@gmail.com", label: "Mail" },
    { icon: IoLogoWhatsapp, href: "https://wa.me/9430241258", label: "WhatsApp" }
];

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');
    const PUBLIC_KEY = import.meta.env.VITE_CONTACT_PUBLIC_KEY;
    const SERVICE_KEY = import.meta.env.VITE_CONTACT_SERVICE_KEY;
    const TEMPLATE_KEY = import.meta.env.VITE_CONTACT_TEMPLATE_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs
            .sendForm(
                SERVICE_KEY,
                TEMPLATE_KEY,
                form.current,
                {
                    publicKey: PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setStatus('✅ Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    setStatus('❌ Failed to send. Please try again.');
                    console.error('FAILED...', error.text);
                }
            );
    };

    const handleMessage = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject?.value || "";
        const message = form.message.value;

        const phoneNumber = "9430241258"; // 🔴 Your WhatsApp Business number

        const whatsappMessage = `
*NEW NATURAL OIL CORPORATION*

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}\n` : ""}
Message:
${message}
  `;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");
    };


    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Contact Us</h2>
                </div> */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Get in Touch</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Have a question or ready to start your project? Contact us today and let's build something great together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div>

                        <h3 className="text-3xl mb-4 mt-4 text-center">Contact Information</h3>
                        <p className="text-gray-600 mb-8 text-center">
                            Fill up the form and our team will get to you within 24 hours.
                        </p>

                        <div className="space-y-6 mb-8">
                            {/* {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <info.icon className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm mb-1">{info.label}</p>
                                        <p className="text-gray-900">{info.value}</p>
                                    </div>
                                </div>
                            ))} */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Office Address</h4>
                                    <p className="text-gray-600">
                                        Jangli Asthan, Hasanganj English,<br />
                                        Jamalpur, Munger, Bihar 811214
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                                    <div className="space-y-1">
                                        <a href="tel:9709744468" className="text-gray-600 hover:text-emerald-600 transition-colors block">
                                            +91 9709744468
                                        </a>
                                        <a href="tel:7903649024" className="text-gray-600 hover:text-emerald-600 transition-colors block">
                                            +91 7903649024
                                        </a>
                                        <a href="tel:9430241258" className="text-gray-600 hover:text-emerald-600 transition-colors block">
                                            +91 9430241258
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                                    <div className="space-y-1">
                                        <a
                                            href="mailto:newnaturaloilcorporation@gmail.com"
                                            className="text-gray-600 hover:text-emerald-600 transition-colors block"
                                        >
                                            newnaturaloilcorporation@gmail.com
                                        </a>
                                        <a
                                            href="mailto:rsnpetroleum@gmail.com"
                                            className="text-gray-600 hover:text-emerald-600 transition-colors block"
                                        >
                                            rsnpetroleum@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div>

                            <p className="text-gray-600 mb-4">Connect with us:</p>
                            <div className="flex gap-4">
                                {socialMedia.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label} target="_blank"
                                        className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors"
                                    >
                                        <social.icon className="text-white" size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        {status &&
                            <p className="text-center block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-4 mx-auto">{status}</p>
                        }

                        <form ref={form} className="space-y-6" onSubmit={handleMessage}>
                            <div className="block text-sm mb-2 text-gray-700">
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                        required
                                    />
                                </div>

                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="title" className="block text-sm mb-2 text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Question about Pricing"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"

                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Your message... (Please add your contact information)"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg transition-colors"
                            >
                                Chat on WhatsApp
                            </button>
                        </form>

                    </div>
                </div>


            </div>
            <div className="bg-white mt-10">
                <h2 className="text-3xl md:text-4xl mb-4 text-center pt-15" >Find Us Here</h2>
                <div style={{ maxWidth: '800px' }} className='m-auto p-4'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.835958458258!2d86.4687927777134!3d25.343285077617303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1efa878aaed89%3A0xed7f96ed70b195b5!2sNew%20Natural%20oil%20corporation!5e0!3m2!1sen!2sin!4v1762890115273!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '16px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}