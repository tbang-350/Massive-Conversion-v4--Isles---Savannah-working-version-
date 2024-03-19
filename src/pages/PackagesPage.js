import { useCallback } from "react";
import GroupComponent2 from "../components/GroupComponent2";
import { useNavigate } from "react-router-dom";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent4 from "../components/FrameComponent4";
import "./PackagesPage.css";

const PackagesPage = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/3day");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/6day");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/4day");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/safariblue");
  }, [navigate]);


  return (
    <div className="packagespage">
      <GroupComponent2 />
      <img className="backdrop-icon" alt="" />
      <main className="path-20-parent">
        <img className="path-20-icon" alt="" />
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/group-32@2x.png"
        />
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/group-33@2x.png"
        />
        <img
          className="mask-group-6"
          loading="lazy"
          alt=""
          src="/mask-group-6@2x.png"
        />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/group-37@2x.png"
        />
      </main>
      <div className="what-adventures-await">
        <div className="trip-customize">
          <div className="what-adventures-await-parent">
            <h3 className="what-adventures-await1">OUR pACKAGES INCLUDE :</h3>
            <div className="day-camp-wrapper">
              <div className="day-camp">
                <div className="mask-group-parent">
                  <img
                    className="mask-group-icon"
                    loading="lazy"
                    alt=""
                    src="/mask-group.svg"
                  />
                  <div className="frame-parent">
                    <div className="day-serengeti-camping-tour-parent">
                      <div className="day-serengeti-camping-container">
                        <p className="day-serengeti">{`3 - DAY SERENGETI `}</p>
                        <p className="camping-tour">CAMPING TOUR</p>
                      </div>
                      <div className="day-ngorongoro-camping-tour-ma">
                        <div className="div">$1,050</div>
                      </div>
                    </div>
                    <div className="serengeti-camping-tour-name">
                      <div className="per-person">PER PERSON</div>
                    </div>
                  </div>
                  <button
                    className="rectangle-parent"
                    onClick={onGroupButtonClick}
                  >
                    <div className="rectangle-div" />
                    <div className="view-this-trip">VIEW THIS TRIP</div>
                  </button>
                </div>
                <div className="frame-group">
                  <div className="day-lodge-safari-parent">
                    <div className="day-lodge-safari">
                      <div className="day-camp-safari">
                        <p className="day-camp1">6 - DAY CAMP</p>
                        <p className="safari">SAFARI</p>
                      </div>
                      <div className="per-person-price">
                        <div className="div1">$1,690</div>
                      </div>
                    </div>
                    <div className="per-person-wrapper">
                      <div className="per-person1">
                        <span>PER</span>
                        <span className="span">{` `}</span>
                        <span>PERSON</span>
                      </div>
                    </div>
                  </div>
                  <img
                    className="mask-group-icon1"
                    alt=""
                    src="/mask-group-1.svg"
                  />
                  <button
                    className="rectangle-parent"
                    onClick={onGroupButton1Click}
                  >
                    <div className="rectangle-div" />
                    <div className="view-this-trip">VIEW THIS TRIP</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent1 />
          <FrameComponent4 />
          <div className="safari-blue">
            <div className="per-person-parent">
              <div className="per-person2">
                <div className="day-lodge-safari1">4 - DAY LODGE SAFARI</div>
                <div className="per-person-inner">
                  <div className="parent">
                    <div className="div2">$1,900</div>
                    <div className="per-person-container">
                      <div className="per-person3">PER PERSON</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="mask-group-icon2"
                alt=""
                src="/mask-group-1.svg"
              />
              <button
                className="rectangle-parent"
                onClick={onGroupButton2Click}
              >
                <div className="rectangle-div" />
                <div className="view-this-trip">VIEW THIS TRIP</div>
              </button>
            </div>
            <div className="frame-container">
              <div className="safari-blue-parent">
                <div className="safari-blue1">SAFARI BLUE</div>
                <div className="frame-wrapper">
                  <div className="frame-div">
                    <div className="camping-tour-label-wrapper">
                      <div className="camping-tour-label">$110</div>
                    </div>
                    <div className="per-person4">PER PERSON</div>
                  </div>
                </div>
              </div>
              <img
                className="mask-group-icon3"
                alt=""
                src="/mask-group-1.svg"
              />
              <button
                className="rectangle-parent"
                onClick={onGroupButton3Click}
              >
                <div className="rectangle-div" />
                <div className="view-this-trip">VIEW THIS TRIP</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
