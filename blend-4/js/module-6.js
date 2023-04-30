// //TODO:===============01====Модальне вікно==================

// ### Модальне вікно:

// 1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку"
//  2 - Реалізувати закриття модального вікна по кліку на "кнопку", "ESC" і "бекдроп". Не забувай знімати слухача події після закриття модального вікна

// #### Виконуй завдвння послідовно:

// - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
// - Створи 4 функції onOpenModalBtnElClick, closeModalWindow, onEscClick, onBackdropClick. Не забувай робити перевірку на цільовий елемент.
// - Клас який відповідає за ,відображення і скриття модального вікна "is-open"

const backdropEl = document.querySelector(".js-backdrop");
const openModalEl = document.querySelector(".js-modal-open");
const closeModalEl = document.querySelector(".js-modal-close");

openModalEl.addEventListener("click", onOpenModalBtnElClick);
closeModalEl.addEventListener("click", closeModalWindow);

function onOpenModalBtnElClick() {
  document.body.style.overflow = "hidden";
  backdropEl.classList.add("is-open");
  window.addEventListener("keydown", onEscClick);
  window.addEventListener("click", onBackdropClick);
}

function closeModalWindow() {
  document.body.style.overflow = "auto";
  backdropEl.classList.remove("is-open");
  window.removeEventListener("keydown", onEscClick);
  window.removeEventListener("click", onBackdropClick);
}

function onEscClick(evt) {
  if (evt.code === "Escape") {
    closeModalWindow();
    console.log("Escape");
  }
  return;
}

function onBackdropClick(evt) {
  if (backdropEl !== evt.target) {
    return;
  }
  closeModalWindow();
}

// ### Робота з формою:

// 1 - Реалізуй відправку данних через подію "submit" на формі
// 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача
// виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
// 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо еористувач не ввів імʼя, записуй в обьект рядок "Anonimus"

// #### Виконуй завдвння послідовно:

// - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
// - Повісь слухача події на форму
// - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
// - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна

const loginFormEl = document.querySelector(".js-modal__form");

loginFormEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { name, email, password },
  } = evt.currentTarget;
  console.dir(evt.currentTarget);
  console.log(name.value, email.value, password.value);

  if (!password.value || !email.value) {
    alert("email or password is empty");
    return;
  }

  const userData = {
    name: name.value || "Anonymous",
    email: email.value,
    password: password.value,
  };

  console.log(userData);
  loginFormEl.reset();
  closeModalWindow();
}
