
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Footer from './Footer';
import {useEffect, useState} from "react"

const App = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`../data/project_data.json`, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => response.json())
    .then((json) => {
      const projectsArr = [];
      Object.values(json).forEach(val => projectsArr.push(val));
      setData(projectsArr);
    });
  }, []);
  return (
    <div className="app-container">
      <Header/>
      <Hero/>
      <Projects projects={data}/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
