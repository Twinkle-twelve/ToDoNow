const request = require('supertest');
const app = require('../app');
const Reminder = require('../models/reminder');

describe('提醒 API', () => {
    it('应设置提醒', async () => {
        const res = await request(app)
            .post('/api/reminders')
            .send({ eventId: 'someEventId', reminderTime: new Date() });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('提醒设置成功');
    });

    it('应获取提醒', async () => {
        const userId = 'someUserId';
        const res = await request(app).get(`/api/reminders/${userId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
