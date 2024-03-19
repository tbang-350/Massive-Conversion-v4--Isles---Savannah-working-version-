import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import "./Day6.css";

const Day6 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="day3">
      <section className="day-inner5">
        <div className="frame-parent17">
          <div className="back-container" onClick={onGroupContainerClick}>
            <img
              className="back-icon2"
              loading="lazy"
              alt=""
              src="/back@2x.png"
            />
            <div className="back2">Back</div>
          </div>
          <div className="day-serengeti-camping-tour-container">
            <h1 className="day-serengeti-camping1">6-Day Camp Safari</h1>
          </div>
        </div>
      </section>
      <FrameComponent11 />
      <div className="shape-set">
        <h3 className="itinerary2">ITINERARY</h3>
      </div>
      <FrameComponent10 />
      <section className="decision-tree-root">
        <img
          className="decision-tree-root-child"
          loading="lazy"
          alt=""
          src="/group-111@2x.png"
        />
        <div className="frame-parent18">
          <div className="rectangle-parent7">
            <div className="frame-child13" />
            <div className="start-your-adventure2">
              Begin your safari with a morning journey to the Tarangire National
              Park, a vast wilderness spanning 2,600km². Marvel at the diverse
              landscape, including savannah, seasonal swamps, and iconic baobab
              trees. Encounter a variety of wildlife, with Tarangire being
              renowned for its awe-inspiring elephant herds. Spend the night in
              comfortable tents within the park, surrounded by the enchanting
              wilderness.
            </div>
          </div>
          <div className="day-2-serengeti-national-par-frame">
            <h3 className="day-2-container">
              <p className="day-2-tarangire">
                Day 2: Tarangire National Park to Lake Manyara
              </p>
              <p className="national-park"> National Park</p>
            </h3>
          </div>
        </div>
      </section>
      <img className="day-child5" alt="" src="/group-109@2x.png" />
      <section className="day-inner6">
        <div className="day-3-ngorongoro-crater-container">
          <h3 className="day-34">
            Day 3: Lake Manyara to Serengeti National Park
          </h3>
          <div className="rectangle-parent8">
            <div className="frame-child14" />
            <div className="prepare-for-a3">
              After breakfast, head to Lake Manyara National Park, known for its
              impressive birdlife and enchanting primate-inhabited forests.
              Explore the park's grassy plains and encounter a tapestry of
              wildlife. In the afternoon, set up camp in the culturally diverse
              village of Mto wa Mbu near Lake Manyara, offering opportunities to
              relax by the pool or enjoy a refreshing drink at the bar
            </div>
          </div>
        </div>
      </section>
      <img className="day-child6" alt="" src="/group-109@2x.png" />
      <section className="day-inner7">
        <div className="day-3-ngorongoro-crater-parent1">
          <h3 className="day-35">Day 4: Serengeti National Park</h3>
          <div className="path-quad">
            <div className="path-quad-child" />
            <div className="set-off-on3">
              Travel through the Ngorongoro Conservation Area, pausing to marvel
              at the Ngorongoro Crater. Reach the renowned Serengeti National
              Park, where "endless plains" come to life. Witness the vast
              grassland savannah, iconic kopjes, and the incredible wildebeest
              migration. Spend the night in the central Serengeti, surrounded by
              the harmonious sounds of the African bush.
            </div>
          </div>
        </div>
      </section>
      <section className="custom-shape">
        <img
          className="custom-shape-child"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
        <div className="day-3-ngorongoro-crater-parent2">
          <h3 className="day-3-container1">
            <p className="day-5-serengeti">{`Day 5: Serengeti National Park to Ngorongoro `}</p>
            <p className="conservation-area">Conservation Area</p>
          </h3>
          <div className="rectangle-parent9">
            <div className="frame-child15" />
            <div className="set-off-on4">
              Dedicate the entire day to an exhilarating game drive in the heart
              of the Serengeti. Follow the movements of migrating herds and spot
              iconic wildlife, including wildebeests, zebras, lions, leopards,
              and cheetahs. Conclude the day at a campsite in the Seronera area,
              ensuring you stay close to the action.
            </div>
          </div>
        </div>
      </section>
      <section className="decision-tree-root1">
        <img
          className="decision-tree-root-item"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
        <div className="frame-parent19">
          <div className="rectangle-parent10">
            <div className="frame-child16" />
            <div className="set-off-on5">
              Embark on another thrilling game drive in the Serengeti,
              encountering the revered Big Five. After a scenic picnic lunch,
              head to the magnificent Ngorongoro Crater, where you'll spend the
              night at a campsite on the crater's rim, enjoying splendid views.
            </div>
          </div>
          <div className="day-3-ngorongoro-crater-frame">
            <h3 className="day-3-container2">
              <p className="day-6-ngorongoro">{`Day 6: Ngorongoro Conservation Area `}</p>
              <p className="to-arusha">to Arusha</p>
            </h3>
          </div>
        </div>
      </section>
      <img className="day-child7" alt="" src="/group-109@2x.png" />
      <section className="grid">
        <div className="path-combine">
          <div className="symbol-instance" />
          <div className="set-off-on6">
            Embark on another thrilling game drive in the Serengeti,
            encountering the revered Big Five. After a scenic picnic lunch, head
            to the magnificent Ngorongoro Crater, where you'll spend the night
            at a campsite on the crater's rim, enjoying splendid views.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Day6;
