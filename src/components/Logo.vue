<template>
  <router-link :to="'/'" >
    <img src="../assets/logo.png" class="logo" alt="Netflix Roulette logo">
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {

}

</script>

<style>

 .logo {
    height: 20px;
    margin: 20px;
  }

</style>
