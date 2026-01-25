import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TableOfContents = ({ items }) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <div className="sticky top-32 w-64 hidden xl:block pl-8 border-l border-white/5">
            <h4 className="text-xs font-bold text-text-dim uppercase tracking-wider mb-4">On This Page</h4>
            <nav className="space-y-1">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm py-1 pl-3 border-l-2 transition-all duration-200 ${activeId === item.id
                                ? 'border-neon-cyan text-neon-cyan'
                                : 'border-transparent text-text-secondary hover:text-white'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(item.id);
                        }}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default TableOfContents;
