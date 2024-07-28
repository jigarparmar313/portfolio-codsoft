// import html from "../assets/Images/Data/Skill    s/HTML.png"
import "./SkillCard.css";
const SkillCard = ({ imgSrc, tech }) => {
  return (
    <>
      <div className="card jp-card1 mt-5 d-flex justify-content-center align-items-center">
        <img src={imgSrc} className="mt-3 img-fluid img-card" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{tech}</h5>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
