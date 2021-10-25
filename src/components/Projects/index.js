const Projects = (props) => {
  console.log('props', props)
  return (
    <section>
      <div>this are the projects</div>
      <ul>
        {props.projects.map(function(project, index){
            return <li key={index}> {project.name} as the {project.tagline} </li>
        })}
      </ul>
    </section>
  );
};

export default Projects;
