export const isLogin = () => !!window.localStorage.getItem('token');

export const setToken = (token: string) =>
  window.localStorage.setItem('token', token);

export const setRefreshToken = (token: string) =>
  window.localStorage.setItem('token', token);

export const setUserLocalStorage = (user: string) => {
  window.localStorage.setItem('user', user);
};
