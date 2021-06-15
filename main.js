


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






let htmlBasket = document.getElementById("basket"); // присваеваем блоку с id=basket переменную htmlBasket


let basket = [ // массив - типо корзина в магазине

    { name: 'футболка', size: 'm', model: 'hjr5', color: 'black', price: 110 },
    { name: 'носки', size: 'm', model: 'hjr5', color: 'black', price: 200 },
    { name: 'трусы', size: 'm', model: 'hjr5', color: 'black', price: 500 },
    { name: 'куртка', size: 'm', model: 'hjr5', color: 'black', price: 10000 },

];


function countBasketPrice(arr) { // функция складывает цены товаров (price) из предоставленной корзины - массива
    let sum = 0;
    for (let num of arr) {

        sum += num.price;

    }
    return sum; // и отдаёт сумму

}


if (countBasketPrice(basket) == 0) { //если сумма цен товаров = 0
    htmlBasket.innerHTML = "Корзина пуста."
} else { // иначе 
    htmlBasket.innerHTML = "В корзине: " + basket.length + " товаров на сумму " + countBasketPrice(basket) + " рублей."; // записываем в перемкнную значение и выводим в html
}


