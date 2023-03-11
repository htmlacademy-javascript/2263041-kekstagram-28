//Функция для проверки длины строки.

const isLessOrEqual = (string, length) => string.length <= length;

// Cтрока короче 20 символов
isLessOrEqual('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isLessOrEqual('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isLessOrEqual('проверяемая строка', 10); // false

//Функция для проверки, является ли строка палиндромом

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
// Это палиндром
isPalindrom('Лёша на полке клопа нашёл '); // true

/*Функция, которая принимает строку,
извлекает содержащиеся в ней цифры от 0 до 9 и
возвращает их в виде целого положительного числа
*/

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN

/*Функция, которая принимает три параметра: исходную строку,
минимальную длину и строку с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины
*/

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) +
        pad.repeat(actualPad / pad.length) +
        string;
};

// Добавочный символ использован один раз
myPadStart('1', 2, '0'); // '01'
// Добавочный символ использован три раза
myPadStart('1', 4, '0'); // '0001'
// Добавочные символы обрезаны с конца
myPadStart('q', 4, 'werty'); // 'werq'
// Добавочные символы использованы полтора раза
myPadStart('q', 4, 'we'); // 'wweq'
// Добавочные символы не использованы, исходная строка не изменена
myPadStart('qwerty', 4, '0'); // 'qwerty'
