import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent1.css";

const GroupComponent1 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/2day");
  }, [navigate]);

  return (
    <div className="frame-parent31">
      <div className="day-lake-manyara-ngorongoro-parent">
        <div className="day-lake-manyara-container">
          <p className="day-lake-manyara">2 - DAY LAKE MANYARA</p>
          <p className="ngorongoro-camping">{`& NGORONGORO CAMPING`}</p>
          <p className="tour">TOUR</p>
        </div>
        <div className="frame-wrapper10">
          <div className="d-a-y-l-o-d-g-e-s-a-f-a-r-i-s-parent">
            <div className="d-a-y">$400</div>
            <div className="per-person5">PER PERSON</div>
          </div>
        </div>
      </div>
      <img className="mask-group-icon4" alt="" src="/mask-group-2@2x.png" />
      <button
        className="rectangle-parent"
        onClick={onGroupButtonClick}
      >
        <div className="rectangle-div" />
        <div className="view-this-trip">VIEW THIS TRIP</div>
      </button>
    </div>
  );
};

export default GroupComponent1;
