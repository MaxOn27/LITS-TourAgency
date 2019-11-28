import React from "react";
import { homeContent } from "../Data/Data"
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return(
        <div className="error">
            <img src={homeContent.error} alt="..."/>
            <Link to="/" className="back">Click here</Link>
        </div>
    );
}
export default ErrorPage;