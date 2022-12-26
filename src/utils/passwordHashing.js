import CryptoJS from 'crypto-js';

// encrypt
export const encrypt = (password) =>{
    var ciphertext = CryptoJS.AES.encrypt(password, 'encryptTextencrptText').toString();
    return ciphertext;
}

// decrypt
export const decrpt = (ciphertext)=>{
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'encryptTextencrptText');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}