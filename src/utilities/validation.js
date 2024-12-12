import CryptoJS from 'crypto-js';
export const USER_KEY = 'userdetails'

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email format.";
  return null;
};

export const validatePassword = (password) => {
  if (password.length < 6) return "Password must be at least 6 characters long.";
  return null;
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) return "Phone number must be 10 digits.";
  return null;
};

export const saveSession = (key,value) =>{
  return sessionStorage.setItem(key,JSON.stringify(value))
}

export const getSession = (key) =>{
  return sessionStorage.getItem(key)
}

export const deleteSession = (key) => {
  return sessionStorage.removeItem(key)
}

export const encryptPassword = (password) => {
  const secretKey = import.meta.env.VITE_SECRET_KEY; 
  const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();
  return encrypted;
};

export const dencryptPassword = (encryptedPassword) => {
  const secretKey = import.meta.env.VITE_SECRET_KEY; 
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  return originalPassword;
}


export function generateRandomId() {
  return 'user-' + Math.random().toString(36).slice(2, 9); // 9-character unique ID
}