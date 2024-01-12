function ObjStrageFunc() {

    let obj = {};

    this.addValue = function(key, value) {
        obj[key] = value;
    }
    this.getValue = function(key) {
        return obj[key]||undefined;
    }
    this.deleteValue = function(key) {
        let result = false;
        if (key in obj) {
            delete obj[key];
            result = true;
        }
        return result;
    }
    this.getKeys = function() {
        return Object.keys(obj);
    }
 
}

let drinkStorage = new ObjStrageFunc();

function drinkInformation() {
    let drinkName = prompt('Введите название напитка', '');
    let isAlcoholic = confirm('Напиток алкогольный?');
    let drinkRecipe = prompt('Введите рецепт напитка', '');
    let alco = (isAlcoholic) ? 'да' : 'нет';
    drinkStorage.addValue(drinkName, [alco, drinkRecipe]);
}

function getDrinkInformation() {
    let drinkName = prompt('Введите название напитка', '');
    let info = drinkStorage.getValue(drinkName);
    if (info) {
        console.log(`напиток: ${drinkName}
алкогольный: ${info[0]}
рецепт приготовления: ${info[1]}`);
    } else {
        console.log('такой напиток отсутствует');
    }

}

function deleteDrinkInformation() {
    let drinkName = prompt('Введите название напитка', '');
    let deleteDrink = drinkStorage.deleteValue(drinkName);
    if (deleteDrink) {
        console.log('напиток удален');
    } else {
        console.log('такой напиток отсутствует');
    }
}

function getDrinkName() {
    let allDrinkName = drinkStorage.getKeys();
    for (let i of allDrinkName) {
        console.log(i);
    } 
}