import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <section className="frame-parent26">
      <div className="karibu-isles-savannah-wrapper">
        <h2 className="karibu-isles-container">
          <p className="karibu-isles">{`Karibu Isles & Savannah`}</p>
        </h2>
      </div>
      <div className="frame-parent27">
        <div className="frame-wrapper7">
          <button className="frame-button">
            <div className="frame-child26"  />
            <div className="build-your-safari" onClick={onRectangleClick} >Build Your Safari</div>
          </button>
        </div>
        <div className="embarkcomponent">
          <div className="embarkcomponent-child" />
          <h2 className="embark-on-a1">
            Embark on a Journey Crafted Uniquely for You
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
