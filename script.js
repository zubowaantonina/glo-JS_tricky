"use strict";
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const toDay = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;// getDay() возвращает 0 (воскресенье), задаешь toDay равным 6, что соответствует массиву week. В других случаях, просто вычитаешь 1, чтобы синхронизировать с массивом, где понедельник имеет индекс 0.
week.forEach((dayOfWee, index) => {
  if ( index === toDay) {
    if (dayOfWee === 'Суббота' || dayOfWee === 'Воскресенье') {
      document.write(`<p style="font-style: italic; font-weight: bold;">${week[i]}</p>`);
    } else {
      document.write(`<p style="font-weight: bold;">${week[index]}</p>`);
    }
  } else if (dayOfWee === 'Суббота' || dayOfWee === 'Воскресенье') {
    document.write(`<p style="font-style: italic;">${week[index]}</p>`);
  } else {
    document.write(`<p>${week[index]}</p>`)
  }
})


