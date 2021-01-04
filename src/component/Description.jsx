import React from 'react';
import '../style/description.css'

const Description = () => {
    return (
        <div>
            <div className="container ptb">
                <div className="row">
                    <h2 className="centered mb col-md-12"><br/>
                    </h2>
                    <div className="col">
                        <p>Développeur Web, je maitrise PHP ainsi que le framework REACT. Je suis à la recherche d'une
                            entreprise dans laquelle je pourrais exercer mes compétences tout en continuant à progresser
                            sur les technologies d'avant garde. Autonome et rigoureux, je m'intégrerais rapidement à vos
                            équipes.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row clients centered">
                    <div className="col-sm-6 col-sm-offset-1">
                        <a href="https://drive.google.com/file/d/13ZG0mt2bsIJ4cz6acsXFgrWTkFPVrOVS/view?usp=sharing">
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/business-people-part-2-1/64/resume-256.png"/>
                        </a>
                        <p>cv</p>
                    </div>
                    <div className="col-sm-6 ">
                        <a href="https://www.linkedin.com/in/mathias-nieuwjaer/">
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png"/>
                        </a>
                        <p>linkedin</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Description;