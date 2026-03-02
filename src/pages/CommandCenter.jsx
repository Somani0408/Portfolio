import React, { useEffect } from 'react';
import SystemHeroInit from '../components/system/SystemHeroInit';
import SystemMetadata from '../components/system/SystemMetadata';
import NeuralNetwork from '../components/system/NeuralNetwork';
import ProjectOps from '../components/system/ProjectOps';
import ArchiveUplink from '../components/system/ArchiveUplink';

const CommandCenter = () => {
    // Scroll to top on mount to ensure a clean visual state
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background-dark overflow-x-hidden selection:bg-primary selection:text-background-dark">
            {/* Global Noise / Film Grain texture applied over the whole stack */}
            <div className="bg-noise"></div>

            <SystemHeroInit />
            <SystemMetadata />
            <NeuralNetwork />
            <ProjectOps />
            <ArchiveUplink />
        </div>
    );
};

export default CommandCenter;
