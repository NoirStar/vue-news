import axios from 'axios'

// 1. http req & res 와 관련한 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. api 함수들을 정리
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemsList(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}



export {
    fetchUserInfo,
    fetchItemsList,
    fetchList
}