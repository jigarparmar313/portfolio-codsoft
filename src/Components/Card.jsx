import "./Card.css";

const Card = ({ id, role, organisation, startDate, endDate, location, experiences, imgSrc }) => {
  return (
    <div className="card ex-card card-bg mt-5 shadow-sm">
      <div className="row no-gutters">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-2">
          <img src={imgSrc} className="img-fluid rounded-circle w-75" alt="Company Logo" />
        </div>
        <div className="col-12 col-md-8 pt-5">
          <div className="card-body text-center">
            <h4 className="card-title mt-2 text-primary font-weight-bold">{role}</h4>
            <h3 className="card-title mt-2 text-warning font-weight-bold">{organisation}</h3>
            <div className="row mb-2">
              <div className="col-12 col-sm-4 mt-2 font-weight-bold text-success">Start Date: {startDate}</div>
              <div className="col-12 col-sm-4 mt-2 text-danger font-weight-bold">End Date: {endDate}</div>
              <div className="col-12 col-sm-4 mt-2 text-secondary font-weight-bold">Location: {location}</div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-4 mt-2 text-primary fw-bolder">Worked On:</div>
              {experiences.map((experience, index) => (
                <div key={index} className="col-12 col-sm-4 mt-2 text-info fw-bolder">{experience}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
