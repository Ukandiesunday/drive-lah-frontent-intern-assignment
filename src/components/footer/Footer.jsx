import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = (pathName) => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <button onClick={() => navigate("/device")} className="next-btn">
        Next
      </button>
    </div>
  );
};

export default Footer;
