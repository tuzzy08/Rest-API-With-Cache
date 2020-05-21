const request = require('supertest');
const app = require('../app');

describe('Testimg index route', () => {
	it('should return status 200', async () => {
		const response = await request(app).get('/');

		expect(response.statusCode).toEqual(200);
	});
});
