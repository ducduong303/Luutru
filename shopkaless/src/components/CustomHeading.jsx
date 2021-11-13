import React from 'react';
import cutter from "../assets/images/cutter.png";
function CustomHeading(props) {
    return (
        <div className="custom-heading">
            <div className="container custom-heading__inner"  style={{backgroundImage:`url(${cutter})`}}>
                <div className="custom-heading__content">
                    <h2>FREE UK DELIVERY + RETURN OVER £85.00 (EXCLUDING HOMEWARE) | FREE UK COLLECT FROM STORE</h2>
                </div>
            </div>
        </div>
    );
}

export default CustomHeading;