<template>
  <div class="red">
    这里是Demo文件的内容：
    {{message}}
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style scoped>
.red {
  color: red;
  border: 1px solid red;
}
</style>