import React from 'react';
import ChipGroup from '../ChipGroup';

function ChipList(props) {
    const {chips} = props;
    return (
      <div>
          <ChipGroup chips={10} />
      </div>
    )
}

export default ChipList