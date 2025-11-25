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



let l = document.getElementById('l');
let po = document.getElementById('po');

let count = Number(l.textContent);
po.textContent = '+ ' + (knife.bonusPoints * count) + " баллов за покупку";

let m = document.getElementById('m')

let j = document.getElementById('j')
j.textContent = knife.price + '₽'

let b = document.getElementById('b')
m.addEventListener("click", () => {
    if (count > 1) {
        count--;
        l.textContent = count;
    }
    po.textContent = '+ ' + (knife.bonusPoints * count) + " баллов за покупку";
    j.textContent = (knife.price * count) + '₽';

})
b.addEventListener("click", () => {
    count++;
    l.textContent = count;
    po.textContent = '+ ' + (knife.bonusPoints * count) + " баллов за покупку";
    j.textContent = (knife.price * count) + '₽';
})

let x = document.getElementById('x');
let y = document.getElementById('y');
let z = document.getElementById('z');
let gom = document.getElementById('gom');
let d = document.getElementById('d');

x.addEventListener('click', () => {
    d.innerHTML = '';
    let p = document.createElement('p');
    p.className = 'bnm';
    p.textContent = '???';
    d.appendChild(p)
});

y.addEventListener('click', () => {
    let bland = knife.bladeLength;
    let text = 'мм'
    if (bland > 100) {
        bland /= 10;
        text = 'см'
    }
    d.innerHTML = `<table style="border-collapse: collapse; width: 1000px; height:300px; text-align: center;margin-top:30px">
        <tr>
            <th style="border-right: 2px solid grey; padding: 10px;">Технические характеристики</th>
            <th style="border-right: 2px solid grey;padding:10px">Используемые материалы</th>
            <th style="padding: 10px;">Производство</th>
        </tr>

        <tr>
            <td style="border-right: 2px solid grey; padding-right: 60px;">
                
                Общая длина: ${knife.size / 10} см<br>
                Длина клинка: ${bland} ${text}<br>
                Ширина клинка: ${knife.bladeWidth} мм<br>
                Толщина обуха: ${knife.spineThickness * 1000} мкм
                
            </td>
            <td style="border-right: 2px solid grey; padding-left: 60px;padding-right: 60px">
                Сталь: ${knife.metal}<br>
                Рукоять: ${knife.handle}
            </td>
            <td style="padding-left: 60px;">производство: ${knife.brand}</td>
        </tr>
    </table>`;


});

z.addEventListener('click', () => {
    d.innerHTML = `
        <p>У данного товара нет отзывов. Станьте первым, кто оставил отзыв об этом товаре!</p>
        <button>Написать отзыв</button>
    `






});

let selectCountry = document.createElement("select");


gom.addEventListener('click', () => {

    const citiesOfRussia = ["Ростов-на-Дону", "Санкт-Петербург", "Екатеринбург", "Волгоград"];
    
    d.innerHTML = `
    <div style="display:flex;padding-bottom:20px;padding-top:30px;">
            <p class="wi">Ваша страна</p>
            <select id="selectCountry">
                <option>Россия</option>
                <option>Казахстан</option>
                <option>Белоруссия</option>
            </select>
        </div>
    `
    selectCountry = document.getElementById("selectCountry");


    const selectCity = document.createElement("select");
    selectCity.id = "selectCity";

    
    
    for (const city of citiesOfRussia) {

        const cityOption = document.createElement("option");
        cityOption.text = city;
        cityOption.value = city;
        selectCity.appendChild(cityOption);

    }


    d.appendChild(selectCity);


    // if (select.value == 'Россия') {
    //     d.innerHTML += `
        
    //     <div style="display:flex;">
    //         <p class="wi">Ваш город</p>
    //         <select >
    //             <option></option>
    //             <option></option>
    //             <option></option>
    //             <option></option>
    //             <option>Каменск-Шахтинский</option>
    //             <option>Калач-на-Дону</option>
    //             <option>Владивосток</option>
    //             <option>Москва</option>
    //             // <option>Астана</option>
    //             // <option>Минск</option>
                
    //         </select>
    //     </div>
    // `;
    // } else if (select.value == 'Казахстан') {
    //     d.innerHTML += `
    //     <div style="display:flex;">
    //         <p class="wi">Ваш город</p>
    //         <select >
    //             // <option>Ростов-на-Дону</option>
    //             // <option>Санкт-Петербург</option>
    //             // <option>Екатеринбург</option>
    //             // <option>Волгоград</option>
    //             // <option>Каменск-Шахтинский</option>
    //             // <option>Калач-на-Дону</option>
    //             // <option>Владивосток</option>
    //             // <option>Москва</option>
    //              <option>Астана</option>
    //             // <option>Минск</option>
                
    //         </select>
    //     </div>
    // `;
    // } else {
    //     d.innerHTML += `
    //     <div style="display:flex;">
    //         <p class="wi">Ваш город</p>
    //         <select >
    //             // <option>Ростов-на-Дону</option>
    //             // <option>Санкт-Петербург</option>
    //             // <option>Екатеринбург</option>
    //             // <option>Волгоград</option>
    //             // <option>Каменск-Шахтинский</option>
    //             // <option>Калач-на-Дону</option>
    //             // <option>Владивосток</option>
    //             // <option>Москва</option>
    //             // <option>Астана</option>
    //              <option>Минск</option>
                
    //         </select>
    //     </div>
    // `;
    // }


});



selectCountry.addEventListener("change", () => {

    console.log    ("Hello");


})

