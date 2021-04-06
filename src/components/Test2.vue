<template>
  <div class="test2">
    <div>{{ showNum }}</div>
    <div>
      <button @click="reduce">-</button>
      <button @click="reduceN(3)">-N</button>
      <button @click="reduceSync">-NSync</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Test2',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  props: {},
  methods: {
    ...mapMutations(['reduce', 'reduceN']),
    ...mapActions(['reduceSync'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
