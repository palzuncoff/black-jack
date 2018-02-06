const fromEvent = require('graphcool-lib').fromEvent;
const shaffle = require('lodash.shuffle');

const addDecks = (num, deck) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        result = [ ...result, ...deck ]
    }
    return result
};
const createDeck = (suits, cards) => {
    const result = [];
    suits.forEach(suit => {
        cards.forEach(card => {
            const Card = { ...card, suit };
            result.push(Card)
        })
    });
    return result;
};
const numbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
    return { dignity: `${num}`, value: num, altValue: num };
});
const cards = [
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
const CARD_DECK = createDeck(suits, cards);
const EIGHT_DECKS = addDecks(8, CARD_DECK);

export default async event => {

    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');
    const deck = shaffle(EIGHT_DECKS);

    try{
        await deck.forEach(card => {
            api.request(`
                mutation {
                    createCard(
                        dignity: "${card.dignity}"
                        value: ${card.value}
                        altValue: ${card.altValue}
                        suit: "${card.suit}"
                    ) {
                        id
                    }
                }`);
        });

        return {
            data: {
                message: 'OK',
                status: 200,
            }
        };
    } catch (error){
        return {
            data: {
                message: error.message,
                status: 500,
            }
        };
    };
}