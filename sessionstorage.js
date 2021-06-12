const Session = () => sessionStorage;
const SessionItem = (keyName) => sessionStorage.getItem(keyName);
const SetSession = (keyName, value) => sessionStorage.setItem(keyName, value);