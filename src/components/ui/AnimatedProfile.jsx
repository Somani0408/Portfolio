import React from 'react';

const AnimatedProfile = () => {
    return (
        <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 rounded-full border-t-2 border-primary/50 animate-[spin_3s_linear_infinite] transparent"></div>
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-primary/10 blur-3xl rounded-full"></div>

            <div className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-4 border-background-dark shadow-2xl z-10 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent z-20 h-full w-full -translate-y-full group-hover:animate-[ping_2s_linear_infinite]"></div>
                <img
                    alt="Harshit Somani Profile"
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    src="/profile.jpg"
                />
            </div>

            <div className="absolute -right-4 top-10 bg-secondary-dark/90 backdrop-blur border border-primary/30 p-3 rounded-lg shadow-lg hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="flex flex-col text-left">
                        <span className="text-[10px] text-slate-400 uppercase font-mono">System Status</span>
                        <span className="text-xs font-bold text-slate-100 font-mono">SECURE</span>
                    </div>
                </div>
            </div>

            <div className="absolute -left-8 bottom-20 bg-secondary-dark/90 backdrop-blur border border-primary/30 p-3 rounded-lg shadow-lg hidden md:block animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">radar</span>
                    <div className="flex flex-col text-left">
                        <span className="text-[10px] text-slate-400 uppercase font-mono">Threat Level</span>
                        <span className="text-xs font-bold text-slate-100 font-mono">LOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedProfile;
