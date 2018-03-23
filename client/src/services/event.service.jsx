import axios from 'axios'


export function readById(id){
    return axios.get(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/events/${id}`)
    .then(onSuccess)
    .catch(onError)
}


export function create(data) {
    return axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/events/`, data)
        .then(onSuccess)
        .catch(onError)
}

function onSuccess(response) {
    return response
}

function onError(err) {
    return Promise.reject(err.data)
}