export const numbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
    return { dignity: `${num}`, value: num, altValue: num };
});
export const cards = [
    {
        dignity: 'ace',
        value: 11,
        altValue: 1,
    },
    {
        dignity: 'jack',
        value: 10,
        altValue: 10,

    },
    {
        dignity: 'queen',
        value: 10,
        altValue: 10,

    },
    {
        dignity: 'king',
        value: 10,
        altValue: 10,

    },
    ...numbers,
];
const suits = [ 'CLUBS', 'DIAMONDS', 'HEARTS', 'SPADES' ];
const CARD_DECK = [];
suits.forEach(suit => {
    cards.forEach(card => {
        const Card = { ...card, suit };
        CARD_DECK.push(Card)
    })
});

export default CARD_DECK;