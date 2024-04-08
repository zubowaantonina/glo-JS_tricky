"use strict";
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const toDay = new Date().getDay()-1;//Метод getDay() возвращает день недели (от 0 до 6) для указанной даты.Примечание: воскресенье — 0, понедельник — 1 и т. Д.
week.forEach((item, i) => {
  if (i === toDay) {

    if (item === 'Суббота' || item === 'Воскресенье') {
      document.write(`<p style="font-style: italic; font-weight: bold;">${week[i]}</p>`);
    } else {
      document.write(`<p style="font-weight: bold;">${week[i]}</p>`);
    }

  } else if (item === 'Суббота' || item === 'Воскресенье') {
    document.write(`<p style="font-style: italic;">${week[i]}</p>`);
  } else {
    document.write(`<p>${week[i]}</p>`)
  }
})


