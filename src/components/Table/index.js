import React, { Component } from 'react';
import nine_of_diamonds from '../../SVG-cards/9_of_diamonds.svg';
import CardBack from '../../SVG-cards/Card_back_01.svg';
import './index.css';
import Game from '../Game';

class Table extends Component {
    render() {
        return (
            <div className="field">
                <h1>BLACK JACK</h1>
                <h6> Dealer must draw to 16 and stand on all 17s</h6>
                <h6>PAYS <span className="number">3</span> to <span className="number">2</span></h6>
                <div className="flex-container">
                    <div><img src={nine_of_diamonds} alt="" className="card" /></div>
                    <div><img src={CardBack} alt="" className="card" /></div>
                </div>
                <div className="table-spliter" />
                <div className="flex-container">
                    <div><img src={nine_of_diamonds} alt="" className="card" /></div>
                    <div><img src={nine_of_diamonds} alt="" className="card" /></div>
                </div>
                <div>
                    <Game />
                </div>
            </div>
        );
    }
}

export default Table;
