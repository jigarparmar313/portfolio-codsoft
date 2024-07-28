import ScrollToTop from "react-scroll-to-top";
import "./ScrollTop.css";

const ScrollTop = () => {
  return (
    <>
      <ScrollToTop   className="scroll-to-top rounded-circle">
      <i className=" bi bi-arrow-up-circle"></i>
      </ScrollToTop>
    </>
  );
};

export default ScrollTop;

