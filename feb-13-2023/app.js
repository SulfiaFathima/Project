localStorage.setItem('name','ajmal');
console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
sessionStorage.setItem('name', 'nazi');
console.log(sessionStorage.getItem('name'));

sessionStorage.setItem('name', 'rabeek');
console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');
document.cookie = 'name=sulfia; expires='+new Date(2023, 10, 18).toUTCString();
document.cookie = 'lastname=fathima; expires='+new Date(2023, 10, 18).toUTCString();