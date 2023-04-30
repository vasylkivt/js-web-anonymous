// ## Модуль 7

//TODO:====================01=============Calculator===============

//? ### Calculator:

// 1 - Для початку реалізуй функціанал додавання калькулятора при кліці на кнопку "Показати калькулятор". Калькулятор повинен зявитесь і текст кнопки змфнитись на
// "Приховати калькулятор". Є прописаний клас у css, який відповідає за колір відповідної кнопки. Тому при відображенні розмітки, ще додавай або видаляй клас
// "calc-close". Розмітка калькулятора закоментована на початку сторінки. Для додавання елементів у Дом дерево, використай метод "insertAdjacentHTML".
// 2 - Коли калькулятор з'явився на сторінці, реалізуй його функціонал. Зроби основні математичні обчислення (\* + - /). Реалізуй це за допомогою делігування подій
// слухача встанови на ".js-calculator". Далі вся робота буде відбуватись за допомогою тільки однієї функції "onBtnClick", яка буде опрацьовувати усі події + допоміжна
// функція "clearResult", яка буде робити очистку при кліці на кнопку "AC".

//todo #### Виконуй завдання послідовно:

// - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
// - Додай слухачі подій з відповідними подіями
// - Спочатку реалізовуємо відмальовку калькулятора при кліці на кнопку.
// - Створи зміні, які нам допоможуть:
//   display за допомогою document.querySelector; Це нам знадобиться, щоб зчитувати данні з його .value
//   num1 з початковим значення = 0; Сюди будимо записувати значення першого введенного числа
//   operator з початковим значення = ""; Сюди будемо записувати який символ оператора ми натискаємо
//   resultValue з початковим значення = ""; Сюди будемо записувати результат і вивадити на display
// - Створюємо масив символів const symbolArray = ['+', '-', '*', '/', '%']; Щоб легше робити перевірку
// - Ну і пишимо головну функцію "onBtnClick". Не забуваємо відміняти поведінку по змовчуванню. Не забуваємо про перевірку на цільовий елемент, що ми саме клікаємо у
//   кнопку. Значення кнопок, можемо дістати з "target.textContent". Це нам допоможе дізнатись у яку кнопку ми нажали. За допомогою перевірок if else if else, робимо
//   перевірки і пишемо логіку. Обчислення олбимо за допомогою "switch".

const btnOpenEl = document.querySelector(".js-show__btn");
const containerEl = document.querySelector(".js-container");

btnOpenEl.addEventListener("click", onBtnShowClick);

function onBtnShowClick() {
  if (btnOpenEl.textContent === "Приховати калькулятор") {
    containerEl.innerHTML = "";
    btnOpenEl.textContent = "Показати калькулятор";
    btnOpenEl.classList.remove("calc-close");
    return;
  }
  const markup = `
 <div class="calculator js-calculator">
  <div class="calculator-display">
    <input class="js-result" type="text" name="result" value="0" disabled />
  </div>
  <div class="calculator-row">
    <button class="calculator-button calculator-button-gray">C</button>
    <button class="calculator-button calculator-button-gray">+/-</button>
    <button class="calculator-button calculator-button-gray">%</button>
    <button class="calculator-button calculator-button-orange">/</button>
  </div>
  <div class="calculator-row">
    <button class="calculator-button">7</button>
    <button class="calculator-button">8</button>
    <button class="calculator-button">9</button>
    <button class="calculator-button calculator-button-orange">*</button>
  </div>
  <div class="calculator-row">
    <button class="calculator-button">4</button>
    <button class="calculator-button">5</button>
    <button class="calculator-button">6</button>
    <button class="calculator-button calculator-button-orange">-</button>
  </div>
  <div class="calculator-row">
    <button class="calculator-button">1</button>
    <button class="calculator-button">2</button>
    <button class="calculator-button">3</button>
    <button class="calculator-button calculator-button-orange">+</button>
  </div>
  <div class="calculator-row">
    <button class="calculator-button calculator-button-double">0</button>
    <button class="calculator-button">.</button>
    <button class="calculator-button calculator-button-orange">=</button>
  </div>
</div>
`;
  containerEl.insertAdjacentHTML("afterbegin", markup);
  btnOpenEl.textContent = "Приховати калькулятор";
  btnOpenEl.classList.add("calc-close");

  const calculatorEl = document.querySelector(".js-calculator");
  calculatorEl.addEventListener("click", onBtnClick);

  let display = document.querySelector(".js-result");
  let num1 = 0;
  let operator = "";
  let resultValue = "";
  const symbolArray = ["+", "-", "*", "/", "%"];

  function onBtnClick(evt) {
    if (evt.target.nodeName !== "BUTTON") {
      console.log("Вийшли");
      return;
    }

    const value = evt.target.textContent;
    console.log("value:", value);

    if (value === "C") {
      resultValue = "";
      num1 = 0;
      operator = "";
      display.value = "0";
      return
    }

    //! ДЗ
    if (value === '+/-') {
      return alert('це ДЗ')
    }

    if (symbolArray.includes(value)) {
      operator = value;
      num1 = parseFloat(resultValue);
      console.log("num1:", num1);
      resultValue = "";
    } else if (value === "=") {
      let num2 = parseFloat(resultValue);
      let total = 0;

      switch (operator) {
        case "+":
          if (!num2) {
            total = num1 + num1
            break
          }
        
          total = num1 + num2;
          break;

        case "-":
          total = num1 - num2;
          break;

        case "*":
          total = num1 * num2;
          break;

        case "/":
          if (num2 === 0) {
            display.value = "Помилка";
            return;
          }
          total = num1 / num2;
          break;
        case "%":
          total = num1 / 100;
          break;
      }
      //! ДЗ
      if (!total) {
        display.value = "Помилка1";
        return;
      }

      resultValue = total.toString();
      display.value = resultValue;
    } else {
      if (display.value === '0' && value !== '.') {
        resultValue = value
        display.value = resultValue;
      } else {
        resultValue += value;
        display.value = resultValue;
      }
    }
  }
}
