<template>
  <div class="test">
    <Test1/>
    <Test2/>
  </div>
</template>

<script>
import Test1 from '@/components/Test1.vue'
import Test2 from '@/components/Test2.vue'
export default {
  name: 'Test',
  components: {
    Test1,
    Test2
  }
}
</script>
