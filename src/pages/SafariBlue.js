import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArushaToSerengetiDay from "../components/ArushaToSerengetiDay";
import "./SafariBlue.css";

const SafariBlue = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="safariblue">
      <div className="main-f-r-a-m-e">
        <div className="back-parent2" onClick={onGroupContainerClick}>
          <img
            className="back-icon4"
            loading="lazy"
            alt=""
            src="/back@2x.png"
          />
          <div className="back4">Back</div>
        </div>
        <div className="day-serengeti-camping-tour-wrapper1">
          <h1 className="day-serengeti-camping2">Safari Blue</h1>
        </div>
      </div>
      <div className="embark-on-an-exclusive-private-container">
        <div className="embark-on-an-container1">
          <p className="take-it-easy">
            Take it easy in this blue paradise on a Full day excursion Explore
            the stunning coastal attractions of Zanzibar with Safari Blue, a
            renowned full-day boat trip that immerses you in the natural beauty
            of the Indian Ocean. From snorkeling and dolphin watching to
            relaxing on pristine sandbanks, this excursion offers a memorable
            experience for adventure seekers.
          </p>
        </div>
      </div>
      <ArushaToSerengetiDay />
      <div className="three-day-trip-itinerary">
        <div className="journey-summary-parent">
          <div className="journey-summary">
            <div className="itinerary3">ITINERARY</div>
          </div>
          <div className="day-1-container">
            <ol className="convenient-pickup-and-briefing">
              <li>Convenient Pickup and Briefing:</li>
            </ol>
          </div>
          <div className="day-2-container1">
            <ol className="sail-to-menai-bay-conservation">
              <li>Sail to Menai Bay Conservation Area:</li>
            </ol>
          </div>
          <div className="day-3-container3">
            <ol className="kwale-island-and-seafood-platt">
              <li>Kwale Island and Seafood Platter</li>
            </ol>
          </div>
        </div>
      </div>
      <section className="early-breakfast">
        <div className="day-1-container1">
          <ol className="convenient-pickup-and-briefing1">
            <li>Convenient Pickup and Briefing</li>
          </ol>
        </div>
      </section>
      <img className="safariblue-child" alt="" src="/group-111@2x.png" />
      <section className="arusha-to-serengeti">
        <div className="full-day-expedition-parent">
          <div className="full-day-expedition">
            <div className="full-day-expedition-child" />
            <div className="start-your-adventure4">
              Your Safari Blue adventure begins with a hassle-free pickup from
              the Stone Town Area in our spacious 6-seater van. A scenic
              24-kilometer drive takes you to Fumba, where our expert team
              provides a thorough 20-minute briefing, ensuring you're fully
              prepared for the day's adventures. We provide all essential gear,
              including life jackets, water shoes, and snorkeling goggles.
            </div>
          </div>
          <div className="serengeti-park">
            <div className="day-2-container2">
              <ol className="sail-to-menai-bay-conservation1">
                <li>Sail to Menai Bay Conservation Area</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <img className="safariblue-item" alt="" src="/group-111@2x.png" />
      <section className="ngorongoro-crater-wrapper">
        <div className="ngorongoro-crater">
          <div className="day-3-container4">
            <ol className="kwale-island-and-seafood-platt1">
              <li>Kwale Island and Seafood Platter</li>
            </ol>
          </div>
          <div className="prepare-for-tour">
            <div className="full-day-wildlife" />
            <div className="prepare-for-a-container">
              <p className="embark-on-a">
                Embark on a traditional wooden dhow boat and sail from Fumba to
                the Menai Bay Conservation Area. Enjoy a mini-vacation on the
                water with breathtaking views of Zanzibar's coastline during the
                30 to 40-minute boat ride.
              </p>
              <p className="menai-bay-conservation">
                Menai Bay Conservation Area Activities:
              </p>
              <ol className="dolphin-watching-witness-play">
                <li className="dolphin-watching-witness-play1">
                  Dolphin Watching: Witness playful dolphins in their natural
                  habitat.
                </li>
                <li className="snorkeling-dive-into-crystal-">
                  Snorkeling: Dive into crystal-clear waters to explore vibrant
                  coral reefs and marine life.
                </li>
                <li className="sandbanks-relax-on-pristine-s">
                  Sandbanks: Relax on pristine sandbanks surrounded by turquoise
                  waters.
                </li>
                <li>
                  Swims and Snacks: Enjoy refreshing swims and tropical fruit
                  snacks.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <img className="safariblue-inner" alt="" src="/group-111@2x.png" />
      <section className="set-off-on-expedition">
        <div className="serengeti-itinerary-detail">
          <div className="day-trip-details" />
          <div className="set-off-on11">
            After snorkeling and relaxing on the sandbank, continue the journey
            to Kwale Island, where a delightful seafood platter awaits. Savor
            lunch amidst the natural beauty and embark on a brief tour of the
            ancient baobab tree, believed to be over 200 years old. On the way
            back to Fumba Beach, take a refreshing swim in the natural lagoon
            near Kwale Island. Typically, the tour concludes around 4:30 pm.
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafariBlue;
