<script setup lang="ts">
import Paid from "./components/Paid.vue";
import {onBeforeMount, ref} from "vue";
import Overview from "./pages/Overview.vue"
import {Drink} from "./types";
import Fridge from "./pages/Fridge.vue";
import {addDrink, removeDrink, store} from "./assets/drinks";

const drinks = ref<Drink[]>([]);

const frucade = drinks.value.find(entry => entry.value === 'frucade');

function onDrinkClick(drink: Drink) {
  if (localStorage.getItem("Paid")) {
    addDrink(drink);
  }
}


function onDrinkRemove(drink: Drink) {
  if (localStorage.getItem("Paid")) {
    removeDrink(drink);
  }
}


onBeforeMount(() => {
  if (localStorage.getItem("Drinks")) {
    store.drinks = JSON.parse(localStorage.getItem("Drinks"));
  }
});
</script>

<template>
  <h1 class="text-3xl font-bold text-center p-5">Drinks</h1>
  <Overview :drinks="drinks"></Overview>
  <fridge @addDrinkClick="onDrinkClick" @removeDrinkClick="onDrinkRemove" :drinks="drinks"></fridge>
</template>
