// eslint-disable-next-line no-unused-vars
import React from "react";

import SignUpModule from "../../components/AuthModule/SignUpModule";

import "./PageAuth.css";

function PageAuth() {
  return (
    <div id="page-auth">
      <h1>Page d'authentification</h1>

      <div className="auth-container">
        <div className="auth-signup">
          <h2>S'inscrire</h2>
          <SignUpModule />
        </div>
        <div className="auth-signin">
          <h2>Se connecter</h2>
        </div>
      </div>
    </div>
  );
}

export default PageAuth;
