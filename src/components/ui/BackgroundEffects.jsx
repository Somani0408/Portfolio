import React from 'react';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03] bg-[size:40px_40px] bg-grid-pattern"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/80 to-background-dark"></div>
        </div>
    );
};

export default BackgroundEffects;
