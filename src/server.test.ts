import request from 'supertest'; // supertestはテストを簡単に行うツール
import server from './server'; // 修正されたserver.tsからExpressアプリケーションをインポート

describe('GET /', () => {
  it('should return Hello, world!', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});

describe('GET /api', () => {
  it('should return a list of fruits', async () => {
    const response = await request(server).get('/api');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(4); // 4つのフルーツが返されることを確認
    expect(response.body[0]).toHaveProperty('id', 1);
    expect(response.body[0]).toHaveProperty('name', 'りんご');
    expect(response.body[0]).toHaveProperty('price', 200);
  });
});

afterAll(() => {
    server.close();
});