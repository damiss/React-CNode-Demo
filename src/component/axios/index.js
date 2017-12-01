import axios from 'axios'

// 为给定 ID 的 user 创建请求
axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
axios.create({
    timeout: 500
});

export default axios;