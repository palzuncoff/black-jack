import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tachyons'
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import registerServiceWorker from './registerServiceWorker';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_SIMPLE_API });

const middlewareLink = setContext(() => ({
    headers: {
        authorization: `Bearer ${localStorage.getItem('graphcoolToken')}` || null,
    }
}));

const authenticatedLink = middlewareLink.concat(httpLink);

const client = new ApolloClient({
    link: authenticatedLink,
    cache: new InMemoryCache()
});

ReactDOM.render((
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>

    ),
    document.getElementById('root')
);
registerServiceWorker();
