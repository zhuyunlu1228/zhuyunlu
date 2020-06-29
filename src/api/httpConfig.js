import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store/index.js';
//import { reject, resolve } from 'core-js/fn/promise';


//TODO  add baseurl
const baseURL = 'http://localhost:3000/api';
var instance = axios.create({
    timeout: 1000,
    baseURL: baseURL,
    validateStatus(status) {
        switch (status) {
            case 400:
                Message.error('Request Error')
                break;
            case 403:
                Message.warning('Access Denied')
                
                break;
            case 404:
                Message.error('Not Found')
                break;
            case 500:
                Message.warning('Server Error')
                break;
        }
        return status >= 200 && status < 300
    }

});

//add request itercptors 
instance.interceptors.request.use(
    (config) => {
        if (store.state.UserToken) {
            config.headers.Authorization = `${store.state.UserToken}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
);

//add response intercptors
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        if (!(err && err.response)) {
            Message.error('Server Connection Failed')
            err.message = 'Server Connection Failed'
        }
        return Promise.reject(err.message)
    }
);

//http 

const http = {};

//http get part
http.get = (url, options) => {
    let loading;
    //not show loading 
    if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = "none"
    }

    return new Promise((resolve, reject) => {
        instance.get(url, options)
            .then(response => {

                if (response.succeed) {
                    resolve(response.data)
                }
                else {
                    if (response.err_code === "A0220") {
                        store.commit('LOGIN_OUT')
                    } else {
                        Message.error(response.err_msg)
                    }
                    reject(response.err_msg);
                }
            }).catch(e => {
                console.log(e)
            })
    })
}

//http post part
http.post = (url, data, options) => {
    let loading;
    if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'block';
    }
    return new Promise((resolve, reject) => {
        instance.post(url, data, options)
            .then(response => {
                if (response.succeed) {
                    resolve(response.data)
                } else {
                    if (response.err_code === "A0220") {
                        store.commit('LOGIN_OUT')
                    } else {
                        Message.error(response.err_msg)
                    }
                    reject(response.message)
                }
            }).catch(e => {
                console.log(e)
            })
    })

}

//FIXME is delete need data?
//http delete part
http.delete = function (url, options) {
    let loading;
    if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'block';
    }

    return new Promise((resolve, reject) => {
        instance.delete(url, options)
            .then(response => {
                if (!options || options.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if (response.succeed) {
                    resolve(response.data)
                } else {
                    if (response.err_code === 'A0220') {
                        store.commit('LOGIN_OUT')
                    } else {
                        Message.error(response.message)
                    }
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

/***
 * @param url, data,options
 */

http.patch = function (url, data, options) {
    let loading;
    if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'block';
    }
    return new Promise((resolve, reject) => {
        instance.patch(url, data, options)
            .then(response => {
                if (response.succeed) {
                    resolve(response.data)
                } else {
                    if (response.err_code === "A0220") {
                        store.commit('LOGIN_OUT')
                    } else {
                        Message.error(response.err_msg)
                    }
                    reject(response.message)
                }
            }).catch(e => {
                console.log(e)
            })
    })

}

http.put = function (url, data, options) {
    let loading;
    if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'block';
    }
    return new Promise((resolve, reject) => {
        instance.patch(url, data, options)
            .then(response => {
                if (response.succeed) {
                    resolve(response.data)
                } else {
                    if (response.err_code === "A0220") {
                        store.commit('LOGIN_OUT')
                    } else {
                        Message.error(response.err_msg)
                    }
                    reject(response.message)
                }
            }).catch(e => {
                console.log(e)
            })
    })

}



export default http;