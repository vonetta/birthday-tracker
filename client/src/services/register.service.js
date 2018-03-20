import axios from 'axios'

export function read(){
    return axios.get(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/users/`)
    .then(onSuccess)
    .catch(onError)
}

export function readById(id) {
    return axios.get(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/users/confirm-email/${id}`)
        .then(onSuccess)
        .catch(onError)
}

export function create(data){
    return axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/users/`, data)
    .then(onSuccess)
    .catch(onError)
}

export function confirmEmail(data) {
    return axios
        .post(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/users/confirm-email/${data}`, data)
        .then(onSuccess)
        .catch(onError)
}

 function onSuccess(response){
    console.log(response)
    return response
}

 function onError(error){
    return Promise.reject(error.data)
}
