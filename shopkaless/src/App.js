import React from 'react';
import './App.css';
import "./assets/css/style.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Routers from './routers/Routers';
import Context from './context/Context';

const showMenu = (routers) => {
    let result = null;
    if (routers.length > 0) {
        result = routers.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}></Route>
            )
        })
    }
    return result
}

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Context>
                        {showMenu(Routers)}
                    </Context>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
