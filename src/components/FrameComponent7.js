import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <section className="frame-parent51">
      <div className="back-parent3" onClick={onGroupContainerClick}>
        <img className="back-icon5" loading="lazy" alt="" src="/back@2x.png" />
        <div className="back5">Back</div>
      </div>
      <div className="day-camping">
        <div className="day-serengeti-camping-tour-group">
          <h1 className="day-serengeti-camping-container3">
            <p className="day-lake-manyara1">{`2 - Day Lake Manyara & `}</p>
            <p className="ngorongoro-camping-tour">NgoroNgoro Camping Tour</p>
          </h1>
          <div className="private-safari-adventure">
            <div className="embark-on-an-container2">
              <p className="explore-the-wonders">
                Explore the wonders of Northern Tanzania with a safari that
                takes you to the iconic Ngorongoro Crater. This world-renowned
                destination offers a captivating wildlife experience, featuring
                the opportunity to interact with the Maasai tribe and witness
                the Big Five against a stunning backdrop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
