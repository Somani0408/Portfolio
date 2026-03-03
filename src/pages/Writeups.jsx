import React, { useEffect } from 'react';
import WriteupCard from '../components/WriteupCard';
import { FiFolder } from 'react-icons/fi';

const Writeups = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const writeups = [
        {
            platform: "TRYHACKME",
            title: "Lazy Admin",
            description: "A step-by-step walkthrough covering enumeration, credential discovery, privilege escalation, and root access.",
            image: "/writeups/lazy-admin-header.png",
            link: "/resources/writeups/tryhackme/lazy-admin"
        },
        {
            platform: "TRYHACKME",
            title: "Blog",
            description: "A step-by-step walkthrough of the TryHackMe Blog room, covering WordPress enumeration, credential attacks, exploitation, and privilege escalation.",
            image: "/writeups/tryhackme/blog.png",
            link: "/writeups/tryhackme/blog.pdf"
        },
        {
            platform: "TRYHACKME",
            title: "U.A Highschool",
            description: "A walkthrough of the U.A High School room, covering web enumeration, steganography, and privilege escalation.",
            image: "/writeups/tryhackme/ua-highschool.png",
            link: "/writeups/tryhackme/ua-highschool.pdf"
        },
        {
            platform: "TRYHACKME",
            title: "Mr Robot CTF",
            description: "Based on the Mr. Robot show, this room involves web exploitation, privilege escalation, and finding three hidden keys.",
            image: "/writeups/tryhackme/mr-robot-ctf.png",
            link: "/writeups/tryhackme/mr-robot-ctf.pdf"
        },
        {
            platform: "TRYHACKME",
            title: "VulnNet Internal",
            description: "A realistic internal pentest involving multiple pivoting steps, Active Directory enumeration, and exploiting internal services.",
            image: "/writeups/tryhackme/vulnnet-internal.png",
            link: "/writeups/tryhackme/vulnnet-internal.pdf"
        },
        {
            platform: "VulnHub",
            title: "DC-1 Walkthrough",
            description: "A beginner-friendly boot-to-root CTF involving Drupal exploitation and standard privilege escalation vectors.",
            image: "/writeups/VulnHub/dc-1.png",
            link: "/resources/writeups/vulnhub/dc-1"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20 pt-10 px-6 xl:px-0">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                    <span className="text-white">MY</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">WRITEUPS</span>
                </h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    A collection of CTF walkthroughs, penetration testing writeups, and security research.
                </p>
            </div>

            {writeups.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {writeups.map((w, idx) => (
                        <WriteupCard key={idx} {...w} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-[50vh] flex-1">
                    <FiFolder className="text-6xl mb-4 opacity-20 text-white" />
                    <h2 className="text-2xl font-bold text-white mb-2">No Writeups Yet</h2>
                    <p className="text-text-secondary">Content for this section is under development.</p>
                </div>
            )}
        </div>
    );
};

export default Writeups;
