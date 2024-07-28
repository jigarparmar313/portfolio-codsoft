import resume from "/public/pdf/Jigar_Parmar_Web_Designer.pdf";
import Hero_Image from "/Home/Hero_Image.webp";
import "../styles/Home.css";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

  return (
    <>
      <div className="container"  >
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container-fluid">
              <div className="row ptb_50 d-flex flex-row justify-content-center align-items-center ">
                <div className="col-lg-6 order-lg-1 order-2 " data-aos="fade-up-right"data-aos-duration="1500">
                  <div className="card jp-card text-center mt-5 ">
                    <div className="card-header ">
                      {/* <h3>My name is Jigar Parmar.</h3> */}
                      <h2 style={{ margin: "auto 0", fontWeight: "normal" }}>
                        {/* I am a{" "} */}
                        <span style={{ color: "yellow", fontWeight: "bold" }}>
                          <Typewriter
                            words={[
                              "Welcome to my profile",
                              "My name is Jigar Parmar",
                              "I'm a Web Developer",
                              "I'm a Web Designer",
                              "I'm a FrontEnd Developer",
                              "",
                            ]}
                            loop={Infinity}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                          />
                        </span>
                      </h2>
                    </div>
                    <div className="card-body text-center">
                      <a
                        href={resume}
                        download="Jigar_Parmar_Web_Designer.pdf"
                        className="btn jp-btn btn-outline-warning  mb-2"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1" data-aos="fade-up-left"data-aos-duration="1500">
                  <div className="right d-flex justify-content-center align-items-center">
                    <div className="img_1 text-center ">
                      <img
                        src={Hero_Image}
                        className="img-fluid rounded-circle"
                        alt="Hero"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
