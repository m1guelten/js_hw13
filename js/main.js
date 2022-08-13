console.log('Sample JavaScript #1 HW #13');

//#1
var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name',
  last: 'Last Name',
};
console.log(`${myNum},\n${myStr},\n${myBool},\n${myArr},\n${myObj}`);

//#2
var decimal2 = myNum.toFixed(2);
console.log(decimal2);

//#3
var i = 5;
console.log(i++, ++i);
console.log(i--, --i);

//#4
var myTest = 20;
console.log(
  (myTest += 5),
  (myTest -= 5),
  (myTest *= 5),
  (myTest /= 5),
  (myTest %= 9)
);

//#5
var myPi = Math.PI;
var myRandom = Math.random() * 10;
var myRound = Math.round(89.279);
var myPow = Math.pow(3, 5);
console.log(myPi);
console.log(myRandom);
console.log(myRound);
console.log(myPow);

//#6

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */
var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
  length: 30,
};

console.log(strObj.str.length);
console.log(strObj.length);

// Мама мыла раму, рама мыла маму

// strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

//#8
var strReplace0 = strObj.str.replace('мыла', 'моет');
var strReplace = strReplace0.replace('рама мыла', 'Рама держит');
console.log(strReplace);

//#9
console.log(strReplace.toLowerCase());
console.log(strReplace.toUpperCase());
