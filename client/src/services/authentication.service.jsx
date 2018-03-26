import cookie from "react-cookies"

export function getCurrentUser() {
  if (!cookie.load) {
    return
  } else {
    return JSON.parse(cookie.load("auth").slice(2))
  }
}
