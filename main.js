


function fuckingBoard() { // три дня я колупал свой мозг


    let board = document.getElementById("board"); // привязываем переменную к блоку с id=board

    let tF = 1; // будет работать как true или folse если добавлять ++

    for (let y = 0; y < 9; y++) { // всего нам нужно 9 строк, учитывая цифры 

        let arr = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // отсюда будем доставать буковки
        let arrN = arr[y]; // буковки поочереди присваиваются вот этой переменной

        let line = document.createElement('div'); // создаём блок строки
        line.classList.add('line'); // присваеваем блоку класс
        board.appendChild(line);  // записываем эту гадость к DOM дереву внутрь блока с классом board

        let letters = document.createElement('div'); // создаём блок для букв слева
        letters.classList.add('letters'); // назначаем уму класс
        line.appendChild(letters); // записываем в дерево к блоку line
        letters.insertAdjacentHTML('beforeend', arrN); // втыкаем в него очередную букву из массива
        tF++;

        for (x = 0; x < 8; x++) { // этот цикл создаёт ячейки в каждой строке

            if (y == 0) { // определяем самую верхнюю строку чтобы записать в неё цифры

                let cell = document.createElement('div'); // создаём блок яйчейки для строки
                cell.classList.add('squareN'); // присваеваем блоку класс (здесь будут цифры)
                line.appendChild(cell); // записываем эту гадость к DOM дереву внутрь блока с классом line
                cell.insertAdjacentHTML('beforeend', x + 1); // втыкаем в него очередную ЦИФРУ

            } else { // иначе начинаем рисовать чёрно-белые квадратики
                let cell = document.createElement('div'); // создаём блок яйчейки для строки
                line.appendChild(cell); // записываем эту гадость к DOM дереву внутрь блока с классом line
                if (tF % 2) {
                    cell.classList.add('square'); // присваеваем блоку класс (белый фон)
                    tF++;
                } else {
                    cell.classList.add('squareB'); // присваеваем блоку класс (чёрный фон)
                    tF++;
                }
            }
        }
    }

}

fuckingBoard()





// Продолжаем реализовывать модуль корзины:
// Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
// Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.


let products = [ // массив - типо товар в магазине

    { id: 556687, name: 'футболка', size: 'm', model: 'hjr5', color: 'blackg', price: 110 },
    { id: 556686, name: 'носки', size: 'm', model: 'hjr5', color: 'black', price: 200 },
    { id: 556688, name: 'трусы', size: 'm', model: 'hjr5', color: 'black', price: 500 },
    { id: 556689, name: 'куртка', size: 'm', model: 'hjr5', color: 'black', price: 10000 },

];

function productsSearchForId(i) { // функция выполняет поиск значений в массиве products, если совпадает, отдаёт объект, где хранилось значение
    for (yy = 0; yy < products.length; yy++) {
        let obg = products[yy];
        for (let key in products[yy]) {
            if (i == obg[key]) {
                return obg;
            }
        }
    }
}


let htmlBasket = document.getElementById("basket"); // присваеваем блоку с id=basket переменную htmlBasket


let basket = [ // массив - типо корзина в магазинe


];

function basketDeleteForId(i) { // функция выполняет поиск значений в массиве basket, если совпадает, удаляет обьект
    for (yy = 0; yy < basket.length; yy++) {
        let obg = basket[yy];
        for (let key in basket[yy]) {
            if (i == obg[key]) {

                basket.splice(obg, 1);
                console.log('удалили');
                console.log(basket);
            }
        }
    }
}



function namePrice() { // отрисовывает в корзине товары при открытии
    for (i = 0; i < basket.length; i++) {
        let { id, name, price } = basket[i];
        let newEl = document.createElement('div');
        cartDetails2.appendChild(newEl);
        newEl.innerHTML = "Наименование : " + name + " ,  цена " + price + " руб."
        cartDetails2.appendChild(newEl);
        let button = document.createElement('button');
        cartDetails2.appendChild(button);
        button.setAttribute('id', id);
        button.innerHTML = "Удалить";
        button.addEventListener('click', function () {
            console.log(this.id);
            delid = Number(this.id);
            basketDeleteForId(delid);
            newEl.innerHTML = '';
            button.style.display = 'none';
            if (countBasketPrice(basket) == 0) { //если сумма цен товаров = 0
                htmlBasket.innerHTML = "Корзина пуста."
                cartDetails.innerHTML = "Корзина пуста."
            } else { // иначе 
                htmlBasket.innerHTML = "В корзине: " + basket.length + " товаров на сумму " + countBasketPrice(basket) + " рублей."; // записываем в перемкнную значение и выводим в html
                cartDetails.innerHTML = "В корзине: " + basket.length + " товаров на сумму " + countBasketPrice(basket) + " рублей.";
            }

        })

    }
}


function namePricReset() { // чистит html корзинs при зарытии
    cartDetails2.innerHTML = '';
}


function countBasketPrice(arr) { // функция складывает цены товаров (price) из предоставленной корзины - массива
    let sum = 0;
    for (let num of arr) {
        sum += num.price;
    }
    return sum; // и отдаёт сумму
}

htmlBasket.innerHTML = "Корзина пуста."

let product = document.querySelectorAll('.superclass');
for (i = 0; i < product.length; i++) { // перебор всех блоков с классом superclass
    product[i].addEventListener('click', function () {
        let id = (this.id); // находим переменную html блоке 
        let obgid = productsSearchForId(id); // находим обьект с этой переменной в массиве products
        basket.push(obgid); // добавляем найденный массив в корзину
        console.log(basket);
        if (countBasketPrice(basket) == 0) { //если сумма цен товаров = 0
            htmlBasket.innerHTML = "Корзина пуста."
        } else { // иначе 
            htmlBasket.innerHTML = "В корзине: " + basket.length + " товаров на сумму " + countBasketPrice(basket) + " рублей."; // записываем в перемкнную значение и выводим в html
            cartDetails.innerHTML = "В корзине: " + basket.length + " товаров на сумму " + countBasketPrice(basket) + " рублей.";
        }
    })

}


let basketOpen = document.getElementById("basketOpen"); // кнопке "в корзину" присвоим переменную
let popup = document.getElementById("popup");// находим блок popup
let closePopupBtn = document.getElementById("closePopupBtn"); // кнопка, закрывающая блок popup
let cartDetails = document.getElementById("cart-details"); // блок в корзине
let cartDetails2 = document.getElementById("cart-details2"); // блок в корзине
let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let section3 = document.getElementById("section-3");
let nextSectionBtn = document.getElementById("nextSectionBtn");

function devideArray(x) {
    for (let key in x) {
        let name = (this.name);
        return name;
    }
}


basketOpen.addEventListener('click', function () { // при клике на кнопку "в корзину" у переменной popup меняется класс
    popup.classList.add('popupopen');
    popup.classList.remove('popup');

})

basketOpen.addEventListener('click', namePrice); // отрисовываем товары в корзине

closePopupBtn.addEventListener('click', function () {
    popup.classList.add('popup');
    popup.classList.remove('popupopen');
})

closePopupBtn.addEventListener('click', namePricReset);

let secarr = [section1, section2, section3]; // массив из секций
let k = 0; // переменная для первой секции массива
nextSectionBtn.addEventListener('click', function () { // кнопка для переключения между секциями
    for (i = 0; i < secarr.length; i++) {
        secarr[i].style.display = 'none';
    }
    secarr[k].style.display = 'block';
    k++;
    if (k > 2) {
        k = 0;
    }
})




if (!("a" in window)) {
    var a = 1;
}
alert(a); // возможно выведет 1, т.к. замыкание для var - весь документ, а для let a = 1;  - будет ошибка

var b = function a(x) {
    x && a(--x);
};
alert(a);// отдаст функцию a

function a(x) {
    return x * 2;
}
var a;
alert(a);// отдаст x * 2, переменной a ничего не задано

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);// отдаст 10   - a принимает значение 3, но в теле функции меняется на 10
}
b(1, 2, 3);

function a() {
    alert(this); // функция a вызывается в контексте null, this будет равен null (я так думаю)
}
a.call(null);