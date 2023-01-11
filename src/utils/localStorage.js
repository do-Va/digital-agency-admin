export const addToLocalStorage = (name, value) => {
  value && localStorage.setItem(name, JSON.stringify(value));
};

export const getFromLocalStorage = (name, value) => {
  const comingValue = localStorage.getItem(name);

  const returnValue = comingValue ? JSON.parse(comingValue) : value;
  return returnValue;
};

export const removeFromLocalStorage = name => {
  localStorage.removeItem(name);
};
