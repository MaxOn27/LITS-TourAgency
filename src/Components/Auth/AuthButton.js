import React from "react";
import { useHistory, Link } from "react-router-dom";
import fakeAuth from "./fakeAuth";

export default function AuthButton() {
    let history = useHistory();
    
    return fakeAuth.isAuthenticated ? (
        <Link to = ""
        className="Auth"
        onClick={() =>{
            fakeAuth.signout(() => history.push("/"));
        }}
        >
            Log out
        </Link>
    ) : (
        <p className="authent">E-mail: email and password: password</p>
    );
}