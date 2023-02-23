var now = moment();
console.log(now);

var a = moment().toString();
console.log(a);

//date as string
var day = moment("2017-04-15");
console.log("Date",day);

//displaying in string format
var day2 = moment("2017W105").toString();
console.log("Date2",day2);

var day3 = moment("2017080").toString();
console.log("Date3",day3);

var day4 = moment("20170608T063026").toString();
console.log("Date4",day4);

var daywithTime = moment('20170608T063026').format("DD-MM-YYYY HH:mm:ss");
console.log("Date With Time: ",daywithTime);
var daywithTime2 = moment('20170608T063026').format("YYYY-DD-MM HH:mm:ss");
console.log("Date With Time2: ",daywithTime2);

var b = moment("2018-18-10T10:20:25");
console.log(b.isValid());
console.log(b.invalidAt());

var c =moment().millisecond();
console.log(c);
var d =moment().millisecond(1).toString();
console.log(d);

var sec = moment().seconds();
console.log(sec);
sec = moment().seconds(10).toString();
console.log("Sec",sec);
// moment().milliseconds(Number);

// moment().milliseconds();
var date = moment().hour(25).toString();
console.log("Date: ",date);

var day = moment().day().toString(); 
console.log(day);
day = moment().day(0).toString(); 
console.log(day);
day = moment().day('Monday').toString(); 
console.log(day);
day = moment().day(10).toString(); 
console.log(day);
day = moment().day(-5).toString();
console.log(day);
day = moment().day(-7).toString();
console.log(day);
var day2 = moment().weekday(10).toString();
console.log(day2);

//getter
var get = moment().get('year');
console.log("year",get);

get = moment().get('month');
console.log("month",get);

get = moment().get('date');
console.log("date",get);

get = moment().get('hour');
console.log("hour",get);

get = moment().get('minute');
console.log("minute",get);

get = moment().get('second');
console.log("second",get);

get = moment().get('millisecond');
console.log("millisecond",get);

//Adding 
var changeddate = moment().add(5, 'days').add(2, 'months').add(3,'hours').toString();
console.log(changeddate);
changeddate = moment().add({ days: 3, months: 1 }).toString();
console.log(changeddate);

//start of
 day = moment().startOf('month').toString();
 console.log(day);

 day = moment().startOf('year').toString();
 console.log(day);
 day = moment().startOf('quarter').toString();
 console.log(day);
 day = moment().startOf('week').toString();
 console.log(day);


 day = moment().endOf('year').toString();
console.log(day);
day = moment().endOf('month').toString();
console.log(day);

 changeddate = moment().format("[Today's Date is ] D MMM YY");
 console.log(changeddate);

 day = moment().utc().toString();
 console.log(day);

changeddate = moment().format();
console.log(changeddate);

changeddate = moment([2018, 0, 1]).fromNow();
console.log(changeddate);
changeddate = moment([2018, 0, 1]).fromNow(true);
console.log(changeddate);

a = moment([2017, 2, 17]).diff(moment([2007, 8, 16]),'seconds');
console.log(a);

locale("pt");
 a = duration(1, 'days').humanize();
console.log(a);

//MOMENT TIMEZONE
import moment, { locale, duration, tz } from "moment-timezone";
// import MomentTimezoneDataPlugin from 'moment-timezone-data-webpack-plugin';

 a = tz("2013-11-18 11:55", "Asia/Taipei");
 b = tz("2013-11-18 11:55", "America/Toronto");

a.format(); // 2013-11-18T11:55:00+08:00
b.format(); // 2013-11-18T11:55:00-05:00

a.utc().format(); // 2013-11-18T03:55Z
b.utc().format(); // 2013-11-18T16:55Z

// // Set the timezone
// moment.tz.setDefault("America/New_York");

// // Create a new date object in the specified timezone
// date = moment.tz("2000-02-23 10:30:00");

// // Convert the date to a different timezone
// const convertedDate = date.clone().tz("Europe/London");

// // Format the date for display
// const formattedDate = convertedDate.format("MMM D, YYYY h:mm A z");

var DateTime = luxon.DateTime;
const dt = DateTime.local(2017, 5, 15, 8, 30).toString();
 now = DateTime.now().toString();
console.log("date",dt);
console.log("now",now);