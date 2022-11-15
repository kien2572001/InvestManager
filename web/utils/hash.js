import CryptoJS from "crypto-js";

export function encode(message) {
  var key = "123456";
  return CryptoJS.AES.encrypt(message, key).toString();
}


export function decode(message) {
  var key = "123456";
  return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8);
}

export function getUserInfo() {
  let userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    let decodeUserInfo = decode(userInfo);
    let userInfoObj = JSON.parse(decodeUserInfo);
    return userInfoObj;
  }
  return null;
}

export function setUserInfo(userInfo) {
  let temp = JSON.stringify(userInfo);
  let encodeUserInfo = encode(temp);
  localStorage.setItem("userInfo", encodeUserInfo);
}