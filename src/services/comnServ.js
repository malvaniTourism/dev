import axios from "axios";
import Path from './baseUrl'
// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdG91ci5wcmFuYXZrYW1ibGUuaW5cL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTg1NjU5NTUsImV4cCI6MTY1ODU2OTU1NSwibmJmIjoxNjU4NTY1OTU1LCJqdGkiOiJZSW4wUlVPTGZrUzNFdng1Iiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.F9ijHPLD7iv3TUE_gJyMnTGmlmED613UBKJFzQ-1Mp8';
let token = localStorage.getItem('apiToken');

export const comnGet = async (url, admin) => {
    let myUrl = admin ? Path.API_ADMIN_PATH : Path.API_PATH;
    myUrl = myUrl + url
    console.log('url', myUrl);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.get(myUrl, config)
        .then(res => {
            console.log('oo', res);
            return res;
        })
        .catch(err => {
            return err;
        })
};

export const comnPost = async (url, data) => {
    const myUrl = Path.API_PATH + url;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    }

    return axios.post(myUrl, data, config)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};

export const comnPut = async (url, data) => {
    const myUrl = Path.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.put(myUrl, data, config)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};

export const ComnDel = async (url, data) => {
    const myUrl = Path.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.delete(myUrl, data, config)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};