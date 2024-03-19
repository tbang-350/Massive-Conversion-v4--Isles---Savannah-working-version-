import { useCallback } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "TravelQuote" to the project
  }, []);

  return (
    <section className="frame-parent29">
      <div className="rectangle-parent18">
        <div className="frame-child29" />
        <div className="request-a-travel-quote-wrapper">
          <div className="request-a-travel">Request a Travel Quote</div>
        </div>
        <button className="frame-wrapper9" onClick={onGroupButtonClick}>
          <div className="rectangle-parent19">
            <div className="frame-child30" />
            <div className="travel-quote">Travel quote</div>
          </div>
        </button>
      </div>
      <img
        className="frame-child31"
        loading="lazy"
        alt=""
        src="/group-40@2x.png"
      />
    </section>
  );
};

export default FrameComponent1;
