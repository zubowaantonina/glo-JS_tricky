let num = 266219;
//   2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.

console.log(num.toString().split('').reduce((res, item) => item * res, 1));
//вариант 2
let a = [...num.toString().split('')].map(Number);//разбиваем число на элементы (number ,а не string)
let result = 1;
a.forEach(function (elem) {
    result *= elem;
});
console.log(result);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
result = result ** 3
console.log(result);
// 4) Вывести в консоль первые 2 цифры полученного числа
console.log(String(result).slice(0, 2));