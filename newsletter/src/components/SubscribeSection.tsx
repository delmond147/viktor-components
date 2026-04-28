import React from 'react';
import { motion } from 'framer-motion';
import './SubscribeSection.css';

const SubscribeSection: React.FC = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  ];

  return (
    <section className="subscribe-section">
      <div className="subscribe-grid">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="newsletter-column"
        >
          <div className="text-content">
            <h2 className="subscribe-title">Subscribe to Our Community</h2>
            <p className="subscribe-description">
              Get exclusive access to cutting-edge tech insights, industry trends, and expert advice 
              delivered straight to your inbox. Join our growing community today!
            </p>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group-row">
              <input 
                type="email" 
                placeholder="Enter your email here" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Join Now
              </button>
            </div>
          </form>

          <div className="social-proof-row">
            <div className="avatar-stack">
              {avatars.map((url, i) => (
                <img 
                  key={i} 
                  src={url}
                  alt={`Member ${i + 1}`}
                  className="avatar-item"
                />
              ))}
            </div>
            <span className="member-label">5,000+ happy members</span>
          </div>
        </motion.div>
        
        <div className="empty-column"></div>
      </div>
    </section>
  );
};

export default SubscribeSection;
