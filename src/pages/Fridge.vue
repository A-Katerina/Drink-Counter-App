<template>

  <section
      class="p-6 max-w-xs mx-auto hover:scale-110 duration-200 bg-white rounded-3xl shadow-lg hover:shadow-xl space-x-4 my-6 bg-gradient-to-t from-red-100/70 to-yellow-50/80"
  >
    <div class="flex flex-row justify-between mx-10">
      <div class="flex flex-col">
        <div class="py-2"><label>Frucade</label></div>

        <div class="pb-2"><label>Club Mate</label></div>

        <div class="pb-2"><label>Fitz Cola</label></div>

        <div><label>Soda Lemon</label></div>
      </div>

      <div class="flex flex-col">
        <span class="pt-2">{{ getDrinkCount('frucade') }}x</span>
        <span class="pt-2">{{ getDrinkCount('club-mate') }}x</span>
        <span class="pt-2">{{ getDrinkCount('fitz-cola') }}x</span>
        <span class="pt-2">{{ getDrinkCount('soda-lemon') }}x</span>
      </div>

      <div class="flex flex-col">
        <DrinkButtons
            v-for="drink of drinksArray"
            :drink="drink"
            @addDrinkClick="$emit('addDrinkClick', drink)"
            @removeDrinkClick="$emit('removeDrinkClick', drink)"
        ></DrinkButtons>
      </div>
    </div>
    <div class="grid place-items-center mt-4">
      <button
          class="rounded-2xl content-center bg-slate-100 active:bg-slate-200 drop-shadow-lg active:drop-shadow-none px-2"
          @click="clear()"
      >
        Clear
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Drink} from "../types";
import {drinksArray, getDrinkCount} from "../assets/drinks";
import DrinkButtons from "../components/DrinkButtons.vue";

const props = defineProps<{
  drinks: Drink[],
}>();

function clear() {
  localStorage.clear();
  window.location.reload();
}

/*
function getDrinkCount(type: string) {
  const filteredDrinks = store.drinks.filter(   //props.drinks.filter
      (drink) => {
        return drink.value === type
      }
  )
  return filteredDrinks.length;
}*/


defineEmits(["addDrinkClick", "removeDrinkClick"]);


</script>

<style scoped>


</style>