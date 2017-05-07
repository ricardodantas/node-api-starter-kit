describe('Routes:Index', () => {
    describe('GET /', () => {
        it('return the API status', done => {
            request.get('/')
                .expect(200)
                .end((err, res) => {
                    const expected = { status: 'API Running', version: '1.0.0' };
                    expect(res.body).to.eql(expected);
                    done(err);
                });
        });
    });
});
