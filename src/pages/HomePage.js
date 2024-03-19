import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import GroupComponent from "../components/GroupComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="mask-group-4-parent">
        <img className="mask-group-4" alt="" />
        <img className="mask-group-3" alt="" />
        <img className="mask-group-2" alt="" />
      </section>
      <img className="mask-group-1" alt="" />
      <img className="homepage-child" alt="" src="/group-38@2x.png" />
      <FrameComponent3 />
      <FrameComponent2 />
      <img className="homepage-item" alt="" src="/group-39@2x.png" />
      <section className="gatewaypicture-group">
        <img
          className="mask-group-17"
          loading="lazy"
          alt=""
          src="/mask-group-17@2x.png"
        />
        <div className="adventuretextgroup">
          <div className="adventuretextgroup-child" />
          <h3 className="your-gateway-to-container">
            <p className="your-gateway-to">YOUR GATEWAY TO UNFORGETTABLE</p>
            <p className="adventures"> ADVENTURES</p>
          </h3>
          <div className="discover-more-with-container">
            <p className="discover-more-with">{`Discover more with Isles & Savannah, where we redefine travel beyond conventional sightseeing. Immerse yourself in the wild beauty of Tanzania, feel the warmth of its people and experience the thrill of adventure.`}</p>
            <p className="we-are-committed">
              We are committed to providing bespoke tour packages tailored to
              your unique interests and budget, whether you crave a safari of a
              lifetime or a rejuvenating beach vacation.
            </p>
            <p className="our-tailor-made-tour">
              Our tailor-made tour packages ensure an unforgettable journey,
              perfectly aligned with your preferences. Whether you're an avid
              wildlife enthusiast or seeking relaxation on the beach, we have
              the ideal experience for you.
            </p>
          </div>
        </div>
      </section>
      <GroupComponent />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default HomePage;
