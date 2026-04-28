import React, { useState } from 'react';
import './ProfileCard.css';
import profileImg from '../../assets/profile.png';

const ProfileCard = ({ name = "Muhammed Midlaj", role = "Web Developer" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="port-wrap">
      <div className="profile-container-inner">
        <div className="profile-card-wrapper">
          <div className="port-card" id="card">
            {!imgError ? (
              <img 
                src={profileImg} 
                alt={name} 
                id="pimg" 
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="fallback-avatar">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="30" r="18" fill="#2a2a2a"/>
                  <ellipse cx="40" cy="70" rx="28" ry="20" fill="#2a2a2a"/>
                </svg>
              </div>
            )}
            
            <div className="overlay"></div>
            <div className="scan-line"></div>

            <div className="corner-svg tl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 12 L2 2 L12 2" stroke="#c8f000" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="corner-svg tr">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 12 L2 2 L12 2" stroke="#c8f000" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="corner-svg bl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 12 L2 2 L12 2" stroke="#c8f000" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="corner-svg br">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 12 L2 2 L12 2" stroke="#c8f000" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            <div className="badge">
              <div className="name-block">
                <div className="label">// {role}</div>
                <div className="name">
                  {name.split(' ').map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
                  .
                </div>
              </div>
              <div className="status">Available</div>
            </div>
          </div>

          <div className="side-label">Midlaj · Portfolio · 2025</div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
