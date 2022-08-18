console.log('Sample JavaScript #3 HW #15');

//#1
counter = (function () {
  var count = 0;
  return function (num) {
    count = num === undefined ? count : num;
    return count++;
  };
})();
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());

// #2
var counting = (function () {
  var count = 0;
  return {
    value(num) {
      if (num !== undefined) count = num;
      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    },
  };
})();
console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value());

//#3
let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) return (x *= pow(x, n - 1));
    return x;
  };
  return callback(a, b, pow(a, b));
};
console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));

//#4-6
function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}
var yearNow = new Date().getFullYear();
var car = {
  engine: 2000,
  model: 'Lacetti',
  name: 'Chevrolet',
  year: 2010,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  },
};
var car2 = {
  engine: 5000,
  model: 'FX50 AWD',
  name: 'Infinite',
  year: 2019,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  },
};
console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());

//#7
var list = [12, 23, 100, 34, 56, 9, 233];
var myMax = (arg) => Math.max.apply(Math, arg);
console.log(myMax(list));

//#8
function myMul(a, b) {
  return a * b;
}
var myDouble = myMul.bind(null, 2);
console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));
var myTriple = myMul.bind(null, 3);
console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));

//#9
//#9
var notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
var notUniqStrings = [
  'Bob',
  'Kate',
  'Jhon',
  'Tom',
  'Jhon',
  'Kate',
  'Tom',
  'Bob',
  'Jhon',
  'Tom',
];
var myUniq = (arr) => {
  var set = new Set();
  arr.forEach((val) => {
    set.add(val);
  });
  return set;
};
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));
