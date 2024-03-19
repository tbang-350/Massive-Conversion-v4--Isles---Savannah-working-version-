import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/7day");
  }, [navigate]);

  return (
    <div className="trip-customize-inner">
      <div className="day-matuni-tarangire-serengeti-parent">
        <div className="day-matuni-tarangire-serengeti">
          <div className="day-materuni-tarangire-container">
            <p className="day-materuni">{`7 - DAY MATERUNI, `}</p>
            <p className="tarangire-serengeti">{`TARANGIRE, SERENGETI `}</p>
            <p className="lake-manyara">{`& LAKE MANYARA `}</p>
          </div>
          <div className="day-matuni-tarangire-serengeti-inner">
            <div className="per-person-price-serengeti-parent">
              <div className="per-person-price1">$1,300</div>
              <div className="day-camp-safari1">
                <div className="per-person6">PER PERSON</div>
              </div>
            </div>
          </div>
        </div>
        <img className="mask-group-icon5" alt="" src="/mask-group-3@2x.png" />
        <button
          className="rectangle-parent"
          onClick={onGroupButtonClick}
        >
          <div className="rectangle-div" />
          <div className="view-this-trip">VIEW THIS TRIP</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent4;
