import React, { useEffect, useState } from "react";
import styled from "styled-components";
import appStoreImage from "./assets/appstore.png";
import playStoreImage from "./assets/playstore.png";

// Styled Components for the theme
const Container = styled.div`
  font-family: "Arial, sans-serif";
  color: #000;
  background-color: white;
  width: 100%; // Full-width container
  margin: 0;
  padding: 20px;
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  color: #ef3054;
  font-family: "Aclonica", sans-serif;
  font-size: 4rem; // Twice as big
`;

const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 80px 20px;
  color: white;
  overflow: hidden;
  width: 100%; // Full-width section
`;

const HeroText = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: "Aclonica", sans-serif;
  position: relative;
  z-index: 2; // Place on top of the overlay
  color: #ef3054; // Tagline color
`;

const AppStoreLink = styled.a`
  margin: 20px;
  position: relative;
  z-index: 2; // Place on top of the overlay
  display: inline-block;
`;

const PlayStoreLink = styled.a`
  margin: 20px;
  position: relative;
  z-index: 2; // Place on top of the overlay
  display: inline-block;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4); // Light white blur overlay
  backdrop-filter: blur(5px); // Apply blur
`;

const FeatureSection = styled.section`
  padding: 40px 20px;
  width: 100%; // Stretch section to full width
  display: flex; // Align items horizontally
  overflow-x: auto; // Enable horizontal scrolling if content exceeds width
`;

const FeatureCard = styled.div`
  margin: 20px;
  padding: 20px;
  border: 2px solid #ef3054;
  border-radius: 10px;
  background-color: white;
  min-width: 300px;
  flex-shrink: 0; // Prevent shrinking
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background-color: #333;
  color: white;
  width: 100%; // Full-width footer
`;

const userStories = [
  {
    title: "Organize a Seamless Corporate Workshop",
    description:
      "Find venues, catering, and activities to ensure a productive workshop experience.",
  },
  {
    title: "Effortlessly Plan Your Perfect Event",
    description:
      "Find the necessary services to manage your event efficiently.",
  },
  {
    title: "Plan a Fun Team Building Activity",
    description:
      "Quickly locate and book activities like escape rooms or adventure parks.",
  },
  {
    title: "Host an Unforgettable Birthday Party",
    description:
      "Find a venue, food vendors, games, and a photo booth for a memorable celebration.",
  },
  {
    title: "Efficiently Manage a Large-Scale Event",
    description: "Access a streamlined platform for large event planning.",
  },
  {
    title: "Coordinate a Community Fundraiser",
    description:
      "Find local venues and food options to create a successful fundraiser.",
  },
  {
    title: "Plan a Small Intimate Gathering",
    description:
      "Find the best local food vendors and activities for a cozy get-together.",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure the images are imported correctly
  const images = [
    require("./assets/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg"),
    require("./assets/aranxa-esteve-S5DEUg2yUVU-unsplash.jpg"),
    require("./assets/marvin-meyer-IB5bld_weak-unsplash.jpg"),
    require("./assets/priscilla-du-preez-Q7wGvnbuwj0-unsplash.jpg"),
    require("./assets/kelly-jean-TclQHtlkzRc-unsplash.jpg"),
    require("./assets/ben-rosett-nYugmV-SY6s-unsplash.jpg"),
    require("./assets/anthony-delanoix-hzgs56Ze49s-unsplash.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      {/* Title */}
      <Title>LOMAevents</Title>

      {/* Hero Section */}
      <Hero>
        <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <Slide key={index} bgImage={image}>
              <Overlay />
            </Slide>
          ))}
        </Slider>
        <HeroText>Crafting unforgettable moments!</HeroText>
        {/* App Store and Play Store links */}
        <AppStoreLink href="#appstore-link">
          <img
            src={appStoreImage}
            alt="Download on the App Store"
            width="200px"
          />
        </AppStoreLink>
        <PlayStoreLink href="#playstore-link">
          <img src={playStoreImage} 
          alt="Get it on Google Play" 
          width="200px" />
        </PlayStoreLink>
      </Hero>

      {/* Features Section */}
      <FeatureSection id="features">
        {userStories.map((story, index) => (
          <FeatureCard key={index}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </FeatureCard>
        ))}
      </FeatureSection>

      {/* Footer Section */}
      <Footer id="contact">
        <p>Connect with us: info@lomaevents.com</p>
        <p>Download LOMAevents:</p>
        <div>
          {/* Placeholder for App Store & Play Store icons */}
          <img src="appstore-placeholder.png" alt="App Store" width="120px" />
          <img src="playstore-placeholder.png" alt="Play Store" width="120px" />
        </div>
      </Footer>
    </Container>
  );
}

export default App;
