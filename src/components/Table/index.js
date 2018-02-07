import React, { Component } from 'react';
import './index.css';
import Game from '../Game';
import nine_of_diamonds from '../../img/SVG-cards/9_of_diamonds.svg';
import CardBack from '../../img/SVG-cards/card-back.svg';
import Card from '../Cards/Card';

class Table extends Component {
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
                          <img src={CardBack} alt="card" className="dealer__card" />
                      </li>
                  </ul>
              </section>

              {/* Player 1 */}
              <section className="player-1">
                  <ul className="player__list">
                      <li className="player__li">
                          <img src={nine_of_diamonds} alt="card" className="player__card" />
                      </li>
                  </ul>
              </section>

              {/* Player 2 */}
              <section className="player-2">
                  <ul className="player__list">
                      <li className="player__li">
                          <img src={nine_of_diamonds} alt="card" className="player__card" />
                      </li>
                      <li className="player__li">
                          <img src={nine_of_diamonds} alt="card" className="player__card" />
                      </li>
                  </ul>
              </section>

              {/* Player 3 */}
              <section className="player-3">
                  <ul className="dealer__list">
                      <li className="player__li">
                          <img src={nine_of_diamonds} alt="card" className="player__card" />
                      </li>
                      <li className="player__li">
                          <img src={nine_of_diamonds} alt="card" className="player__card" />
                      </li>
                  </ul>
              </section>

              {/* Game */}
              <Game />
          </div>
        );
    }
}

export default Table;
