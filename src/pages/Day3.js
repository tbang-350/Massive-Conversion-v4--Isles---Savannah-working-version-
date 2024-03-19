import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import "./Day3.css";

const Day3 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="day">
      <section className="day-inner">
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="back-parent" onClick={onGroupContainerClick}>
              <img
                className="back-icon"
                loading="lazy"
                alt=""
                src="/back@2x.png"
              />
              <div className="back">Back</div>
            </div>
            <div className="day-serengeti-camping-tour-wrapper">
              <h1 className="day-serengeti-camping-container1">
                <p className="day-serengeti1">{`3 - DAY SERENGETI `}</p>
                <p className="camping-tour1">CAMPING TOUR</p>
              </h1>
            </div>
          </div>
          <div className="embark-on-an-exclusive-private-wrapper">
            <div className="embark-on-an-container">
              <p className="embark-on-an">
                Embark on an exclusive private safari adventure starting and
                ending in Arusha, with flexible departure times. Enjoy a
                seamless, fully serviced journey suitable for all ages. Special
                discounts are available for children (0-12) and larger families
                in triple or quad rooms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent6 />
      <FrameComponent5 />
      <img className="day-child" alt="" src="/group-111@2x.png" />
      <section className="frame-section">
        <div className="frame-parent3">
          <div className="group-div">
            <div className="frame-child4" />
            <div className="start-your-adventure">
              Begin your morning with a pick-up from your accommodation and head
              to the renowned Serengeti National Park, a premier African
              wildlife destination. Traverse the Ngorongoro Conservation Area,
              experiencing the vastness and diversity of wildlife and flora.
              Enjoy a game drive en route to the Serengeti, immersing yourself
              in the landscape. Arrive in the Serengeti for a half-day game
              drive, staying overnight in comfortable full-service campsites
              amid the wilderness.
            </div>
          </div>
          <div className="day-2-serengeti-national-par-wrapper">
            <div className="day-2">DAY 2 : SERENGETI NATIONAL PARK</div>
          </div>
        </div>
      </section>
      <img className="day-item" alt="" src="/group-111@2x.png" />
      <section className="wildlife-expedition-day-wrapper">
        <div className="wildlife-expedition-day">
          <div className="day-3">DAY 3 : NGORONGORO CRATER</div>
          <div className="wildlife-awakening-parent">
            <div className="wildlife-awakening" />
            <div className="prepare-for-a">
              Prepare for a full-day wildlife exploration in the iconic
              Serengeti. As Tanzania’s ancient and UNESCO World Heritage Site,
              the Serengeti offers year-round wildlife encounters, with the
              annual wildebeest migration being a highlight. Spend the night at
              Serengeti National Park’s full-service campsites, fully immersed
              in the extraordinary landscape.
            </div>
          </div>
        </div>
      </section>
      <section className="frame-parent4">
        <img
          className="group-icon"
          loading="lazy"
          alt=""
          src="/group-111@2x.png"
        />
        <div className="rectangle-parent1">
          <div className="frame-child5" />
          <div className="set-off-on">
            Set off on a full-day wildlife expedition in the awe-inspiring
            Ngorongoro Crater, a UNESCO World Heritage site. Experience the
            harmonious coexistence of humans and wild animals in this natural
            wonder. In the late afternoon, journey back to Arusha, concluding
            your remarkable safari adventure filled with extraordinary
            encounters and the unique beauty of the Ngorongoro Crater.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Day3;
