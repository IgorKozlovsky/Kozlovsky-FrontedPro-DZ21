// 1) створити найпростішу html сторінку

// 2) підключити файл зі скриптом

// 3) у скрипті зробити наступне:

// створити div
// додати йому клас main
// пофарбувати його жовтим
// додати його у body
// запитати у користувача колір фону, запропонувавши вибрати з 3 варіантів (варіанти придумуємо самі)
// пофарбувати дів у вибраний колір. якщо колір не вибрано, то прибрати фон
// запитати у користувача, чи додавати тінь
// якщо користувач погодився, додати тінь для div
// запитати у користувача текстове наповнення
// додати введений текст всередину div

const div = document.createElement("div");
div.classList = "main";
div.style.backgroundColor = "yellow";
document.body.append(div);

let inp = prompt("Яким кольором має бути фон (червоний, зелений, чорний)? ");

switch (inp?.toLowerCase()) {
  case "червоний":
    inp = "red";
    break;
  case "зелений":
    inp = "green";
    break;
  case "чорний":
    inp = "black";
    break;
  default:
    inp = "";
}

div.style.backgroundColor = inp;
div.style.boxShadow = confirm("Чи додати тінь?") ? "5px 5px 2px" : "";
div.textContent = prompt("Введіть текст, який має бути в блоці");
