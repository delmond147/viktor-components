import React from 'react';
import GlassCard from './GlassCard';

const CardSection: React.FC = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="header">
                    <h1>How We Keep You Ahead&reg;</h1>
                    <p>
                        From quick daily updates to deep expert insights, we give you
                        every advantage in the AI revolution.
                    </p>
                    <p>Here&rsquo;s how we deliver on that promise every day.</p>
                </div>

                <div className="cards">
                    <GlassCard
                        theme="orange"
                        title="Daily Newsletter"
                        description="Your shortcut to staying ahead—delivered every morning."
                        linkText="Get Daily Briefs &rarr;"
                        icon={
                            <svg viewBox="0 0 24 24">
                                <path d="M7 8h10" />
                                <path d="M7 12h10" />
                                <path d="M9 16h6" />
                                <path d="M6 4h12v16H6z" />
                                <path d="M9 4v3h6V4" />
                            </svg>
                        }
                    />

                    <GlassCard
                        theme="blue"
                        title="Curated Tools"
                        description="The most powerful AI apps and platforms—tested and reviewed for you."
                        linkText="Find My Tools &rarr;"
                        icon={
                            <svg viewBox="0 0 24 24">
                                <path d="M14.7 6.3a3 3 0 0 0-4 4L4 17v3h3l6.7-6.7a3 3 0 0 0 4-4l-2 2-2-2 2-2z" />
                                <path d="M18 15l3 3" />
                                <path d="M16 17l3 3" />
                            </svg>
                        }
                    />

                    <GlassCard
                        theme="green"
                        title="Expert Insights"
                        description="Actionable analysis from researchers and founders shaping the future of AI."
                        linkText="Unlock Insights &rarr;"
                        icon={
                            <svg viewBox="0 0 24 24">
                                <path d="M12 3a3 3 0 0 1 3 3v1h1a3 3 0 1 1 0 6h-1v1a3 3 0 1 1-6 0v-1H8a3 3 0 1 1 0-6h1V6a3 3 0 0 1 3-3z" />
                            </svg>
                        }
                    />
                </div>

                <div className="features">
                    <div className="feature">&#9889; Always Current</div>
                    <div className="feature">&#9673; Focused for You</div>
                    <div className="feature">&#10022; Actionable Steps</div>
                </div>
            </div>
        </section>
    );
};

export default CardSection;
