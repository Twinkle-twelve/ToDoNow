const Reminder = require('../models/reminder');

// 设置提醒
exports.setReminder = async (req, res) => {
    const { eventId, reminderTime } = req.body;
    try {
        const reminder = new Reminder({ eventId, reminderTime, userId: req.user.id });
        await reminder.save();
        res.json({ message: '提醒设置成功' });
    } catch (error) {
        res.status(500).json({ message: '设置提醒失败' });
    }
};

// 获取提醒
exports.getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find({ userId: req.params.userId });
        res.json(reminders);
    } catch (error) {
        res.status(500).json({ message: '获取提醒失败' });
    }
};
