const knives = [
    {
        id: 1,
        name: "Sokol Urban",
        size: 210,
        color: "black",
        metal: "сталь",
        rating: 4.7,
        reviews: 315,
        price: 5490,
        image: "images/sokol-urban.jpg",
        article: "SU-210-BLK",
        brand: "Sokol Knives",
        series: "Urban Line",
        bonusPoints: 55,
        steel: ["AUS-8", "95Х18"],
        handle: ["дерево", "микарта"],
        guardAndPommel: ["латунь"],
        bladeFinish: ["сатин", "Stonewash"],
        bladeWidth: 28,
        bladeLength: 110,
        overallLength: 210,
        spineThickness: 3.5
    },
    {
        id: 2,
        name: "Taiga Pro",
        size: 235,
        color: "olive",
        metal: "сталь",
        rating: 4.5,
        reviews: 128,
        price: 4290,
        image: "images/taiga-pro.jpg",
        article: "TP-235-OLV",
        brand: "Taiga",
        series: "Pro Edition",
        bonusPoints: 43,
        steel: ["D2"],
        handle: ["G10", "резина"],
        guardAndPommel: ["сталь"],
        bladeFinish: ["сатин"],
        bladeWidth: 30,
        bladeLength: 120,
        overallLength: 235,
        spineThickness: 4
    },
    {
        id: 3,
        name: "Vikhr EDC",
        size: 195,
        color: "steel",
        metal: "сталь",
        rating: 4.8,
        reviews: 842,
        price: 5990,
        image: "images/vikhr-edc.png",
        article: "VE-195-STL",
        brand: "Vikhr",
        series: "Everyday Carry",
        bonusPoints: 60,
        steel: ["M390", "D2"],
        handle: ["титан", "G10"],
        guardAndPommel: ["титан"],
        bladeFinish: ["сатин", "полировка"],
        bladeWidth: 27,
        bladeLength: 95,
        overallLength: 195,
        spineThickness: 3.2
    },
    {
        id: 4,
        name: "Rys Compact",
        size: 180,
        color: "orange",
        metal: "чугун",
        rating: 4.3,
        reviews: 76,
        price: 2990,
        image: "images/rys-compact.png",
        article: "RC-180-ORG",
        brand: "Rys",
        series: "Compact Series",
        bonusPoints: 30,
        steel: ["440C"],
        handle: ["пластик", "дерево"],
        guardAndPommel: ["алюминий"],
        bladeFinish: ["Stonewash"],
        bladeWidth: 25,
        bladeLength: 90,
        overallLength: 180,
        spineThickness: 2.8
    },
    {
        id: 5,
        name: "Shtorm Trek",
        size: 225,
        color: "black",
        metal: "сталь",
        rating: 4.9,
        reviews: 1504,
        price: 8990,
        image: "images/shtorm-trek.jpg",
        article: "ST-225-BLK",
        brand: "Shtorm",
        series: "Trek Series",
        bonusPoints: 90,
        steel: ["M390", "CPM S35VN"],
        handle: ["текстолит", "карбон"],
        guardAndPommel: ["нержавеющая сталь"],
        bladeFinish: ["чёрное покрытие", "сатин"],
        bladeWidth: 32,
        bladeLength: 120,
        overallLength: 225,
        spineThickness: 4.2
    },
    {
        id: 6,
        name: "Berkut Field",
        size: 240,
        color: "sand",
        metal: "сталь",
        rating: 4.6,
        reviews: 263,
        price: 6490,
        image: "images/berkut-field.jpg",
        article: "BF-240-SND",
        brand: "Berkut",
        series: "Field Line",
        bonusPoints: 65,
        steel: ["95Х18"],
        handle: ["дерево"],
        guardAndPommel: ["латунь", "медь"],
        bladeFinish: ["сатин"],
        bladeWidth: 30,
        bladeLength: 125,
        overallLength: 240,
        spineThickness: 4
    },
    {
        id: 7,
        name: "Neva Lite",
        size: 200,
        color: "blue",
        metal: "сталь, дерево",
        rating: 4.2,
        reviews: 58,
        price: 2590,
        image: "images/neva-lite.jpg",
        article: "NL-200-BLU",
        brand: "Neva",
        series: "Lite Series",
        bonusPoints: 26,
        steel: ["420HC"],
        handle: ["дерево", "резина"],
        guardAndPommel: ["алюминий"],
        bladeFinish: ["сатин", "Stonewash"],
        bladeWidth: 26,
        bladeLength: 100,
        overallLength: 200,
        spineThickness: 3
    },
    {
        id: 8,
        name: "Kedr Hunter",
        size: 255,
        color: "brown",
        metal: "сталь",
        rating: 4.4,
        reviews: 121,
        price: 4790,
        image: "images/kedr-hunter.webp",
        article: "KH-255-BRN",
        brand: "Kedr",
        series: "Hunter Line",
        bonusPoints: 48,
        steel: ["D2", "95Х18"],
        handle: ["дерево", "G10"],
        guardAndPommel: ["сталь"],
        bladeFinish: ["сатин"],
        bladeWidth: 31,
        bladeLength: 130,
        overallLength: 255,
        spineThickness: 4.1
    },
    {
        id: 9,
        name: "Groza One",
        size: 205,
        color: "grey",
        metal: "сталь",
        rating: 4.9,
        reviews: 932,
        price: 14990,
        image: "images/groza-one.jpg",
        article: "GO-205-GRY",
        brand: "Groza",
        series: "One Series",
        bonusPoints: 150,
        steel: ["Elmax", "M390"],
        handle: ["карбон", "титан"],
        guardAndPommel: ["титан"],
        bladeFinish: ["полировка", "сатин"],
        bladeWidth: 29,
        bladeLength: 110,
        overallLength: 205,
        spineThickness: 3.8
    },
    {
        id: 10,
        name: "Lis Trail",
        size: 215,
        color: "khaki",
        metal: "аллюминий",
        rating: 4.6,
        reviews: 204,
        price: 5690,
        image: "images/lis-trail.svg",
        article: "LT-215-KHK",
        brand: "Lis",
        series: "Trail Series",
        bonusPoints: 57,
        steel: ["D2"],
        handle: ["резина", "алюминий"],
        guardAndPommel: ["латунь"],
        bladeFinish: ["сатин", "Stonewash"],
        bladeWidth: 27,
        bladeLength: 115,
        overallLength: 215,
        spineThickness: 3.6
    },

    [
        {
            id: 11,
            name: "Coa coser",
            size: 40,
            color: "khaki",
            metal: "пластик",
            rating: 4.5,
            reviews: 637,
            price: 640,
            image: "images/d.webp",
            article: "CC-040-KHK",
            brand: "Coa",
            series: "Compact Tools",
            bonusPoints: 6,
            steel: ["нет"],
            handle: ["пластик"],
            guardAndPommel: ["нет"],
            bladeFinish: ["глянец"],
            bladeWidth: 10,
            bladeLength: 20,
            overallLength: 40,
            spineThickness: 1.2
        },
        {
            id: 12,
            name: "gos bole",
            size: 135,
            color: "khaki",
            metal: "пластик, стекло",
            rating: 4.8,
            reviews: 1964,
            price: 2290,
            image: "images/g.jpg",
            article: "GB-135-KHK",
            brand: "Gos",
            series: "Bole Series",
            bonusPoints: 23,
            steel: ["нет"],
            handle: ["пластик", "резина"],
            guardAndPommel: ["нет"],
            bladeFinish: ["глянец"],
            bladeWidth: 12,
            bladeLength: 30,
            overallLength: 135,
            spineThickness: 1.5
        },
        {
            id: 13,
            name: "Lis ulic",
            size: 65,
            color: "khaki",
            metal: "пластик",
            rating: 4.6,
            reviews: 1062,
            price: 590,
            image: "images/bolt.jpeg",
            article: "LU-065-KHK",
            brand: "Lis",
            series: "Ulic Tools",
            bonusPoints: 5,
            steel: ["нет"],
            handle: ["пластик"],
            guardAndPommel: ["нет"],
            bladeFinish: ["глянец"],
            bladeWidth: 9,
            bladeLength: 25,
            overallLength: 65,
            spineThickness: 1.1
        },
        {
            id: 14,
            name: "black flashlight",
            size: 85,
            color: "black",
            metal: "пластик, стекло",
            rating: 4.9,
            reviews: 2318,
            price: 890,
            image: "images/fonar.png",
            article: "BF-085-BLK",
            brand: "NightFox",
            series: "Utility",
            bonusPoints: 9,
            steel: ["нет"],
            handle: ["пластик"],
            guardAndPommel: ["нет"],
            bladeFinish: ["глянец"],
            bladeWidth: 8,
            bladeLength: 30,
            overallLength: 85,
            spineThickness: 1.3
        }
    ]
];


let flashlights = [
    {
        name: "Coa coser",
        size: 40,
        color: "khaki",
        metal: "пластик",
        rating: 4.5,
        reviews: 637,
        price: 640,
        image: "images/d.webp"
    },
    {
        name: "gos bole",
        size: 135,
        color: "khaki",
        metal: "пластик, стекло",
        rating: 4.8,
        reviews: 1964,
        price: 2290,
        image: "images/g.jpg"
    },
    {
        name: "Lis ulic",
        size: 65,
        color: "khaki",
        metal: "пластик",
        rating: 4.6,
        reviews: 1062,
        price: 590,
        image: "images/bolt.jpeg"
    },
    {
        name: "black flashlight",
        size: 85,
        color: "khaki",
        metal: "пластик, стекло",
        rating: 4.9,
        reviews: 2318,
        price: 890,
        image: "images/fonar.png"
    }
]
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result < 10) result = '0' + result;
    return result;
}
let newDate = new Date()
const news = [
    {
        image: "images/Rectangle 42.png",
        content: "Все о ножах: <br>как правильно выбрать",
        date: getRandom(1, 31) + "." + getRandom(1, 12) + "." + getRandom(1998, newDate.getFullYear() - 1)
    },
    {
        image: "images/Rectangle 43.png",
        content: "Как правильно <br>выбрать фонарь",
        date: getRandom(1, 31) + "." + getRandom(1, 12) + "." + getRandom(1998, newDate.getFullYear() - 1)
    },
    {
        image: "images/Rectangle 44.png",
        content: "Ножи для <br>охотников",
        date: getRandom(1, 31) + "." + getRandom(1, 12) + "." + getRandom(1998, newDate.getFullYear() - 1)
    },
    {
        image: "images/Rectangle 45.png",
        content: "Кухонные ножи <br>для хозяек",
        date: getRandom(1, 31) + "." + getRandom(1, 12) + "." + getRandom(1998, newDate.getFullYear() - 1)
    }

];

function getKnives(lastIndex, container, fop) {
    let end = Math.min(lastIndex + fop, knives.length);
    for (let index = lastIndex; index < end; index++) {
        let knife = knives[index];
        let div = document.createElement('div');
        div.style = 'box-shadow: 0px 4px 20px 0px #0000001A;cursor:pointer;width: 260px;height: 470px;align-items:center;font-family: Montserrat;font-weight: 600;font-size: 16px;background-color:white;'
        div.innerHTML = `
        <img src='../${knife.image}' style='width: 239.8355407714844px;height: 239.93333435058594px;margin-left:10px;'>
        
        <div style="display:flex;flex-direction:column;margin-left:10px">
        <h3 style="font-family: Montserrat;font-weight: 600;font-size: 20px;color:black;">${knife.name}</h3>
            <p style='color: #ABABAB;' >металл: <b>${knife.metal}</b></p>
            <p style='color: #9536d4ff;'>Длина: ${knife.size / 10} cm</p>
            <p style="color: #ff0000ff;" id="io">⭐ ${knife.rating} (${knife.reviews} отзывов)</p>
            <hr style="width:240px;">
            

        </div>
        <div style="display:flex;margin-left:10px;">
            <p style="font-family: Montserrat;font-weight: 600;font-size: 20px;color:black;">${knife.price} ₽</p>
            <div style='display:flex;margin-left:100px;gap:15px;'><img src='../images/a.svg'><img src="../images/Group (1).svg"></div>
            
            
        </div>
        <button style='width: 235px;height: 50px;background-color:background-color: #E8AA31;margin-top:30px;font-family: Montserrat;font-weight: 600;font-size: 18px;margin-left:15px;'>в корзину🛒</button>
        
    `
        div.addEventListener("click", () => {
            localStorage.setItem("knive_key", JSON.stringify(knife));
            window.location.href = '../pages/page_1.html';
            
        })


        container.append(div)








    }
    return end;
}


function getNews(lastIndex, container, fop) {
    let end = Math.min(lastIndex + fop, news.length);
    for (let index = lastIndex; index < end; index++) {
        let currentNews = news[index];
        let div = document.createElement('div');
        div.className = 'log'
        div.innerHTML = `
        <img src="${currentNews.image}" style="" class="auto">
        <h3 style="padding:30px">${currentNews.content}</h3>
        <p style="padding-left:30px;display:flex;text-align:center;">${currentNews.date}</p>
        `




        container.append(div)








    }
    return end;
}
function groza(lastIndex, container, fop) {
    let end = Math.min(lastIndex + fop, flashlights.length);
    for (let index = lastIndex; index < end; index++) {
        let knife = flashlights[index];
        let div = document.createElement('div');
        div.style = 'box-shadow: 0px 4px 20px 0px #0000001A;width: 275px;height: 470px;align-items:center;padding-left:31pxfont-family: Montserrat;font-weight: 600;font-size: 16px;background-color:white;'
        div.innerHTML = `
        <img src='../${knife.image}' style='width: 239.8355407714844px;height: 239.93333435058594px;margin-left:10px;'>
        
        <div style="display:flex;flex-direction:column;margin-left:10px">
        <h3 style="font-family: Montserrat;font-weight: 600;font-size: 20px;color:black;">${knife.name}</h3>
            <p style='color: #ABABAB;' >материал: <b>${knife.metal}</b></p>
            <p style='color: #9536d4ff;'>Длина: ${knife.size / 10} cm</p>
            <p style="color: #ff0000ff;" id="io">⭐ ${knife.rating} (${knife.reviews} отзывов)</p>
            <hr style="width:250px;">
            

        </div>
        <div style="display:flex;margin-left:10px;">
            <p style="font-family: Montserrat;font-weight: 600;font-size: 20px;color:black;">${knife.price} ₽</p>
            <div style='display:flex;margin-left:100px;gap:15px;'><img src='../images/a.svg'><../img src="images/Group (1).svg"></div>
            
            
        </div>
        <button style='width: 235px;height: 50px;background-color:background-color: #E8AA31;margin-top:30px;font-family: Montserrat;font-weight: 600;font-size: 18px;margin-left:15px;'>в корзину🛒</button>
        
    `




        container.append(div)








    }
    return end;
}


let di = document.getElementById('di');
let d1 = document.getElementById('d1');

let but1 = document.getElementById('but1');
let lastIndex = 0;
lastIndex = getKnives(lastIndex, d1, 4);

let d10 = document.getElementById('d10');
lastIndex = getKnives(4, d10, 4);



// but1.addEventListener('click', () => {

// })