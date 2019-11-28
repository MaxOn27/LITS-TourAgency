import React from "react";
import { homeContent } from "../Data/Data";

export default function Company() {
  return (
    <div className="company-wrapper">
      <p className="paragraph-company">{homeContent.company.paragraph}</p>
      <img className="img-company" src={homeContent.company.photo} alt="..." />
      <h3 className="title-company">{homeContent.company.title}</h3>
      <p className="paragraph-company">
        <span className="heading-aboutUs"><i class="fa fa-suitcase"></i>{homeContent.company.heading1}</span>
        {homeContent.company.paragraph2}
      </p>
      <p className="paragraph-company">
        <span className="heading-aboutUs"><i class="fa fa-fighter-jet"></i>{homeContent.company.heading2}</span>
        {homeContent.company.paragraph3}
      </p>
      <p className="paragraph-company">
        <span className="heading-aboutUs"><i class="fa fa-bus"></i>{homeContent.company.heading3}</span>
        {homeContent.company.paragraph4}
      </p>
      <p className="paragraph-company">
        <span className="heading-aboutUs"><i class="fa fa-ship"></i>{homeContent.company.heading4}</span>
        {homeContent.company.paragraph5}
      </p>
    </div>
  );
}
