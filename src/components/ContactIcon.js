import { useMemo } from "react";
import "./ContactIcon.css";

const ContactIcon = ({
  alcoholicBeveragesAndSoft,
  propAlignSelf,
  propWidth,
  propPadding,
  propMinWidth,
}) => {
  const contactIconStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const submitButtonLabelStyle = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  return (
    <div className="contact-icon" style={contactIconStyle}>
      <div className="contact-icon-inner">
        <div className="path-22-parent6">
          <img
            className="path-22-icon13"
            loading="lazy"
            alt=""
            src="/path-22.svg"
          />
          <div className="message-input-label" />
        </div>
      </div>
      <div className="submit-button-label" style={submitButtonLabelStyle}>
        <b className="alcoholic-beverages-and2">{alcoholicBeveragesAndSoft}</b>
      </div>
    </div>
  );
};

export default ContactIcon;
