import React, { Component } from 'react';
import nine_of_diamonds from './SVG-cards/9_of_diamonds.svg';
import CardBack from './SVG-cards/Card_back_01.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="field">
                <h1>BLACK JACK</h1>
                <h6> Dealer must draw to 16 and stand on all 17s</h6>
                <h6>PAYS <span class="number">3</span> to <span class="number">2</span></h6>
                <div class="flex-container">
                    <div><img src={nine_of_diamonds} alt="" class="card" /></div>
                    <div><img src={CardBack} alt="" class="card" /></div>
                </div>
                <div class="table-spliter"></div>
                <div class="flex-container">
                    <div><img src={nine_of_diamonds} alt="" class="card" /></div>
                    <div><img src={nine_of_diamonds} alt="" class="card" /></div>
                </div>
            </div>
        );
    }
}

export default App;
