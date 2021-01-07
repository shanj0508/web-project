<template>
  <div class="red wrapper">
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "Myinput",
  props: {
    value: {
      tyel: String,
    },
  },
};
</script>

<style>
.red {
  background: red;
}
.wrapper {
  display: inline-block;
}
</style>
