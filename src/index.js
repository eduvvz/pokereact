import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './pages/list';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma';

ReactDOM.render( 
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/pokemons" component={About} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
