import React, {Fragment} from 'react';
import Header from "../component/Header";
import Description from "../component/Description";
import Language from "../component/Language";
import Project from "../component/project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Homepage = () => {
    return (
        <Fragment>
            <Header/>
            <Description/>
            <Language/>
            <Project/>
            <Contact/>
            <Footer/>
        </Fragment>
    );
};

export default Homepage;