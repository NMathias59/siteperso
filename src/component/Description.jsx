import React from 'react';
import '../style/description.css'

const Description = () => {
    return (
        <div id="description">
            <div className="container ptb">
                <div className="row">
                    <h2 className="centered mb col-md-12"><br/>
                    </h2>
                    <div className="col">
                        <p>Développeur web; je maîtrise PHP sur du back-end(symphonie, API plateforme, NodeJs..) ainsi que REACT & REDUX.
Actuellement en recherche d'emploi, je recherche une entreprise où je pourrais déverser le meilleur de mes compétences tout en intégrant un process et des équipes. Autonome, rigoureux et enthousiaste, j'ai à coeur de m'intégrer à vos équipes et à vos process.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row clients centered description">
                    <div className="col-sm-2 col-sm-offset-1">
                        <a href="https://drive.google.com/file/d/13ZG0mt2bsIJ4cz6acsXFgrWTkFPVrOVS/view?usp=sharing" target="_blank">
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/business-people-part-2-1/64/resume-256.png"/>
                        </a>
                        <p>cv</p>
                    </div>
                    <div className="col-sm-2 ">
                        <a href="https://www.linkedin.com/in/mathias-nieuwjaer/" target="_blank">
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png"/>
                        </a>
                        <p>linkedin</p>
                    </div>

                    <div className="col-sm-2 ">
                        <a href="https://github.com/NMathias59" target="_blank">
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-128.png"/>
                        </a>
                        <p>github</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Description;