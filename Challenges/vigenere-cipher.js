let message = "Make it happen?!",
  keyword = "rabbit";
// M   A   T   H
// 12  0  19   7
// M   A   K   E   I   T   H   A   P   P   E   N
// 12  0  19   7  12   0  19   7  12   0  19   7

// output = "yadl ut ahbpxu"

// 1. Assign each alphabet to index value.
// 2. Step one create the keyword ecnryption math = 12 0 19 7
// 3. For each character in the message assign the encryption numbers.
//    keep looping till you assigned each character in the message.
// 4. Shift each character by the encryption value assigned to it.

const asciiAlpabet = () => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = {};
  for (let i = 0; i < alpha.length; i++) {
    alphabet[i] = alpha[i];
  }
  return alphabet;
};
const vigenereEncrypt = (message, keyword) => {
  message = message
    .replace(/[^a-zA-Z ]/g, "")
    .trim()
    .toLowerCase();
  let encryptedMessage = "";
  const alphabet = asciiAlpabet();
  const cipher = cipheredMessage(message, keyword);
  for (let [index, val] of cipher.entries()) {
    if (val[0] + val[1] > 25) {
      encryptedMessage += alphabet[val[0] + val[1] - 26];
    } else if (val[0] < 0) {
      encryptedMessage += String.fromCharCode(32);
    } else {
      encryptedMessage += alphabet[val[0] + val[1]];
    }
  }
  return encryptedMessage;
};

const cipheredMessage = (message, keyword) => {
  const cipher = [];
  let i = 0,
    j = 0;
  while (i < message.length) {
    if (j == keyword.length) {
      j = 0;
    }
    const msgAscii = message.charCodeAt(i) - "a".charCodeAt(0);
    const keyAscii = keyword.charCodeAt(j) - "a".charCodeAt(0);
    if (message[i] == " ") {
      cipher.push([msgAscii, 0]);
      i++;
    } else {
      cipher.push([msgAscii, keyAscii]);
      i++;
      j++;
    }
  }
  return cipher;
};

const vigenereDecrypt = (message, keyword) => {
  const cipher = cipheredMessage(message, keyword);
  const alphabet = asciiAlpabet();
  let encryptedMessage = "";
  for (const [index, val] of cipher.entries()) {
    if (val[0] - val[1] < 0 && Math.abs(val[0] - val[1]) < 26) {
      encryptedMessage += alphabet[25 - (Math.abs(val[0] - val[1]) - 1)];
    } else if (val[0] === -65) {
      encryptedMessage += String.fromCharCode(32);
    } else {
      encryptedMessage += alphabet[val[0] - val[1]];
    }
  }
  return encryptedMessage;
};
console.log("Original message :", message);
const encryptedMsg = vigenereEncrypt(message, keyword);
console.log("Encrypted message:", encryptedMsg);
const decryptedMsg = vigenereDecrypt(encryptedMsg, keyword);
console.log("Decrypted message:", decryptedMsg);
