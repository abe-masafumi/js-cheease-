'use strict';

{
const hidden_news = document.getElementById('hidden_news');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  hidden_news.style.display === 'none' ? hidden_news.style.display = 'block': hidden_news.style.display = 'none';
});

const hidden_contact = document.getElementById('hidden_contact');
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
  hidden_contact.style.display === 'none' ? hidden_contact.style.display = 'block' : hidden_contact.style.display = 'none';
});

const mask = document.getElementById('mask');
const nav_menu = document.getElementById('nav_menu');
const menu_btn = document.getElementById('menu_btn');
menu_btn.addEventListener('click', () => {
nav_menu.classList.add('show');
mask.classList.add('mask');

});
mask.addEventListener('click', () => {
nav_menu.classList.remove('show');
mask.classList.remove('mask');
});


const input_name = document.querySelector('input[name=name]');
console.log(input_name.value);





}