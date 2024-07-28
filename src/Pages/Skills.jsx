import SkillCard from "../Components/SkillCard";
import Skill from "../data/Skills.json";
import "../Components/SkillCard.css"

const Skills = () => {
  return (
    <>
      <div className="container" id="skills">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container-fluid">
              <div className="row pt-5">
                <div className="col-lg-12">
                  <h1>Skills</h1>
                </div>
                {Skill.map((skill, index) => {
                  return (
                    <>
                    <div className="col-lg-6 col-md-6 coll-sm-6 d-flex flex-column justify-content-evenly align-items-center"
                    
                    key={skill.id} data-aos="flip-right" data-aos-duration="1000">

                      <SkillCard
                        key={index}
                        tech={skill.tech}
                        imgSrc={skill.imgSrc}
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

export default Skills;
