const date = new Date('2023-02-22T10:00:00Z');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatter = new Intl.DateTimeFormat('en-US', options);
console.log(formatter.format(date)); 

const number = 1234567.89;
const formatter2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(formatter2.format(number)); 

const collator = new Intl.Collator('en-US');
const names = ['Apple', 'banana', 'cherry', 'date'];
console.log(names.sort(collator.compare));

const formatter3 = new Intl.ListFormat('en-US', { style: 'long', type: 'disjunction' });
const fruits = ['apples', 'bananas', 'cherries'];
console.log(formatter3.format(fruits)); 

const formatter4 = new Intl.PluralRules('en-US', { type: 'ordinal' });
console.log(formatter4.select(1)); 
console.log(formatter4.select(2)); 
console.log(formatter4.select(3)); 
console.log(formatter4.select(4)); 

const formatter5 = new Intl.DisplayNames('en-US', { type: 'currency' });
console.log(formatter5.of('USD')); 
console.log(formatter5.of('EUR')); 

let x = -10.5;
console.log(Math.abs(x)); 
console.log(Math.ceil(x)); 
console.log(Math.floor(x)); 
console.log(Math.max(2, 5, 10)); 
console.log(Math.min(2, 5, 10)); 
console.log(Math.pow(2, 3));
console.log(Math.round(2.4)); 
console.log(Math.sqrt(16)); 



