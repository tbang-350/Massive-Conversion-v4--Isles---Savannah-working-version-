import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent2.css";

const GroupComponent2 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="path-23-parent">
      <img className="path-23-icon1" alt="" src="/path-23.svg" />
      <img
        className="component-child"
        loading="lazy"
        alt=""
        src="/group-53.svg"
        onClick={onGroupClick}
      />
      <div className="component">
        <div className="rectangle-parent22">
          <div className="frame-child35" />
          <div className="customize-your-trip1">Customize Your Trip</div>
        </div>
      </div>
    </header>
  );
};

export default GroupComponent2;
