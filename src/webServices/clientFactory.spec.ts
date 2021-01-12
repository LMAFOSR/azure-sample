import client from './clientFactory';

it('creates a client for future SOAP calls', () => {
    return client()
        .then((client) => {
            expect(client).toHaveProperty('getStyleFullyConfiguredByStyleId');
            expect(client).toHaveProperty('getOptionKinds');
        });
});