import React from 'react';

function CustomTitle(props) {
    return (
        <div className="custom-title">
            <div className="custom-title__box col-lg-4 col-md-6 col-sm-10">
                <h3 className="custom-title__heading">
                    <span> {props.title}</span>
                </h3>
                <span className="custom-title__desc">{props.desc}</span>
            </div>

        </div>

    );
}

export default CustomTitle;