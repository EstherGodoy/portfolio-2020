import './hero.scss'
import Container from "./../Common/container";
import Paragraph from "../Common/paragraph";
import Button from "../Common/button";

const Hero = (props) => {
  return (
    <div className="hero">
      <Container>
        <h1>Esther Godoy</h1>
        <Paragraph text="Heyo! I'm a Front-End Software Engineer. I primarily work long-term contract roles with in-house clients but occasionally do take on freelance work."/>
        <Paragraph text="I have extensive professional experience working with JavaScript, React, Redux, Sass, REST API's, Node, Python, PHP, SQL & PostgreSQL and I'm currently nerding out on: GraphQL"/>
        <Paragraph text="Most of my recent work is not viewable by the public, but you can check out some older stuff below"/>
        <div className="button-container">
          <Button buttonText="Hero Button 1 Text"/>
          <Button buttonText="Hero Button 2 Text"/>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
