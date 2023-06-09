//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const x = 10;
// if (x === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 15;
// if (min >= 0 && min <= 15) {
//   console.log("1 Частина");
// } else if (min >= 16 && min <= 30) {
//   console.log("2 Частина");
// } else if (min >= 31 && min <= 45) {
//   console.log("3 Частина");
// } else if (min >= 46 && min <= 60) {
//   console.log("4 Частина");
// } else {
//   console.log("Такої четверті не існує");
// }

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// let result = "";
// const num = 5;
// switch (num) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Літо";
//     break;
//   case 4:
//     result = "Осінь";
//     break;
//   default:
//     result = "Такої пори року не існує";
// }
// console.log(result);

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let counter = 0;

// while (counter <= 50) {
//    console.log(counter);
//    counter += 1;
// }

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка «офіційна» назва JavaScript?").toLowerCase();

// alert(question === "ecmascript" ? "Вірно" : "Не знаєте? ECMAScript!");

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const globalMinutes = 70;
// const hours = String(Math.floor(globalMinutes / 60)).padStart(2, 0);
// const minute = String(globalMinutes % 60).padStart(2, 0);
// console.log(hours);
// console.log(minute);
// console.log(`${hours}:${minute}`)

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// let min = 1;
// let max = 10;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
//   console.log("Парне:", i);
// }
// console.log(total);

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt('Введіть свій логін');
// const loginInput = prompt("Введіть свій логін");

// if (loginInput === "Адмін") {
//   const password = prompt("Введіть свій пароль");
//   if (password) {
//     if (password === "Я головний") {
//       alert("Добрий день");
//     } else {
//       alert("Невірний пароль");
//     }
//   } else {
//     alert("Скасовано");
//   }
// } else {
//   alert("Я вас не знаю");
// }

//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

//? Рішення
// let total = 0;
// let value = 0;
// do {
//   total += value;
//   value = Number(prompt("Введіть число"));
// } while (value);
// alert(`Загальна сума введених чисел дорівнює ${total}.`);

//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

//? Рішення
// let value;
// do {
//   value = Number(prompt("Введіть число більше за 100"));
// } while (value < 100);
// alert(`Вітаю Ви ввели число ${value}, воно більше за 100`);

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcde";

// // alert(str[0] === "a" ? "Так" : "Ні");
// console.log(str[0] === "a" ? "Так" : "Ні");

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

//? Рішення
// const value = Number(prompt("Введіть число"));
// if (value % 5 === 0 && value % 3 === 0) {
//   alert("fizzbuzz");
// } else if (value % 3 === 0) {
//   alert("fizz");
// } else if (value % 5 === 0) {
//   alert("buzz");
// } else {
//   alert("Це число не ділиться ні на 3, ні на 5");
// }

//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = "Edge";

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }

//? Рішення
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

//TODO: 14 ===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

//? Рішення 1
// const createsArray = function (lengthArr, valueArr) {
//   let arr = [];
//   for (let i = 0; i < lengthArr; i += 1) {
//     arr.push(valueArr);
//   }
//   return arr;
// };
// console.log(createsArray(5, ":*:"));

//? Рішення 2
// const createsArray = arr => Array(arr.lengthArr).fill(arr.valueArr);
// console.log(createsArray({ lengthArr: 3, valueArr: "abc" }));

//TODO: 15 ===================================
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

const array = [
  1,
  0,
  54,
  "doc",
  null,
  "jpg",
  undefined,
  "",
  "png",
  "exe",
  false,
  "mp4",
  NaN,
  "hbs",
];

//? Рішення 1
// const filterArr = function (arr) {
//   let result = [];

//   for (const valueArr of arr) {
//     if (valueArr) {
//       result.push(valueArr);
//     }
//   }

//   return result;
// };
// console.log("filterArr:", filterArr(array));

//? Рішення 2
// const filterArr = arr => arr.filter((valueArr) => valueArr);
// console.log("filterArr:", filterArr(array));

//TODO: 16 ===================================
// Перевірити два масиву і дізнатися, чи вони рівні

const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

const arr9 = [1, 1, 2, 4, 6, "color", 34, 0, -30];
const arr10 = [1, 2, 2, 4, 6, "color", 34, 0, -30];

const arr11 = ["color", 34, 0, -30, 1, 1, 2, 4, 6];
const arr12 = [1, 2, 3, 4, 6, "color", 34, 0, -30];

//? Рішення 1
// const checksArrays = function (arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i += 1) {
//       if (arr2.includes(arr1[i])) {
//         arr2[arr2.indexOf(arr1[i])] = null;
//       }
//     }
//     console.log("arr2:", arr2);
//     for (const valueArr of arr2) {
//       if (!(valueArr === null)) {
//         return false;
//       }
//     }
//   }
//   return arr1.length === arr2.length;
// };

//? Рішення 2
// const checksArrays = function (arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     const sortedArr1 = arr1.sort();
//     const sortedArr2 = arr2.sort();

//     for (let i = 0; i < sortedArr1.length; i += 1) {
//       if (!(sortedArr1[i] === sortedArr2[i])) {
//         return false;
//       }
//     }
//   }
//   return arr1.length === arr2.length;
// };

// console.log("checksArrays:", checksArrays(arr1, arr2));
// console.log("checksArrays:", checksArrays(arr3, arr4));
// console.log("checksArrays:", checksArrays(arr5, arr6));
// console.log("checksArrays:", checksArrays(arr7, arr8));
// console.log("checksArrays:", checksArrays(arr9, arr10));
// console.log("checksArrays:", checksArrays(arr11, arr12));
