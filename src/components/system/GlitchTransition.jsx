import React, { useState, useEffect } from 'react';

const GlitchTransition = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    // 10 second timer logic
    useEffect(() => {
        // Fast progress updates for realistic terminal loading effect
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Random increments to simulate processing
                return p + (Math.random() * 3);
            });
        }, 150);

        // Exact 10 seconds exit
        const timer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 10000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] bg-black text-primary font-mono overflow-hidden flex flex-col p-4 md:p-10 select-none">
            {/* Severe CSS noise/glitch overlays */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] mix-blend-screen"></div>

            {/* Scanlines */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))", backgroundSize: "100% 2px, 3px 100%" }}></div>

            <div className="relative z-20 flex flex-col h-full animate-[shake_1.5s_infinite]">
                <div className="flex justify-between items-center border-b border-primary/30 pb-2 mb-4">
                    <div className="text-xl font-bold tracking-widest text-red-500 animate-pulse mix-blend-screen" style={{ textShadow: "2px 0 0 rgba(0,255,255,0.5), -2px 0 0 rgba(255,0,0,0.5)" }}>
                        SYSTEM_OVERRIDE_INITIATED
                    </div>
                    <div className="text-sm">ERR_CODE: {Math.floor(Math.random() * 9999)}</div>
                </div>

                <div className="flex-1 flex flex-col gap-2 overflow-hidden">
                    <div className="text-xl md:text-3xl font-black mb-8 animate-pulse text-white mix-blend-screen" style={{ textShadow: "4px 0 0 red, -4px 0 0 cyan" }}>
                        &gt; ACCESSING MAINFRAME...
                    </div>

                    {progress > 10 && <div className="text-green-500 animate-fade-in">&gt; AUTHENTICATION OVERRIDDEN</div>}
                    {progress > 30 && <div className="text-cyan-400 animate-fade-in">&gt; DECRYPTING NEURAL PATHWAYS [████████░░]</div>}
                    {progress > 45 && <div className="text-yellow-400 animate-fade-in">&gt; WARNING: UNAUTHORIZED ACCESS DETECTED</div>}
                    {progress > 60 && <div className="text-green-500 animate-fade-in">&gt; SECONDARY FIREWALL BYPASSED</div>}
                    {progress > 75 && <div className="text-white animate-fade-in">&gt; INITIALIZING SYSTEM INTERFACE...</div>}
                    {progress > 90 && <div className="text-cyan-300 animate-fade-in">&gt; LOADING USER PROFILE: "HS_ROOT"</div>}

                    {/* Random Hex Dump visual filler */}
                    <div className="mt-auto overflow-hidden opacity-30 text-[10px] md:text-sm break-all font-mono leading-none tracking-tighter mix-blend-screen text-red-400">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <span key={i}>
                                {Math.random().toString(16).substr(2, 8).toUpperCase()}
                                {Math.random().toString(16).substr(2, 8).toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Progress bar container */}
                <div className="mt-4 border border-primary/50 relative h-6 w-full max-w-2xl mx-auto overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-primary/20 w-full animate-pulse"></div>
                    <div className="absolute top-0 left-0 h-full bg-primary flex items-center justify-end px-2" style={{ width: `${Math.min(100, progress)}%` }}>
                        <span className="text-black text-xs font-bold">{Math.floor(Math.min(100, progress))}%</span>
                    </div>
                </div>
                <div className="text-center mt-2 text-xs text-red-500 animate-pulse tracking-widest font-black mix-blend-screen" style={{ textShadow: "1px 0 0 cyan, -1px 0 0 red" }}>
                    DO NOT CLOSE CONNECTION
                </div>
            </div>
        </div>
    );
};

export default GlitchTransition;
