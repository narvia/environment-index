export class InMemoryDataService {
    createDb() {
        let devs = [
            {
                id: 1,
                owner: 'Humphrey',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#2b5797'
            },
            {
                id: 2,
                owner: 'Randolph',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#00a300'
            },
            {
                id: 3,
                owner: 'Arnold',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#b91d47'
            },
            {
                id: 4,
                owner: 'Barny',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#ffc40d'
            },
            {
                id: 5,
                owner: 'Alfred',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#9f00a7'
            },
            {
                id: 6,
                owner: 'Unnassigned',
                servicelayer: 'trunk',
                middleware: 'trunk',
                clientengine: 'trunk',
                paymentengine: 'trunk',
                atlas: 'trunk',
                hlgroup: 'trunk',
                colour: '#7e3878'
            },
            {
                id: 7,
                owner: 'John',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#da532c'
            },
            {
                id: 8,
                owner: 'Edward',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#1e7145'
            },
            {
                id: 9,
                owner: 'Freda',
                servicelayer: 'INC-876',
                middleware: 'MA-876',
                clientengine: 'INC-876',
                paymentengine: 'INC-876',
                atlas: 'CHAN-76',
                hlgroup: 'BA-789',
                colour: '#7e3878'
            },
            {
                id: 10,
                owner: 'Unassigned',
                servicelayer: 'trunk',
                middleware: 'trunk',
                clientengine: 'trunk',
                paymentengine: 'trunk',
                atlas: 'trunk',
                hlgroup: 'trunk',
                colour: '#2d89ef'
            }
        ];
        return {devs};
    }
}