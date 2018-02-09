import React, { Component } from 'react';
import Dealer from "../Dealer";
import Player from '../Player';
import PropTypes from 'prop-types';

class Board extends Component {
    render() {
        return (
          <div>
              <Dealer dealer={this.props.board.dealer} />
              <Player player={this.props.board.player1} />
              <Player player={this.props.board.player2} />
              <Player player={this.props.board.player3} />
          </div>
        );
    }
}

Board.propTypes = {
    dealer: PropTypes.array,
    player: PropTypes.array
};

export default Board;