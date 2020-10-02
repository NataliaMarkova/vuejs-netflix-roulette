<template>
  <header class="search-header">
    <div class="row">
      <div class="col">
        <Logo/>
      </div>
    </div>
    <SearchBar />
    <div class="row justify-content-md-center align-items-center search-by">
      <div class="col col-lg-2">
        <h6 class="font-weight-light text-uppercase text-light align-middle">Search by</h6>
      </div>
      <div class="col col-lg-8">
        <div class="btn-group" role="group" aria-label="Search by">
          <router-link :to = "{ path:'/', query: { ...this.$route.query, ...{ searchBy: title } } }">
            <OptionButton title="Title" :value="title" :active="searchByTitle"></OptionButton>
          </router-link>
          <router-link :to = "{ path:'/', query: { ...this.$route.query, ...{ searchBy: genre } } }">
            <OptionButton title="Genre" :value="genre" :active="searchByGenre"></OptionButton>
          </router-link>
        </div>
      </div>
    </div>
  </header>

</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import OptionButton from '@/components/OptionButton.vue';
import SearchBar from '@/components/SearchBar.vue';
import Logo from '@/components/Logo.vue';
import { SearchParamsService } from '@/services/searchParamsService';
import { TITLE, GENRE } from '@/models/Constants';

@Component({
  components: { SearchBar, OptionButton, Logo },
})
export default class SearchOptions extends Vue {
  private readonly title = TITLE;

  private readonly genre = GENRE;

  private searchBy = TITLE;

  private searchParamsService = new SearchParamsService();

  get searchByTitle(): boolean {
    return this.searchBy === TITLE;
  }

  get searchByGenre(): boolean {
    return this.searchBy === GENRE;
  }

  @Watch('$route', { immediate: true, deep: true })
  onRouteChange() {
    try {
      this.searchBy = this.searchParamsService.getSearchBy(this.$route.query);
    } catch (err) {
      console.warn(err);
      this.$router.push({ name: 'not-found' });
    }
  }
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

  .filter-header {
      background-color: #555555;
  }

  .filter-header .col {
      margin: 15px;
  }

  header .logo {
      height: 20px;
      margin: 20px;
  }

  .form-control {
      background-color: rgba(35, 35, 35, 0.8);
      border: 1px solid #232323;
      line-height: 2;
  }

  .form-control:hover, .form-control:active, .form-control:valid {
      background-color: rgba(35, 35, 35, 0.8);
      border: 1px solid #232323;
  }

  .search-box .btn {
      line-height: 2;
  }

  .btn-secondary {
      background-color: rgba(35, 35, 35, 0.9);
      border-color: #232323;
  }

  .search-by .btn, .filter-header .btn {
      line-height: 1;
  }

</style>
