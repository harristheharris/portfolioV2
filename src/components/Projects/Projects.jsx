import PropTypes from 'prop-types'

const Project = ({ data }) => {
  const { name, deployedUrl, githubUrl, tools } = data;

  return (


    <div>
      <h3>{name}</h3>
      <div>
        <div>
          <div>
            <a href={deployedUrl}>Live application</a>
          </div>
          <div>
            <a href={githubUrl}>GitHub Repository</a>
          </div>
        </div>

      </div>
      <h3>{tools}</h3>
    </div>
  );
};

Project.propTypes = {

  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    deployedUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
  }).isRequired

}



export default Project; 