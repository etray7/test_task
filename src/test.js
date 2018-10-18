class User {
    constructor(secondName, firstName, lastName){
        this.secondName = secondName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Seller extends User{
    constructor(role){
        super();
        this.role = role;
    }

    addGoods(){
        this.addNumber = +prompt(`Сколько добавить ед. товара "${showGoods.goods.title}", сейчас ${showGoods.goods.number}`, 0);
        showGoods.goods.number += this.addNumber;
        return showGoods.goods.number;
    }

    doOffer(){
        this.offer = +prompt(`Cколько единиц товара "${showGoods.goods.title}" хотите купить?`, 0);
        console.log(`Вы хотите купить ${this.offer} ед. товара`);
    }
}

class Buyer extends User {
    constructor(secondName, firstName, lastName, role, address, balance){
        super(secondName, firstName, lastName, role);
        this.role = role;
        this.address = address;
        this.balance = balance;
    }

    addBalance(value) {
        let money = +prompt(`Текущий баланс ${this.balance}, на сколько вы хотите его пополнить`, 0);
        value = money;
        this.balance += value;
        console.log(`Ваш баланс теперь составляет: ${this.balance}`);
        alert(`Ваш баланс теперь составляет: ${this.balance}`);
    }

    doBuy(){
        if(showGoods.goods.number >= seller.offer){
            if((buyer.balance >= showGoods.goods.price) && (buyer.balance >= seller.offer*showGoods.goods.price)){
                buyer.balance = buyer.balance - (seller.offer*showGoods.goods.price);
                showGoods.goods.number = showGoods.goods.number - seller.offer;
                alert(`Вы купили ${seller.offer} единиц товара "${showGoods.goods.title}", отправлены по адресу ${buyer.address}, списаны ${seller.offer*showGoods.goods.price}`);
            } else {
                alert(`Недостаточно средств`);
            }
        } else {
            alert(`Не хватает единиц товара`);
        }

    }
}

class ShowCase{
    constructor(){
        this.goods = {
            title: "Кроссовки",
            number: 0,
            price: 25
        }
    }
}


let showGoods = new ShowCase();
let seller = new Seller("Продавец");
seller.addGoods();
console.log(showGoods.goods.number);
let buyer = new Buyer("Иванов", "Иван", "Иванович", "Покупатель", "улица Караваевская 50", 35);
buyer.addBalance();
seller.doOffer();
console.log(seller.offer);
buyer.doBuy();

console.log(buyer);
// console.log(seller);

