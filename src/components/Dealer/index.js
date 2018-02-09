import React, { Component } from 'react';
import './index.css';
import Card from '../Card';
import PropTypes from 'prop-types';

class Dealer extends Component {
    render() {
        return (
          <section className={this.props.dealer.className}>
              <ul className="dealer__list">
                  {this.props.dealer.cards.map(card =>
                    <li className="dealer__li" key={card.id}>
                        <Card nominal={card.nominal} suit={card.suit} />
                    </li>
                  )}
              </ul>
          </section>
        )
    }
}

Dealer.propTypes = {
    className: PropTypes.string,
    cards: PropTypes.array
};

export default Dealer;