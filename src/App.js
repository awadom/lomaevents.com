import React from "react";
import "./App.css";
import googlePlayImage from "./assets/playstore.png";
import appStoreImage from "./assets/appstore.png";
import logoImage from "./assets/logo.png";
import medialabLogo from "./assets/logo.png";
import usp1 from "./assets/corporate-event.png";
import usp2 from "./assets/party.png";
import usp3 from "./assets/help.png";

function App() {
  const handleDownloadEvent = (platform) => {
    console.log(`Download event for ${platform}`);
  };

  return (
    <div className="App">
      <nav>
        <div className="container">
        <h1>LOMAevents</h1>
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
          <div className="slogan">Crafting unforgettable moments!</div>
            <img
              className="LOMAevents-icon"
              src={logoImage}
              alt="LOMAevents Icon"
            />
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
          </div>
        </div>
      </div>

      <div id="usps">
        <div className="container">
          <h3>Organize a Seamless Corporate Workshop</h3>
          <br></br>
          <div className="usp">
            <img src={usp1} alt="Organize a Seamless Corporate Workshop" />
            <p>From venue selection to catering options, LOMAevents ensures your corporate workshop runs without a hitch. Our tailored recommendations are designed to match your team’s needs.</p>
          </div>
          <h3>Effortlessly Plan Your Perfect Event</h3>
          <br></br>
          <div className="usp">
            <img src={usp2} alt="Effortlessly Plan Your Perfect Event" />
            <p>LOMAevents takes the stress out of event planning by curating the best local vendors at your fingertips. Whether it’s an intimate gathering or a grand celebration, our app simplifies every step.</p>
          </div>
          <h3>Plan a Fun Team Building Activity</h3>
          <br></br>
          <div className="usp">
            <img src={usp3} alt="Plan a Fun Team Building Activity" />
            
            <p>Bring your team together with engaging activities, handpicked to foster collaboration and creativity. LOMAevents connects you with the best local spots and services.</p>
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
          
          <a id="flaticon" href="https://www.flaticon.com/free-icons/corporate" title="Flaticon">Icons created by Sir.Vector - Flaticon</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
