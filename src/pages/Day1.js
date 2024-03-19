import MealsSymbol from "../components/MealsSymbol";
import ContactIcon from "../components/ContactIcon";
import FullDayWildlifeTour from "../components/FullDayWildlifeTour";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import "./Day1.css";

const Day1 = () => {
  return (
    <div className="day1">
      <img className="path-24-icon" alt="" src="/path-24.svg" />
      <img className="path-20-icon1" alt="" src="/path-20.svg" />
      <section className="frame-parent5">
        <div className="rectangle-parent2">
          <div className="frame-child6" />
          <div className="robust-x-safari-jeeper">
            <div className="frame-parent6">
              <img
                className="frame-child7"
                loading="lazy"
                alt=""
                src="/group-14.svg"
              />
              <b className="ground-transportation-in-container">
                <p className="ground-transportation">{`Ground Transportation `}</p>
                <p className="in-robust">In robust 4x4 Safari Jeep</p>
              </b>
            </div>
            <div className="frame-parent7">
              <img
                className="frame-child8"
                loading="lazy"
                alt=""
                src="/group-18.svg"
              />
              <div className="roundtrip-airport-transfer-lab">
                <b className="round-trip-airport-transfer">
                  Round-trip Airport transfer
                </b>
              </div>
            </div>
          </div>
          <MealsSymbol />
          <div className="frame-parent8">
            <div className="excluded-wrapper">
              <div className="excluded">EXCLUDED</div>
            </div>
            <div className="frame-parent9">
              <div className="frame-wrapper1">
                <div className="frame-wrapper2">
                  <div className="path-22-parent">
                    <img
                      className="path-22-icon"
                      loading="lazy"
                      alt=""
                      src="/path-22.svg"
                    />
                    <div className="f-a-q-title" />
                  </div>
                </div>
              </div>
              <b className="international-airfare-flight-container">
                <p className="international-airfare">{`International Airfare: `}</p>
                <p className="flights-to-and">{`Flights to and from your home country are typically `}</p>
                <p className="not-included-optional">
                  not included. Optional excursions and activities e.g Hot Air
                  Balloon
                </p>
              </b>
            </div>
          </div>
          <div className="frame-parent10">
            <div className="contact-icon-parent">
              <ContactIcon alcoholicBeveragesAndSoft="Alcoholic beverages and soft drinks" />
              <ContactIcon
                alcoholicBeveragesAndSoft="Gratuities (tips)"
                propAlignSelf="unset"
                propWidth="439.5px"
                propPadding="23.100000000000364px 0px 0px"
                propMinWidth="209px"
              />
            </div>
            <div className="adventure-funds">
              <div className="frame-parent11">
                <div className="frame-wrapper3">
                  <div className="path-22-group">
                    <img
                      className="path-22-icon1"
                      loading="lazy"
                      alt=""
                      src="/path-22.svg"
                    />
                    <div className="travel-insurance" />
                  </div>
                </div>
                <div className="english-speaking-guide">
                  <b className="personal-funds-for-container">
                    <p className="personal-funds-for">
                      Personal funds for souvenirs and additional purchases
                    </p>
                  </b>
                </div>
              </div>
              <div className="frame-parent12">
                <div className="frame-wrapper4">
                  <div className="path-22-container">
                    <img
                      className="path-22-icon2"
                      loading="lazy"
                      alt=""
                      src="/path-22.svg"
                    />
                    <div className="day-arusha-to-serengeti" />
                  </div>
                </div>
                <div className="day-serengeti-national-park">
                  <b className="travel-insurance-sleeping">
                    Travel insurance , Sleeping bags
                  </b>
                </div>
              </div>
            </div>
          </div>
          <FullDayWildlifeTour />
        </div>
        <div className="frame-wrapper5">
          <div className="frame-parent13">
            <div className="itinerary-parent">
              <h3 className="itinerary">ITINERARY</h3>
              <div className="second-travel-day">
                <div className="day-1">Day 1: Lake Manyara National Park</div>
              </div>
            </div>
            <div className="day-21">Day 2: Ngorongoro Crater</div>
          </div>
        </div>
        <div className="day-1-arusha-to-serengeti-na-wrapper">
          <h3 className="day-11">{`DAY 1 : Lake Manyara National Park  `}</h3>
        </div>
      </section>
      <FrameComponent8 />
      <section className="frame-parent14">
        <img
          className="frame-child9"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
        <div className="serengeti-itinerary">
          <div className="day-serengeti2" />
          <div className="prepare-for-a1">
            After breakfast, embark on a full-day game drive in the Ngorongoro
            Crater, equipped with picnic lunch boxes. Witness the incredible
            annual migration of wildebeest, zebras, and gazelles in this world's
            largest caldera. Discover the area's wildlife significance,
            including threatened species, and its role in human evolution, with
            early hominid footprints datingback 3.6 million years. In the
            afternoon, return to Arusha, concluding your unforgettable safari
            filled with breathtaking wildlife and geological marvels.
          </div>
        </div>
      </section>
      <FrameComponent7 />
    </div>
  );
};

export default Day1;
