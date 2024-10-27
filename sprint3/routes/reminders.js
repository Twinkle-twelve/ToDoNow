const express = require('express');
const router = express.Router();
const remindersController = require('../controllers/remindersController');

// 设置提醒
router.post('/', remindersController.setReminder);

// 获取提醒
router.get('/:userId', remindersController.getReminders);

module.exports = router;
