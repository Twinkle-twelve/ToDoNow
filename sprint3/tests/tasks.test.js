const request = require('supertest');
const app = require('../app'); // 假设你的应用在 app.js 中
const Task = require('../models/task');

describe('任务 API', () => {
    it('应返回所有任务', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
