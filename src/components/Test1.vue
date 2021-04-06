<template>
  <div class="test1">
    <div>{{ $store.getters.showNum }}</div>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('addN', 3)">+N</button>
      <button @click="$store.dispatch('addN', 3)">+NSync</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
