const Local = () => localStorage;
const LocalItem = (keyName) => localStorage.getItem(keyName);
const SetLocal = (keyName, value) => localStorage.setItem(keyName, value);