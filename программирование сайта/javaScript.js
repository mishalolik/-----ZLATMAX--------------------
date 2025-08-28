const knives = [
    {
        name: "Sokol Urban",
        size: 210,
        color: "black",
        metal: "сталь",
        rating: 4.7,
        reviews: 315,
        price: 5490,
        image: "images/sokol-urban.jpg"
    },
    {
        name: "Taiga Pro",
        size: 235,
        color: "olive",
        metal: "сталь",
        rating: 4.5,
        reviews: 128,
        price: 4290,
        image: "images/taiga-pro.jpg"
    },
    {
        name: "Vikhr EDC",
        size: 195,
        color: "steel",
        metal: "сталь",
        rating: 4.8,
        reviews: 842,
        price: 5990,
        image: "images/vikhr-edc.png"
    },
    {
        name: "Rys Compact",
        size: 180,
        color: "orange",
        metal: "чугун",
        rating: 4.3,
        reviews: 76,
        price: 2990,
        image: "images/rys-compact.png"
    },
    {
        name: "Shtorm Trek",
        size: 225,
        color: "black",
        metal: "сталь",
        rating: 4.9,
        reviews: 1504,
        price: 8990,
        image: "images/shtorm-trek.jpg"
    },
    {
        name: "Berkut Field",
        size: 240,
        color: "sand",
        metal: "сталь",
        rating: 4.6,
        reviews: 263,
        price: 6490,
        image: "images/berkut-field.jpg"
    },
    {
        name: "Neva Lite",
        size: 200,
        color: "blue",
        metal: "сталь, дерево",
        rating: 4.2,
        reviews: 58,
        price: 2590,
        image: "images/neva-lite.jpg"
    },
    {
        name: "Kedr Hunter",
        size: 255,
        color: "brown",
        metal: "сталь",
        rating: 4.4,
        reviews: 121,
        price: 4790,
        image: "images/kedr-hunter.webp"
    },
    {
        name: "Groza One",
        size: 205,
        color: "grey",
        metal: "сталь",
        rating: 4.9,
        reviews: 932,
        price: 14990,
        image: "images/groza-one.jpg"
    },
    {
        name: "Lis Trail",
        size: 215,
        color: "khaki",
        metal: "аллюминий",
        rating: 4.6,
        reviews: 204,
        price: 5690,
        image: "images/lis-trail.svg"
    }
];
let di = document.getElementById('di')
let d1 = document.getElementById('d1')
let but1 = document.getElementById('but1')
let index = 0;
for (knife of knives) {
    
    index+=1;
    let div = document.createElement('div')
    div.style = 'box-shadow: 0px 4px 20px 0px #0000001A;width: 375px;height: 470px;align-items:center;padding-left:31pxfont-family: Montserrat;font-weight: 600;font-size: 16px;'
    div.innerHTML = `
        <img src='${knife.image}' style='width: 239.8355407714844px;height: 239.93333435058594px;margin-left:10px;'>
        
        <div style="display:flex;flex-direction:column;margin-left:10px;">
        <h3 style="font-family: Montserrat;font-weight: 600;font-size: 20px;">${knife.name}</h3>
            <p style='color: #ABABAB;'>Metal: <b>${knife.metal}</b></p>
            <p style='color: #9536d4ff;'>Длина: ${knife.size / 10} cm</p>
            <p style="color: #ff0000ff;">⭐ ${knife.rating} (${knife.reviews} reviews)</p>
            <hr style="width:250px;">
            

        </div>
        <div style="display:flex;margin-left:10px;">
            <p style="font-family: Montserrat;font-weight: 600;font-size: 20px;">${knife.price} ₽</p>
            <div style='display:flex;margin-left:100px;gap:15px;'><img src='images/a.svg'><img src="images/Group (1).svg"></div>
            
            
        </div>
        <button style='width: 235px;height: 50px;background-color:background-color: #E8AA31;margin-top:30px;font-family: Montserrat;font-weight: 600;font-size: 18px;margin-left:15px;'>в корзину🛒</button>
    `
    but1.addEventListener('click', () => {

    })


    d1.append(div)

    






}