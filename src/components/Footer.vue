<template>
  <footer class="row justify-content-md-center">
    <div class="footer col justify-content-md-center">
      <div class="col col-md-auto text-center">
        <Logo />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/Logo.vue';

@Component({
  components: { Logo },
})
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
