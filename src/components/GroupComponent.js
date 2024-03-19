import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent.css";

const GroupComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <section className="frame-parent28">
      <img
        className="frame-child27"
        loading="lazy"
        alt=""
        src="/group-73@2x.png"
      />
      <div className="what-adventures-await2">
        <h3 className="what-adventures-await3">WHAT ADVENTURES AWAIT?</h3>
      </div>
      <div className="picture-this-elephants-casual-parent">
        <div className="picture-this-elephants-container">
          <p className="picture-this-elephants">
            Picture this: elephants casually munching on acacia trees right
            outside your tent,the rumble of gentle waves in the distance – just
            another day that makes you say Hakuna Matata.
          </p>
          <p className="our-safaris-arent">{`Our safaris aren't your average sightseeing tours; they're up-close encounters with iconic wildlife and breathtaking  andmarks! Get ready for game drives that take you through Serengeti National Park, the Ngorongoro Crater, and other world-famous wildlife reserves. Fancy tracking chimpanzees? We've got you covered in Gombe Stream National Park. How about a walking safari in Tarangire National Park? Join us on our 7 day tour of the Park. `}</p>
          <p className="for-those-seeking">
            For those seeking a more relaxed getaway, explore our beach packages
            to the enchanting islands of Zanzibar and Pemba.Dive into
            crystal-clear waters, snorkel amidst vibrant coral reefs, and soak
            up the sun on pristine beaches. Discover the rich culture of these
            islands as you unwind in paradise. Whether you're craving thrilling
            safaris or serene beach retreats, our diverse offerings ensure an
            unforgettable experience.
          </p>
        </div>
        <div className="frame-wrapper8">
          <button className="rectangle-parent17" onClick={onGroupButtonClick}>
            <div className="frame-child28" />
            <div className="start-your-journey">Start Your Journey</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
