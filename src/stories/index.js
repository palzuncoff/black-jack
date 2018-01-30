import React from 'react';
import { storiesOf } from '@storybook/react';
import Chip from '../components/Chips/Chip';
import ChipList from '../components/Chips/ChipList';


const storiesChip = storiesOf('Chip', module);
storiesChip.add('defaul view', () => (<Chip />));

const storiesChipList = storiesOf('ChipList', module);
storiesChipList.add('defaul view', () => (<ChipList />));