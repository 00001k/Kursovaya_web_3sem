const default_prices_pizza = [
    299, 329, 439, 489, 
    389, 439, 489, 389,
    439, 439, 439, 439
]

const default_names_pizza = [
    "Сырная", "Ветчина и сыр", "Пепперони", "Четыре сыра", 
    "Ветчина и грибы", "Четыре сезона", "Мясная", "Маргарита",
    "Домашняя", "Гавайская", "Овощи и грибы", "Цыплёнок карри"
]

const default_prices_sushi = [
    549, 299, 550, 443,
    409, 349, 379, 470
]

const default_names_sushi = [
    "Филадельфия", "Калифорния", "Аляска", "Дабл унаги",
    "Медовый окунь", "Инь-ян", "Лосось рэд", "Сочная креветка"
]

const default_prices_drinks = [
    105, 105, 105, 125, 
    125, 75, 149, 149
]

const default_names_drinks = [
    "Добрый кола", "Добрый апельсин", "Rich tea зелёный", "Морс клюква",
    "Морс вишня", "BonaAqua негазированная", "Кофе Капучино", "Кофе Латте"
]

const default_prices_desserts = [
    139, 289, 95, 205,
    205, 289, 94, 39
]

const default_names_desserts = [
    "Чизкейк Нью-Йорк", "Фондан", "Маффин три шоколада", "Бруслетики",
    "Рулетики с корицей", "Сырники с малиновым вареньем", "Донат карамельный", "Маршмелоу"
]

function addCards(cards, size) {

    for(let i = 0; i < size; ++i) {

        cards[i] = new Card();
        //console.log(cards[i]);
        main.append(cards[i].div);

    }

}

class Card {

    static id = 0;
    div;
    imgSrc;
    price;
    name;

    constructor() {

        this.div = document.createElement('div');
        this.div.classList.add('product_card');

        if(window.location.pathname == "/products_pages/pizza_page.html") {

            this.imgSrc = `pizza/pizza${Card.id}.png`;
            this.price = default_prices_pizza[Card.id];
            this.name = default_names_pizza[Card.id];

        }

        if(window.location.pathname == "/products_pages/sushi_page.html") {

            this.imgSrc = `sushi/sushi${Card.id}.png`;
            this.price = default_prices_sushi[Card.id];
            this.name = "Ролл " + default_names_sushi[Card.id];

        }

        if(window.location.pathname == "/products_pages/drinks_page.html") {

            this.imgSrc = `drinks/drink${Card.id}.png`;
            this.price = default_prices_drinks[Card.id];
            this.name = default_names_drinks[Card.id];

        }

        if(window.location.pathname == "/products_pages/desserts_page.html") {

            this.imgSrc = `desserts/dessert${Card.id}.png`;
            this.price = default_prices_desserts[Card.id];
            this.name = default_names_desserts[Card.id];

        }


        this.div.innerHTML = `
            <img class="product_card_pic" src="images/${this.imgSrc}">
            <div class="product_card_info">
                <span class="product_card_name">${this.name}</span>
                <span class="product_card_price">от ${this.price} руб.</span>
                <button class="add_to_bucket_btn">Добавить в корзину</button>
            </div>
        `;

        Card.id += 1;
        //console.log(this);

    }

}

var cards = new Array();
const main = document.querySelector('main');
if(window.location.pathname == "/products_pages/pizza_page.html") {
    addCards(cards, default_names_pizza.length);
}
else if(window.location.pathname == "/products_pages/sushi_page.html") {
    addCards(cards, default_names_sushi.length);
}
else if(window.location.pathname == "/products_pages/drinks_page.html") {
    addCards(cards, default_names_drinks.length);
}
else if(window.location.pathname == "/products_pages/desserts_page.html") {
    addCards(cards, default_names_desserts.length);
}





var circle_menu = document.querySelector("#circle_menu_div");
var nav_links = document.querySelectorAll(".nav_links");
var div4nav_links = document.querySelectorAll(".div4nav_links");
var div4nav_links_style = `pointer-events: none; width: 50%; height: 50%;     
overflow: hidden;   
transition: .3s;`;  //css style for div4nav_links
circle_menu.addEventListener("mouseover", (e) => {

    let tmp_style;
    //console.log(e.target);
    div4nav_links[0].style.pointerEvents = "all";
    div4nav_links[1].style.pointerEvents = "all";
    div4nav_links[2].style.pointerEvents = "all";
    div4nav_links[3].style.pointerEvents = "all";
    switch(e.target) {

        case nav_links[0]:
            //console.log("LINK1");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(-5%, -5%);";
            tmp_style += "z-index: 3;";
            tmp_style += "pointer-events: all;";
            div4nav_links[0].style.cssText = tmp_style;
            break;

        case nav_links[1]:
            //console.log("LINK2");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(5%, -5%);";
            tmp_style += "z-index: 3;";
            tmp_style += "pointer-events: all;";
            div4nav_links[1].style.cssText = tmp_style;
            break;

        case nav_links[2]:
            //console.log("LINK3");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(-5%, 5%);";
            tmp_style += "z-index: 3;";
            tmp_style += "pointer-events: all;";
            div4nav_links[2].style.cssText = tmp_style;
            break;

        case nav_links[3]:
            //console.log("LINK4");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(5%, 5%);";
            tmp_style += "z-index: 3;";
            tmp_style += "pointer-events: all;";
            div4nav_links[3].style.cssText = tmp_style;
            break;

    }

});

circle_menu.addEventListener("mouseout", (e) => {

    //console.log(e.target);
    switch(e.target) {

        case nav_links[0]:
            //console.log("LINK1");
            div4nav_links[0].style.cssText = div4nav_links_style;
            break;

        case nav_links[1]:
            //console.log("LINK2");
            div4nav_links[1].style.cssText = div4nav_links_style;
            break;

        case nav_links[2]:
            //console.log("LINK3");
            div4nav_links[2].style.cssText = div4nav_links_style;
            break;

        case nav_links[3]:
            //console.log("LINK4");
            div4nav_links[3].style.cssText = div4nav_links_style;
            break;

    }

});


var bucket_div = document.querySelector("#bucket_div");
var bucket_elems_div = document.querySelector("#bucket_elems_div");
var total_span = document.querySelector("#total_price");
var total_price = 0;
var total_count = 0;
var bucket_elems = new Array();
var buy_btns = document.querySelectorAll(".add_to_bucket_btn");
for(let i = 0; i < buy_btns.length; ++i) {

    buy_btns[i].addEventListener("click", () => {

        // bucket_elems.textContent = cards[i].price;
        if(total_count >= 20) return;
        bucket_elems[total_count] = document.createElement('div');
        bucket_elems[total_count].classList.add('bucket_elem');
        bucket_elems[total_count].textContent = cards[i].name + " - " + cards[i].price + "руб.";
        bucket_elems_div.append(bucket_elems[total_count]);
        total_price += cards[i].price;
        total_span.textContent = "Итого: " + total_price + "руб.";
        ++total_count;
        console.log(bucket_elems);

    });

}

var bucket_btn = document.querySelector("#login_div");
var is_bucket_opened = false;
var header = document.querySelector('header');
var header_height = header.getBoundingClientRect().height;
bucket_btn.addEventListener('click', () => {

    if(!is_bucket_opened) {
        bucket_div.style.top = header_height + 'px';
        is_bucket_opened = true;
    }
    else {
        bucket_div.style.top = -1000 + 'px';
        is_bucket_opened = false;
    }

});

window.addEventListener('resize', () => {

    header_height = header.getBoundingClientRect().height;
    if(is_bucket_opened) {
        bucket_div.style.top = header_height + 'px';
    }
    //console.log(window.innerWidth);
    if(window.innerWidth <= 465) {
        total_span.style.fontSize = 20 + 'px';
        bucket_div.style.right = 0 + 'px';
    }
    if(window.innerWidth > 465) bucket_div.style.right = 20 + 'px';

});

var bucket_buy_btn = document.querySelector("#buyButton");
bucket_buy_btn.addEventListener('click', () => {

    for(bucket_elem of bucket_elems) {
        bucket_elem.remove();
    }
    total_span.textContent = "Итого: ";

});

var h1 = document.querySelector('h1');
h1.addEventListener('click', () => {

    //console.log(window.location.href);
    window.location.href = "/index.html";

});