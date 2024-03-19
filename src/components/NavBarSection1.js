import { useCallback } from "react";
import "./NavBarSection1.css";

const NavBarSection1 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "TravelQuote" to the project
  }, []);

  return (
    <header className="navbar-section">
      <img className="path-23-icon" alt="" src="/path-23.svg" />
      <img
        className="navbar-section-child"
        loading="lazy"
        alt=""
        src="/group-53.svg"
      />
      <div className="y-o-u-r-gateway-to-unforgettab">
        <div className="rectangle-parent16" onClick={onGroupContainerClick}>
          <div className="frame-child25" />
          <div className="customize-your-trip">Customize Your Trip</div>
        </div>
      </div>
    </header>
  );
};

export default NavBarSection1;
