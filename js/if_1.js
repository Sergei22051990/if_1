// Напишите код, который будет спрашивать логин (prompt).

// Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

// Пароль проверять так. Если введен пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».//




let userName = prompt("Кто пришёл?" + "");
if (userName == "Админ") {
    let pass = prompt("Пароль?" + "");
        if (pass == "Черный Властелин") {
            alert("Добро пожаловать!");
        } else if (pass == "") {
            alert("Пароль неверен");
        } else {
            alert("Вход отменен");
        }
}

else if (userName == "") {
    alert("Я вас не знаю");
} else {
    alert("Вход отменен");
}
    
