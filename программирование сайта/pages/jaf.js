const knife = JSON.parse(localStorage.getItem('knive_key'));
let lg = document.getElementById('nam');
lg.textContent = knife.name;

let img = document.getElementById('img');
img.src = "../" + knife.image;

let img1 = document.getElementById('img19');
img1.src = "../" + knife.image;

let h2 = document.getElementById('h2');
h2.textContent = knife.name;

let p = document.getElementById('p');
p.textContent = "⭐" + knife.rating;

let span = document.getElementById('span');
span.textContent = knife.article;