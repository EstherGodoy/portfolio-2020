import Paragraph from "../Common/paragraph";
import Button from "../Common/button";

const Hero = (props) => {
  return (
    <div>
      <h1>This is the hero</h1>
      <Paragraph text="this is the hero paragraph text"/>
      <Button buttonText="Hero Button 1 Text"/>
      <Button buttonText="Hero Button 2 Text"/>
    </div>
  );
};

export default Hero;
