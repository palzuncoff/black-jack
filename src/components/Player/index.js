import React, { Component } from 'react';
import './index.css';
import Card from '../Card';
import PropTypes from 'prop-types';

class Player extends Component {
    render() {
        return (
          <section className={this.props.player.className}>
              <ul className="player__list">
                  {this.props.player.cards.map(card =>
                    <li className="player__li" key={card.id}>
                        <Card nominal={card.nominal} suit={card.suit} />
                    </li>
                  )}
              </ul>
          </section>
        )
    }
}

Player.propTypes = {
    className: PropTypes.string,
    cards: PropTypes.array
};

export default Player;