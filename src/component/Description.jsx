import React from 'react';
import '../style/description.css'

const Description = () => {
    return (
        <div>
            <div className="container ptb">
                <div className="row">
                    <h2 className="centered mb col-md-12">Concepteur et developpeur de site internet <br/>pour reppondre
                        au besoin demander
                    </h2>
                    <div className="col-md-6">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="col-md-6">
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-offset-1">
                        <img src="https://www.iesamultimedia.fr/sites/default/files/definition_developpement_web.jpg"
                             className="img-responsive" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;