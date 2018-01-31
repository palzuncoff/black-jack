import React from 'react';
import './style.css';
import Chip from '../Chip';

export default function ChipGroup({ chips }) {

    const chipGroupElements = [];

    for (let i = 1; i < chips; i++) {
        chipGroupElements.push(
          <li key={i} className={'chips__' + i}>
              <Chip />
          </li>
        );
    }
    return (
      <ul className="chips__list">
          {chipGroupElements}
      </ul>
    )
}