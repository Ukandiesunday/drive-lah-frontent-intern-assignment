import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <div className="footer">
        <button onClick={() => navigate("/device")} className="next-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;
