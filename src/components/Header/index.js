import Container from "./../Common/container";
import Nav from "./nav";
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  return (
    <header>
      <Container>
        <span><FontAwesomeIcon icon={faLaptopCode} /></span>
        <Nav/>
      </Container>
    </header>
  );
};

export default Header;
