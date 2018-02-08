const fromEvent = require('graphcool-lib').fromEvent;

export default async event => {
    const player = event.data.player;
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');

    try{
        const cards = await api.request(`
            query {
                allCards(first: 1) {
                    id
                    altValue
                    dignity
                    suit
                    value
                }
            }`
        );

        const Cards = [ ...cards.allCards ];

        if (Cards.length > 0) {
            for(let i = 0; i < Cards.length; i++){
                await api.request(`
                    mutation {
                        createTable(
                            altValue: ${Cards[i].altValue}
                            cardId: "${Cards[i].id}"
                            dignity: "${Cards[i].dignity}"
                            player: "${player}"
                            suit: "${Cards[i].suit}"
                            value: ${Cards[i].value}
                        ) {
                            altValue
                            cardId
                            dignity
                            player
                            suit
                            value
                        }
                    }`);

                await api.request(`
                    mutation {
                        deleteCard(id: "${Cards[i].id}") {
                            id
                        }
                    }`);
            }

            return{
                data: {
                    message: player,
                    status: 200,
                }
            }

        }

        return{
            data: {
                message: 'Deck is empty',
                status: 400,
            }
        }


    } catch (error) {
        return {
            data: {
                message: error.message,
                status: 500,
            }
        };
    };
}