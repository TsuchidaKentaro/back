// server.test.ts

import request from 'supertest'; // Supertest を使用して HTTP リクエストを送信する
import server from './server'; // テスト対象のサーバーファイル

describe('GET /', () => {
  it('responds with "Hello World!"', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello World!');
  });
});

// サーバーのクローズ処理を追加する場合（オプション）
afterAll(done => {
  server.close(done);
});
