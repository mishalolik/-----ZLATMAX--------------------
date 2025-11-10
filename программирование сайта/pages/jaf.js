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

let span1 = document.getElementById('span1');
span1.textContent = knife.brand;

let span2 = document.getElementById('span2');
span2.textContent = knife.series;

let span3 = document.getElementById('span3');
span3.textContent = knife.bonusPoints;

let sel = document.getElementById('sel');
knife.steel.forEach(element => {
    let option = document.createElement('option');
    option.value = element;
    option.textContent = element;
    sel.append(option);
});

let sel1 = document.getElementById('sel1');
knife.handle.forEach(element => {
    let option = document.createElement('option');
    option.value = element;
    option.textContent = element;
    sel1.append(option);
});

let sel2 = document.getElementById('sel2');
knife.guardAndPommel.forEach(element => {
    let option = document.createElement('option');
    option.value = element;
    option.textContent = element;
    sel2.append(option);
});

let sel3 = document.getElementById('sel3');
knife.bladeFinish.forEach(element => {
    let option = document.createElement('option');
    option.value = element;
    option.textContent = element;
    sel3.append(option);
});