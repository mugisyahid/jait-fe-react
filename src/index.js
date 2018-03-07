import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { App } from './component/App'

ReactDOM.render((
    <Provider>
        <ConnectedRouter>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
