const request = require('supertest');
const app = require('./index'); // dein Express-App

describe('GET /api/notes', () => {
  it('should return notes as JSON', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /api/notes', () => {
  it('should create a new note', async () => {
    const newNote = {
      content: 'Test note content',
      important: true
    };

    const res = await request(app)
      .post('/api/notes')
      .send(newNote);

    expect(res.statusCode).toBe(200);
    expect(res.body.content).toBe('Test note content');
    expect(res.body.important).toBe(true);
  });
});
