import {Drink} from "../types";
import {reactive} from "vue";

export const store = reactive<{
    drinks: Drink[]
}>({
    drinks: []
})

export function addDrink(drink: Drink) {
    store.drinks.push(drink);
    saveDrinksInLS()
    console.log(store.drinks)
    return drink.value;
}

export function removeDrink(drink: Drink) {
    // @ts-ignore
    const drinkIndex = store.drinks.findLastIndex(entry => entry.value === drink.value);
    if (drinkIndex > -1) {
        store.drinks.splice(drinkIndex, 1);
        saveDrinksInLS();
    }
}

/*
export function checkDisabled(drink: Drink) {
    const drinkIndex = store.drinks.findLastIndex(entry => entry.value === drink.value);
    if (drinkIndex > -1) {
        console.log('false');
        return false;
    }
    if (drinkIndex == -1) {
        console.log('true');
        return true;
    }
}
*/

/*
export function checkIfDisabled(drink: Drink) {
    const drinkIndex = store.drinks.findLastIndex(entry => entry.value === drink.value);
    return drinkIndex;
}
*/
export function saveDrinksInLS() {
    localStorage.setItem("Drinks", JSON.stringify(store.drinks));
}

/*
export function checkIfDisabled() {
    if (store.drinks.length == 0 || null) {
        return true;
    }
    if (store.drinks.length >= 0) {  //davor != 0
        return false;
    }
}
 */

export function getDrinkCount(type: string) {
    const filteredDrinks = store.drinks.filter(
        (drink) => {
            return drink.value === type
        }
    )
    return filteredDrinks.length;
}

export const drinksArray: Drink[] = [
    {
        type: "+",
        remove: "-",
        price: 0.5,
        value: "frucade",
    },
    {
        type: "+",
        remove: "-",
        price: 1,
        value: "club-mate",
    },
    {
        type: "+",
        remove: "-",
        price: 1,
        value: "fitz-cola",
    },
    {
        type: "+",
        remove: "-",
        price: 0.5,
        value: "soda-lemon",
    },
];