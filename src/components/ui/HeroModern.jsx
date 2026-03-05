import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedProfile from './AnimatedProfile';

const HeroModern = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex flex-col gap-8 flex-1 w-full lg:w-1/2">
                <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">Open to Work</span>
                    </div>

                    <h1 className="text-slate-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        <span className="text-primary block mb-2 text-xl md:text-2xl font-medium tracking-widest uppercase font-mono">&lt;Hello_World /&gt;</span>
                        I'm Harshit Somani
                    </h1>

                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full my-2"></div>

                    <div className="w-fit">
                        <div className="typewriter">
                            <h2 className="text-slate-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed font-mono pr-1">
                                SOC Analyst | Penetration Tester | Red Teamer
                            </h2>
                        </div>
                    </div>

                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mt-2">
                        Protecting digital assets with an offensive security mindset and full-stack expertise. specialized in vulnerability assessment, incident response, and securing complex network infrastructures against advanced threats.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-2">
                    <button
                        onClick={() => navigate('/projects')}
                        className="group flex min-w-[140px] cursor-pointer items-center justify-center gap-3 rounded-lg h-12 px-6 bg-transparent text-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.4)] text-base font-extrabold tracking-wide transition-all hover:bg-cyan-300 hover:text-slate-900 hover:shadow-[0_0_30px_rgba(103,232,249,0.8)] border-2 border-cyan-300"
                    >
                        <span>View Projects</span>
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm font-bold">arrow_forward</span>
                    </button>

                    <button
                        onClick={() => navigate('/contact')}
                        className="group flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-secondary-dark border border-border-dark text-slate-100 text-base font-bold tracking-wide transition-all hover:border-primary hover:text-primary"
                    >
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                        <span>Contact Me</span>
                    </button>
                </div>

                <div className="flex flex-wrap gap-6 pt-6 border-t border-border-dark/50 text-slate-500 text-sm font-mono">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">security</span>
                        <span>Offensive Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">bug_report</span>
                        <span>Malware Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">terminal</span>
                        <span>Python &amp; Bash</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center flex-1 w-full lg:w-1/2 relative">
                <AnimatedProfile />
            </div>
        </div>
    );
};

export default HeroModern;
