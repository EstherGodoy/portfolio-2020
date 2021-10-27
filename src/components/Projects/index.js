import {useEffect, useState} from "react"

const Projects = (props) => {
  const [test, setTest] = useState(props.data.projects);

useEffect(() => {
    // Update the document title using the browser API
    console.log('props.data.projects effec used', props.data.projects);
    setTest(props.data.projects)
  });
  return (
    <section>
      <div>this are the projects</div>
      <ul>
        {test && test.forEach(item => {
            return <li> test {item.name} as the {item.tagline} </li>
        })}
      </ul>
    </section>
  );
};

export default Projects;
