import React from 'react';
import ReactDOM from 'react-dom';
import { WebSocketLink } from 'apollo-link-ws';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tachyons'
import { ApolloProvider } from 'react-apollo';
import { split } from 'apollo-client-preset';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_SUBSCRIPTIONS_API,
    options: {
        reconnect: true
    }
});

const httpLink = new HttpLink({ uri: process.env.REACT_APP_SIMPLE_API });

const middlewareLink = setContext(() => ({
    headers: {
        authorization: `Bearer ${localStorage.getItem('graphcoolToken')}` || null,
    }
}));

const authenticatedLink = middlewareLink.concat(httpLink);

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    authenticatedLink,
);

const client = new ApolloClient({
    link,
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
