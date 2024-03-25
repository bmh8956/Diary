import axios from 'axios'

const DIARY_API_URL = 'http://localhost:9000/api/diary';

class DiaryService {

    saveDiary(diary) {
        // console.log(diary)
        return axios
            .post(DIARY_API_URL, diary)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                // 오류 객체 내의 response가 존재한다 = 서버가 오류 응답을 주었다
                if (err.response) {

                    const {status, config} = err.response;

                    // 없는 페이지
                    if (status === 404) {
                        console.log(`${config.url} not found`);
                    }

                    // 서버 오류
                    if (status === 500) {
                        console.log("Server error");
                    }
                    // 요청이 이루어졌으나 서버에서 응답이 없었을 경우
                } else if (err.request) {
                    console.log("Error", err.message);
                    // 그 외 다른 에러
                } else {
                    console.log("Error", err.message);
                }
            });
    }

    async putDiary(diary) {
        return axios
            .post(DIARY_API_URL, diary)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                // 오류 객체 내의 response가 존재한다 = 서버가 오류 응답을 주었다
                if (err.response) {

                    const {status, config} = err.response;

                    // 없는 페이지
                    if (status === 404) {
                        console.log(`${config.url} not found`);
                    }

                    // 서버 오류
                    if (status === 500) {
                        console.log("Server error");
                    }
                    // 요청이 이루어졌으나 서버에서 응답이 없었을 경우
                } else if (err.request) {
                    console.log("Error", err.message);
                    // 그 외 다른 에러
                } else {
                    console.log("Error", err.message);
                }
            });
    }

    getList() {
        return axios
            .get(DIARY_API_URL)
            .then(res => {
                console.log(res.data);
                return res.data;
            })
            .catch(err => {
                // 오류 객체 내의 response가 존재한다 = 서버가 오류 응답을 주었다
                if (err.response) {

                    const {status, config} = err.response;

                    // 없는 페이지
                    if (status === 404) {
                        console.log(`${config.url} not found`);
                    }

                    // 서버 오류
                    if (status === 500) {
                        console.log("Server error");
                    }
                    // 요청이 이루어졌으나 서버에서 응답이 없었을 경우
                } else if (err.request) {
                    console.log("Error", err.message);
                    // 그 외 다른 에러
                } else {
                    console.log("Error", err.message);
                }
                return [];
            });
    }

    deleteDiary(id) {
        return axios
            .delete(DIARY_API_URL, {
                params: {
                    id: id
                }
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                // 오류 객체 내의 response가 존재한다 = 서버가 오류 응답을 주었다
                if (err.response) {

                    const {status, config} = err.response;

                    // 없는 페이지
                    if (status === 404) {
                        console.log(`${config.url} not found`);
                    }

                    // 서버 오류
                    if (status === 500) {
                        console.log("Server error");
                    }
                    // 요청이 이루어졌으나 서버에서 응답이 없었을 경우
                } else if (err.request) {
                    console.log("Error", err.message);
                    // 그 외 다른 에러
                } else {
                    console.log("Error", err.message);
                }
            });
    }
}

export default new DiaryService;