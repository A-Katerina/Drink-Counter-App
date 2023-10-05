<template>
  <section
      class="p-6 max-w-xs mx-auto hover:scale-110 duration-150 bg-white rounded-3xl shadow-lg hover:shadow-xl space-x-4 bg-gradient-to-t from-red-100/70 to-yellow-50/80"
  >
    <h2 class="text-2xl font-bold text-center pb-2">Overview</h2>
    <hr/>
    <Paid
        class="flex items-center p-6 pb-3"
        v-model="paidAmount"
        @change="storePaidAmount()"
    />

    <Counter class="px-6"/>
    <p class="p-6 py-2">{{ count }}</p>
    <hr/>

    <p class="px-6 py-3">Balance:</p>
    <div class="px-6 py-0" v-if="paidAmount" :class="Klasse()" id="Balance">
      {{ balance }} €
    </div>
    <div id="labels"></div>
  </section>
</template>

<script setup lang="ts">
import Paid from "../components/Paid.vue"
import Counter from "../components/Counter.vue"
import {computed, onBeforeMount, ref} from "vue";
import {Drink} from "../types";
import {store} from "../assets/drinks";

const paidAmount = ref();


const balance = computed(() => {
  const drinksSum = [...store.drinks].reduce(
      (acc, curr) => (acc += curr?.price || 0),
      0
  );
  console.log({drinksSum});
  const calculation = paidAmount.value - drinksSum;
  return calculation;
});

const props = defineProps<{
  drinks: Drink[],
}>();

const count = computed(() => {
  return store.drinks.length;
});

function storePaidAmount() {
  saveInLocalStorage("test", event);
}

function saveInLocalStorage(test, event) {
  console.log(paidAmount.value);
  localStorage.setItem("Paid", String(paidAmount.value));
}

function Klasse() {
  const positive = "positive";
  const negative = "negative";
  const zero = "zero";
  if (balance.value == 0) {
    return zero;
  } else if (balance.value > 0) {
    return positive;
  } else {
    return negative;
  }
}

onBeforeMount(() => {
  paidAmount.value = Number(localStorage.getItem("Paid") || 0);
});

</script>

<style scoped>
.positive {
  color: green;
}

.negative {
  color: red;
}

.zero {
  color: orange;
}
</style>

