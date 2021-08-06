import React from 'react';
import '../style/header.css'

const Header = () => {
    return (
        <div id="hader">

            <nav class="navbar navbar-expand-lg navbar-light bg-light sm-2">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href='#description'>Description <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#languages">Languages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Me contacter</a>
                </li>
                </ul>
            </div>
            </nav>
            

            <div className="container centered img_background">
                <div className="row">
                    <div className="col col-md-offset-2 profil">
                        <img src="data:image/jpeg;base64,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" alt="logo" className="logo"/>
                        <h1>NIEUWJAER Mathias </h1>
                        <h2>Développeur WEB</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;