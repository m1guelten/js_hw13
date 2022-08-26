console.log('Sample JavaScript #4 HW #16');

//#1

let myLongStr =
  'bhjdsbbcjkdfnvj vhdjvhi dcdsjvhre vhdvjdsi gui xfcghj hgvyhy/cdg gf=dvfkvo-0fvfmidf[lfdfkbk-flbpcvm  l;v lfvk dfk d df v[df[viodflv-';
let wordsList = (str, subStr) => {
  let reg = new RegExp('\\.|,|\\?|!|:|;|"', 'gui');
  let arr = str
    .replace(reg, '')
    .toLowerCase()
    .split(' ')
    .filter((arrItem) => arrItem.indexOf(subStr) > -1);
  let res = new Set();

  arr.forEach((arrItem) => {
    res.add(arrItem);
  });

  return res;
};

// #2
/*
 * Создайте функцию getLocalDate(date, isSeconds, isISO), которая будет принимать любую
 * дату от конструктора new Date и преобразовывать ее в следующие форматы в зависимости от параметров:
 * getLocalDate(date)              → dd.mm.yyyy, hh:mm,    например: 16.07.2019, 00:15
 * getLocalDate(date, true)        → dd.mm.yyyy, hh:mm:ss, например: 16.07.2019, 00:15:32
 * getLocalDate(date, false, true) → yyyy-mm-dd, hh:mm,    например: 2019-06-02, 00:15
 * getLocalDate(date, true, true)  → yyyy-mm-dd, hh:mm:ss, например: 2019-06-02, 00:15:32
 * date – любая дата из конструктора new Date().
 * isSeconds – опциональный параметр для отображения секунд в дате.
 * isISO – опциональный параметр переключения формата даты.
 */

let myDate = new Date();
let getLocalDate = (date, isSeconds = false, isISO = false) => {
  const reg = new RegExp(':\\d{2}$', 'gui');
  let res;
  if (!isISO) {
    res = isSeconds
      ? date.toLocaleString()
      : date.toLocaleString().replace(reg, '');
  } else {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds =
      date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();
    res = isSeconds
      ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}`
      : `${year}-${month}-${day}, ${hour}:${minutes}`;
  }
  return res;
};

/*
 * #3
 *
 * Создайте функцию getWeekDay(date), которая принимает дату в виде строки в формате 'yyyy-mm-dd'
 * и выводит текущий день недели: "понедельник", "вторник", … "воскресенье".
 */

let getWeekDay = (d) => {
  const date = new Date(d);
  const days = [
    'понеділок',
    'вівторок',
    'середа',
    'четвер',
    'пятниця',
    'субота',
    'неділя',
  ];
  return days[date.getDay()];
};

/* #4
 * Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
 * День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
 */

let getLocalDay = (d) => {
  const date = new Date(d);
  let day = date.getDay();
  if (day === 0) day = 7;
  return day;
};

/* #5
 *
 * Создайте функцию getDateAgo(date, days), которая возвращает дату,
 * которая была days дней назад от указанной даты date.
 * Дата принимается в формате YYYY-MM-DD, возвращается DD.MM.YYYY.
 */
let getDateAgo = (d, days) => {
  const date = new Date(d);
  date.setDate(date.getDate() - days);
  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
};

/*#6
 * Используя в качестве основы, объект car, описанный в прошлом занятии, создайте прототип Car,
 * реализующий те же поля (#17.4) и методы(#17.5 и #17.6) у создаваемых объектов.
 *
 * Например:
 * let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
 * let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);
 *
 * Способ создания прототипа – только функция-конструктор!
 * Объекты и их методы, созданные прототипом должны полностью соответствовать объектам из прошлого задания.
 */
let Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};
Object.defineProperties(Car.prototype, {
  used: {
    get() {
      const yearNow = new Date().getFullYear();
      return yearNow - this.year > 1 ? 'used' : 'new';
    },
    set(value) {
      const yearNow = new Date().getFullYear();
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    },
  },
});
Car.prototype.info = function () {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};
let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);

/* #7
 * Напишите функцию testPerformance(iterations, func) для тестирования производительности любых, переданных ей в качестве параметра функций.
 * iterations – количество повторений для тестирования.
 * func – тестируемая функция.
 *
 * Если в качестве параметра передается что-либо кроме функции, тестирование не выполняется, возвращается 0.
 */
let testPerformance = (iterations, func) => {
  let time = Date.now();
  if (typeof func === 'function') for (let i = iterations; i--; ) func();
  return Date.now() - time;
};
function test1() {
  let str = myLongStr;
  while (str.indexOf('o') !== -1) str = str.replace('o', '');
  while (str.indexOf('a') !== -1) str = str.replace('a', '');
  while (str.indexOf('e') !== -1) str = str.replace('e', '');
  while (str.indexOf('u') !== -1) str = str.replace('u', '');
  while (str.indexOf('i') !== -1) str = str.replace('i', '');
}
function test2() {
  const reg = new RegExp('[oaeui]', 'gui');
  myLongStr.replace(reg, '');
}
