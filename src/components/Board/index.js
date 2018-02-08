import React, { Component } from 'react';
import './index.css';
import Back from '../../img/SVG-cards/card-back.svg';
import Card from '../Card';

class Board extends Component {
    render() {
        return (
          <div>

              {/* Dealer */}
              <section className="dealer">
                  <ul className="dealer__list">
                      <li className="dealer__li">
                          <Card nominal='five' suit='Hearts' />
                      </li>
                      <li className="dealer__li">
                          <img src={Back} alt="card" className="dealer__card" />
                      </li>
                  </ul>
              </section>

              {/* Player 1 */}
              <section className="player-1">
                  <ul className="player__list">
                      <li className="player__li">
                          <Card nominal='jack' suit='Hearts' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Spades' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Clubs' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Diamonds' />
                      </li>
                  </ul>
              </section>

              {/* Player 2 */}
              <section className="player-2">
                  <ul className="player__list">
                      <li className="player__li">
                          <Card nominal='jack' suit='Hearts' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Spades' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Clubs' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Diamonds' />
                      </li>
                  </ul>
              </section>

              {/* Player 3 */}
              <section className="player-3">
                  <ul className="dealer__list">
                      <li className="player__li">
                          <Card nominal='jack' suit='Hearts' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Spades' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Clubs' />
                      </li>
                      <li className="player__li">
                          <Card nominal='jack' suit='Diamonds' />
                      </li>
                  </ul>
              </section>
          </div>
        );
    }
}

export default Board;