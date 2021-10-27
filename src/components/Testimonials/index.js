import './testimonials.scss'
import Container from "./../Common/container";
import Paragraph from "../Common/paragraph";

const Testimonials = (props) => {
  return (
    <div className="testimonials">
      <Container>
      <h2>Testimonials</h2>
        <Paragraph text="testimonials go here"/>
      </Container>
    </div>
  );
};

export default Testimonials;
