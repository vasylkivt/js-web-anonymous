//! function Constructions
//TODO:=================1=============================
// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }
// product.showPrice()

//TODO:=================2=============================

//Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }

// function callAction(action) {
//     action()
// }

// callAction(product.showPrice.bind(product))

// Anser:

//TODO:=========task-3=================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/
// const User = function ({ userName, age, numbersOfPost } = {}) {
//   (this.userName = userName),
//     (this.age = age),
//     (this.numbersOfPost = numbersOfPost),
//     (this.getInfo = function () {
//        console.log(`${userName} ${age} років і в нього ${numbersOfPost} публікацій.`);
//     });
// };

// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();

//TODO:=========task-4=================
// Напиши функція конструктор який створювати рядки

// Answer:
// const StringBuilder = function (baseValue) {
//   this.value = baseValue;

// };

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str;
// };
/**
  |============================
  | Розкоментувати ; )
  |============================
*/
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// console.log(builder);

//TODO:=========task-5=================
//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// Answer:
// const Storage = function (productArray = []) {
//   this.items = productArray;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
//   return this.items;
// };

// Storage.prototype.removeItem = function (newItem) {
//   this.items = this.items.filter((value) => value !== newItem);
//   return this.items;
// };

/**
  |============================
  | Розкоментувати ; )
  |============================
*/
// const storage = new Storage(["apple", "banana", "mango"]);

// console.log(storage);
// console.log(storage.getItems());
// console.log(storage.addItem("kiwi"));
// console.log(storage.removeItem("apple"));

//TODO:=========task-6=================
/**
 * Напишіть функію конструктор, яка створіть корабель, який вміє стріляти, і успадкуйте від нього
 * бойовий корабель
 */

// Answer:
// const Ship = function (country, hp, capitanName, price) {
//   this.country = country;
//   this.hp = hp;
//   this.capitanName = capitanName;
//   this.price = price;
// };

// Ship.prototype.fire = function () {
//   console.log(`hi from ${this.country}. My armor is ${this.armor}`);
// };

// const WarShip = function (armor, ...args) {
//   this.armor = armor;
//   Ship.apply(this, args);
// };

// WarShip.prototype = Object.create(Ship.prototype);

// WarShip.prototype.constructor = WarShip;
/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const ws = new WarShip(999, "US", 100, "Jack Sparrow", "99$");
// console.dir(WarShip);
// ws.fire();

//! Class
//TODO:=========task-7=================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// Answer:
// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return { login: this.#login, email: this.#email };
//   }

//   set changeLogin(newLogin) {
//     this.#login = newLogin;
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const client = new Client("mango", "mango@gmail.com");
// console.log(client);
// client.changeEmail = "mango555@gmail.com";
// console.log(client.getClientData.email);
// client.changeLogin = "12345";
// console.log(client.getClientData.login);
// console.log(client);
//TODO:=========task-8=================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,+
//який буде повертати об'єкт із пріоритетами.+
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// Aswer:
// class Notes {
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     return this.items.push(note);
//   }

//   removeNote(text) {
//     return (this.items = this.items.filter((item) => item.text !== text));
//   }

//   updatePriority({ text, newPriority }) {
//     const value = this.items.find((item) => item.text === text);
//     value.priority = newPriority;
//   }
// }
/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const note1 = new Notes();

// note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
// console.table(note1.items);

// note1.removeNote("Note1");
// console.table(note1.items);

// note1.updatePriority({ text: "Note2", newPriority: Notes.Priority().HIGHT });
// console.table(note1.items);

//TODO:=========task-9=================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Aswer:
// class Calculator {
//   #result = null;
//   constructor() {
//     this.#result = 0;
//   }

//   number(num) {
//     this.#result = num;
//     return this;
//   }

//   add(num) {
//     this.#result += num;
//     return this;
//   }

//   substruct(num) {
//     this.#result -= num;
//     return this;
//   }

//   divide(num) {
//     this.#result /= num;
//     return this;
//   }

//   multiply(num) {
//     this.#result *= num;
//     return this;
//   }

//   get result() {
//     return this.#result;
//   }
// }
/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const calculator = new Calculator();
// const res = calculator
//   .number(10)
//   .add(10)
//   .divide(2)
//   .multiply(4)
//   .substruct(5).result;

// console.log(res);

// const res2 = calculator
//   .number(20)
//   .substruct(40)
//   .multiply(-8)
//   .divide(160)
//   .add(20).result;

// console.log(res2);

//TODO:=========task-10=================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

// const HIERARCHY_LEVEL = {
//   TOP: "top",
//   BOTTOM: "bottom",
// };

// const workerObj = {
//   name: "Mango",
//   surname: "Worker",
//   age: 30,
//   position: "FE developer",
//   salary: 5000,
// };

// ES5

// Aswer:
// const Worker = function (obj = {}) {
//   const { name, age, salary, position, surname } = obj;
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
//   this.position = position;
//   this.surname = surname;
// };

// Worker.prototype.getSalary = function () {
//   return this.salary;
// };

// const TopLevelWorker = function (obj = {}, hierarchyLevel) {
//   this.hierarchyLevel = hierarchyLevel;
//   Worker.call(this, obj);
// };

// TopLevelWorker.prototype.getSalary = Worker.prototype.getSalary;

// TopLevelWorker.prototype.getHierarchyLevel = function () {
//   return this.hierarchyLevel;
// };
/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const worker = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.BOTTOM);
// console.log(worker);
// console.log(worker.getSalary());
// console.log(worker.getHierarchyLevel());

// ES6
// Aswer:
// class WorkerES6 {
//   constructor(obj = {}) {
//     const { name, age, salary, position, surname } = obj;
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.position = position;
//     this.surname = surname;
//   }

//   getSalary() {
//     return this.salary;
//   }
// }

// class TopLevelWorkerES6 extends WorkerES6 {
//   constructor(obj = {}, hierarchyLevel) {
//     super(obj);
//     this.hierarchyLevel = hierarchyLevel;
//   }

//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }
/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const topWorker = new TopLevelWorkerES6(workerObj, HIERARCHY_LEVEL.TOP);
// console.log(topWorker);
// console.log(topWorker.getSalary());
// console.log(topWorker.getHierarchyLevel());

//TODO:==========bonus============
// Створити гру за допомогою класів. Створити class Героя, Створити class гравця, Створити class гри.

// Список Героїв
const HERO_LIST = [
  {
    name: 'thor',
    health: 2000,
    damage: 300,
  },
  {
    name: 'thanos',
    health: 2200,
    damage: 350,
  },
  {
    name: 'hulk',
    health: 2800,
    damage: 400,
  },
];

// Створюємо class Героя
class Hero {
  constructor(name, damage, health) {
    this.name = name;
    this.damage = damage;
    this.health = health;
  }

  // Створюємо метод
  getDamage = function () {
    return this.damage;
  };

  // Створюємо метод
  receiveDamage = function (damage) {
    this.health = this.health - damage;
  };
}

// Створюємо class Гравця
class Player {
  constructor(name) {
    this.name = name;
    this.hero = null;
  }

  // Створюємо метод
  selectHero = function (heroName) {
    const userHero = HERO_LIST.find((hero) => hero.name === heroName); // Ищет героя методом find
    this.hero = new Hero(userHero.name, userHero.damage, userHero.health);
  };
}

// Створюємо class Гри
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // Створюємо метод для гри fight (Логіка)
  fight = function () {
    const { hero: player1hero } = this.player1; // Делаем десктрукторизацию с подменой (hero:), что бы не было ошибки!
    const { hero: player2hero } = this.player2; // Делаем десктрукторизацию с подменой (hero:), что бы не было ошибки!
    const hero1damage = player1hero.getDamage(); // В переменную забираем damage Игрока 1
    const hero2damage = player2hero.getDamage(); // В переменную забираем damage Игрока 2

    // Цикл while для логіки
    while (player1hero.health > 0 && player2hero.health > 0) {
      player1hero.receiveDamage(hero2damage);
      player2hero.receiveDamage(hero1damage);
      this.logHits(player1hero.name, hero1damage, player2hero.health);
      this.logHits(player2hero.name, hero2damage, player1hero.health);
    }

    const winner = player1hero.health > 0 ? this.player1 : this.player2;
    this.greetWinner(winner);
  };

  // Створюємо метод для Переможця
  greetWinner = function (winner) {
    console.log(`The winner is 🏆🏆🏆 ${winner.name} 🏆🏆🏆`);
  };
  // Створюємо метод для Гри
  logHits = function (heroName, damage, enemyHealth) {
    console.log(
      `Hero ${heroName} 🤜🏻 💨 💥 ${damage}. Enemy ${enemyHealth} left`
    );
  };
  // Створюємо метод для Гри run
  run = function () {
    this.fight();
  };
}

const player1 = new Player('John');
// Выбираем Героя
player1.selectHero('hulk');

// Створюємо екземпляр Гравця 2
const player2 = new Player('Tom');
// Обираємо Героя
player2.selectHero('thor');

// console.log(player1);
// console.log(player2);

const game = new Game(player1, player2);
// console.log(game);

game.run(); // Кнопка Start!
