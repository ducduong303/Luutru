import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
function HeaderTitlte(props) {
    return (
        <div className="header__title">
            <div className="container">
                <h4>Home<FiChevronsRight /><span>{props.section}</span><FiChevronsRight /> <span>{props.title}</span> </h4>
            </div>
            
        </div>
    );
}

export default HeaderTitlte;