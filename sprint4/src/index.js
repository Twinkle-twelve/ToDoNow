import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // 引入全局样式
import './styles/themes.css';  // 引入主题样式
import './styles/components.css'; // 引入组件样式

// 创建根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染主应用组件
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
