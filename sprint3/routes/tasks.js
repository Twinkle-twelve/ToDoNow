const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// 获取所有任务
router.get('/', tasksController.getAllTasks);

// 过滤任务
router.get('/filter', tasksController.filterTasks);

module.exports = router;
