import React, { Component } from 'react';
import Dealer from "../Dealer";
import Player from '../Player';
import PropTypes from 'prop-types';

class Board extends Component {
    state = {
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
    };
    render() {
        return (
          <div>
              <Dealer dealer={this.state.dealer} />
              <Player player={this.state.player1} />
              <Player player={this.state.player2} />
              <Player player={this.state.player3} />
          </div>
        );
    }
}

Board.propTypes = {
    dealer: PropTypes.array,
    player: PropTypes.array
};

export default Board;