import React from 'react';

const ScanningLine = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <div className="w-[1px] h-full bg-neon-cyan/20 absolute shadow-[0_0_15px_rgba(0,240,255,0.3)] animate-scan blur-[1px]"></div>

            <style jsx>{`
                @keyframes scan {
                    0% { left: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 100%; opacity: 0; }
                }
                .animate-scan {
                    animation: scan 8s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default ScanningLine;
