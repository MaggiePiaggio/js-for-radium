//Exercise 1
let month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month.length);
let fifth = month[month.length - 8];
let eleventh = month[month.length - 2];
console.log(fifth + eleventh);


//Exercise 2
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
year.sort();
console.log(year);


//Exercise 3
var cronos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
cronos.unshift('Estos son:(')
cronos.push(') meses del año')
console.log(cronos);


//Exercise 4
var time = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
time.shift('Enero')
time.pop('Diciembre')
console.log(time);


//Exercise 5
const timer = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const reversed = timer.reverse();
console.log('reversed:', reversed);


//Exercise 6
const Atlas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(Atlas.join('-'));


//Exercise 7
var cut = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var some = cut.slice(4, 11);
console.log(some);







