import Container from "./nav";
import Nav from "./nav";
import './header.scss'

const Header = (props) => {
  return (
    <header>
      <Container>
        <div>icon</div>
        <Nav/>
      </Container>
    </header>
  );
};

export default Header;
