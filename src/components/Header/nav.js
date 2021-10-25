import './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Nav = (props) => {
  return (
    <ul>
      <li>Home</li>
      <li>Work</li>
      <li>About</li>
      <li>Contact</li>
      <li><FontAwesomeIcon icon={faGithub} /></li>
      <li><FontAwesomeIcon icon={faLinkedin} /></li>
    </ul>
  );
};

export default Nav;
