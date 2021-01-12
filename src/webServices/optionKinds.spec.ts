import getClient from './clientFactory';
import getOptionKinds from './optionKinds';

test('Recieve optionKinds with no client', () => {
    return getOptionKinds()
        .then((results) => {
            expect(Array.isArray(Array.from(results))).toBeTruthy();
        });
});

test('Recieve optionKinds with client', (done) => {
    getClient()
        .then((client) => {
            getOptionKinds(client)
                .then((results) => {
                    expect(Array.isArray(Array.from(results))).toBeTruthy();
                    done();
                });
        });
});
