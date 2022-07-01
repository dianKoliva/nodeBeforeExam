import axios from 'axios'
const base = "http://localhost:4355"


export const Userlogin = (email, password) => {

    let data = {
        email: email,
        password: password
    }

    axios.post(`${base}/user/login`, data).then(res => {
            return res.data;

        })
        .catch(err => {
            return err;
        })
}