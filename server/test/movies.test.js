const superTest = require('supertest')
const url = 'http://localhost:8080'


describe("UPDATE /moves/{id}", () => {
    it("shold return 200 and change movies", () => {
        return superTest(url)
            .put('/movies/4')
            .expect(200)
            .then(response =>{
                expect(response.body.message).toRqual("successfully changed")
            })
    })

    it("shold return 404 with message 'The movies was not found'", () => {
        return superTest(url)
            .put('/movies/4')
            .expect(404)
            .then(response =>{
                expect(response.body.message).toRqual("The movies was not found")
            })
    })
})