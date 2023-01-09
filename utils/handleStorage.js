export const LOCAL_STORAGE = {
  USERS: "user-list",
  USER_LOGIN: "user-login",
  CART: "cart",
};
export const getLocalStorage = (name) => {
  if (typeof window !== "undefined") {
    if (!localStorage.getItem(name)) {
      localStorage.setItem(name, JSON.stringify([]));
    }
    return JSON.parse(window.localStorage.getItem(name));
  }
};

export const setLocalStorage = (name, data) => {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, JSON.stringify([]));
  }
  return window.localStorage.setItem(name, JSON.stringify(data));
};
