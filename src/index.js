// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

/* Import statements */
import React from 'react';
import ReactDOM from 'react-dom';

/* App is the entry point to the React code.*/
import App from './pages/home/App';

/* import BrowserRouter from 'react-router-dom' */
// import {Router, Route} from 'react-router-dom';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
        {/*<Route path="/home" component={App}/>*/}
        <Route path="/" component={App}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
