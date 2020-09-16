<template>
  <footer class="row justify-content-md-center">
    <div class="footer col justify-content-md-center">
      <div class="col col-md-auto text-center">
        <img src="../assets/logo.png" class="logo" alt="Netflix Roulette logo">
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

}

</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';

body {
  background-color: #232323;
}

.footer {
  background-color: #555555;
}
.footer .logo {
  height: 20px;
  margin: 20px;
}
</style>
