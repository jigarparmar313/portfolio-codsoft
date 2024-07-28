import "../styles/Experience.css";
import Experiences from "../data/Experience.json";
import Card from "../Components/Card";

const Experience = () => {
  return (
    <div className="container" id="experience">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 pt-5">
                <h1>Experience</h1>
              </div>
              <div className="col-lg-12">
                {Experiences.map((data, index) => {
                  return (
                    <>
                    <div key={data.id} data-aos="zoom-in" data-ao-duration="1500">

                    <Card
                      key={index}
                      id={data.id}
                      role={data.role}
                      organisation={data.organisation}
                      startDate={data.startDate}
                      endDate={data.endDate}
                      location={data.location}
                      experiences={data.experiences}
                      imgSrc={data.imgSrc}
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
    </div>
  );
};

export default Experience;
