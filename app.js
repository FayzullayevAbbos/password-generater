const parolEl = selct(".parol");
const lengthEl = selct(".length");
const inputRange = selct("#range");
const inpUpper = selct("#uppercase");
const inpLower = selct("#lowercase");
const inpNum = selct("#numers");
const inpSymbol = selct("#symbols");
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbols = "_@#$%^&";
const btn = selct("button");
const count = 0;
function selct(a) {
  return document.querySelector(`${a}`);
}

inputRange.addEventListener("input", () => {
  lengthEl.textContent = inputRange.value;
});
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

btn.addEventListener("click", () => {
  const length = +inputRange.value;
  const hasLower = inpLower.checked;
  const hasUpper = inpUpper.checked;
  const hasNumber = inpNum.checked;
  const hasSymbol = inpSymbol.checked;

  parolEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const checkCount = lower + upper + symbol + number;
  const checkArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (checkCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += checkCount) {
    checkArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      if (randomFunc[funcName]()) {
        generatedPassword += randomFunc[funcName]();
      }
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
    let low = lowerCase.split("")
    return low[Math.trunc(Math.random() * 26) + 1]
}



function getRandomUpper() {
  let upp = upperCase.split("")
  return upp[Math.trunc(Math.random() * 26) + 1]
}

function getRandomNumber() {
 let num = numbers.split("")
 return num[Math.trunc(Math.random() * 10) + 1]
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

