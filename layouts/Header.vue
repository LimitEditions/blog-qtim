<template>
  <div class="container">
    <img :src="logo" alt="logo" />
    <div class="nav">
      <nav class="nav-menu">
        <a href="#">Works</a>
        <a href="#">About</a>
      </nav>
      <div class="lang">
        <Language />
        <button class="start">Let’s work</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Language from "@/components/Language.vue";
import logo from "@/assets/img/logo (1).png";
</script>

<style lang="scss" scoped>
.container {
  min-width: $container;
  height: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 821px;
}

.nav {
  display: flex;
  gap: 91px;
}

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 58px;
}

.lang {
  display: flex;
  gap: 16px;
}

.start {
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  background-color: $primary-color;
  border-radius: 25px;
  width: 145px;
  height: 52px;
}
</style>
