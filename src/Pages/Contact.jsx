import Form from "../Components/Form";

const Contact = () => {
  return (
    <>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container-fluid">
              <div className="row pt-5">
                <div className="col-lg-12">
                  <h1>Contact</h1>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
