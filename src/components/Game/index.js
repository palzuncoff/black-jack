import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import './index.css';
import Chatbox from '../Chatbox';

class Game extends Component {
    state = {
        from: 'anonymous',
        content: ''
    };

    componentDidMount() {
        const from = localStorage.getItem('userId');
        from && this.setState({ from });
        this._subscribeToNewChats();
    }

    _createChat = async e => {
        if (e.key === 'Enter') {
            const { content, from } = this.state;
            await this.props.createChatMutation({
                variables: { content, from }
            });
            this.setState({ content: '' });
        }
    };

    _subscribeToNewChats = () => {
        this.props.allChatsQuery.subscribeToMore({
            document: gql`
            subscription {
              Chat(filter: { mutation_in: [CREATED] }) {
                node {
                  id
                  from
                  content
                  createdAt
                }
              }
            }
          `,
            updateQuery: (previous, { subscriptionData }) => {
                const newChatLinks = [
                    ...previous.allChats,
                    subscriptionData.data.Chat.node
                ];
                const result = {
                    ...previous,
                    allChats: newChatLinks
                };
                return result;
            }
        });
    };

    handleStartGame = async () => {
        await this.props.newDeck.updateQuery();
    };

    render() {
        const allChats = this.props.allChatsQuery.allChats || [];
        return (
            <div className="">
                <div className="container">
                    <h2>Chats</h2>
                    {allChats.map(message => (
                        <Chatbox key={message.id} message={message} />
                    ))}

                    {/* Message content input */}
                    <input
                        value={this.state.content}
                        onChange={e => this.setState({ content: e.target.value })}
                        type="text"
                        placeholder="Start typing"
                        onKeyPress={this._createChat}
                    />
                    <button
                        onClick={this.handleStartGame}
                    >START GAME</button>
                </div>
            </div>
        );
    }
}

const ALL_CHATS_QUERY = gql`
    query AllChatsQuery {
        allChats {
            id
            createdAt
            from
            content
        }
    }
`;

const CREATE_CHAT_MUTATION = gql`
    mutation CreateChatMutation($content: String!, $from: String!) {
        createChat(content: $content, from: $from) {
            id
            createdAt
            from
            content
        }
    }
`;

const NEW_DECK = gql`
    query NewDeck {
        newDeck {
            message
            status
        }
    }
`;

export default compose(
    graphql(ALL_CHATS_QUERY, { name: 'allChatsQuery' }),
    graphql(CREATE_CHAT_MUTATION, { name: 'createChatMutation' }),
    graphql(NEW_DECK, { name: 'newDeck' })
)(Game);
