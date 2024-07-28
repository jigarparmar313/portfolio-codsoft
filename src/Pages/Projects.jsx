import ProjectCard from "../Components/ProjectCard";
import Project from "../data/Projects.json";

const Projects = () => {
  return (
    <>
      <div className="container" id="projects">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container-fluid">
              <div className="row pt-5">
                <div className="col-lg-12">
                  <h1>Projects</h1>

</div>
                  {Project.map((project, index) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-evenly align-content-between"
                           key={project.id} data-aos="flip-right" data-aos-duration="1000">
                          <ProjectCard
                            key={index}
                            id={project.id}
                            title={project.title}
                            imgSrc={project.imgSrc}
                            description={project.description}
                            demo={project.demo}
                            source={project.demo}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
