const fromEvent = require('graphcool-lib').fromEvent;

export default async event => {
    const player = event.data.player;
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');

    try{
        const user = await api.request(`
            query {
                User(id: "${player}") {
                    cash {
                        id
                        cash
                    }
                    id
                }
            }
        `);

        // if (user.cash) {
        //     return {
        //         data: {
        //             id: user.cash.id,
        //             cash: user.cash.cash,
        //             message: 'OK',
        //             status: 200
        //         }
        //     }
        // }
        //
        // const count = await api.request(`
        //     mutation {
        //         createCount(authorId: "${player}") {
        //             id
        //             cash
        //         }
        //     }
        // `);

        return {
            data: {
                id: user.cash.id,
                cash: user.cash.cash,
                message: 'OK',
                status: 200
            }
        }

    } catch (error) {
        return {
            data: {
                id: player,
                cash: user,
                message: error.message,
                status: 500,
            }
        };
    }
}