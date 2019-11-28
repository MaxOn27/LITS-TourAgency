import React from "react";
import { useParams, Link } from "react-router-dom";
import MOCK_DATA from "../Data/MOCK_DATA";

export default function NorwayCountry(props) {
  let { countryId } = useParams();
  return (
    <div>
      <div className="wrapper-country-content">
        <h1 className="heading">{MOCK_DATA[countryId - 1].info.country}</h1>

        <div>
          <img
            className="img"
            src={MOCK_DATA[countryId - 1].info.photo}
            alt="..."
          />
          {/* <h3 className="title">{MOCK_DATA[countryId - 1].info.title}</h3> */}
          <p className="title-content">
            {MOCK_DATA[countryId - 1].info.paragraph}
          </p>
        </div>
        <div>
          <img
            className="img2"
            src={MOCK_DATA[countryId - 1].info2.photo}
            alt="..."
          />
          {/* <h3 className="title2">{MOCK_DATA[countryId - 1].info2.title}</h3> */}
          <p className="title-content2">
            {MOCK_DATA[countryId - 1].info2.paragraph}
          </p>
        </div>
        {/* <Link className="arrow-right">
          <i class="fa fa-arrow-right"></i>
        </Link> */}
        <Link className="book-btn" to="/registration">
          Book
        </Link>
      </div>
    </div>
  );
}
