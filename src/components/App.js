
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Footer from './Footer';

const App = (props) => {
  return (
    <div className="app-container">
      this is the app container
      <Header/>
      <Hero/>
      <Projects/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
