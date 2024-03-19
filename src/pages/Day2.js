import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import "./Day2.css";

const Day2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="day2">
      <div className="image-container">
        <div className="back-group" onClick={onGroupContainerClick}>
          <img
            className="back-icon1"
            loading="lazy"
            alt=""
            src="/back@2x.png"
          />
          <div className="back1">Back</div>
        </div>
      </div>
      <section className="dropdown-menu">
        <h1 className="day-serengeti-camping">4-Day Lodge Safari</h1>
      </section>
      <FrameComponent9 />
      <div className="itinerary-wrapper">
        <h3 className="itinerary1">ITINERARY</h3>
      </div>
      <section className="data-aggregator">
        <div className="input-filter">
          <div className="day-12">Day 1: Arusha to Lake Manyara</div>
          <div className="day-22">
            Day 2: Lake Manyara to Serengeti National Park
          </div>
          <div className="error-handler">
            <div className="day-3-ngorongoro-crater-parent">
              <div className="day-31">
                Day 3: Serengeti National Park to Ngorongoro Conservation Area
              </div>
              <div className="day-32">
                Day 4: Ngorongoro Conservation Area to Arusha
              </div>
            </div>
            <div className="day-1-arusha-to-serengeti-na-container">
              <h3 className="day-13">Day 1: Arusha to Lake Manyara</h3>
            </div>
          </div>
        </div>
      </section>
      <img className="day-child1" alt="" src="/group-110@2x.png" />
      <section className="day-inner1">
        <div className="frame-parent15">
          <div className="rectangle-parent3">
            <div className="frame-child10" />
            <div className="start-your-adventure1">
              Start your adventure with a morning briefing, then journey to Lake
              Manyara National Park. Marvel at the alkaline Lake Manyara adorned
              with vibrant flamingos and encounter diverse wildlife, including
              monkeys, giraffes, and elephants. Look out for the elusive Manyara
              lions in trees. In the late afternoon, head to the Kirurumu
              Manyara Lodge for overnight accommodation.
            </div>
          </div>
          <div className="day-2-serengeti-national-par-container">
            <h3 className="day-23">
              Day 2: Lake Manyara to Serengeti National Park
            </h3>
          </div>
        </div>
      </section>
      <img className="day-child2" alt="" src="/group-109@2x.png" />
      <section className="day-inner2">
        <div className="frame-parent16">
          <div className="rectangle-parent4">
            <div className="frame-child11" />
            <div className="prepare-for-a2">
              After breakfast, traverse the lush crater highlands, passing the
              Ngorongoro Crater en route to Serengeti National Park. Experience
              the park's varied habitats and landscapes, from plains and
              savannahs to dense bush and wetlands. Witness the unique rock
              formations called Kopjes, often serving as prime hunting grounds
              for predators. Depending on the season, witness the spectacular
              animal migration. Overnight at Kati Kati Tented Camp.
            </div>
          </div>
          <div className="day-3-ngorongoro-crater-wrapper">
            <h3 className="day-3-container">
              <p className="day-3-serengeti">{`Day 3: Serengeti National Park to `}</p>
              <p className="ngorongoro-conservation-area">
                Ngorongoro Conservation Area
              </p>
            </h3>
          </div>
        </div>
      </section>
      <img className="day-child3" alt="" src="/group-109@2x.png" />
      <section className="day-inner3">
        <div className="day-3-ngorongoro-crater-group">
          <h3 className="day-33">
            Day 4: Ngorongoro Conservation Area to Arusha
          </h3>
          <div className="rectangle-parent5">
            <textarea className="rectangle-textarea" rows={20} cols={79} />
            <div className="set-off-on1">
              Early morning game drives in Serengeti offer encounters with
              wildebeests, zebras, and predators like lions, leopards, and
              cheetahs. After a picnic lunch, journey to the majestic Ngorongoro
              Crater for breathtaking views from the rim. Accommodate at Ang’ata
              Ngorongoro Camp on the crater's rim.
            </div>
          </div>
        </div>
      </section>
      <img className="day-child4" alt="" src="/group-109@2x.png" />
      <section className="day-inner4">
        <div className="rectangle-parent6">
          <div className="frame-child12" />
          <div className="set-off-on2">
            Commence the day with an early breakfast before descending into the
            Ngorongoro Crater for an unforgettable wildlife observation. Spot
            the Big Five and a variety of other animals amidst stunning savannah
            terrain. Conclude the morning with a picnic lunch before departing
            for Arusha in the early afternoon, arriving in the evening to wrap
            up an extraordinary safari experience.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Day2;
