import React from "react";
import "../style/languages.css";

const Language = () => {
  return (
    <div className="languages" id="languages">
      <div className="container">
        <div className="row clients centered">
          <p className="mb col-12 ">Langages et framework/library :</p>

          <div className="col-sm-2 ">
            <a href="https://fr.reactjs.org/" target="_blank">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png"
                alt="react.js"
              />
            </a>
          </div>
          <div className="col-sm-2 ">
            <a href="https://redux.js.org/" target="_blank">
              <img
                src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
                alt="redux"
              />
            </a>
          </div>
          <div className="col-sm-2 ">
            <a href="https://nodejs.org/en/" target="_blank">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png"
                alt="node.js"
              />
            </a>
          </div>
          <div className="col-sm-2 ">
            <a href="https://symfony.com/" target="_blank">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/symfony-128.png"
                alt="symfony"
              />
            </a>
          </div>
          <div className="col-sm-2 ">
            <a href="https://wordpress.com/fr/" target="_blank">
              <img
                src="https://wpformation.com/wp-content/uploads/2019/08/wordpress-brands.png.webp"
                alt="wordpress"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
