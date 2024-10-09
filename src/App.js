import React from "react";
import "./App.css";
import googlePlayImage from "./assets/playstore.png";
import appStoreImage from "./assets/appstore.png";
import qrCodeImage from "./assets/LOMAeventsQR.svg";
import logoImage from "./assets/logo.png";
import medialabLogo from "./assets/logo.png";
import usp1 from "./assets/toa-heftiba-TVQFl9R-MLQ-unsplash.jpg";
import usp2 from "./assets/sander-dalhuisen-NFlyFizf2JU-unsplash.jpg";
import usp3 from "./assets/aranxa-esteve-S5DEUg2yUVU-unsplash.jpg";

function App() {
  const handleDownloadEvent = (platform) => {
    console.log(`Download event for ${platform}`);
  };

  return (
    <div className="App">
      <nav>
        <div className="container">
          <a href="/">
            <img src={logoImage} alt="LOMAevents Logo" className="logo" />
          </a>
          <div className="links">
            <a href="https://LOMAeventshelpcenter.zendesk.com/hc/en-us/">
              Help Center
            </a>
            <a href="https://LOMAeventshelpcenter.zendesk.com/hc/en-us/articles/4402358258971-LOMAevents-Community-Standards">
              Community Standards
            </a>
          </div>
        </div>
      </nav>

      <div id="hero">
        <div id="gradient"></div>
        <div id="bg-LOMAevents"></div>
        <div className="container">
          <div className="hero-elements">
            <h1>Download LOMAevents Today!</h1>
            <img
              className="LOMAevents-icon"
              src={logoImage}
              alt="LOMAevents Icon"
            />
            <div className="slogan">Crafting unforgettable moments!</div>
            <div className="app-links-qr-code">
              <div className="app-links">
                <a
                  onClick={() => handleDownloadEvent("android")}
                  href="https://play.google.com/store/apps/details?id=LOMAevents.android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={googlePlayImage} alt="Google Play" />
                </a>
                <a
                  onClick={() => handleDownloadEvent("iOS")}
                  href="https://apps.apple.com/us/app/LOMAevents-messaging-chat-app/id357218860"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appStoreImage} alt="App Store" />
                </a>
              </div>
              <div className="divider">
                <div className="line"></div>
                <div className="center">OR</div>
                <div className="line"></div>
              </div>
              <div className="qr-container">
                <img src={qrCodeImage} alt="QR Code" />
                <div>Scan QR code to download LOMAevents on your device.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="usps">
        <div className="container">
          <h2>Why download LOMAevents?</h2>
          <div className="usp">
            <img src={usp1} alt="Organize a Seamless Corporate Workshop" />
            <h3>Organize a Seamless Corporate Workshop</h3>
          </div>
          <div className="usp">
            <img src={usp2} alt="Effortlessly Plan Your Perfect Event" />
            <h3>Effortlessly Plan Your Perfect Event</h3>
          </div>
          <div className="usp">
            <img src={usp3} alt="Plan a Fun Team Building Activity" />
            <h3>Plan a Fun Team Building Activity</h3>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <img src={medialabLogo} alt="Medialab" className="logo" />
          <div className="links">
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms-of-service/">Terms of Service</a>
          </div>
          <div className="copyright">
            Copyright © 2024 LOMAevents All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
