// ! Arrays and function
//TODO:=========task-1=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
// //Додай перевірку що функція отримує масив
// const numbers = 2;

// function findSmallerNumber(arr) {
//   if (!Array.isArray(arr)) {
//     return "Не массив";
//   }
//   let min = arr[0];
//   for (let number of arr) {
//     if (number < min) {
//       min = number;
//     }
//   }
//   return min;
// }

//? Answer

//?

// const smallestNumber = findSmallerNumber(numbers);
// console.log(smallestNumber); // 2

//TODO:=========task-2=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage() {
//   const args = arguments;

//   let summ = 0;
//   let total = 0;

//   for (let arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     summ += arg;
//     total += 1;
//   }
//   console.log(total);
//   console.log(args.length);
//   return summ / total;
// }

// console.log(caclculateAverage(10, 10, 20, 200, "sdfgh", true)); // 60

//TODO:=========task-3=================
const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: true,
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

//TODO:============task-4===============
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const musicGenres = []
// console.log("musicGenres:", musicGenres)

// musicGenres.push("Джаз", "Блюз");
// console.log("musicGenres:", musicGenres);

// musicGenres.push("Рок-н-рол");
// console.log("musicGenres:", musicGenres);

// musicGenres.splice(musicGenres.indexOf("Блюз"), 1, "Класика");
// console.log("musicGenres:", musicGenres);

// console.log("musicGenres.shift:", musicGenres.shift())
// console.log("musicGenres:", musicGenres);

// musicGenres.unshift("Реп", "Реггі");
// console.log("musicGenres:", musicGenres);

//TODO:============task-5==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//? Answer

//?Рішення
// const min = function (a, b) {

//  return (typeof a === "number" && typeof b === "number") ? (a < b ? a : b) : 'Введіть два числа'
// };

// const result = min(15, 5);
// console.log(result); // 5

//TODO:=============task-6=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//? Answer

//?Рішення
// const sumAdjacentNumbers = function (someArr) {
//   let newArr = [];
//   for (let i = 0; i < someArr.length-1; i += 1) {
//     newArr.push(someArr[i] + someArr[i+1])
//   }
// return newArr
// };

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:============task-7==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

const musicGenres = ["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"];

//? Answer

//? Рішення
// const logItems = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i+1} - ${array[i]}`);
//   }
// }
// logItems(musicGenres);

//TODO:=============task-8=================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

//? Answer

//? Рішення
// const formatMessage = (message, maxLength) =>
//   message.length > maxLength ? message.slice(0, maxLength) + "..." : message;

// console.log(formatMessage("Curabitur ligula sapien", 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
