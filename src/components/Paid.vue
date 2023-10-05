<template>
  <div>
    <p class="pr-2">Paid:</p>
    <input
        class="p-0.5 max-w-sm mx-auto rounded-xl shadow-lg active:shadow-inner  flex items-center space-x-4 bg-slate-100 active:bg-slate-200"
        type="number"
        min="0"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('change')"
        onkeypress="return event.charCode >= 48"
    />
  </div>
</template>

<script setup>
const props = defineProps(["modelValue"]);
defineEmits(["update:modelValue", "change"]);


</script>

<style scoped></style>