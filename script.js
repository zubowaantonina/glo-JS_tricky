"use strict";
let str ="   В JavaScript нет защиты от дурака. Мы считаем, что все, кто работают над кодом — профессионалы и доверяем им.   ";
console.log(str);
const myFunc = (str) => {
    if (typeof str !== "string") {
        console.log(" Не строка");
    } else {
        str = str.trim(); //убираем пробелы
        console.log(str);
        let cutStr = str.slice(0, 30);
        if (str.length > 30) {
            cutStr += "..."
        }
        console.log(cutStr);
    }
}
myFunc(str)