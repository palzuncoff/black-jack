const fromEvent = require('graphcool-lib').fromEvent;

export default async event => {
    const player = event.data.player;
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');

    try{
        const tabels = await api.request(`
            query {
                allTables(
                    filter: {
                        OR: [
                            {player: "dealer"},
                            {player: "${player}"}
                        ]
                    }
                ) {
                    id
                }
            }
        `);

        const Cards = [ ...tabels.allTables ];

        if (Cards.length > 0) {
            for(let i = 0; i < Cards.length; i++){
                await api.request(`
                    mutation {
                        deleteTable(
                            id: "${Cards[i].id}"
                        ) {
                            id
                        }
                    }`
                );
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
                message: 'Table is empty',
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
};