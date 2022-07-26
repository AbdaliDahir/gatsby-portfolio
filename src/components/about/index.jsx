import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";
import ParticleImage, { 
  Vector,
  forces
} from "react-particle-image";

// Round number up to nearest step for better canvas performance
const round = (n, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 1.5;
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 7);
};

const src = "about.jpg";

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "54db13f1deef6bf15ce17127aa98eb33.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 550) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              {/* <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" /> */}
              <ParticleImage
                src={src}
                width="400"
                height="400"
                scale={1}
                entropy={5}
                maxParticles={5000}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor={STEP}
              />
              <SubTitle> Full Stack Engineer. </SubTitle>
              
            </div> 
            <div>
              <Title> Hello, I’m Abdelali </Title>
              <Text> Full-Stack Engineer from <b className="text-primary lined-link">Morocco</b> </Text>
              <Text>  Experienced Software Engineer Passionate about workability and learning with good technical experience Relational Database and multitude of NoSQL DBs, Java, Js, Data Structure, Algorithms. I'm seeking to learn more to get an experience and increase my knowledge stack to build stable and high scalable system with a strong information technology professional with a bachelor’s degree focused on computer science.
              </Text> 
              <Text> working with multi agencies on multi projects allowed me to better understand the expectations of clients and the needs of team members.</Text>
              <Text>  The Only Thing I Know , is that i really know Nothing at all. </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
