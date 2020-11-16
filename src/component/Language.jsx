import React from 'react';
import '../style/description.css'

const Language = () => {
    return (
        <div className="container mt">
            <div className="row clients centered">
                <p className="mb col-12 ">Languages et framework/library :</p>
                <div className="col-sm-2 col-sm-offset-1">
                    <img
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png"
                        alt=""/>
                </div>
                <div className="col-sm-2 ">
                    <img
                        src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
                        alt=""/>
                </div>
                <div className="col-sm-2 ">
                    <img
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"
                        alt=""/>
                </div>
                <div className="col-sm-2 ">
                    <img
                        src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png"
                        alt=""/>
                </div>
                <div className="col-sm-2 ">
                    <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/php_icon_130857.png" alt=""/>
                </div>
                <div className="col-sm-2 ">
                    <img
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/symfony_original_wordmark_logo_icon_146328.png"
                        alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Language;