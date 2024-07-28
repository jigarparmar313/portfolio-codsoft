import styles from "../Components/ProjectCard.module.css";

const ProjectCard = ({ title, imgSrc, description, demo }) => {
  return (
    <>
      <div className={`${styles.card} card mt-5 border border-2 border-warning ` }>
        <img src={imgSrc} className=" card-img-top img-fluid " alt="Company" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-dark fs-6">{description}</p>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning"
          >
            Demo
          </a>
        </div>
      </div>
    </>
  );
};


export default ProjectCard;
