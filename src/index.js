import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


ReactDOM.render((
    <Provider>
        <ConnectedRouter>
        <Switch>
            <Route path="/"/>
        </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
