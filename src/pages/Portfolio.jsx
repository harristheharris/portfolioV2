import data from '../data/projects.js';
import Project from '../components/Projects/Projects.jsx';

console.log(data);

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is the Portfolio page where you see portfolio stuff</p>

      <section>

        <div>
          <h3>Projects</h3>
        </div>

        <div>
          {data.map((project) => {
             return <Project data={project}  key={project.id} />
          })}
        </div>

      </section>
    </div>
  )
};

export default Portfolio;