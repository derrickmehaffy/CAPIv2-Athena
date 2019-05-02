import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS
} from "react-admin";
import Cookies from "./cookies";

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request("https://api.canonn.tech/auth/local", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(response => {
        Cookies.setCookie("token", response.jwt, 1);
        Cookies.setCookie("role", response.user.role.name, 1);
      });
  }

  if (type === AUTH_LOGOUT) {
    Cookies.deleteCookie("token");
    Cookies.deleteCookie("role");
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const status = params.status;
    if (status === 401 || status === 403) {
      Cookies.deleteCookie("token");
      Cookies.deleteCookie("role");
      return Promise.reject();
    }
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    return Cookies.getCookie("token") ? Promise.resolve() : Promise.reject();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    const role = Cookies.getCookie("role");
    return role ? Promise.resolve(role) : Promise.reject();
  }
  return Promise.resolve();
};
