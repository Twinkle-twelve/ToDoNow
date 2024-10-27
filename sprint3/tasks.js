// 设置提醒
async function setReminder(eventId, reminderTime) {
    const response = await fetch(`/api/reminders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId, reminderTime })
    });
    const result = await response.json();
    alert(result.message);
}

// 监听设置提醒按钮
document.getElementById('set-reminder-btn').addEventListener('click', () => {
    const eventId = /* 获取事件ID */;
    const reminderTime = document.getElementById('reminder-time').value;
    setReminder(eventId, reminderTime);
});
