const Task = require('../models/task');

// 获取所有任务
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: '获取任务失败' });
    }
};

// 过滤任务（可选）
exports.filterTasks = async (req, res) => {
    const { status } = req.query;
    try {
        const tasks = await Task.find({ userId: req.user.id, status });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: '获取过滤任务失败' });
    }
};
