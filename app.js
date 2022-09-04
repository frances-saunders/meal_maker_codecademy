const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for \$${this._price.toFixed(2)}!`;
    } else {
      return "Meal or price input was not set correctly";
    }
  },
};

menu.meal = 'Roast Beef Over Rice';
menu.price = 5.50;


console.log(menu.todaysSpecial);
