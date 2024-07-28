import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();


    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }



    emailjs
      .sendForm(
        "service_ogg34fr",
        "template_88ix7li",
        form.current,
        "8kdOfhT_Q3PmLlvsH"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
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
          <input
            type="text"
            name="user_name"
            className="form-control"
            value={formData.user_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Email address</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            value={formData.user_email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Message</label>
          <textarea
            name="message"
            className="form-control"
            cols="30"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3 mt-5">
          <input
            type="submit"
            value="Send"
            className="btn btn-lg btn-outline-warning"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
