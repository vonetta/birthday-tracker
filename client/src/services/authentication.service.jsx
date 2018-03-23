import cookie from 'react-cookies'

export function getCurrentUser() {
    return JSON.parse(cookie.load('auth').slice(2))
}