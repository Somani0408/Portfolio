import React, { useState } from 'react';
import TerminalIntro from './TerminalIntro';
import CommandCenter from '../pages/CommandCenter';
import GlitchTransition from './system/GlitchTransition';
import MainPortfolioApp from './MainPortfolioApp'; // To be created

const SystemEntryController = () => {
    const [stage, setStage] = useState('boot'); // stages: 'boot', 'command', 'glitch', 'main'

    if (stage === 'boot') {
        return <TerminalIntro onComplete={() => setStage('command')} />;
    }

    if (stage === 'command') {
        return <CommandCenter onEnter={() => setStage('glitch')} />;
    }

    if (stage === 'glitch') {
        return <GlitchTransition onComplete={() => setStage('main')} />;
    }

    // stage === 'main'
    return <MainPortfolioApp />;
};

export default SystemEntryController;
