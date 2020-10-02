<template>
  <header class="search-header">
    <div class="row">
      <div class="col">
        <Logo/>
      </div>
    </div>
    <div class="row justify-content-md-center align-items-center not-found">
       <div class="col col-lg-2 align-middle">
        <h1 class="text-uppercase text-light align-middle">404</h1>
      </div>
    </div>
    <div class="row justify-content-md-center align-items-center not-found">
      <div class="col col-lg-2">
        <h6 class="font-weight-light text-uppercase text-light align-middle">Page not found</h6>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/Logo.vue';

@Component({
  components: { Logo },
})
export default class NotFoundContent extends Vue {
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  body {
      background-color: #232323;
  }

  .search-header {
    background-image: url("../assets/header.png");
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .search-header .row {
      padding-bottom: 30px;
  }

  @media (min-width: 576px) {
      .search-header {
          max-width: 540px
      }
  }

  @media (min-width: 768px) {
      .search-header {
          max-width: 720px
      }
  }

  @media (min-width: 992px) {
      .search-header {
          max-width: 960px
      }
  }

  @media (min-width: 1200px) {
      .search-header {
          max-width: 1140px
      }
  }

  header .logo {
      height: 20px;
      margin: 20px;
  }

</style>
