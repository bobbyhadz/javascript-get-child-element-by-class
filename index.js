console.log('bobbyhadz.com');

const parent = document.querySelector('#parent');
console.log(parent); // 👉️ div#parent

const child1 = parent.querySelector('.first');
console.log(child1); // div.first

const children = parent.querySelectorAll('.first');
console.log(children); // 👉️ [div.first]
