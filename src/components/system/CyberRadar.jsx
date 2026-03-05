import React, { useState, useEffect } from 'react';

const CyberRadar = () => {
    const [points, setPoints] = useState([]);

    // Generate random radar points
    useEffect(() => {
        const generatePoint = () => {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 40 + 10; // 10% to 50% radius
            const id = Date.now() + Math.random();
            const types = ['Port Scan', 'Brute Force', 'Malware', 'DDoS', 'Unauthorized Access'];
            const severity = Math.random() > 0.8 ? 'high' : (Math.random() > 0.4 ? 'medium' : 'low');

            setPoints(prev => [...prev.slice(-4), { // Keep max 5 points
                id,
                angle,
                distance,
                type: types[Math.floor(Math.random() * types.length)],
                severity,
                timestamp: new Date().toLocaleTimeString(),
                opacity: 1
            }]);
        };

        const maxInterval = setInterval(generatePoint, 3000);
        return () => clearInterval(maxInterval);
    }, []);

    // Fade points over time
    useEffect(() => {
        const fadeInterval = setInterval(() => {
            setPoints(prev => prev.map(p => ({
                ...p,
                opacity: Math.max(0, p.opacity - 0.05)
            })).filter(p => p.opacity > 0));
        }, 200);
        return () => clearInterval(fadeInterval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 bg-background-dark/80 rounded-xl border border-primary/20 shadow-[0_0_30px_rgba(34,211,238,0.1)] w-full max-w-4xl mx-auto my-12">
            {/* Radar Animation */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/40 bg-black/40 overflow-hidden flex-shrink-0 shadow-[0_0_20px_rgba(0,255,255,0.1)_inset]">
                {/* Radar grid lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[33%] h-[33%] border border-primary/20 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[66%] h-[66%] border border-primary/20 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 w-full h-[1px] bg-primary/20"></div>
                <div className="absolute left-1/2 h-full w-[1px] bg-primary/20"></div>

                {/* Sweeping line */}
                <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]" style={{
                    background: 'conic-gradient(from 0deg, transparent 70%, rgba(34, 211, 238, 0.1) 90%, rgba(34, 211, 238, 0.8) 100%)'
                }}></div>

                {/* Threat Points */}
                {points.map(point => {
                    const x = 50 + point.distance * Math.cos(point.angle);
                    const y = 50 + point.distance * Math.sin(point.angle);
                    const colorClasses =
                        point.severity === 'high' ? 'bg-red-500 shadow-[0_0_10px_red]' :
                            point.severity === 'medium' ? 'bg-yellow-500 shadow-[0_0_10px_yellow]' :
                                'bg-primary shadow-[0_0_10px_cyan]';

                    return (
                        <div
                            key={point.id}
                            className={`absolute w-2 h-2 rounded-full ${colorClasses} transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300`}
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                opacity: point.opacity
                            }}
                        >
                            <div className={`absolute inset-0 w-full h-full rounded-full animate-ping ${colorClasses.split(' ')[0]}`}></div>
                        </div>
                    );
                })}

                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_cyan]"></div>
            </div>

            {/* Threat Logs */}
            <div className="flex-1 w-full flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-primary/30 pb-2">
                    <span className="material-symbols-outlined text-red-500 animate-pulse">radar</span>
                    <h3 className="text-white font-mono tracking-widest uppercase font-bold">Threat Detection</h3>
                </div>

                <div className="flex flex-col gap-2 h-64 overflow-hidden rounded bg-black/30 p-4 border border-white/5 custom-scrollbar">
                    {points.length === 0 && (
                        <div className="text-slate-500 font-mono text-sm text-center mt-10">Monitoring network traffic...</div>
                    )}

                    {[...points].reverse().map(point => (
                        <div key={point.id} className="flex flex-col animate-fade-in border-l-2 pl-2" style={{
                            borderColor: point.severity === 'high' ? 'red' : point.severity === 'medium' ? 'yellow' : 'cyan'
                        }}>
                            <div className="flex justify-between items-center">
                                <span className={`text-xs font-bold uppercase tracking-wider ${point.severity === 'high' ? 'text-red-400' : point.severity === 'medium' ? 'text-yellow-400' : 'text-primary'
                                    }`}>{point.type}</span>
                                <span className="text-[10px] text-slate-500 font-mono">{point.timestamp}</span>
                            </div>
                            <div className="text-xs text-slate-300 font-mono opacity-80">
                                Source: {(Math.random() * 255).toFixed(0)}.{Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}.XXX
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CyberRadar;
