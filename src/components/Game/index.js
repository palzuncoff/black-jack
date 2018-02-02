// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloLink, split } from 'apollo-client-preset';
// import { WebSocketLink } from 'apollo-link-ws';
// import { getMainDefinition } from 'apollo-utilities';
// import './index.css';
// import Player from './Player';
//
// const wsLink = new WebSocketLink({
//     uri: process.env.REACT_APP_SUBSCRIPTIONS_API,
//     options: {
//         reconnect: true
//     }
// });
//
// const httpLink = new HttpLink({ uri: process.env.REACT_APP_SIMPLE_API });
//
// const link = split(
//     ({ query }) => {
//         const { kind, operation } = getMainDefinition(query);
//         return kind === 'OperationDefinition' && operation === 'subscription';
//     },
//     wsLink,
//     httpLink,
// );
//
// const client = new ApolloClient({
//     link,
//     cache: new InMemoryCache()
// });
//
// class Game extends Component {
//     render() {
//         return (
//             <ApolloProvider client={client}>
//                 <Player />
//             </ApolloProvider>
//         );
//     }
// };
//
// export default Game;
