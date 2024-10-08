import React, { useEffect, useState } from "react";
import styled from "styled-components";
import appStoreImage from "./assets/appstore.png";
import playStoreImage from "./assets/playstore.png";

// Styled Components for the theme
const Container = styled.div`
  font-family: "Arial, sans-serif";
  color: #000;
  background-color: white;
  width: 100%;
  margin: 0;
  padding: 20px;
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  color: #ef3054;
  font-family: "Aclonica", sans-serif;
  font-size: 4rem;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 40px 20px;
  color: white;
  width: 100%;
`;

const HeroText = styled.h2`
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: "Aclonica", sans-serif;
  position: relative;
  z-index: 2;
  color: #ef3054;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AppStoreLink = styled.a`
  margin: 20px;
  position: relative;
  z-index: 2;
  display: inline-block;
`;

const PlayStoreLink = styled.a`
  margin: 20px;
  position: relative;
  z-index: 2;
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
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  z-index: 1; /* Ensure it sits on top of the FlipCardFront */
`;

const FeatureSection = styled.section`
  padding: 40px 20px;
  width: 100%;
  height: 300px;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  @media (max-width: 768px) {
    
  }
`;

const FlipCard = styled.div`
  background-color: transparent;
  height: 100%;
  perspective: 1000px;
  scroll-snap-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  color: #ef3054;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  padding: 10px;
  overflow: hidden; /* Ensure the overlay doesn't overflow the card */
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ef3054;
  border-radius: 10px;
  transform: rotateY(180deg);
  padding: 10px;
  font-size: 2rem;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  padding: 20px 20px;
  text-align: center;
  background-color: #333;
  color: white;
  width: 100%;
  z-index: 4; /* Ensure it sits above other elements */
`;

const userStories = [
  {
    title: "Organize a Seamless Corporate Workshop",
    description:
      "Find venues, catering, and activities for a productive workshop.",
    image: require("./assets/juliane-liebermann-9XlrCVvH9NI-unsplash.jpg"),
  },
  {
    title: "Effortlessly Plan Your Perfect Event",
    description: "Manage your event efficiently with tailored services.",
    image: require("./assets/priscilla-du-preez-nF8xhLMmg0c-unsplash.jpg"),
  },
  {
    title: "Plan a Fun Team Building Activity",
    description: "Quickly locate and book activities like escape rooms.",
    image: require("./assets/toa-heftiba-TVQFl9R-MLQ-unsplash.jpg"),
  },
  {
    title: "Host an Unforgettable Birthday Party",
    description: "Find a venue, food vendors, games, and a photo booth.",
    image: require("./assets/sander-dalhuisen-NFlyFizf2JU-unsplash.jpg"),
  },
  {
    title: "Efficiently Manage a Large-Scale Event",
    description: "Access a streamlined platform for large event planning.",
    image: require("./assets/ibrahim-boran-1VEVJrBF94U-unsplash.jpg"),
  },
  {
    title: "Coordinate a Community Fundraiser",
    description:
      "Find local venues and food options for a successful fundraiser.",
    image: require("./assets/antenna-ZDN-G1xBWHY-unsplash.jpg"),
  },
  {
    title: "Plan a Small Intimate Gathering",
    description: "Find the best local vendors for a cozy get-together.",
    image: require("./assets/brooke-lark-V4MBq8kue3U-unsplash.jpg"),
  },
];

const heroImages = [
  require("./assets/aranxa-esteve-S5DEUg2yUVU-unsplash.jpg"),
  require("./assets/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg"),
  require("./assets/kelly-jean-TclQHtlkzRc-unsplash.jpg"),
  require("./assets/marvin-meyer-IB5bld_weak-unsplash.jpg"),
  require("./assets/priscilla-du-preez-Q7wGvnbuwj0-unsplash.jpg"),
];

function App() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 15000); // 15 seconds for hero images

    const storyInterval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % userStories.length);
    }, 5000); // 5 seconds for user stories

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(heroInterval);
      clearInterval(storyInterval);
    };
  }, []);

  return (
    <Container>
      <Title>LOMAevents</Title>
      <Hero>
        <Slider
          style={{ transform: `translateX(-${currentHeroIndex * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <Slide key={index} bgImage={image}>
              <Overlay />
            </Slide>
          ))}
        </Slider>
        <HeroText>Crafting unforgettable moments!</HeroText>
        <AppStoreLink href="#appstore-link">
          <img
            src={appStoreImage}
            alt="Download on the App Store"
            width="200px"
          />
        </AppStoreLink>
        <PlayStoreLink href="#playstore-link">
          <img src={playStoreImage} alt="Get it on Google Play" width="200px" />
        </PlayStoreLink>
      </Hero>

      <FeatureSection id="features">
        {userStories
          .slice(
            currentStoryIndex * (isMobile ? 1 : 3),
            (currentStoryIndex + 1) * (isMobile ? 1 : 3)
          )
          .map((story, index) => (
            <FlipCard key={index}>
              <FlipCardInner>
                <FlipCardFront bgImage={story.image}>
                  <Overlay />
                  <h3>
                    <span>{story.title}</span>
                  </h3>
                </FlipCardFront>
                <FlipCardBack>
                  <h4>{story.description}</h4>
                </FlipCardBack>
              </FlipCardInner>
            </FlipCard>
          ))}
      </FeatureSection>

      <Footer>
        <p>© 2024 LOMAevents. All rights reserved.</p>
        <AppStoreLink href="#appstore-link">
          <img
            src={appStoreImage}
            alt="Download on the App Store"
            width="100px"
          />
        </AppStoreLink>
        <PlayStoreLink href="#playstore-link">
          <img src={playStoreImage} alt="Get it on Google Play" width="100px" />
        </PlayStoreLink>
      </Footer>
    </Container>
  );
}

export default App;
