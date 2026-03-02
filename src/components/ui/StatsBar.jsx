import React from 'react';

const StatsBar = () => {
    return (
        <div className="w-full border-y border-border-dark bg-secondary-dark/30 backdrop-blur-sm relative z-10">
            <div className="layout-content-container max-w-[1200px] mx-auto px-6 md:px-10 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-white">4+</span>
                        <span className="text-sm text-slate-400 font-mono">Years Experience</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-white">50+</span>
                        <span className="text-sm text-slate-400 font-mono">Projects Completed</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-white">20+</span>
                        <span className="text-sm text-slate-400 font-mono">Vulnerabilities Found</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-white">100%</span>
                        <span className="text-sm text-slate-400 font-mono">Client Satisfaction</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
