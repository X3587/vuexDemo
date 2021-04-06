<template>
  <div class="hezi" @click="kaihezi">
    <div class="gaizi" :class="isKaiHe ? 'kaile' : ''">
      <img
        src="https://img.alicdn.com/imgextra/i3/751308485/O1CN01Jmq3lo2CYBI1mp3E5_!!751308485.png"
      />
    </div>
    <div class="heti">
      <img
        src="https://img.alicdn.com/imgextra/i4/751308485/O1CN01t7221f2CYBHyMLO11_!!751308485.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isKaiHe: false
    }
  },
  methods: {
    kaihezi() {
      this.isKaiHe = true
      setTimeout(() => {
        this.isKaiHe = false
      },3100)
    }
  }
}
</script>
<style scoped lang="scss">
.hezi {
  position: relative;
  top: 200px;
  .gaizi {
    position: absolute;
    z-index: 1;
    left: 50px;
  }
  .kaile {
    animation: HH 3s linear, NN 3s cubic-bezier(0.16, 0.64, 0.43, 0.96);
  }
  .heti {
    position: absolute;
  }
}
@keyframes HH {
  0% {
    left: 50px;
    transform: rotate(0deg);
    opacity: 1;
  }

  100% {
    left: 500px;
    transform: rotate(50deg);
    opacity: 0;
  }
}
@keyframes NN {
  0% {
    top: 0;
  }

  100% {
    top: -300px;
  }
}
</style>
