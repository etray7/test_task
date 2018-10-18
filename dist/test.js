"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(secondName, firstName, lastName) {
    _classCallCheck(this, User);

    this.secondName = secondName;
    this.firstName = firstName;
    this.lastName = lastName;
};

var Seller = function (_User) {
    _inherits(Seller, _User);

    function Seller(role) {
        _classCallCheck(this, Seller);

        var _this = _possibleConstructorReturn(this, (Seller.__proto__ || Object.getPrototypeOf(Seller)).call(this));

        _this.role = role;
        return _this;
    }

    _createClass(Seller, [{
        key: "addGoods",
        value: function addGoods() {
            this.addNumber = +prompt("\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0434. \u0442\u043E\u0432\u0430\u0440\u0430 \"" + showGoods.goods.title + "\", \u0441\u0435\u0439\u0447\u0430\u0441 " + showGoods.goods.number, 0);
            showGoods.goods.number += this.addNumber;
            return showGoods.goods.number;
        }
    }, {
        key: "doOffer",
        value: function doOffer() {
            this.offer = +prompt("C\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0434\u0438\u043D\u0438\u0446 \u0442\u043E\u0432\u0430\u0440\u0430 \"" + showGoods.goods.title + "\" \u0445\u043E\u0442\u0438\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C?", 0);
            console.log("\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C " + this.offer + " \u0435\u0434. \u0442\u043E\u0432\u0430\u0440\u0430");
        }
    }]);

    return Seller;
}(User);

var Buyer = function (_User2) {
    _inherits(Buyer, _User2);

    function Buyer(secondName, firstName, lastName, role, address, balance) {
        _classCallCheck(this, Buyer);

        var _this2 = _possibleConstructorReturn(this, (Buyer.__proto__ || Object.getPrototypeOf(Buyer)).call(this, secondName, firstName, lastName, role));

        _this2.role = role;
        _this2.address = address;
        _this2.balance = balance;
        return _this2;
    }

    _createClass(Buyer, [{
        key: "addBalance",
        value: function addBalance(value) {
            var money = +prompt("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 " + this.balance + ", \u043D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0435\u0433\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C", 0);
            value = money;
            this.balance += value;
            console.log("\u0412\u0430\u0448 \u0431\u0430\u043B\u0430\u043D\u0441 \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: " + this.balance);
            alert("\u0412\u0430\u0448 \u0431\u0430\u043B\u0430\u043D\u0441 \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: " + this.balance);
        }
    }, {
        key: "doBuy",
        value: function doBuy() {
            if (showGoods.goods.number >= seller.offer) {
                if (buyer.balance >= showGoods.goods.price && buyer.balance >= seller.offer * showGoods.goods.price) {
                    buyer.balance = buyer.balance - seller.offer * showGoods.goods.price;
                    showGoods.goods.number = showGoods.goods.number - seller.offer;
                    alert("\u0412\u044B \u043A\u0443\u043F\u0438\u043B\u0438 " + seller.offer + " \u0435\u0434\u0438\u043D\u0438\u0446 \u0442\u043E\u0432\u0430\u0440\u0430 \"" + showGoods.goods.title + "\", \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 " + buyer.address + ", \u0441\u043F\u0438\u0441\u0430\u043D\u044B " + seller.offer * showGoods.goods.price);
                } else {
                    alert("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432");
                }
            } else {
                alert("\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0435\u0434\u0438\u043D\u0438\u0446 \u0442\u043E\u0432\u0430\u0440\u0430");
            }
        }
    }]);

    return Buyer;
}(User);

var ShowCase = function ShowCase() {
    _classCallCheck(this, ShowCase);

    this.goods = {
        title: "Кроссовки",
        number: 0,
        price: 25
    };
};

var showGoods = new ShowCase();
var seller = new Seller("Продавец");
seller.addGoods();
console.log(showGoods.goods.number);
var buyer = new Buyer("Иванов", "Иван", "Иванович", "Покупатель", "улица Караваевская 50", 35);
buyer.addBalance();
seller.doOffer();
console.log(seller.offer);
buyer.doBuy();

console.log(buyer);
// console.log(seller);