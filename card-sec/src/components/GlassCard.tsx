import React, { type ReactNode } from 'react';

export interface GlassCardProps {
    theme: 'orange' | 'blue' | 'green';
    title: string;
    description: string;
    linkText: string;
    icon: ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ theme, title, description, linkText, icon }) => {
    return (
        <article className={`card ${theme}`}>
            <div className="glass"></div>
            <div className="depth"></div>

            <div className="card-content">
                <div className="icon-box">
                    {icon}
                </div>

                <h2>{title}</h2>
                <p>{description}</p>
                <a href="#">{linkText}</a>
            </div>
        </article>
    );
};

export default GlassCard;
