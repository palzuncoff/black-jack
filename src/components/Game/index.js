import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import './index.css';
import Board from "../Board";
import Chatbox from '../Chatbox';
import PropTypes from 'prop-types';

class Game extends Component {
    state = {
        from: 'anonymous',
        content: '',
        board: {
            dealer: {
                className: 'dealer',
                cards: [
                    {
                        id: 1,
                        suit: "Hearts",
                        nominal: "ace"
                    },
                    {
                        id: 2,
                        suit: "Back",
                        nominal: "back"
                    }
                ],
            },
            player1: {
                className: 'player-1',
                cards: [
                    {
                        id: 1,
                        suit: "Hearts",
                        nominal: "queen"
                    },
                    {
                        id: 2,
                        suit: "Spades",
                        nominal: "queen"
                    },
                    {
                        id: 3,
                        suit: "Clubs",
                        nominal: "queen"
                    },
                    {
                        id: 4,
                        suit: "Diamonds",
                        nominal: "queen"
                    },
                ],
            },
            player2: {
                className: 'player-2',
                cards: [
                    {
                        id: 1,
                        suit: "Hearts",
                        nominal: "king"
                    },
                    {
                        id: 2,
                        suit: "Spades",
                        nominal: "king"
                    },
                    {
                        id: 3,
                        suit: "Clubs",
                        nominal: "king"
                    },
                    {
                        id: 4,
                        suit: "Diamonds",
                        nominal: "king"
                    },
                ],
            },
            player3: {
                className: 'player-3',
                cards: [
                    {
                        id: 1,
                        suit: "Hearts",
                        nominal: "jack"
                    },
                    {
                        id: 2,
                        suit: "Spades",
                        nominal: "jack"
                    },
                    {
                        id: 3,
                        suit: "Clubs",
                        nominal: "jack"
                    },
                    {
                        id: 4,
                        suit: "Diamonds",
                        nominal: "jack"
                    },
                ],
            },
        }
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
            <div>
                <Board board={this.state.board} />
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

Game.propTypes = {
    board: PropTypes.array
};

export default compose(
    graphql(ALL_CHATS_QUERY, { name: 'allChatsQuery' }),
    graphql(CREATE_CHAT_MUTATION, { name: 'createChatMutation' }),
    graphql(NEW_DECK, { name: 'newDeck' })
)(Game);
