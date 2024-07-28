import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ogg34fr", "template_88ix7li", form.current, "8kdOfhT_Q3PmLlvsH")
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="mt-5">
        <div className="mb-3">
          <label className="form-label text-white">Name</label>
          <input type="text" name="user_name" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Email address</label>
          <input type="email" name="user_email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Message</label>
          <textarea
            type="text"
            name="message"
            id=""
            cols="30"
            rows="5"
            className="form-control"
          ></textarea>
        </div>

        <div className="mb-3 mt-5">
          <input
            type="submit"
            value="Send"
            className="btn btn-lg btn-outline-warning "
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
