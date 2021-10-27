import './footer.scss'
import Container from "./../Common/container";

const Footer = (props) => {
  return (
    <footer className="navbar-brand bg-gradient navbar-container">
      <Container>
        <div className="col-1">
          <h2>Portland, OR</h2>
          <p>© 2021 Esther Godoy</p>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div className="col-2">
          <ul>
            <li>Email</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>Portfolio</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
