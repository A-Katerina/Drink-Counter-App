<template>
  <div class="py-1">
    <button
        class="rounded-3xl py-0 px-2 bg-slate-100 active:bg-slate-200 drop-shadow-lg active:drop-shadow-none mr-1"
        @click="$emit('addDrinkClick', drink)"
    >
      {{ props.drink.type }}
    </button>
    <button
        class="rounded-3xl py-0 px-2.5 bg-slate-100 active:bg-slate-200 drop-shadow-lg active:drop-shadow-none disabled:bg-slate-200 disabled:drop-shadow-none"
        @click="$emit('removeDrinkClick', drink)" :disabled="getDrinkCount(drink.value) === 0"
    >
      {{ props.drink.remove }}
    </button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Drink} from "../types";
import {getDrinkCount} from "../assets/drinks";

const props = defineProps<{
  drink: Drink;
}>();


const count = ref("0");

const emit = defineEmits(["addDrinkClick", "removeDrinkClick"]);


</script>

<style scoped>

</style>