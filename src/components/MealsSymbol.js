import "./MealsSymbol.css";

const MealsSymbol = () => {
  return (
    <div className="meals-symbol">
      <div className="included1">INCLUDED</div>
      <div className="tent-icon-parent">
        <div className="tent-icon">
          <div className="frame-parent43">
            <img
              className="frame-child51"
              loading="lazy"
              alt=""
              src="/group-13.svg"
            />
            <div className="breakfast-symbol">
              <b className="accommodation1">Accommodation</b>
            </div>
          </div>
        </div>
        <div className="frame-parent44">
          <img
            className="frame-child52"
            loading="lazy"
            alt=""
            src="/group-18.svg"
          />
          <div className="embark-on-a-day-of-exclusive-s">
            <b className="all-meals-included-container1">
              <p className="all-meals-included1">{`All Meals Included (Breakfast, `}</p>
              <p className="lunch-dinner1">{`Lunch & Dinner) Complimentary `}</p>
              <p className="mineral-water2">
                <span className="mineral-water3">Mineral water</span>.
              </p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsSymbol;
