"use strict";
let lang = prompt("ru/en");
console.log(lang);
if (lang == "ru") {
    console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
} else if (lang == "en") {
    console.log("mn", "ts", "wd", "th", "fr", "st", "sn");
}
switch (lang) {
    case "ru":
        console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
        break;
    case "en":
        console.log("mn", "ts", "wd", "th", "fr", "st", "sn");
        break;
}
const Arr = {
    ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
};
console.log(Arr[lang]);

let namePerson = prompt("имя");
namePerson = namePerson.toLowerCase();
console.log(
    namePerson === "артем"
        ? "Директор"
        : namePerson === "александр"
            ? "Преподователь"
            : "Студент"
);
