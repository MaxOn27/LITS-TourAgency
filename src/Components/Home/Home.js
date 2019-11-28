import React, { useEffect, useState } from "react";
import { homeContent } from "../Data/Data";
import { Link } from "react-router-dom";

const url = "https://practice-bizico-api.herokuapp.com/api/countries";

function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => setData(data))
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && (
        <img className="loading" src={homeContent.gifs} alt="..." />
      )}
      {data && !isLoading && (
        <div className="home-content">
          <div className="MoTo">
            <h2>{homeContent.CONTENT.moto}</h2>
          </div>
          <div className="wrapper">
            <ul className="wrapper-list">
              {data.map(item => (
                <li className="list">
                  <Link
                    className="list-of-countries"
                    to={`/Countries/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <footer className="footer">
            <p>
              <a
                key="instagram"
                href="https://www.instagram.com/"
                className="contacts"
              >
                <i className="fa fa-instagram">
                  <span className="social-network-name">
                    {homeContent.contactINFO.insta}
                  </span>
                </i>
              </a>
              <a
                key="telegram"
                href="https://web.telegram.org/#/login"
                className="contacts"
              >
                <i className="fa fa-telegram">
                  <span className="social-network-name">
                    {homeContent.contactINFO.teleg}
                  </span>
                </i>
              </a>
              <a key="social" href="/" className="contacts">
                <i className="fa fa-github">
                  <span className="social-network-name">
                    {homeContent.contactINFO.github}
                  </span>
                </i>
              </a>
              <h3 className="rights">{homeContent.rights}</h3>
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default Home;
