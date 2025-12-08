const reviews = {
  "1": [
    {
      "reviewId": 1,
      "author": "Илья",
      "rating": 5,
      "text": "Отличный нож! Очень удобен в руке, сталь держит заточку прекрасно.",
      "date": "2024-11-01"
    },
    {
      "reviewId": 2,
      "author": "Максим",
      "rating": 4,
      "text": "Хороший нож, но чехол мог бы быть качественнее.",
      "date": "2024-11-12"
    }
  ],
  "2": [
    {
      "reviewId": 1,
      "author": "Антон",
      "rating": 5,
      "text": "Хорошее соотношение цены и качества. Отлично подходит для походов.",
      "date": "2024-11-03"
    }
  ],
  "3": [
    {
      "reviewId": 1,
      "author": "Сергей",
      "rating": 5,
      "text": "Очень крутой EDC нож! Титан на рукояти — супер.",
      "date": "2024-10-28"
    },
    {
      "reviewId": 2,
      "author": "Олег",
      "rating": 4,
      "text": "Качество отличное, но цена высоковата.",
      "date": "2024-11-15"
    }
  ],
  "4": [],
  "5": [
    {
      "reviewId": 1,
      "author": "Алексей",
      "rating": 5,
      "text": "Один из лучших ножей, что у меня были. Легкий, удобный, прочный.",
      "date": "2024-11-10"
    }
  ],
  "6": [
    {
      "reviewId": 1,
      "author": "Кирилл",
      "rating": 5,
      "text": "Красивый нож и отлично режет. Покупкой доволен.",
      "date": "2024-11-06"
    }
  ],
  "7": [],
  "8": [
    {
      "reviewId": 1,
      "author": "Даниил",
      "rating": 4,
      "text": "Для охоты самое то. Рукоять удобная, но заточку держит средне.",
      "date": "2024-11-09"
    }
  ],
  "9": [
    {
      "reviewId": 1,
      "author": "Егор",
      "rating": 5,
      "text": "Премиальный нож! Полировка просто зеркало. Стоит своих денег.",
      "date": "2024-11-20"
    }
  ],
  "10": [
    {
      "reviewId": 1,
      "author": "Виталий",
      "rating": 4,
      "text": "Хороший вариант для треккинга. Немного скользкая рукоять.",
      "date": "2024-11-18"
    }
  ]
}



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

function prie(create, text, style, app) {
  let a = document.createElement(create)
  a.textContent = text;
  a.style = style;
  app.appendChild(a);

}

z.addEventListener('click', () => {

  d.innerHTML = ''



  if (knife.id in reviews) {
    if (reviews[knife.id].length != 0) {

      for (const element of reviews[knife.id]) {
        let review_div = document.createElement("div");
        review_div.style = "display: flex";

        let block = document.createElement("div");
        block.style = "display:flex; flex-direction:column; padding-top:30px;"
        let img = document.createElement('img')

        img.src = 'i.webp'
        img.style = 'width:80px;height:80px; padding-top:30px; padding-right: 30px'
        review_div.appendChild(img);

        let author_and_date_div = document.createElement('div');

        author_and_date_div.className = "author_and_date_div";

        let p = document.createElement('p');
        p.textContent = element.author;
        p.style = 'font-family: Montserrat;font-weight: 600;font-size: 18px;leading-trim: NONE;line-height: 100 %;'
        author_and_date_div.appendChild(p)


        let date = document.createElement('p');
        date.textContent = element.date
        date.style = "font-family: Montserrat;font-weight: 500;font-size: 14px;leading-trim: NONE;line-height: 100%;letter-spacing: 0%;color: #141414a;"
        author_and_date_div.appendChild(date);


        block.append(author_and_date_div)

        prie('p', "⭐".repeat(element.rating), '', block)


        review_div.appendChild(block)
        d.appendChild(review_div);

      }


    } else {
      d.innerHTML = `
        abc
        `
    }


  }















});

let selectCountry = document.createElement("select");


gom.addEventListener('click', () => {
  d.style = 'display:flex;flex-direction:column;'

  const citiesOfRussia = ["Ростов-на-Дону", "Санкт-Петербург", "Екатеринбург", "Волгоград", "Каменск-Шахтинский", "Калач-на-Дону", "Владивосток", "Москва"];
  const citiesOfCazaxcTaH = ["Астана"];
  const citiesOfBelorussia = ["Минск"];

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
  let name = 'Ваш город';
  let block = document.createElement('div');
  block.style = 'display:flex;gap:26px;';

  const selectCity = document.createElement("select");
  selectCity.id = "selectCity";
  let padding = document.createElement('p');
  padding.textContent = name;
  block.appendChild(padding);





  for (const city of citiesOfRussia) {

    const cityOption = document.createElement("option");
    cityOption.text = city;
    cityOption.value = city;
    selectCity.appendChild(cityOption);

  }
  selectCountry.addEventListener("change", () => {
    let cities = [];
    selectCity.innerHTML = ''

    if (selectCountry.value == "Россия") {
      cities = citiesOfRussia

    }

    else if (selectCountry.value == "Казахстан") {
      cities = citiesOfCazaxcTaH
    }

    else {

      cities = citiesOfBelorussia
    };
    for (const city of cities) {

      const cityOption = document.createElement("option");
      cityOption.text = city;
      cityOption.value = city;
      selectCity.appendChild(cityOption);
      if (cityOption.value == "Москва") {
        d.innerHTML = `
        <hr>
        <div>
          <img src='1200px-Russian_Post 1.jpg'>
        </div>
        `
      }

    }





  })




  block.appendChild(selectCity);
  d.appendChild(block);

  // if (select.value == 'Россия') {
  //     d.innerHTML += `

  //     <div style="display:flex;">
  //         <p class="wi">Ваш город</p>
  //         <select >
  //             <option></option>
  //             <option></option>
  //             <option></option>
  //             <option></option>
  //             <option></option>
  //             <option></option>
  //             <option></option>
  //             <option></option>
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




