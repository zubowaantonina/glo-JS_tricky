"use strict";
let lang = prompt("ru/en");
console.log(lang);
if (lang == "ru") {
  console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
} else if (lang == "en") {
  console.log("Mo", "Tu", "We", "Th", "Fr", "Sa", "Su");
}
switch (lang) {
  case "ru":
    console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
    break;
  case "en":
    console.log("Mo", "Tu", "We", "Th", "Fr", "Sa", "Su");
    break;
}
const Arr = {
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
};
console.log(Arr[lang]);

const daysOfWeek = [
  ["ru", "пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  ["en", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
];
daysOfWeek[0][0] == lang
  ? console.log(daysOfWeek[0].slice(1))
  : console.log(daysOfWeek[1].slice(1));

let namePerson = prompt("имя");
namePerson = namePerson.toLowerCase();
console.log(
  namePerson === "артем"
    ? "Директор"
    : namePerson === "александр"
    ? "Преподователь"
    : "Студент"
);
